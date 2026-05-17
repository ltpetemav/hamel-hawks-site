export const FEATURE = {
  kicker: '★ Centennial Season',
  date: 'May 16, 2026',
  title: 'A Hundred Years In, the Hawks Open at Home',
  dek: 'The 2026 centennial season tips off Friday under the lights at Fortin Field — the same field Paul Fortin built almost seventy years ago, where the Hamel Athletic Club first put a town team on the diamond in 1926.',
  byline: 'By Greg DeVos · Hawks GM',
  body: [
    'For a hundred summers, a baseball team has called Hamel home. On Friday night at 7:30, that team takes the field again — opening the 2026 season against the Maple Plain Lakers under lights that finally arrived in 2021, in front of a grandstand that opened in 2024, on an infield laid down by Bryan Rock in 2025.',
    'It started in 1926 as a town team built around farmers and tradesmen who played on Sundays after church. The Hamel Athletic Club was founded the same year. Through the Depression, through the war, through every decade since, Hamel has played ball — pausing only for one summer in 2011 before Tim Flemming brought it back.',
    'This season is built around that history. A throwback weekend June 26–28. An old-timers exhibition on Saturday. And on Sunday, June 28, the Loretto Larks come down Highway 55 for the MBA-designated 100 Year Anniversary Game — the team from one town up the road, against the team that has refused to quit playing for a hundred years.',
  ],
};

export interface Story {
  tag: string;
  date: string;
  title: string;
  dek: string;
}

export const STORIES: Story[] = [
  { tag: 'Roster', date: 'May 14', title: 'Ahlberg returns for third Hawks season', dek: 'Right-hander Will Ahlberg signs on for 2026 after a dominant 2.18 ERA last summer.' },
  { tag: 'Field', date: 'May 10', title: 'New centennial banner raised in right field', dek: '"1926 · A Hamel Tradition · 2026" — installed by the dugout crew last weekend.' },
  { tag: 'Schedule', date: 'May 06', title: 'July 4 doubleheader against Maple Grove', dek: 'Two games. Fireworks. Brats. A Hamel tradition older than most.' },
  { tag: 'Community', date: 'May 02', title: 'Old-Timers Day set for July 18', dek: 'Former Hawks dating back to the 1970s invited back to suit up for one exhibition.' },
  { tag: 'Sponsors', date: 'Apr 28', title: 'ICS Chillers extends sponsorship through 2030', dek: 'A deep-running partnership goes another five years — through year 104.' },
  { tag: 'Notes', date: 'Apr 22', title: 'Class B is here to stay', dek: 'After a successful 2025 debut, the Hawks lock in as a Class B team in the NSL.' },
];
