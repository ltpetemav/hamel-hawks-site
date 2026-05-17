export interface Player {
  no: number;
  name: string;
  pos: string;
  bt: string;
  hometown: string;
  college: string;
  returning: boolean;
  season: number;
  captain?: boolean;
}

// Pulled from roster2026.json on www.hamelhawks.com — 28 active players
// (Jeff Ruhr appears in the source roster as #6 / Manager and is shown
// under Coaches instead). Captain flag is not in the source data so it
// is omitted until confirmed with the team.
export const ROSTER: Player[] = [
  { no: 0,  name: "Ian Farley",         pos: "IF", bt: "R/R", hometown: "Maple Grove, MN",   college: "—",                   returning: true,  season: 3 },
  { no: 3,  name: "Trevor Porisch",     pos: "1B", bt: "R/R", hometown: "Wayzata, MN",       college: "DCTC",                returning: false, season: 1 },
  { no: 5,  name: "Jack Lewin",         pos: "OF", bt: "R/R", hometown: "Wayzata, MN",       college: "Saint John's",        returning: true,  season: 3 },
  { no: 7,  name: "Dominic Adkins",     pos: "OF", bt: "R/R", hometown: "St. Paul, MN",      college: "St. Thomas",          returning: true,  season: 4 },
  { no: 8,  name: "Jayden Mersereau",   pos: "IF", bt: "R/R", hometown: "Plymouth, MN",      college: "North Central",       returning: true,  season: 3 },
  { no: 10, name: "Hayden Potratz",     pos: "1B", bt: "L/R", hometown: "Osseo, MN",         college: "—",                   returning: true,  season: 2 },
  { no: 11, name: "Cal Thorson",        pos: "P",  bt: "R/R", hometown: "Maple Grove, MN",   college: "Creighton",           returning: true,  season: 4 },
  { no: 12, name: "Alex Wattermann",    pos: "SS", bt: "R/R", hometown: "Plymouth, MN",      college: "UMD",                 returning: true,  season: 2 },
  { no: 15, name: "Jack Puncochar",     pos: "2B", bt: "L/R", hometown: "—",                 college: "—",                   returning: true,  season: 7 },
  { no: 16, name: "Zac Ruhr",           pos: "C",  bt: "L/R", hometown: "Maple Grove, MN",   college: "St. Olaf",            returning: true,  season: 2 },
  { no: 18, name: "Levi Miller",        pos: "IF", bt: "L/R", hometown: "Long Lake, MN",     college: "—",                   returning: true,  season: 3 },
  { no: 19, name: "Jake Vanyo",         pos: "P",  bt: "L/L", hometown: "Orono, MN",         college: "Creighton",           returning: true,  season: 4 },
  { no: 20, name: "Owen Nathe",         pos: "P",  bt: "R/R", hometown: "—",                 college: "—",                   returning: true,  season: 2 },
  { no: 21, name: "Andrew Chlebeck",    pos: "OF", bt: "L/R", hometown: "Little Canada, MN", college: "Iowa State",          returning: true,  season: 3 },
  { no: 22, name: "Harrison Boughton",  pos: "C",  bt: "R/R", hometown: "Crystal, MN",       college: "Augsburg",            returning: true,  season: 4 },
  { no: 23, name: "Josh Delange",       pos: "OF", bt: "R/R", hometown: "Hamel, MN",         college: "Saint John's",        returning: true,  season: 2 },
  { no: 26, name: "Ian Schock",         pos: "OF", bt: "R/L", hometown: "Maple Grove, MN",   college: "DCTC",                returning: true,  season: 2 },
  { no: 27, name: "Brady Zackrison",    pos: "OF", bt: "R/R", hometown: "Rogers, MN",        college: "Marian",              returning: true,  season: 2 },
  { no: 28, name: "Aidan Frye",         pos: "P",  bt: "L/L", hometown: "Minneapolis, MN",   college: "Buena Vista",         returning: true,  season: 2 },
  { no: 29, name: "Vann Olson",         pos: "P",  bt: "L/L", hometown: "Maple Grove, MN",   college: "Concordia Moorhead",  returning: true,  season: 2 },
  { no: 30, name: "Preston Berg",       pos: "IF", bt: "R/R", hometown: "Maple Grove, MN",   college: "—",                   returning: false, season: 1 },
  { no: 31, name: "Griffin Booms",      pos: "OF", bt: "R/R", hometown: "—",                 college: "—",                   returning: false, season: 1 },
  { no: 33, name: "Sam Hagen",          pos: "P",  bt: "R/R", hometown: "Maple Grove, MN",   college: "Crookston",           returning: true,  season: 2 },
  { no: 34, name: "Tommy Ruhr",         pos: "IF", bt: "R/R", hometown: "Maple Grove, MN",   college: "—",                   returning: false, season: 1 },
  { no: 36, name: "Connor Johnson",     pos: "1B", bt: "—",   hometown: "Maple Grove, MN",   college: "—",                   returning: false, season: 1 },
  { no: 37, name: "Teddy Conlon",       pos: "IF", bt: "—",   hometown: "Maple Grove, MN",   college: "—",                   returning: false, season: 1 },
  { no: 38, name: "Matt Kramer",        pos: "IF", bt: "—",   hometown: "—",                 college: "Harvard",             returning: true,  season: 2 },
  { no: 39, name: "James Hansen",       pos: "IF", bt: "—",   hometown: "Wayzata, MN",       college: "DCTC",                returning: false, season: 1 },
];

export interface Coach {
  name: string;
  role: string;
  since?: number;
  note: string;
}

// Verified against hamelhawks.com — Jeff Ruhr listed as #6 Manager on
// roster2026.json; Greg DeVos is the GM/contact on the contact page.
// Tim Flemming is the program's manager emeritus and the 45-year man
// of the program per the centennial story; included for context.
export const COACHES: Coach[] = [
  {
    name: 'Jeff Ruhr',
    role: 'Field Manager',
    since: 2025,
    note: 'Took over as field manager in 2025 — the same year the Hawks joined the North Star League as a Class B team. Leading the team into its centennial season.',
  },
  {
    name: 'Greg DeVos',
    role: 'General Manager',
    note: 'GM and primary point of contact for the program. Oversees the field-improvement campaign and the centennial year operations.',
  },
  {
    name: 'Tim Flemming',
    role: 'Manager Emeritus',
    note: 'Bat boy at age 8 or 9. Infielder on all three championship teams. Manager 2003–2024. 45 years with the program — the man who brought the Hawks back in 2012.',
  },
];
