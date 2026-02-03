export interface LeagueLocation {
  name: string;
  address: string;
}

export interface LeagueSchedule {
  day: string;
  time: string;
}

export interface LeagueContact {
  website?: string;
  email?: string;
  phone?: string;
}

export interface LeagueSeasonInfo {
  duration: string;
  startDate: string;
  registrationFee: string;
}

export interface League {
  id: string;
  name: string;
  description: string;
  location: LeagueLocation;
  schedule: LeagueSchedule;
  leagueType: '6_down' | 'one_touch' | 'beach_touch';
  contact: LeagueContact;
  image: string;
  isActive: boolean;
  features: string[];
  skillLevel: string;
  seasonInfo: LeagueSeasonInfo;
}
