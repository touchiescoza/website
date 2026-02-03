# Requirements Document

## Introduction

This document specifies the requirements for implementing individual league detail pages with slug-based URLs for the Touchies touch rugby platform. The feature enables users to view comprehensive information about specific leagues through dedicated pages accessible via human-readable URLs (e.g., `/leagues/zoo-lake-touch-rugby-league`).

## Glossary

- **League_Detail_System**: The system responsible for displaying individual league information pages
- **URL_Generator**: The component that creates slug-based URLs from league names
- **League_Data_Service**: The service that retrieves league information from the data source
- **Navigation_System**: The system that handles routing and page navigation
- **SEO_System**: The system that manages search engine optimization metadata
- **Contact_Interface**: The UI components that enable user communication with league organizers
- **Slug**: A URL-friendly string derived from a league name (e.g., "zoo-lake-touch-rugby-league")
- **Active_League**: A league with isActive status set to true (only active leagues have detail pages)

## Requirements

### Requirement 1: Dynamic Route Generation

**User Story:** As a developer, I want the system to generate dynamic routes for league detail pages, so that each league has its own accessible URL.

#### Acceptance Criteria

1. THE Navigation_System SHALL create dynamic routes using the pattern `/leagues/[slug]`
2. WHEN a league name is provided, THE URL_Generator SHALL convert it to a slug by lowercasing all characters, replacing spaces with hyphens, and removing special characters
3. WHEN a user navigates to a league detail URL, THE Navigation_System SHALL extract the slug parameter and pass it to the League_Detail_System
4. THE Navigation_System SHALL support Next.js App Router dynamic route conventions

### Requirement 2: League Data Retrieval

**User Story:** As a user, I want to view complete information about a specific league, so that I can make an informed decision about joining.

#### Acceptance Criteria

1. WHEN a slug is provided, THE League_Data_Service SHALL retrieve the corresponding league data from the data source
2. THE League_Data_Service SHALL match slugs to league names by applying the same slug transformation algorithm
3. IF no league matches the provided slug, THEN THE League_Data_Service SHALL return a not-found indicator
4. THE League_Data_Service SHALL return all league properties including id, name, description, location, schedule, leagueType, contact, image, isActive, features, skillLevel, and seasonInfo

### Requirement 3: League Information Display

**User Story:** As a player, I want to see all relevant league information in a clear layout, so that I can understand what the league offers.

#### Acceptance Criteria

1. THE League_Detail_System SHALL display the league name as the page title
2. THE League_Detail_System SHALL display the league description prominently
3. THE League_Detail_System SHALL display the league image in a hero section
4. THE League_Detail_System SHALL display the location name and address
5. THE League_Detail_System SHALL display the schedule day and time
6. THE League_Detail_System SHALL display the league type with appropriate visual styling
7. THE League_Detail_System SHALL display all features as a list
8. THE League_Detail_System SHALL display the skill level
9. THE League_Detail_System SHALL display season duration, start date, and registration fee

### Requirement 4: Contact Information Display

**User Story:** As a player, I want to easily access league contact information, so that I can reach out with questions or register.

#### Acceptance Criteria

1. WHEN contact email is available, THE Contact_Interface SHALL display it as a clickable mailto link
2. WHEN contact phone is available, THE Contact_Interface SHALL display it as a clickable tel link
3. WHEN contact website is available, THE Contact_Interface SHALL display it as a clickable external link
4. THE Contact_Interface SHALL display all available contact methods in a dedicated section

### Requirement 5: Active League Filtering

**User Story:** As a user, I want to only see detail pages for active leagues, so that I can focus on leagues that are currently accepting registrations.

#### Acceptance Criteria

1. THE League_Data_Service SHALL only generate routes for Active_Leagues
2. WHEN a slug corresponds to an Inactive_League, THE Navigation_System SHALL display a 404 not-found page
3. THE League_Detail_System SHALL display a "Join League" call-to-action button on all league detail pages

### Requirement 6: SEO Optimization

**User Story:** As a platform owner, I want league detail pages to be discoverable by search engines, so that we can attract more players through organic search.

#### Acceptance Criteria

1. THE SEO_System SHALL generate a unique page title for each league using the format "[League Name] | Touchies"
2. THE SEO_System SHALL generate a meta description using the league description
3. THE SEO_System SHALL include Open Graph metadata for social media sharing
4. THE SEO_System SHALL include the league image as the Open Graph image
5. THE SEO_System SHALL generate canonical URLs for each league page

### Requirement 7: Responsive Design

**User Story:** As a mobile user, I want league detail pages to display properly on my device, so that I can browse leagues on the go.

#### Acceptance Criteria

1. THE League_Detail_System SHALL render all content in a mobile-friendly layout on screens smaller than 768px
2. THE League_Detail_System SHALL render content in a tablet-optimized layout on screens between 768px and 1024px
3. THE League_Detail_System SHALL render content in a desktop-optimized layout on screens larger than 1024px
4. THE League_Detail_System SHALL ensure all interactive elements are touch-friendly on mobile devices

### Requirement 8: Error Handling

**User Story:** As a user, I want to see a helpful message if I navigate to a non-existent league page, so that I understand what happened.

#### Acceptance Criteria

1. WHEN a slug does not match any league, THE Navigation_System SHALL display a 404 not-found page
2. THE Navigation_System SHALL provide a link back to the leagues listing page on the 404 page
3. IF the data source is unavailable, THEN THE League_Data_Service SHALL handle the error gracefully and display an error message

### Requirement 9: Navigation Integration

**User Story:** As a user, I want to easily navigate between the leagues listing and individual league pages, so that I can explore multiple leagues.

#### Acceptance Criteria

1. THE League_Detail_System SHALL include a breadcrumb or back link to the leagues listing page
2. WHEN a user clicks on a league card in the leagues listing, THE Navigation_System SHALL navigate to that league's detail page
3. THE Navigation_System SHALL preserve browser history for back/forward navigation

### Requirement 10: Visual Consistency

**User Story:** As a user, I want league detail pages to match the existing design system, so that the experience feels cohesive.

#### Acceptance Criteria

1. THE League_Detail_System SHALL use the existing UI components from the component library (Card, Badge, Button, PageHeader)
2. THE League_Detail_System SHALL apply the brand's primary green color (#00D100) for call-to-action elements
3. THE League_Detail_System SHALL follow the existing Tailwind CSS design system defined in tailwind.config.ts
4. THE League_Detail_System SHALL maintain consistent spacing, typography, and visual hierarchy with other pages
