export const profile = {
  themeDark: true,
  username: "Altaïr",
  avatar: "likeu.jpg",
  description: "I code for fun. 👀",
  website: "https://link.losted.dev",
  country: "France",
};

export const links: ILink[] = [
  {
    title: "My porfolio",
    url: "https://losted.dev",
  },
  {
    title: "My GitHub",
    url: "https://www.github.com/altairlv",
  },
  {
    title: "DevOpsLab ( latest work )",
    url: "https://my-devops-lab.com",
  },
  {
    title: "Night Drive - Arezra 🎵",
    url: "https://open.spotify.com/track/7s7fQAOrqVEI65zEuPYyEQ?si=94db96c6c1d84df3",
  },
  {
    title: "Built with Next.js",
    url: "https://nextjs.org/",
  },
  {
    title: "Framer-motion",
    url: "https://www.framer.com/motion/",
  },
  {
    title: "Deployed with Vercel",
    url: "https://vercel.com",
  },
];

export interface ILink {
  title: string;
  url: string;
}
