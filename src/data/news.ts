export interface RecentHeadline {
  title: string;
  href: string;
}

// Real recent headlines pulled from hamelhawks.com/news on 2026-05-17.
// Titles only — full article text lives on the source site to keep our
// page honest about where the news is actually published.
export const RECENT_HEADLINES: RecentHeadline[] = [
  { title: 'Hamel Opens 2026 Season with Late-Game Loss', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks Weekly Recap 6/30 — 7/6', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks Weekly Recap 6/23 — 6/29', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks Weekly Recap 6/16 — 6/22', href: 'https://www.hamelhawks.com/news' },
  { title: 'Zackrison, Wattermann, and Vanyo Named North Star League All-Stars', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks Weekly Recap 6/9 — 6/15', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks Weekly Recap 6/1 — 6/8', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks win 2025 season opener!', href: 'https://www.hamelhawks.com/news' },
  { title: 'Hamel Hawks open year-round team store!', href: 'https://www.hamelhawks.com/news' },
];
