"use client";

import React, { useState, useEffect } from 'react';
import { Grid } from '../once-ui/components/Grid'; // Adjust import path if needed
import Image from 'next/image';
import { socials } from '../app/resources/config'; // Adjust import path if needed
import { Row, SmartImage } from '@/once-ui/components';
import styles from '../app/landing.module.scss'

interface Follower {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const GitHubFollowers: React.FC = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${socials.github}/followers`);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data: Follower[] = await response.json();
        setFollowers(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching GitHub followers:", err);
      } finally {
        setLoading(false);
      }
    };

    if (socials.github) {
      fetchFollowers();
    } else {
        setLoading(false);
        console.warn("GitHub username not found in config.");
    }
  }, []);

  if (loading) {
    return <Grid padding="16">Loading followers...</Grid>;
  }

  if (error) {
    return <Grid padding="16" style={{ color: 'red' }}>Error: {error}</Grid>;
  }

  if (!socials.github) {
    return <Grid padding="16">GitHub username not configured.</Grid>;
  }

    if (followers.length === 0) {
        return <Grid padding="16">No followers found for {socials.github}.</Grid>;
    }

  return (
    <Grid columns={7} gap='8'> {/* Adjust columns and gap as needed */}
      {followers.map((follower) => (
        <Grid key={follower.id} padding="4" align="center" gap="8">

            <Row width={1.8} height={1.8} radius='full' className={styles.followerImage}>
            <SmartImage fill radius="full" src={follower.avatar_url}/>
            </Row>
        </Grid>
      ))}
    </Grid>
  );
};

export default GitHubFollowers; 