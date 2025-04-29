import type React from "react";

import {
  Button,
  Logo,
  IconButton,
  Row,
  StyleOverlay,
  ThemeSwitcher,
  SmartImage,
  MegaMenu,
  type MenuGroup
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";

// Define menu groups for the MegaMenu
const menuGroups: MenuGroup[] = [
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Projects", href: "/projects" },
  { label: "Speakings", href: "/speakings" },
  { label: "Careers", href: "/careers" },
];

export const Header: React.FC = () => {
  return (
    <Row position="fixed" paddingTop="s" top="0" fitWidth horizontal="center" zIndex={3}>
      <Row
        data-border="rounded"
        background="surface"
        border="neutral-alpha-weak"
        radius="m"
        shadow="s"
        vertical="center"
        horizontal="space-between"
        maxWidth="l"
        paddingRight="16"
        paddingLeft="16"
        paddingY="8"
      >
        <Row position="relative" radius="full" horizontal="center" vertical="center" padding="2" background="neutral-weak" border="neutral-weak" height={2.2} width={2.2}>
            <SmartImage src="/images/1.jpg" fill radius="full"/>
        </Row>
        <Row data-border="playful" paddingX="s">
        <MegaMenu data-rounded="conservative" menuGroups={menuGroups} />
        </Row>
        <Row gap="s" >
        <ThemeSwitcher/>
        </Row>
      </Row>
    </Row>
  );
};