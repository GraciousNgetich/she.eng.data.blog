import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Gracious Ngetich",
  handle: "@GraciousNgetich",
  socialProfiles,
  email: "gracious.ngetich@protonmail.com",
  website: "sheengineersdata.org",
  jobTitle: "Data Engineer & Technical Writer",
  company: "Founder @ She Engineers Data",

  availableForWork: true,
  location: {
    city: "Kenya",
    media: "/nairobi.jpg",
  },
};

const defaultTitle = `She Engineers Data`;
const defaultDescription = `I'm ${defaultAuthor.name}. ENGINEERING a future where WOMEN thrive in the world of DATA`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/thedevdavid/digital-garden",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
