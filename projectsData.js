import wtHome1 from "./public/images/wt-home-1.png";
import wtHome2 from "./public/images/wt-home-2.png";
import wt1 from "./public/images/wt1.png";
import wt2 from "./public/images/walletTracker.png";
import memeGenImg from "./public/images/meme-generator.png";

const projects = {
  walletTracker: {
    title: "Solana Wallet Tracker",
    slug: "wallet-tracker",
    gitHub: "https://github.com/moore-isiah/magic-eden-tracker",
    liveLink: null,
    images: [wtHome1, wtHome2, wt1, wt2],
    description:
      "Submit any Solana wallet or use the pre set whale wallets to track NFT activity such as buys, sells, offers, etc. Uses Magic Eden's V2 API and React Query for obtaining all the data then renders using React components",
    longDescription: "lots and lots about the wallet tracker",
    tech: ["Java Script", "React", "React Query", "CSS", "HTML"],
    isBoring: false,
  },

  memeGen: {
    title: "Meme Generator",
    slug: "meme-gen",
    gitHub: "https://github.com/moore-isiah/meme-gen",
    liveLink: null,
    images: [memeGenImg],
    description:
      "A small project that uses React state to display words over a random image from a meme image API, very boring so there is no individual product page.",
    longDescription: "",
    tech: ["Java Script", "React", "CSS", "HTML"],
    isBoring: true,
  },
};

export default projects;
