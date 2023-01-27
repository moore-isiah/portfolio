import wtHome1 from "./public/images/wt-home-1.png";
import wtHome2 from "./public/images/wt-home-2.png";
import wt1 from "./public/images/wt1.png";
import wt2 from "./public/images/walletTracker.png";
import memeGenImg from "./public/images/meme-generator.png";
import portlofio from "./public/images/portfolio.png";

const projects = {
  walletTracker: {
    title: "Solana Wallet Tracker",
    slug: "wallet-tracker",
    gitHub: "https://github.com/moore-isiah/magic-eden-tracker",
    liveLink: null,
    images: [wtHome1, wtHome2, wt1, wt2],
    description:
      "Submit any Solana wallet or use the pre set whale wallets to track NFT activity such as buys, sells, offers, etc. Uses Magic Eden's V2 API and React Query to obtain all the data with the layout made from React and CSS.",
    longDescription: [
      [
        null,
        null,
        "Note: Magic Eden's API only supports two requests a second so data may be delayed",
      ],
      [
        null,
        "About",
        "Choose any Solana Blockchain wallet and track the NFT transactions of said wallet. Supmit one wallet for in depth transaction history or track up to seven wallets buy and sell transactions. React Query's useInfinateQueary is used to fetch data for the different transaction type containers. One issue is that the object returned from Magic Eden does not contain the full NFT meta data, mainly the Image, so React Query's useQuery is used to get the meta data of each transaction, but will only fetch it if the NFT in said has not showed up in a previous transaction",
      ],
      [
        wt2,
        "Wallet Tracker",
        "Enter any wallet and get all the transaction data. (all activity, buys, sells, and offers pending)",
      ],
      [
        wt1,
        "Whale Tracker",
        "Use one of the pre-set options or enter your own wallets and information. Store as many options as you like but can only display the buys and sells of up to 7 wallets at a time.",
      ],
      [
        null,
        "Portfolio Tracker",
        "Submit any wallet and will take the current NFT holdings and will calculate it's value in total, with Magic Eden's marketplace fees, or fees along with creator royalties. There is also another half where it would look back and calculate the profit earned over a given time span but for now it remains unfinished.",
      ],
    ],
    tech: ["Java Script", "React", "React Query", "CSS", "HTML"],
    isBoring: false,
  },

  portfolio: {
    title: "isiahm.dev",
    slug: "portfolio",
    gitHub: "",
    liveLink: "https://isiahm.dev/",
    images: [portlofio],
    description:
      "This is the project I used to familiarize myself Tailwind CSS and Next JS. I looked back at old projects to reviewed old code to learn which areas I need to improve in and in which areas I have already improved.",
    longDescription: "",
    tech: ["Next JS", "Tailwind CSS", "Java Script", "React"],
    isBoring: true,
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
