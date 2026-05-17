export interface Sponsor {
  name: string;
  url: string;
  tier?: 'Premier' | 'Supporting';
  since?: number;
  desc?: string;
}

export const PREMIER: Sponsor[] = [
  { name: 'ICS Chillers', url: 'https://icschillers.com/', since: 2012, desc: 'Industrial cooling solutions. Outfield wall, right-center.' },
  { name: 'Farmers State Bank of Hamel', url: 'https://secure.fsboh.com/Pages/Default.html', since: 1968, desc: 'Hamel\'s hometown bank since 1908. Program back cover.' },
  { name: 'Medina Entertainment Center', url: 'https://medinaentertainment.com/', since: 2005, desc: 'Live music, bowling, dining. Centerfield wall panel.' },
];

export const SUPPORTING: Sponsor[] = [
  { name: 'Inn Kahoots', url: 'https://www.innkahootsbar.com/', desc: 'Postgame headquarters. Hamel\'s favorite watering hole.' },
  { name: 'Hamel Lions', url: 'https://www.hamellions.org', desc: 'Community service since 1958. Twin pillars of the town.' },
  { name: 'Highway 55 Rental', url: 'https://www.55rental.com/', desc: 'Equipment rentals. Field maintenance partner.' },
];

export const SPONSOR_WALL_PREMIER: Sponsor[] = [
  { name: 'ICS Chillers', url: 'https://icschillers.com/', tier: 'Premier' },
  { name: 'Farmers State Bank of Hamel', url: 'https://secure.fsboh.com/', tier: 'Premier' },
  { name: 'Medina Entertainment Center', url: 'https://medinaentertainment.com/', tier: 'Premier' },
];

export const SPONSOR_WALL_SUPPORTING: Sponsor[] = [
  { name: 'Inn Kahoots', url: 'https://www.innkahootsbar.com/', tier: 'Supporting' },
  { name: 'Hamel Lions', url: 'https://www.hamellions.org', tier: 'Supporting' },
  { name: 'Highway 55 Rental', url: 'https://www.55rental.com/', tier: 'Supporting' },
];
