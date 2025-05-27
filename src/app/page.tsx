// Example page: delete the content or rework the blocks
"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./landing.module.scss";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  type DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
  CompareImage,
  ThemeSwitcher,
  Grid,
} from "@/once-ui/components";
import { profile, socials } from "./resources/config";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";
import { Header } from "@/once-ui/components/Header";
import GitHubFollowers from "@/components/GitHubFollowers";

export default function Home() {
  const [githubData, setGithubData] = useState({
    stars: 190, // Default value
    commits: 4054, // Default value
    repos: 186, // Default value
  });

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setGithubData({
          stars: data.totalStars,
          commits: data.commits,
          repos: data.repos,
        });
      })
      .catch((error) => console.error('Error fetching GitHub data:', error));
  }, []);

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>(["UX / UI", "Design systems", "AI / ML"]);
  const [twoFA, setTwoFA] = useState(false);
 

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

  return (
    <Column fillWidth paddingX="s" horizontal="center" flex={1} background="neutral-medium">
      <ScrollToTop><IconButton variant="secondary" icon="chevronUp"/></ScrollToTop>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "2",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Header/>
      <Column
        background="neutral-weak"
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        horizontal="center"
        borderLeft="neutral-medium"
        borderRight="neutral-medium"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-weak",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              opacity: 90,
              width: 145,
              x: 270,
              y: 0,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 0,
              y: -10,
              radius: 150,
            }}
            position="absolute"
            grid={{
              display: true,
              opacity: 50,
              width: "1rem",
              color: "neutral-alpha-medium",
              height: "2rem",
            }}
            gradient={{
              display: false,
              tilt: -35,
              height: 50,
              opacity: 90,
              width: 175,
              x: 220,
              y: 0,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 130,
              y: -30,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: false,
              opacity: 80,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="start" gap="32" paddingY="32" position="relative">
            <Column background="surface" border="neutral-alpha-weak" fillWidth height={6} paddingLeft="l">
            <Row fillWidth fillHeight gap="160">
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            <Line background="neutral-alpha-weak" vert/>
            </Row>
            </Column>
          <Column gap="m" paddingLeft="xl" paddingTop="l" fillWidth>
            <Heading
              // Apply base styling here, gradient will be applied via spans
              onBackground="neutral-strong" // Set a base color for non-gradient text
              variant="display-strong-xl"
              align="left"
              marginBottom="16"
              style={{
              fontWeight: 450,
              overflowWrap: 'break-word',
              overflow: 'visible',
              }}
            >
              {profile.heroText.split('<br>').map((line, lineIndex, lineArr) => (
              <React.Fragment key={lineIndex}>
              {(() => {
                // Define the default gradient style
                const gradientStyle = {
                  background: 'linear-gradient(to bottom, var(--neutral-on-background-strong) 35%, var(--neutral-background-medium))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline', // Ensure span behaves correctly inline
                };

                // Define the rainbow gradient style
                const rainbowGradientStyle = {
                  background: 'linear-gradient(to right, purple, blue, orange)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  textShadow: '0 2px 5px var(--rainbow-grad)', // Changed to white with opacity
                  fontWeight: 600,
                  color: 'transparent',
                  display: 'inline', // Ensure span behaves correctly inline
                };

                // Regex to capture <tag>, #tag#, or normal text segments
                const regex = /(<[^>]+>)|(#.*?#)|([^<#]+)/g;
                const renderedParts = [];
                let match;
                let lastIndex = 0; // Keep track of the last index processed

                while ((match = regex.exec(line)) !== null) {
                  // Add any normal text before the current match
                  if (match.index > lastIndex) {
                    renderedParts.push(<React.Fragment key={`text-${lastIndex}`}>{line.substring(lastIndex, match.index)}</React.Fragment>);
                  }

                  if (match[1]) { // <tag>
                    const textContent = match[1].slice(1, -1);
                    renderedParts.push(<span key={`gradient-${match.index}`} style={gradientStyle}>{textContent}</span>);
                  } else if (match[2]) { // #tag#
                    const textContent = match[2].slice(1, -1);
                    renderedParts.push(<span key={`rainbow-${match.index}`} style={rainbowGradientStyle}>{textContent}</span>);
                  } else if (match[3]) { // Normal text segment
                    const textContent = match[3];
                    // Render this segment as plain text
                    renderedParts.push(<React.Fragment key={`normal-${match.index}`}>{textContent}</React.Fragment>);
                  }
                  // Update lastIndex to the end of the current match
                  lastIndex = regex.lastIndex;
                }

                // Add any remaining normal text after the last match
                if (lastIndex < line.length) {
                  renderedParts.push(<React.Fragment key={`text-${lastIndex}`}>{line.substring(lastIndex)}</React.Fragment>);
                }

                return renderedParts;
              })()}
              {/* Add a class to control visibility via CSS media queries */}
              {lineIndex < lineArr.length - 1 && <br className={styles.desktopLineBreak} />}
              </React.Fragment>
              ))}
            </Heading>
            <Row className={styles.adaptiveDesc}>
            <Text paddingLeft="8" onBackground="neutral-medium">
              {(() => {
              // Regex to split by <Name> or **...** capturing the delimiters
              const regex = /(<Name>|\*\*.*?\*\*)/;
              const parts = profile.description.split(regex).filter(part => part); // Split and filter out empty strings

              return parts.map((part, index) => {
                if (part === "<Name>") {
                // Render profile name bold
                return (
                  <Text key={index} as="span" onBackground="neutral-strong" variant="body-strong-m">
                  {profile.name}
                  </Text>
                );
                } else if (part.startsWith("**") && part.endsWith("**")) {
                // Render text between ** bold
                const boldText = part.slice(2, -2); // Remove the **
                return (
                  <Text key={index} as="span" onBackground="neutral-strong" variant="body-strong-m">
                  {boldText}
                  </Text>
                );
                } else {
                // Render normal text part
                return <React.Fragment key={index}>{part}</React.Fragment>;
                }
              });
              })()}
            </Text>
            </Row>
            <Row gap="16" paddingLeft="8">
                <SmartLink unstyled href={`https://github.com/${socials.github}`} target="_blank">
                <Column className={styles.hover} padding="4" radius="s">
                <Icon name="github" onBackground="neutral-medium"/>
                </Column>
                </SmartLink>
                <SmartLink unstyled href={socials.linkedin} target="_blank">
                <Column className={styles.hover} padding="4" radius="s">
              <Icon name="linkedin" onBackground="neutral-medium"/>
              </Column>
              </SmartLink>
              <Column className={styles.hover} padding="4" radius="s">
              <Icon name="google" onBackground="neutral-medium"/>
              </Column>
              </Row>
            <Row paddingLeft="8">
              
            <Row paddingY="s" paddingBottom="l">
            <Button
              id="readDocs"
              size="l"
              target="_blank"
              label="About Me"
              href="https://once-ui.com/docs"
              variant="secondary"
              arrowIcon
            />
            </Row>
            </Row>
            </Column>
            <Column background="surface" fillWidth fitHeight>
            <Line background="neutral-alpha-medium"/>
            <Text paddingLeft="xl" paddingTop="m" color="neutral-strong" variant="body-strong-s" style={{fontFamily: "monospace", color: 'var(--neutral-solid-weak)'}}>00 - STATISTICS</Text>
            <Column paddingY="m">   
             
            <Heading variant="heading-default-xl" color="accent-background-strong" style={{left: 6, top: -17.7, position: "absolute"}}>+</Heading>
            <Row horizontal="start" vertical="center" fillWidth paddingX="xl">
            <Row overflow="hidden" position="relative" radius="l" vertical="center" padding="4" background="neutral-alpha-weak" border="neutral-alpha-weak" height={6.5} gap="4" fillWidth>
            <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: false,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              opacity: 90,
              width: 145,
              x: 210,
              y: 0,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 0,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              opacity: 50,
              width: "2rem",
              color: "neutral-alpha-medium",
              height: "2rem",
            }}
            gradient={{
              display: false,
              tilt: -35,
              height: 50,
              opacity: 90,
              width: 175,
              x: 220,
              y: 0,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
            <SmartImage border="neutral-alpha-weak" leftRadius="m" rightRadius="xs" src={profile.profilePath} width={6.5} fillHeight/>
            <Row fillWidth horizontal="start" gap="l" paddingLeft="l">
            <Column gap="4" horizontal="center">
            <Heading>3000+</Heading>
            <Text>Total Commits</Text>
            </Column>
            <Column gap="4" horizontal="center">
            <Heading>200+</Heading>
            <Text>Stars</Text>
            </Column>
            <Column gap="4" horizontal="center">
            <Heading>4+</Heading>
            <Text>Years of Experience</Text>
            </Column>
            <Column gap="4" horizontal="center">
            <Heading>6+</Heading>
            <Text>Programming Languages</Text>
            </Column>
            </Row>
            </Row>
            </Row>
            </Column>
            <Line background="neutral-alpha-weak"/>
            <Heading variant="heading-default-xl" onBackground="accent-strong" color="accent-background-strong" style={{left: 6, top: 137, color: "var(accent-background-strong)", position: "absolute"}}>+</Heading>
            </Column>
            
            <Column paddingX="xl" paddingY="m">
            <Text color="neutral-strong" variant="body-strong-s" style={{fontFamily: "monospace", color: 'var(--neutral-solid-weak)'}}>01 - TOOLS & SYSTEMS</Text>
            </Column>
            <Row paddingX="xl" fillWidth height={4} gap="s">
            <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
            <Icon tooltip="My Frameworks" name="wireframe" size="xl" color="neutral-strong" />
            </Row>
            <Line vert/>
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="React" name="react" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Electron" name="electron" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="NextJS" name="nextjs" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="NodeJS" name="nodejs" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="GulpJS" name="gulp" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Git" name="git" size="xl" color="neutral-strong" />
                </Row>
              </Row>
              <Row paddingX="xl" fillWidth height={4} gap="s">
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="My Coding Languages" name="code" size="xl" color="neutral-strong" />
                </Row>
                <Line vert/>
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Typescript" name="typescript" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Javascript" name="javascript" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Python" name="python" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Java" name="java" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="HTML" name="html" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="CSS" name="css" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="SCSS" name="scss" size="xl" color="neutral-strong" />
                </Row>
              </Row>
              <Row paddingX="xl" fillWidth height={4} gap="s">
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="My Databases" name="database" size="xl" color="neutral-strong" />
                </Row>
                <Line vert/>
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="MongoDB" name="mongodb" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Supabase" name="supabase" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Firebase" name="firebase" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Prisma" name="prisma" size="xl" color="neutral-strong" />
                </Row>
              </Row>
              <Row paddingX="xl" fillWidth height={4} gap="s">
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="My Applications" name="app" size="xl" color="neutral-strong" />
                </Row>
                <Line vert/>
              <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Figma" name="figma" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="VS Code" name="vscode" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Intellij" name="intellij" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Adobe After Effects" name="afterEffects" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Photoshop" name="photoshop" size="xl" color="neutral-strong" />
                </Row>
                <Row horizontal="center" radius="l" vertical="center" border="neutral-alpha-weak" background="neutral-medium" width={4} height={4}>
                <Icon tooltip="Adobe Illustrator" name="illustrator" size="xl" color="neutral-strong" />
                </Row>
              </Row>
              <Line background="neutral-alpha-weak"/>
            {/* GITHUB SOCIAL Section */}
            <Column paddingX="xl" paddingY="s" gap="m" fillWidth>
            <Text color="neutral-strong" variant="body-strong-s" style={{fontFamily: "monospace", color: 'var(--neutral-solid-weak)'}}>03 | GITHUB SOCIAL</Text>
            <Row gap="m" fillWidth>
              {/* Followers Card */}
              <Card fill fillWidth background="neutral-medium" radius="l" padding="l">
                <Column gap="m">
                  <Row vertical="center" gap="8">
                    <Text onBackground="neutral-weak" variant="body-strong-m">FOLLOWERS</Text>
                    <Icon name="heart" size="s" color="neutral-weak" />
                  </Row>
                    <GitHubFollowers/>

                </Column>
              </Card>
              {/* Stats Cards - Replaced Column with Grid */}
              <Grid columns={3} gap="s">
                  <Card overflow="hidden" background="neutral-medium" fill radius="l" padding="m" paddingX="l" style={{ minHeight: '100px', position: 'relative', overflow: 'hidden' }}>
                  <Icon name="star" size="xl" fill color="neutral-alpha-weak" style={{ position: 'absolute', bottom: 20, right: -10, opacity: 0.5, zIndex: 0, scale: '1.5' }}   />
                  <Column gap="32" style={{ zIndex: 1, position: 'relative' }}>
                      <Text onBackground="neutral-weak" variant="body-strong-m">STARS</Text>
                      <Heading onBackground="neutral-strong" style={{fontWeight: '400'}}>{githubData.stars}</Heading>
                    </Column>
                  </Card>
                  <Card background="neutral-medium" fill radius="l" padding="m" paddingX="l" style={{ minHeight: '100px', position: 'relative', overflow: 'hidden' }}>
                  <Icon name="chevronRight" color="neutral-alpha-medium" style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.5, zIndex: 0 }} />
                    <Column gap="32" style={{ zIndex: 1, position: 'relative' }}>
                      <Text onBackground="neutral-weak" variant="body-strong-m">LANGUAGES</Text>
                      <Heading onBackground="neutral-strong" style={{fontWeight: '400'}}>14</Heading>
                    </Column>
                  </Card>
                  <Card background="neutral-medium" fill radius="l" padding="m" paddingX="l" style={{ minHeight: '100px', position: 'relative', overflow: 'hidden' }}>
                    <Icon name="folder" color="neutral-alpha-medium" style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.5, zIndex: 0 }} />
                    <Column gap="32" style={{ zIndex: 1, position: 'relative' }}>
                      <Text onBackground="neutral-weak" variant="body-strong-m">REPOSITORIES</Text>
                      <Heading onBackground="neutral-strong" style={{fontWeight: '400'}}>{githubData.repos}</Heading>
                    </Column>
                  </Card>
                {/* Removed the intermediate Row components */}
                <Card background="neutral-medium" fill radius="l" padding="m" paddingX="l" style={{ minHeight: '100px', position: 'relative', overflow: 'hidden' }}>
                <Icon name="commit" color="neutral-alpha-medium" size="xl" style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.5, zIndex: 0, scale: '1.5'}} />
                <Column gap="32" style={{ zIndex: 1, position: 'relative' }}>
                      <Text onBackground="neutral-weak" variant="body-strong-m">COMMITS</Text>
                      <Heading onBackground="neutral-strong" style={{fontWeight: '400'}}>{githubData.commits}</Heading>
                    </Column>
                  </Card>
                  <Card background="neutral-medium" fill radius="l" padding="m" paddingX="l" style={{ minHeight: '100px', position: 'relative', overflow: 'hidden' }}>
                  <Icon name="arrowUpRight" color="neutral-alpha-medium" size="xl" style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.5, zIndex: 0 }} />
                    <Column gap="32" style={{ zIndex: 1, position: 'relative' }}>
                      <Text onBackground="neutral-weak" variant="body-strong-m">OSS CONTRIBUTION</Text>
                      <Heading onBackground="neutral-strong" style={{fontWeight: '400'}}>10+</Heading>
                    </Column>
                  </Card>
                  <Card background="neutral-medium" fill radius="l" padding="m" paddingX="l" style={{ minHeight: '100px', position: 'relative', overflow: 'hidden' }}>
                    <Icon name="merge" size="xl" fill color="neutral-alpha-medium" style={{ position: 'absolute', bottom: 20, right: 10, opacity: 0.5, zIndex: 0, scale: '1.5' }}   />
                    <Column fill gap="32" style={{ zIndex: 1, position: 'relative' }}>
                      <Text onBackground="neutral-weak" variant="body-strong-m">MERGED</Text>
                      <Heading onBackground="neutral-strong" style={{fontWeight: '400'}}>40+</Heading>
                    </Column>
                  </Card>
              </Grid>
            </Row>
            </Column>
            {/* END GITHUB SOCIAL Section */}
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
          
            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
