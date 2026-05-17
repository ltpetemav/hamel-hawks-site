export interface Decade {
  decade: string;
  years: string;
  title: string;
  body: string;
  accent: string;
  quote?: string;
  quoteAttr?: string;
  isFounding?: boolean;
  isChampionship?: boolean;
  isPeak?: boolean;
  isDark?: boolean;
  isFinale?: boolean;
}

export const DECADES: Decade[] = [
  {
    decade: '1857',
    years: 'Pre-history',
    title: 'A Game Older Than Hamel',
    body: "Minnesota's first organized baseball club is formed in Nininger City — a short-lived steamboat landing on the Mississippi just north of Hastings — noted in an 1857 newspaper. Through the late 19th century, town teams spread along the rail lines that grew from 1,092 miles in 1870 to 6,943 by 1900. The river the Hawks would one day join.",
    accent: 'Minnesota town ball begins',
  },
  {
    decade: '1924',
    years: '1924–25',
    title: 'The Modern Tournament Begins',
    body: 'St. Paul Dispatch editors Roy Dunlap and Lou McKenna launch the Pioneer Press semipro state tournament at Lexington Park. In 1925, the Association of Minnesota Amateur Baseball Leagues — today\'s MBA — is formed. The state tournament will be held every year since, surviving the Depression, two world wars, and multiple epidemics.',
    accent: 'AMABL founded',
  },
  {
    decade: '1926',
    years: 'Year One',
    title: 'A Program Born on the Prairie',
    body: 'In an unincorporated railroad village west of Minneapolis — settled in the 1850s by French Canadian farmers and named for the "Maple Monarch" Lange Hamel — the Hamel Athletic Club is founded and the Hawks take the field for the first time. A tight-knit Catholic farming town orbiting Highway 55. The program will not disappear.',
    accent: '★ The Hawks are born',
    isFounding: true,
  },
  {
    decade: '1933',
    years: '1933–1940',
    title: 'Inside the Town-Ball Boom',
    body: 'By 1933, there are 55 leagues and 386 teams registered with the AMABL. By 1940, 452. The Hawks are one piece of the mosaic — Sunday afternoons against the next town down the road, the lineup full of farmers, mechanics, and shopkeepers.',
    accent: '452 teams statewide by 1940',
  },
  {
    decade: '1950s',
    years: 'Postwar',
    title: 'The Fortin Era Begins',
    body: 'Paul Fortin — son of Albert Fortin, founder of Fortin Hardware (1919) — builds the Hamel field. As the local talent base thins after the war, he convinces University of Minnesota coach Dick Siebert to send some of his Gophers west to Hamel. The pipeline opens.',
    accent: 'Paul Fortin builds the field',
  },
  {
    decade: 'Pipeline',
    years: '1948–1978',
    title: '"The Chief" Sends His Gophers',
    body: 'Dick Siebert — 11-year MLB veteran, All-Star first baseman — coaches Minnesota from 1948 to 1978: 754 wins, 12 Big Ten titles, three NCAA championships (1956, 1960, 1964), College Baseball Hall of Fame. His offseason town-ball arrangement turns Hamel into a force in Class B baseball.',
    accent: 'Hamel ↔ Gophers, for thirty years',
  },
  {
    decade: '1975',
    years: 'Year 49',
    title: 'Onto the State Stage',
    body: 'Forty-nine seasons in, the Hawks make their first state tournament appearance. From 1982 to 2000, they\'ll appear in every state tournament except 1986, 1993, and 1999 — a quarter-century of near-uninterrupted state baseball.',
    accent: '★ First state tournament',
  },
  {
    decade: '1981',
    years: 'The Blanchard Years',
    title: 'A Yankee in the Dugout',
    body: 'Johnny Blanchard — five-time World Series participant with the 1961 Yankees, the catcher who called the pitch Bill Mazeroski hit for the first-ever Series-ending home run in 1960 — manages the Hamel Hawks. His sons Tim (pitcher) and Paul (catcher) play for the team.',
    accent: '"Casey Stengel for two hours"',
    quote: '"I get to be Casey Stengel for two hours."',
    quoteAttr: 'Johnny Blanchard, 1981',
  },
  {
    decade: '1987',
    years: 'Class B State Champs',
    title: 'The First Banner',
    body: 'Rod Enerson — a 1974 North Dakota state champion Blanchard had brought over from Long Lake in 1985 — starts the Class B State Championship game. The Hawks win their first Minnesota state title. Tom Steinbach, older brother of Oakland A\'s All-Star Terry Steinbach, has hit 18 home runs in a season for Hamel.',
    accent: '★ State Champions',
    isChampionship: true,
  },
  {
    decade: '1988',
    years: 'The Hilyar Era',
    title: 'Sonny Takes Over',
    body: 'Johnny Blanchard hands the program to a man he personally recruited — Zimmerman native Sonny Hilyar. Hilyar will manage the Hawks for the next fifteen years, including the 1993 national title and 1997 state title. Hamel Hall of Fame, 2017.',
    accent: 'Blanchard → Hilyar',
  },
  {
    decade: '1993',
    years: 'National Champions',
    title: 'The Hawks Win the World Series',
    body: 'Kicked out of the state tournament for using an illegal player ("He showed us his license and it said St. Boni. It turned out he lived four and a half miles down the road"), the same Hawks team goes on to win the Class B Amateur Baseball World Series — what the Hamel Athletic Club describes as the only national title ever won by a Minnesota town ball team.',
    accent: '★ ★ ★ National Championship',
    isChampionship: true,
    isPeak: true,
  },
  {
    decade: '1997',
    years: 'Class B State Champs',
    title: 'The Second Banner',
    body: 'Sonny Hilyar\'s Hawks capture their second Minnesota Class B State Championship in a decade — bookending the dynasty that included the 1993 national title. Three championship banners now fly over the program.',
    accent: '★ State Champions',
    isChampionship: true,
  },
  {
    decade: 'MLB',
    years: 'Big-League Alumni',
    title: 'From Hamel to The Show',
    body: 'Tim McIntosh — 1983 Hopkins grad, U of M alum, third-round Brewers pick — makes his MLB debut September 3, 1990 (Brewers, Expos, Yankees, 1990–96), a Hawks teammate during the championship era. A generation later, Joey Gerber plays his first summer of college for the Hawks before reaching the Mariners and Mets.',
    accent: 'Two MLB alumni',
    quote: '"Four summers ago I was playing town ball in rural Minnesota… last night I made my MLB debut and faced Albert Pujols."',
    quoteAttr: 'Joey Gerber, August 2020',
  },
  {
    decade: '2003',
    years: 'Mr. Baseball',
    title: 'Flemming Takes the Helm',
    body: 'Tim Flemming — Hamel bat boy at age 8 or 9, leadoff hitter for two decades, infielder on all three championship teams — takes over as field manager from Sonny Hilyar. He\'ll manage the Hawks for 22 seasons, the second of just two managers from 1988 to 2024.',
    accent: '★ The Flemming era',
  },
  {
    decade: '2011',
    years: 'The Quiet Year',
    title: 'The Lineup Card Goes Empty',
    body: 'For the first time in 85 years, the Hawks cannot field a team. Tim Flemming moves up the road to Blaine for the season. The program is dormant — but only for one summer.',
    accent: 'One quiet summer',
    isDark: true,
  },
  {
    decade: '2012',
    years: 'The Revival',
    title: '"It\'s About Building It Up Again"',
    body: 'Flemming announces the Hawks\' return to the Metro Minny League — the last league they had played in before disbanding. "It is not about winning it, it\'s about building it up again. Starting from scratch and building it." That decision is the reason the Hawks make it to year 100.',
    accent: 'The Hawks return',
    quote: '"It is not about winning it. It\'s about building it up again. Starting from scratch and building it."',
    quoteAttr: 'Tim Flemming, February 2012',
  },
  {
    decade: '2021',
    years: 'Lights at Last',
    title: 'First Home Game Under the Lights',
    body: 'August 10, 2021 — for the first time in the program\'s near-century, the Hawks play a home game under lights at Fortin Field. The same year, the team announces a return to Class B. State tournament appearances follow in 2019, 2021, and 2022 — three trips in four years.',
    accent: '★ First night game',
  },
  {
    decade: '2024',
    years: 'The Grandstand',
    title: '75 Years Dreamed Of',
    body: 'June 7, 2024 — a new grandstand opens with a 13–12 win over the Maple Plain Diamond Devils in front of just over 300 fans. A project funded jointly by the Hamel Lions and Hamel Athletic Club, financed by Farmers State Bank of Hamel. Same season: Tim Flemming retires after 45 years with the program.',
    accent: '★ New grandstand opens',
    quote: '"Hamel\'s field is starting to feel like a town ball park."',
    quoteAttr: 'Cees Hanson, longtime fan',
  },
  {
    decade: '2025',
    years: 'A New Era',
    title: 'New Manager, New Class',
    body: 'Jeff Ruhr takes over as field manager. The Hawks join the North Star League as a Class B team after the MBA\'s reclassification. A new Duraedge professional-grade infield is installed by Bryan Rock Ballfields.',
    accent: 'Class B · North Star League',
  },
  {
    decade: '2026',
    years: 'Centennial',
    title: 'One Hundred Summers.',
    body: 'The Hawks take the field for a hundredth season. The 100-Year Anniversary Celebration runs June 26–28, with the Sunday, June 28 home game against the Loretto Larks officially designated the Hamel 100 Year Anniversary Game by the MBA. A century of Hamel summers, played out in front of a town that never let it end.',
    accent: '★ 100 Years',
    isFinale: true,
  },
];

export interface Figure {
  name: string;
  role: string;
  span: string;
  body: string;
  isFeatured?: boolean;
}

export const FIGURES: Figure[] = [
  { name: 'Paul Fortin', role: 'Field Builder', span: '★ Patron · d. 2007', body: 'Eldest son of Albert Fortin, who founded Fortin Hardware in 1919. Paul built the Hamel field, recruited Dick Siebert\'s Gophers to play in it, and worked at the family store his entire life. The field bears his name.' },
  { name: 'Dick "The Chief" Siebert', role: 'Gophers Coach', span: '1948–1978', body: '11-year MLB veteran. 754 wins at the University of Minnesota. 12 Big Ten titles, three NCAA championships (1956, 1960, 1964). College Baseball Hall of Fame. Sent his players to Hamel each summer.' },
  { name: 'Johnny Blanchard', role: 'Manager', span: '★ Early 1980s', body: 'Five-time World Series participant with the New York Yankees. Caught the pitch Bill Mazeroski hit for the first-ever Series-ending home run in 1960. "I get to be Casey Stengel for two hours," he said of managing Hamel.' },
  { name: 'Sonny Hilyar', role: 'Manager', span: '1988–2002', body: 'Zimmerman native, personally recruited by Blanchard. Managed the Hawks for fifteen years — including the 1993 national championship and 1997 state title. Hamel Hall of Fame, 2017.' },
  { name: 'Rod Enerson', role: 'P · 1987 starter', span: 'North Dakota legend', body: 'A 1974 North Dakota state champion with Hatton. Brought over from Long Lake in 1985, became the Hawks\' No. 1 starter — and started the Class B State Championship game in 1987.' },
  { name: 'Tom Steinbach', role: 'OF', span: 'Championship era', body: 'All-Big Ten outfielder at the U of M. Older brother of Oakland A\'s All-Star Terry Steinbach. Hit 18 home runs in a single season for Hamel.' },
  { name: 'Tim McIntosh', role: 'C · MLB ALUM', span: '★ 1990–1996 MLB', body: '1983 Hopkins grad. U of M alum. Third-round Brewers pick in 1986. MLB debut September 3, 1990. Played five MLB seasons across the Brewers, Expos, and Yankees. Hawks teammate during the championship era.' },
  { name: 'Tim Flemming', role: 'Mr. Baseball', span: '★ 1979–2024 · 45 years', body: 'Bat boy at age 8 or 9. Leadoff hitter for 20 years. Infielder on all three championship teams. Manager 2003–2024. Played or managed in 17 state tournaments. "The Hawks were my life for 45 years."', isFeatured: true },
  { name: 'Joey Gerber', role: 'P · MLB ALUM', span: '★ Mariners, Mets', body: 'Maple Grove native. Pitched for the Hawks in the summer of 2016 after his freshman year at Illinois. MLB debut August 4, 2020 with the Seattle Mariners. "A lot can happen in four years."' },
  { name: 'Greg DeVos', role: 'General Manager', span: 'Modern revival', body: 'President of the Hamel Lions Club. Overseeing the field-improvement campaign since 2023 — lights, video scoreboard, grandstand, new infield. The architect of the modern Fortin Field.' },
  { name: 'Jeff Ruhr', role: 'Field Manager', span: '2025–', body: 'Took over as field manager beginning in 2025 — the same year the Hawks joined the North Star League as a Class B team. Leading the team into its centennial season.' },
];
