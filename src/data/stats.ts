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

export const HITTING: Hitter[] = [
  { name: 'Jack O\'Brien', pos: 'CF', g: 14, ab: 52, r: 18, h: 21, hr: 3, rbi: 14, sb: 7, avg: 0.404, obp: 0.478, slg: 0.596 },
  { name: 'Tyler Schmidt', pos: 'SS', g: 14, ab: 54, r: 16, h: 20, hr: 4, rbi: 17, sb: 4, avg: 0.370, obp: 0.433, slg: 0.685 },
  { name: 'Cole Henderson', pos: '2B', g: 14, ab: 51, r: 13, h: 18, hr: 1, rbi: 11, sb: 6, avg: 0.353, obp: 0.421, slg: 0.451 },
  { name: 'Marcus Bellamy', pos: 'C', g: 13, ab: 47, r: 9, h: 16, hr: 2, rbi: 12, sb: 1, avg: 0.340, obp: 0.415, slg: 0.553 },
  { name: 'Sam Larsson', pos: '1B', g: 14, ab: 50, r: 11, h: 16, hr: 5, rbi: 19, sb: 0, avg: 0.320, obp: 0.393, slg: 0.680 },
  { name: 'Drew Magnusson', pos: '3B', g: 14, ab: 48, r: 12, h: 15, hr: 2, rbi: 10, sb: 2, avg: 0.313, obp: 0.388, slg: 0.500 },
  { name: 'Eli Mickelson', pos: 'LF', g: 13, ab: 44, r: 8, h: 13, hr: 1, rbi: 8, sb: 3, avg: 0.295, obp: 0.362, slg: 0.432 },
  { name: 'Brady Norquist', pos: 'RF', g: 12, ab: 41, r: 7, h: 12, hr: 0, rbi: 6, sb: 2, avg: 0.293, obp: 0.349, slg: 0.390 },
  { name: 'Charlie Anderson', pos: 'IF', g: 11, ab: 32, r: 5, h: 9, hr: 0, rbi: 4, sb: 1, avg: 0.281, obp: 0.343, slg: 0.344 },
  { name: 'Riley Olson', pos: 'C', g: 9, ab: 24, r: 3, h: 6, hr: 0, rbi: 3, sb: 0, avg: 0.250, obp: 0.310, slg: 0.333 },
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
  { name: 'Will Ahlberg', g: 5, w: 3, l: 1, sv: 0, ip: 32.1, h: 22, er: 8, bb: 9, k: 41, era: 2.23, whip: 0.96 },
  { name: 'Jacob Voss', g: 4, w: 2, l: 0, sv: 0, ip: 24.0, h: 18, er: 7, bb: 7, k: 28, era: 2.63, whip: 1.04 },
  { name: 'Hunter Reilly', g: 5, w: 2, l: 1, sv: 0, ip: 28.2, h: 24, er: 11, bb: 10, k: 25, era: 3.45, whip: 1.19 },
  { name: 'Connor Bauer', g: 6, w: 1, l: 0, sv: 2, ip: 14.1, h: 11, er: 5, bb: 4, k: 19, era: 3.14, whip: 1.05 },
  { name: 'Owen Lindstrom', g: 4, w: 1, l: 1, sv: 0, ip: 18.0, h: 18, er: 9, bb: 6, k: 17, era: 4.50, whip: 1.33 },
  { name: 'Cole Halvorson', g: 5, w: 1, l: 0, sv: 1, ip: 12.2, h: 10, er: 5, bb: 5, k: 16, era: 3.55, whip: 1.18 },
  { name: 'Ben Sullivan', g: 4, w: 0, l: 0, sv: 0, ip: 9.1, h: 8, er: 4, bb: 3, k: 11, era: 3.86, whip: 1.18 },
  { name: 'Ryan Westby', g: 3, w: 1, l: 0, sv: 0, ip: 11.0, h: 12, er: 6, bb: 4, k: 9, era: 4.91, whip: 1.45 },
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

export const CLASS_B: StandingsRow[] = [
  { team: 'Hamel Hawks', w: 8, l: 2, pct: 0.800, gb: '—', streak: 'W4', rs: 67, ra: 38 },
  { team: 'Loretto Larks', w: 7, l: 3, pct: 0.700, gb: '1.0', streak: 'W2', rs: 58, ra: 41 },
  { team: 'Maple Plain Lakers', w: 5, l: 5, pct: 0.500, gb: '3.0', streak: 'L1', rs: 49, ra: 51 },
  { team: 'Delano Athletics', w: 5, l: 5, pct: 0.500, gb: '3.0', streak: 'W1', rs: 44, ra: 46 },
  { team: 'Long Lake Lakers', w: 3, l: 7, pct: 0.300, gb: '5.0', streak: 'L3', rs: 35, ra: 55 },
  { team: 'Watertown Red Devils', w: 2, l: 8, pct: 0.200, gb: '6.0', streak: 'L4', rs: 31, ra: 63 },
];

export const CLASS_C: StandingsRow[] = [
  { team: 'Plymouth Pilots', w: 6, l: 2, pct: 0.750, gb: '—', streak: 'W3' },
  { team: 'Hamel Hawks', w: 3, l: 1, pct: 0.750, gb: '0.5', streak: 'W2' },
  { team: 'Buffalo Bulldogs', w: 5, l: 3, pct: 0.625, gb: '1.0', streak: 'L1' },
  { team: 'Maple Grove Cobras', w: 4, l: 4, pct: 0.500, gb: '2.0', streak: 'W1' },
  { team: 'Rogers Red Devils', w: 2, l: 6, pct: 0.250, gb: '4.0', streak: 'L2' },
];

export function fmt3(v: number) {
  return v.toFixed(3).replace(/^0/, '');
}
