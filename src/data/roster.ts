export interface Player {
  no: number;
  name: string;
  pos: string;
  bt: string;
  hometown: string;
  college: string;
  returning: boolean;
  captain?: boolean;
}

export const ROSTER: Player[] = [
  { no: 1, name: 'Tyler Schmidt', pos: 'SS', bt: 'R/R', hometown: 'Hamel, MN', college: 'St. Thomas', returning: true },
  { no: 3, name: 'Jack O\'Brien', pos: 'CF', bt: 'L/L', hometown: 'Plymouth, MN', college: 'Bethel', returning: true },
  { no: 5, name: 'Marcus Bellamy', pos: 'C', bt: 'R/R', hometown: 'Medina, MN', college: 'Concordia', returning: false },
  { no: 7, name: 'Cole Henderson', pos: '2B', bt: 'L/R', hometown: 'Maple Grove, MN', college: 'St. John\'s', returning: true },
  { no: 9, name: 'Drew Magnusson', pos: '3B', bt: 'R/R', hometown: 'Hamel, MN', college: 'Hamline', returning: false },
  { no: 10, name: 'Sam Larsson', pos: '1B', bt: 'L/L', hometown: 'Long Lake, MN', college: 'U of M', returning: true },
  { no: 11, name: 'Eli Mickelson', pos: 'LF', bt: 'R/R', hometown: 'Loretto, MN', college: 'St. Olaf', returning: false },
  { no: 13, name: 'Brady Norquist', pos: 'RF', bt: 'R/R', hometown: 'Medina, MN', college: 'Augsburg', returning: false },
  { no: 14, name: 'Tommy Patel', pos: 'OF', bt: 'L/L', hometown: 'Maple Plain, MN', college: 'Macalester', returning: false },
  { no: 17, name: 'Riley Olson', pos: 'C', bt: 'R/R', hometown: 'Plymouth, MN', college: 'St. Thomas', returning: true },
  { no: 21, name: 'Mason Erickson', pos: 'IF', bt: 'R/R', hometown: 'Hamel, MN', college: 'Bethel', returning: false },
  { no: 22, name: 'Carter Lindquist', pos: 'IF', bt: 'L/R', hometown: 'Maple Grove, MN', college: 'Gustavus', returning: false },
  { no: 24, name: 'Will Ahlberg', pos: 'P', bt: 'R/R', hometown: 'Wayzata, MN', college: 'St. Thomas', returning: true },
  { no: 27, name: 'Jacob Voss', pos: 'P', bt: 'L/L', hometown: 'Plymouth, MN', college: 'U of M', returning: false },
  { no: 28, name: 'Connor Bauer', pos: 'P', bt: 'R/R', hometown: 'Minneapolis, MN', college: 'Bethel', returning: false },
  { no: 30, name: 'Hunter Reilly', pos: 'P', bt: 'R/R', hometown: 'Medina, MN', college: 'Concordia', returning: true },
  { no: 31, name: 'Owen Lindstrom', pos: 'P', bt: 'L/L', hometown: 'Hamel, MN', college: 'St. John\'s', returning: false },
  { no: 33, name: 'Cole Halvorson', pos: 'P', bt: 'R/R', hometown: 'Maple Grove, MN', college: 'St. Olaf', returning: false },
  { no: 34, name: 'Ben Sullivan', pos: 'P', bt: 'R/R', hometown: 'Plymouth, MN', college: 'Hamline', returning: false },
  { no: 36, name: 'Ryan Westby', pos: 'P', bt: 'L/R', hometown: 'Minnetonka, MN', college: 'Augsburg', returning: false },
  { no: 37, name: 'Nick Hoffman', pos: 'P', bt: 'R/R', hometown: 'Wayzata, MN', college: 'Gustavus', returning: false },
  { no: 38, name: 'Luke Jorgensen', pos: 'P', bt: 'R/R', hometown: 'Hamel, MN', college: 'Macalester', returning: false },
  { no: 41, name: 'Andrew Quinn', pos: 'P', bt: 'R/R', hometown: 'Long Lake, MN', college: 'U of M', returning: false },
  { no: 44, name: 'Cole Westbrook', pos: 'UTIL', bt: 'R/R', hometown: 'Loretto, MN', college: 'St. Thomas', returning: false },
  { no: 47, name: 'Charlie Anderson', pos: 'IF', bt: 'R/R', hometown: 'Hamel, MN', college: '—', returning: true, captain: true },
];

export interface Coach {
  name: string;
  role: string;
  since: number;
  note: string;
}

export const COACHES: Coach[] = [
  { name: 'Jeff Ruhr', role: 'Field Manager', since: 2025, note: 'Took over for Tim Flemming after his 45-year run with the program. Leading the Hawks into the centennial season.' },
  { name: 'Greg DeVos', role: 'General Manager', since: 2023, note: 'President of the Hamel Lions Club. Architect of the field-improvement campaign — lights, scoreboard, grandstand, new infield.' },
  { name: 'Tim Flemming', role: 'Manager Emeritus', since: 1979, note: '"Mr. Baseball." Bat boy at age 8, infielder on all three championship teams, manager 2003–2024. The man who brought the Hawks back in 2012.' },
];
