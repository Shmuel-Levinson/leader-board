import fox from "../assets/avatars/fox.png";
import wolf from "../assets/avatars/wolf.png";
import titanicBadge from "../assets/badges/titanic_strength.png";
import tripleVictoryBadge from "../assets/badges/triple_victory.png";
import innovativeTactics from "../assets/badges/innovative-tactics.png";

export type Competitor = {
  id: string;
  name: string;
  bio: string;
  wins: number;
  losses: number;
  draws: number;
  rating: number;
  popularity: number;
  badges: string[];
  avatar: string;
};

export const foxDemo: Competitor = {
  id: "comp123",
  name: "BlazeFang",
  bio: "BlazeFang, a swift and cunning cyber-fox, is known for her agile maneuvers and strategic play. She outsmarts her opponents with intelligence and speed.",
  wins: 75,
  losses: 20,
  draws: 5,
  rating: 89,
  badges: ["titanic_strength", "triple_victory"],
  avatar: fox,
  popularity: 320987,
};

export const wolfDemo: Competitor = {
    id: "comp125",
    name: "ElectroShock",
    bio: "ElectroShock, the electric wolf, dazzles with his speed and shocking attacks. His energetic style electrifies the arena.",
    wins: 27    ,
    losses: 19,
    draws: 5,
    rating: 92,
    badges: ["innovative_tactics", "triple_victory"],
    avatar: wolf,
    popularity: 200000,
}

export type Badge = {
  code: string;
  name: string;
  description: string;
  image?: string;
};

export const BADGES: Badge[] = [
  {
    code: "titanic_strength",
    name: "Titanic Strength",
    description:
      "Awarded for winning at least one match without receiving any hits.",
    image: titanicBadge,
  },
  {
    code: "triple_victory",
    name: "Triple Victory",
    description:
      "Granted for achieving three consecutive wins in the competition.",
      image: tripleVictoryBadge
  },
  {
    code: "peak_performer",
    name: "Peak Performer",
    description:
      "Earned by holding the top position in the leader board for an entire week.",
  },
  {
    code: "comeback_king",
    name: "Comeback King",
    description:
      "Awarded for winning a match after being significantly behind in the score.",
  },
  {
    code: "innovative_tactics",
    name: "Innovative Tactics",
    description:
      "Given for demonstrating a unique and effective fighting strategy in a match.",
      image: innovativeTactics,
  },
];
