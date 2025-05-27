import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import { socials } from "../resources/config"; // Adjust the import path as needed

const CACHE_DURATION = 3600000;
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });


async function fetchGitHubData() {
  try {
    // Get authenticated user's login
    const { data: userData } = await octokit.users.getAuthenticated();
    const userLogin = userData.login;

    // Get repository data
    const repos = await octokit.repos.listForAuthenticatedUser({
      type: 'owner', // Fetch only owner repositories
      sort: 'updated',
      direction: 'desc',
    });
    
    // Get contribution data
    const contributionsRes = await fetch(
      `https://github-contributions-api.deno.dev/${socials.github}.txt`
    );
    const contributionsText = await contributionsRes.text();
    const contributionCount = parseInt(contributionsText.split(' ')[0]);

    // Filter for repositories owned by the user and calculate stars
    const ownedRepos = repos.data.filter(repo => repo.owner.login === userLogin);
    const totalStars = ownedRepos.reduce(
      (acc, repo) => acc + (repo.stargazers_count ?? 0), 
      0
    );

    return {
      commits: contributionCount,
      totalStars,
      repos: ownedRepos.length, // Count only owned repositories
    };
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const data = await fetchGitHubData();
    
    return new NextResponse(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=300`
      }
    });
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch GitHub data' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}