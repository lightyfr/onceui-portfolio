import { IconType } from "react-icons";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandNodejs } from "react-icons/tb";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineClipboard,
  HiOutlineMagnifyingGlass,
  HiCalendar,
  HiOutlineLink,
  HiExclamationTriangle,
  HiArrowUpRight,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

import { RiNextjsFill } from "react-icons/ri";


import { RiVisaLine } from "react-icons/ri";

import { FiDownload } from "react-icons/fi";


import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa6";

import { RiSupabaseLine } from "react-icons/ri";

import { LuChevronsLeftRight } from "react-icons/lu";
import { SiJavascript, SiPrisma } from "react-icons/si";
import { FaGulp } from "react-icons/fa";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiTypescript, SiPython, SiHtml5, SiCss3 } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { GiWireframeGlobe } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";
import { LuAppWindow } from "react-icons/lu";
import { IoIosGitMerge } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { MdCommit } from "react-icons/md";



export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  chevronsLeftRight: LuChevronsLeftRight,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  clipboard: HiOutlineClipboard,
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  google: FaGoogle,
  github: FaGithub,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  computer: HiOutlineComputerDesktop,
  download: FiDownload,
  linkedin: FaLinkedinIn,
  react: FaReact,
  nextjs: RiNextjsFill,
  electron: IoLogoElectron,
  supabase: RiSupabaseLine,
  prisma: SiPrisma,
  nodejs: TbBrandNodejs,
  gulp: FaGulp,
  afterEffects: SiAdobeaftereffects,
  java: FaJava,
  git: FaGitAlt,
  mongodb: BiLogoMongodb,
  firebase: IoLogoFirebase,
  figma: FaFigma,
  vscode: VscVscode,
  photoshop: SiAdobephotoshop,
  illustrator: SiAdobeillustrator,
  intellij: SiIntellijidea,
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  html: SiHtml5,
  css: SiCss3,
  scss: BsFiletypeScss,
  wireframe: GiWireframeGlobe,
  code: FaCode,
  database: RiDatabase2Line,
  app: LuAppWindow,
  merge: IoIosGitMerge,
  star: FaRegStar,
  commit: MdCommit,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
