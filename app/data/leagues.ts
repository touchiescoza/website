import fs from 'fs';
import path from 'path';
import type { League } from '@/app/types';

export function getLeagues(): League[] {
  const filePath = path.join(process.cwd(), 'app', 'data', 'leagues.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export const leaguesData = getLeagues();
