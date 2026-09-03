import mojito from "@/assets/flavor-mojito.jpg";
import pina from "@/assets/flavor-pina.jpg";
import strawberry from "@/assets/flavor-strawberry.jpg";
import mystery from "@/assets/mystery-box.jpg";

export type Product = {
  slug: string;
  name: string;
  kind: "single" | "bundle" | "mystery";
  price: number;
  compareAt?: number;
  units: number;
  image: string;
  tint: "lime" | "pineapple" | "berry" | "gold";
  short: string;
  rating: number;
  reviews: number;
  copy: { bold: string; rest: string }[];
  nutrition: {
    abv: string;
    volume: string;
    servings: string;
    energy: string;
    sugar: string;
    ingredients: string;
    allergens: string;
  };
};

const baseNutrition = (spirit: string, extra: string) => ({
  abv: "10% ABV",
  volume: "100 ml per pop",
  servings: "1 serving per pop · 0.8 standard units of alcohol",
  energy: "412 kJ / 98 kcal per 100 ml",
  sugar: "11.4 g sugars per 100 ml",
  ingredients: `Water, cane sugar, ${spirit}, ${extra}, citric acid, natural flavouring, stabiliser (locust bean gum).`,
  allergens: "No declared allergens. Produced in a facility that also handles dairy.",
});

export const products: Product[] = [
  {
    slug: "mojito",
    name: "Mojito",
    kind: "single",
    price: 2.99,
    units: 1,
    image: mojito,
    tint: "lime",
    short: "White rum, lime, garden mint.",
    rating: 5,
    reviews: 218,
    copy: [
      { bold: "Sharp lime, real mint.", rest: " Cold-pressed juice, never syrup-flat." },
      { bold: "Melts slow, sips clean.", rest: " No sticky finish on your fingers or your evening." },
      { bold: "10% ABV, one honest serving.", rest: " You always know exactly what you drank." },
      { bold: "Built for heat.", rest: " Straight from the freezer to the pool edge, the pier, or the queue at the stage." },
      { bold: "The chaser is already in it.", rest: " Cold enough that the rum never bites." },
    ],
    nutrition: baseNutrition("white rum", "lime juice concentrate, mint extract"),
  },
  {
    slug: "pina-colada",
    name: "Piña Colada",
    kind: "single",
    price: 2.99,
    units: 1,
    image: pina,
    tint: "pineapple",
    short: "Aged rum, pineapple, coconut cream.",
    rating: 5,
    reviews: 174,
    copy: [
      { bold: "Creamy, not heavy.", rest: " Coconut rounds the edges, pineapple keeps it bright." },
      { bold: "Tropical without the blender.", rest: " No ice, no mess, no bartender." },
      { bold: "10% ABV, one honest serving.", rest: " Holiday energy in a 100 ml tube." },
      { bold: "Freezer-stable for months.", rest: " Stock up in June, still perfect in September." },
      { bold: "The crowd-pleaser.", rest: " The one that disappears first from every cooler." },
    ],
    nutrition: baseNutrition("aged rum", "pineapple juice concentrate, coconut cream"),
  },
  {
    slug: "strawberry-daiquiri",
    name: "Strawberry Daiquiri",
    kind: "single",
    price: 2.99,
    units: 1,
    image: strawberry,
    tint: "berry",
    short: "Rum, ripe strawberry, fresh lime.",
    rating: 5,
    reviews: 263,
    copy: [
      { bold: "Real fruit, not candy.", rest: " Ripe strawberry with a lime backbone that cuts the sweetness." },
      { bold: "The photogenic one.", rest: " Deep red, frosted, and everywhere on your feed by midnight." },
      { bold: "10% ABV, one honest serving.", rest: " Same strength as the glass version, half the fuss." },
      { bold: "Perfectly portioned.", rest: " One pop, one cocktail, no half-finished glasses." },
      { bold: "Our bestseller.", rest: " If you only try one, make it this one." },
    ],
    nutrition: baseNutrition("white rum", "strawberry purée, lime juice concentrate"),
  },
  {
    slug: "trio-pack",
    name: "The Trio — 3 Pack",
    kind: "bundle",
    price: 7.99,
    compareAt: 8.97,
    units: 3,
    image: mojito,
    tint: "lime",
    short: "One of each flavour. The starter kit.",
    rating: 5,
    reviews: 141,
    copy: [
      { bold: "One of each.", rest: " Mojito, Piña Colada, Strawberry Daiquiri — settle the argument yourself." },
      { bold: "Save 11%.", rest: " Cheaper than buying three singles." },
      { bold: "Fits any freezer.", rest: " Flat sleeve, no wasted space next to the peas." },
    ],
    nutrition: baseNutrition("rum", "fruit juice concentrates"),
  },
  {
    slug: "six-pack",
    name: "Poolside Six",
    kind: "bundle",
    price: 14.99,
    compareAt: 17.94,
    units: 6,
    image: pina,
    tint: "pineapple",
    short: "Six pops, mixed flavours. Save 16%.",
    rating: 5,
    reviews: 96,
    copy: [
      { bold: "Two of each flavour.", rest: " Balanced so nobody fights over the last strawberry." },
      { bold: "Save 16%.", rest: " Under €2.50 a cocktail." },
      { bold: "Party-sized, apartment-friendly.", rest: " Six cocktails that take up less room than one bottle." },
    ],
    nutrition: baseNutrition("rum", "fruit juice concentrates"),
  },
  {
    slug: "twelve-pack",
    name: "Backyard Twelve",
    kind: "bundle",
    price: 27.99,
    compareAt: 35.88,
    units: 12,
    image: strawberry,
    tint: "berry",
    short: "Twelve pops for the whole garden. Save 22%.",
    rating: 5,
    reviews: 63,
    copy: [
      { bold: "Twelve cocktails, one box.", rest: " Four of each flavour, ready to hand out." },
      { bold: "Save 22%.", rest: " €2.33 per cocktail — cheaper than any terrace in Riga." },
      { bold: "Ships in an insulated liner.", rest: " Arrives frozen, goes straight in the freezer." },
    ],
    nutrition: baseNutrition("rum", "fruit juice concentrates"),
  },
  {
    slug: "twentyfour-pack",
    name: "Party Harder 24",
    kind: "bundle",
    price: 51.99,
    compareAt: 71.76,
    units: 24,
    image: mojito,
    tint: "gold",
    short: "Our biggest box. Save 28%.",
    rating: 5,
    reviews: 38,
    copy: [
      { bold: "Twenty-four cocktails.", rest: " Eight of each flavour. Enough for the whole cohort." },
      { bold: "Save 28%.", rest: " Our lowest price per pop, at €2.17." },
      { bold: "Free shipping across Latvia.", rest: " Insulated, frozen, delivered." },
    ],
    nutrition: baseNutrition("rum", "fruit juice concentrates"),
  },
  {
    slug: "mystery-box",
    name: "Mystery Box — Limited Edition",
    kind: "mystery",
    price: 16.99,
    compareAt: 23.92,
    units: 8,
    image: mystery,
    tint: "gold",
    short: "Eight pops. You find out when you open it.",
    rating: 5,
    reviews: 87,
    copy: [
      { bold: "Eight pops, zero spoilers.", rest: " The mix is decided the morning it ships." },
      { bold: "Test-kitchen flavours included.", rest: " Some boxes contain experiments that never reach the shop." },
      { bold: "Save 29%.", rest: " The cheapest way into the limited runs." },
      { bold: "Strictly limited.", rest: " Once a batch is gone, that combination never comes back." },
    ],
    nutrition: baseNutrition("rum", "assorted fruit juice concentrates"),
  },
];

export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const eur = (n: number) => `€${n.toFixed(2)}`;
