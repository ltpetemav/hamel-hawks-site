export interface Hitter {
  name: string;
  pos: string;
  g: number;
  ab: number;
  r: number;
  h: number;
  hr: number;
  rbi: number;
  sb: number;
  avg: number;
  obp: number;
  slg: number;
}

// Pulled from cleaned_stats_2026.csv on www.hamelhawks.com.
// Only one game played so far (May 10 @ Glencoe, L 5–8) — these are 1-game samples.
export const HITTING: Hitter[] = [
  { name: "Jack Lewin",         pos: 'OF', g: 1, ab: 5, r: 1, h: 2, hr: 1, rbi: 3, sb: 0, avg: 0.400, obp: 0.400, slg: 1.000 },
  { name: "Alex Wattermann",    pos: 'SS', g: 1, ab: 5, r: 2, h: 2, hr: 0, rbi: 2, sb: 0, avg: 0.400, obp: 0.400, slg: 0.600 },
  { name: "Vann Olson",         pos: 'P',  g: 1, ab: 4, r: 0, h: 2, hr: 0, rbi: 0, sb: 1, avg: 0.500, obp: 0.600, slg: 0.500 },
  { name: "Jack Puncochar",     pos: '2B', g: 1, ab: 3, r: 0, h: 1, hr: 0, rbi: 0, sb: 0, avg: 0.333, obp: 0.500, slg: 0.333 },
  { name: "Hayden Potratz",     pos: '1B', g: 1, ab: 4, r: 0, h: 1, hr: 0, rbi: 0, sb: 1, avg: 0.250, obp: 0.250, slg: 0.250 },
  { name: "Brady Zackrison",    pos: 'OF', g: 1, ab: 4, r: 2, h: 1, hr: 0, rbi: 0, sb: 0, avg: 0.250, obp: 0.400, slg: 0.500 },
  { name: "Jayden Mersereau",   pos: 'IF', g: 1, ab: 4, r: 0, h: 0, hr: 0, rbi: 0, sb: 0, avg: 0.000, obp: 0.000, slg: 0.000 },
  { name: "Harrison Boughton",  pos: 'C',  g: 1, ab: 4, r: 0, h: 0, hr: 0, rbi: 0, sb: 1, avg: 0.000, obp: 0.200, slg: 0.000 },
  { name: "Tommy Ruhr",         pos: 'IF', g: 1, ab: 4, r: 0, h: 0, hr: 0, rbi: 0, sb: 0, avg: 0.000, obp: 0.000, slg: 0.000 },
];

export interface Pitcher {
  name: string;
  g: number;
  w: number;
  l: number;
  sv: number;
  ip: number;
  h: number;
  er: number;
  bb: number;
  k: number;
  era: number;
  whip: number;
}

export const PITCHING: Pitcher[] = [
  { name: "Alex Wattermann", g: 1, w: 0, l: 0, sv: 0, ip: 6.0, h: 7, er: 2, bb: 0, k: 7, era: 3.00,  whip: 1.17 },
  { name: "Vann Olson",      g: 1, w: 0, l: 1, sv: 0, ip: 2.0, h: 5, er: 6, bb: 2, k: 4, era: 27.00, whip: 3.50 },
];

export interface StandingsRow {
  team: string;
  w: number;
  l: number;
  pct: number;
  gb: string;
  streak: string;
  rs?: number;
  ra?: number;
}

// Pulled from hamelhawks.com/standings — 2026 NSL early season.
// Currently most teams are 0-0; will fill in as the season progresses.
// Streak column not published on the source site — set to '—' until known.
export const CLASS_B: StandingsRow[] = [
  { team: 'Maple Lake Lakers',    w: 1, l: 0, pct: 1.000, gb: '—',  streak: 'W1' },
  { team: 'Buffalo Bulldogs',     w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Hamel Hawks',          w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Hutchinson Huskies',   w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Kimball Express',      w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Loretto Larks',        w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
];

export const CLASS_C: StandingsRow[] = [
  { team: 'Cokato Kernels',             w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'DC Saints',                  w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Howard Lake Orphans',        w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Litchfield Blues',           w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Maple Plain Diamond Devils', w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Rockford Crows',             w: 0, l: 0, pct: 0,     gb: '0.5', streak: '—' },
  { team: 'Waverly Stingers',           w: 0, l: 1, pct: 0.000, gb: '1.0', streak: 'L1' },
];

export function fmt3(v: number) {
  return v.toFixed(3).replace(/^0/, '');
}
