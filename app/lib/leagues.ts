import leaguesDataRaw from '@/app/data/leagues.json';
import { League } from '@/app/types/league';

// Type assertion for the imported JSON data
const leaguesData = leaguesDataRaw as League[];

/**
 * Converts a league name to a URL-friendly slug
 * Example: "Zoo Lake Touch Rugby League" -> "zoo-lake-touch-rugby-league"
 * 
 * Rules:
 * 1. Convert to lowercase
 * 2. Remove special characters (keep only alphanumeric, spaces, and hyphens)
 * 3. Replace spaces with hyphens
 * 4. Replace multiple consecutive hyphens with a single hyphen
 * 5. Trim leading/trailing whitespace
 */
export function generateSlug(name: string): string {
  return name
    .trim()                        // Trim leading/trailing whitespace first
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-');          // Replace multiple hyphens with single
}

/**
 * Returns all active leagues from the data source
 * Only leagues with isActive: true are returned
 */
export function getActiveLeagues(): League[] {
  return leaguesData.filter(league => league.isActive);
}

/**
 * Finds a league by its slug
 * Returns undefined if not found or if league is inactive
 * 
 * @param slug - The URL-friendly slug to search for
 * @returns The matching active league or undefined
 */
export function getLeagueBySlug(slug: string): League | undefined {
  const activeLeagues = getActiveLeagues();
  return activeLeagues.find(league => generateSlug(league.name) === slug);
}

/**
 * Returns all slugs for active leagues
 * Used for static generation in Next.js generateStaticParams
 * 
 * @returns Array of slugs for all active leagues
 */
export function getAllLeagueSlugs(): string[] {
  return getActiveLeagues().map(league => generateSlug(league.name));
}
