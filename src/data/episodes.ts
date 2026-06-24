export type Episode = {
  id: number;
  caseNumber: string;
  title: string;
  setting: string;
  description: string;
  threatLevel: string;
  releaseDate: string;
  image: string;
  steamUrl: string;
  accent: string;
  isLatest?: boolean;
};

export const episodes: Episode[] = [
  {
    id: 1,
    caseNumber: "Episode 01",
    title: "Home Alone",
    setting: "Suburban house",
    description:
      "In the first episode of Fears to Fathom you play as Miles, a 14-year-old kid who is home alone while his parents are out of town for work. He soon finds himself in trouble as the story unfolds.",
    threatLevel: "Unknown",
    releaseDate: "2 Jul, 2021",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1671340/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1671340/Fears_to_Fathom__Home_Alone/",
    accent: "rgba(239, 68, 68, 0.22)",
  },
  {
    id: 2,
    caseNumber: "Episode 02",
    title: "Norwood Hitchhike",
    setting: "Highway motel",
    description:
      "Holly Gardner, a 19 year old on an interstate drive experiences unusual happenings that leads to an unplanned stay at a motel, little did she know what was transpiring down in Norwood Valley.",
    threatLevel: "High",
    releaseDate: "6 Jan, 2022",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1763050/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1763050/Fears_to_Fathom__Norwood_Hitchhike/",
    accent: "rgba(245, 158, 11, 0.2)",
  },
  {
    id: 3,
    caseNumber: "Episode 03",
    title: "Carson House",
    setting: "Empty family home",
    description:
      "Noah Baker, an 18-year-old highschooler experiences unsettling occurrences while house-sitting for a media personality, Little did he know what was about to come. ",
    threatLevel: "Unstable",
    releaseDate: "9 Jan, 2023",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2120900/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2120900/Fears_to_Fathom__Carson_House/",
    accent: "rgba(168, 85, 247, 0.2)",
  },
  {
    id: 4,
    caseNumber: "Episode 04",
    title: "Ironbark Lookout",
    setting: "Remote forest tower",
    description:
      "Jack Nelson, a 24-year-old fire lookout, transferred to a new outpost. As he settled into his new home, he couldn't shake the feeling that something was off, little did he know what was transpiring down in Ironbark State Park. ",
    threatLevel: "Severe",
    releaseDate: "20 Oct, 2023",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2506160/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2506160/Fears_to_Fathom__Ironbark_Lookout/",
    accent: "rgba(34, 197, 94, 0.18)",
  },
  {
    id: 5,
    caseNumber: "Episode 05",
    title: "Woodbury Getaway",
    setting: "Vacation rental",
    description:
      "Sydney Harper, a 23-year-old working at a consulting firm plans a weekend getaway to a Woodbury rental with her college friends. Little did she know what was about to unfold during their stay. ",
    threatLevel: "Elevated",
    releaseDate: "12 Sep, 2024",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2961530/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2961530/Fears_to_Fathom__Woodbury_Getaway/",
    accent: "rgba(14, 165, 233, 0.18)",
  },
  {
    id: 6,
    caseNumber: "F2F Together - Episode 01",
    title: "Scratch Creek",
    setting: "Decrepit small town",
    description:
      "In this episode of Fears to Fathom, you play as Tessa Langley or Marcus Reed — a young couple from Oregon preparing to move to another state. Due to unforeseen circumstances, their journey took an unexpected turn, leading them to the town of Scratch Creek. Little did they know what was transpiring in the decrepit small town. The couple survived as they collectively made the right choices.",
    threatLevel: "Classified",
    releaseDate: "10 Jun, 2026",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4121170/803663dce78da494e9d061cf6652ade566b96331/header.jpg?t=1781141362",
    steamUrl: "https://store.steampowered.com/app/4121170/Fears_to_Fathom__Scratch_Creek/",
    accent: "rgba(220, 38, 38, 0.24)",
    isLatest: true,
  },
];

export const latestEpisode = episodes.find((episode) => episode.isLatest);