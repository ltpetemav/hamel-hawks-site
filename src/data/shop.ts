// Centennial-edition products published on the official Hawks shop at
// hamelhawks.com/shop. Names sourced 2026-05-17; prices and live links
// available on the source page. We don't carry our own cart here — the
// shop page on the centennial site redirects to the real store.
export interface ShopHighlight {
  name: string;
  category: 'Centennial' | 'Apparel' | 'Headwear';
}

export const SHOP_HIGHLIGHTS: ShopHighlight[] = [
  { name: '100-year anniversary tee',                category: 'Centennial' },
  { name: '100-year anniversary tee — youth',        category: 'Centennial' },
  { name: '100-year anniversary youth hoodie',       category: 'Centennial' },
  { name: '100-year anniversary youth performance shirt', category: 'Centennial' },
  { name: 'Hamel T-Shirt',                           category: 'Apparel' },
  { name: 'Hamel hoodie',                            category: 'Apparel' },
  { name: 'Hawks hoodie',                            category: 'Apparel' },
  { name: 'Hamel Champion jacket',                   category: 'Apparel' },
  { name: 'Hamel tank top',                          category: 'Apparel' },
  { name: 'Hamel dad hat',                           category: 'Headwear' },
  { name: 'Hamel snapback',                          category: 'Headwear' },
  { name: 'Hawks snapback',                          category: 'Headwear' },
];
