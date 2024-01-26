import fox from '../assets/avatars/fox.png'

export type Competitor = {
    id: string;
    name: string;
    bio: string;
    wins: number;
    losses: number;
    draws: number;
    rating: number;
    popularity: number;
    badges: Badge[];
    avatar: string;
}

export const demoCompetitor: Competitor = {
    id: "comp123",
    name: "BlazeFang",
    bio: "BlazeFang, a swift and cunning cyber-fox, is known for her agile maneuvers and strategic play. She outsmarts her opponents with intelligence and speed.",
    wins: 75,
    losses: 20,
    draws: 5,
    rating: 89,
    badges: [
        { code: "titanic_strength", name: "Titanic Strength Badge", description: "Awarded for winning at least one match without receiving any hits." },
        { code: "triple_victory", name: "Triple Victory Badge", description: "Granted for achieving three consecutive wins in the competition." }
    ],
    avatar: fox,
    popularity: 320987,
};


export type Badge = {
    code: string;
    name: string;
    description: string;
}

