export interface Game {
  date: string;
  day: string;
  time: string;
  opp: string;
  home: boolean;
  cls: 'B' | 'C' | 'X';
  special: string;
  fieldName?: string;
}

// Pulled from games2026.json on www.hamelhawks.com — 33-game 2026 season.
// Class designator: `*` in source → 'B' (Class B), `^` → 'C' (Class C),
// neither → 'X' (exhibition / non-league).
export const SCHEDULE_2026: Game[] = [
  { date: '2026-05-10', day: 'Sun', time: '2:00 PM',  opp: 'Glencoe Brewers',            home: false, cls: 'X', special: '', fieldName: 'Vollmer Field' },
  { date: '2026-05-17', day: 'Sun', time: '1:00 PM',  opp: 'Kimball Express',            home: false, cls: 'B', special: '', fieldName: "Kimball Veteran's Memorial Field" },
  { date: '2026-05-20', day: 'Wed', time: '7:00 PM',  opp: 'Prior Lake Jays',            home: true,  cls: 'X', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-05-21', day: 'Thu', time: '7:45 PM',  opp: 'Andover Aces',               home: true,  cls: 'X', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-05-27', day: 'Wed', time: '7:00 PM',  opp: 'Monticello Polecats',        home: false, cls: 'X', special: '', fieldName: 'Monticello Baseball Park' },
  { date: '2026-05-31', day: 'Sun', time: '1:00 PM',  opp: 'Montrose/Waverly Stingers',  home: true,  cls: 'C', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-06-03', day: 'Wed', time: '7:00 PM',  opp: 'Litchfield Blues',           home: false, cls: 'C', special: '', fieldName: 'Optimist Park' },
  { date: '2026-06-05', day: 'Fri', time: '7:30 PM',  opp: 'Hutchinson Huskies',         home: true,  cls: 'B', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-06-07', day: 'Sun', time: '1:00 PM',  opp: 'Loretto Larks',              home: false, cls: 'B', special: '', fieldName: 'Arnold Klaers Baseball Field' },
  { date: '2026-06-10', day: 'Wed', time: '7:00 PM',  opp: 'Rockford Crows',             home: false, cls: 'C', special: '', fieldName: 'Rockford High School' },
  { date: '2026-06-12', day: 'Fri', time: '7:00 PM',  opp: 'Kimball Express',            home: true,  cls: 'B', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-06-13', day: 'Sat', time: '4:00 PM',  opp: 'Maple Plain Diamond Devils', home: false, cls: 'C', special: '', fieldName: 'Don Timpe Field' },
  { date: '2026-06-14', day: 'Sun', time: '1:00 PM',  opp: 'Cokato Kernels',             home: true,  cls: 'C', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-06-16', day: 'Tue', time: '7:30 PM',  opp: 'Delano Athletics',           home: false, cls: 'X', special: '', fieldName: 'Delano Municipal Baseball Park' },
  { date: '2026-06-19', day: 'Fri', time: '7:00 PM',  opp: 'Buffalo Bulldogs',           home: true,  cls: 'C', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-06-20', day: 'Sat', time: '6:00 PM',  opp: 'Northwest Orioles',          home: true,  cls: 'X', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-06-24', day: 'Wed', time: '7:00 PM',  opp: 'Dassel-Cokato Saints',       home: false, cls: 'C', special: '', fieldName: 'Saints Field' },
  { date: '2026-06-26', day: 'Fri', time: '7:30 PM',  opp: 'St. Patrick Irish',          home: false, cls: 'X', special: '', fieldName: 'Bonin Field' },
  { date: '2026-06-28', day: 'Sun', time: '1:00 PM',  opp: 'Loretto Larks',              home: true,  cls: 'B', special: '★ ★ ★ 100 Year Anniversary Game · MBA designated', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-07-01', day: 'Wed', time: '7:00 PM',  opp: 'Howard Lake Orphans',        home: true,  cls: 'C', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-07-08', day: 'Wed', time: '7:00 PM',  opp: 'Maple Lake Lakers',          home: false, cls: 'B', special: '', fieldName: 'Irish Stadium' },
  { date: '2026-07-10', day: 'Fri', time: '7:30 PM',  opp: 'Hutchinson Huskies',         home: false, cls: 'B', special: '', fieldName: "Veteran's Memorial Field" },
  { date: '2026-07-12', day: 'Sun', time: '1:00 PM',  opp: 'Buffalo Bulldogs',           home: false, cls: 'C', special: '', fieldName: 'Bentfield Mills Baseball Park' },
  { date: '2026-07-15', day: 'Wed', time: '7:30 PM',  opp: 'Dundas Dukes',               home: false, cls: 'X', special: '', fieldName: 'Memorial Park' },
  { date: '2026-07-18', day: 'Sat', time: '2:00 PM',  opp: 'Carver Black Sox',           home: false, cls: 'X', special: '', fieldName: 'Carver Community Park' },
  { date: '2026-07-19', day: 'Sun', time: '1:00 PM',  opp: 'Maple Lake Lakers',          home: true,  cls: 'B', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-07-24', day: 'Fri', time: '7:30 PM',  opp: 'Watertown Red Devils',       home: false, cls: 'X', special: '', fieldName: 'Highland Park' },
  { date: '2026-07-25', day: 'Sat', time: '2:00 PM',  opp: 'St. Martin Martins',         home: true,  cls: 'X', special: '', fieldName: 'Paul Fortin Memorial Field' },
  { date: '2026-07-29', day: 'Wed', time: 'TBD',      opp: 'Playoffs',                   home: false, cls: 'X', special: 'Postseason · time + opponent TBD' },
  { date: '2026-08-01', day: 'Sat', time: 'TBD',      opp: 'Districts',                  home: false, cls: 'X', special: 'Postseason · time + opponent TBD' },
  { date: '2026-08-02', day: 'Sun', time: 'TBD',      opp: 'Districts',                  home: false, cls: 'X', special: 'Postseason · time + opponent TBD' },
  { date: '2026-08-08', day: 'Sat', time: 'TBD',      opp: 'Districts',                  home: false, cls: 'X', special: 'Postseason · time + opponent TBD' },
  { date: '2026-08-09', day: 'Sun', time: 'TBD',      opp: 'Districts',                  home: false, cls: 'X', special: 'Postseason · time + opponent TBD' },
];

export const MONTH_ABBR = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function fmtMonth(iso: string) {
  return MONTH_ABBR[new Date(iso + 'T12:00:00').getMonth()];
}
export function fmtDay(iso: string) {
  return String(new Date(iso + 'T12:00:00').getDate()).padStart(2, '0');
}
