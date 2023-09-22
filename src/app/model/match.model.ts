export interface Match {
    id?: string;
    sport: string;
    championshipName: string;
    phase: string;
    playoffPhase?: string;
    teamA: string;
    scoreA: number;
    teamB: string;
    scoreB: number;
    stadium: string;
    location: string;
    time: string;
    date: string;
    status: string;
}