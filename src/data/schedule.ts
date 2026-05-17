export interface Game {
  date: string;
  day: string;
  time: string;
  opp: string;
  home: boolean;
  cls: 'B' | 'C' | 'X';
  special: string;
}

export const SCHEDULE_2026: Game[] = [
  { date: '2026-05-22', day: 'Fri', time: '7:30 PM', opp: 'Maple Plain Lakers', home: true, cls: 'B', special: 'Centennial Season Opener' },
  { date: '2026-05-28', day: 'Thu', time: '7:30 PM', opp: 'Loretto Larks', home: false, cls: 'B', special: 'On the road · Rivalry night' },
  { date: '2026-06-04', day: 'Thu', time: '7:30 PM', opp: 'Long Lake Lakers', home: true, cls: 'B', special: 'Throwback Night · 1926 jerseys' },
  { date: '2026-06-07', day: 'Sun', time: '2:00 PM', opp: 'Rogers Red Devils', home: false, cls: 'C', special: '' },
  { date: '2026-06-11', day: 'Thu', time: '7:30 PM', opp: 'Plymouth Pilots', home: true, cls: 'C', special: 'Family Fireworks Night' },
  { date: '2026-06-18', day: 'Thu', time: '7:30 PM', opp: 'Maple Plain Lakers', home: false, cls: 'B', special: '' },
  { date: '2026-06-25', day: 'Thu', time: '7:30 PM', opp: 'Delano Athletics', home: true, cls: 'B', special: 'Salute to Service' },
  { date: '2026-06-26', day: 'Fri', time: '7:30 PM', opp: 'Loretto Larks', home: true, cls: 'B', special: '★ Centennial Weekend · Night 1' },
  { date: '2026-06-27', day: 'Sat', time: '5:00 PM', opp: 'Hawks Alumni', home: true, cls: 'X', special: '★ Centennial Old-Timers Game · exhibition' },
  { date: '2026-06-28', day: 'Sun', time: '2:00 PM', opp: 'Loretto Larks', home: true, cls: 'B', special: '★ ★ ★ 100 Year Anniversary Game · MBA designated' },
  { date: '2026-07-04', day: 'Sat', time: '1:00 PM', opp: 'Maple Plain Lakers', home: true, cls: 'B', special: 'Independence Day' },
  { date: '2026-07-09', day: 'Thu', time: '7:30 PM', opp: 'Long Lake Lakers', home: false, cls: 'B', special: '' },
  { date: '2026-07-16', day: 'Thu', time: '7:30 PM', opp: 'Watertown Red Devils', home: true, cls: 'B', special: '' },
  { date: '2026-07-23', day: 'Thu', time: '7:30 PM', opp: 'Delano Athletics', home: false, cls: 'B', special: '' },
  { date: '2026-07-30', day: 'Thu', time: '7:30 PM', opp: 'Watertown Red Devils', home: false, cls: 'B', special: '' },
  { date: '2026-08-06', day: 'Thu', time: '7:30 PM', opp: 'Buffalo Bulldogs', home: true, cls: 'C', special: 'Regular season finale' },
];

export const MONTH_ABBR = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function fmtMonth(iso: string) {
  return MONTH_ABBR[new Date(iso + 'T12:00:00').getMonth()];
}
export function fmtDay(iso: string) {
  return String(new Date(iso + 'T12:00:00').getDate()).padStart(2, '0');
}
