import type React from "react";

import {
  Button,
  Logo,
  IconButton,
  Row,
  StyleOverlay,
  ThemeSwitcher,
  SmartImage
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";

export const Header: React.FC = () => {
  return (
    <Row position="fixed" paddingTop="s" top="0" fillWidth horizontal="center" zIndex={3}>
      <Row
        data-border="rounded"
        background="surface"
        border="neutral-weak"
        radius="m"
        vertical="center"
        horizontal="space-between"
        maxWidth="l"
        paddingRight="64"
        paddingLeft="32"
        paddingY="8"
      >
        <Row position="relative" radius="full" horizontal="center" vertical="center" padding="2" background="neutral-weak" border="neutral-weak" height={2.2} width={2.2}>
            <SmartImage src="/images/1.jpg" fill radius="full"/>
        </Row>
        <Row gap="12" hide="s">
          <Button
            href="https://discord.com/invite/5EyAQ4eNdS"
            prefixIcon="discord"
            size="s"
            label="Discord"
            weight="default"
            variant="tertiary"
          />
          <Button
            href="https://github.com/once-ui-system"
            prefixIcon="github"
            size="s"
            label="GitHub"
            weight="default"
            variant="tertiary"
          />
        </Row>
        <Row gap="16" show="s" horizontal="center" paddingRight="24">
          <IconButton
            href="https://discord.com/invite/5EyAQ4eNdS"
            icon="discord"
            variant="tertiary"
          />
          <IconButton
            href="https://github.com/once-ui-system/nextjs-starter"
            icon="github"
            variant="tertiary"
          />
        <ThemeSwitcher/>
          <Row position="fixed" top="20" right="20">
          </Row>
        </Row>
      </Row>
    </Row>
  );
};