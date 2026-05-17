export interface Product {
  id: number;
  tag: string;
  name: string;
  price: number;
  desc: string;
  limited?: boolean;
}

export const PRODUCTS: Product[] = [
  { id: 1, tag: 'Centennial', name: 'The 1926 Throwback Jersey', price: 89, desc: 'Replica of our 1926 uniform — cream wool, navy script.', limited: true },
  { id: 2, tag: 'Centennial', name: 'Centennial Patch Cap', price: 34, desc: 'Navy crown, gold 100-year patch above the brim.' },
  { id: 3, tag: 'Apparel', name: 'Hawks Logo Tee', price: 26, desc: 'Heavyweight cotton. Logo on the chest, est. 1926 on the back.' },
  { id: 4, tag: 'Apparel', name: 'Fortin Field Hoodie', price: 54, desc: 'Heather navy with the diamond schematic on the back.' },
  { id: 5, tag: 'Centennial', name: '100-Year Commemorative Pennant', price: 24, desc: 'Felt pennant, gold stitching. Numbered edition of 500.', limited: true },
  { id: 6, tag: 'Apparel', name: 'Old-Timers Day Tee', price: 28, desc: 'Soft-washed cream. "Hawks Forever" across the chest.' },
  { id: 7, tag: 'Accessories', name: 'Hamel Hawks Pin Set', price: 18, desc: 'Three enamel pins — 1926 logo, centennial mark, hawk badge.' },
  { id: 8, tag: 'Apparel', name: 'Class B Coaches Pullover', price: 68, desc: 'Quarter-zip, navy with gold piping.' },
];
