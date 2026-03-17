export type Category = "siteh3ro" | "magnetic-drill";

export type Subcategory =
  | "step-reamer"
  | "step-drill"
  | "car-reamer"
  | "tap"
  | "kit"
  | "elite-magnetic-drill"
  | "pro-magnetic-drill"
  | "budget-magnetic-drill";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  subcategory?: Subcategory;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  videoPlaceholderUrl?: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  idealFor?: string[];
};

export const products: Product[] = [
  // ── SITEH3RO TOOLS ──────────────────────────────
  {
    id: "sh-sr-001",
    slug: "siteh3ro-step-reamer-8-20mm",
    name: "SITEH3RO Step Reamer 8–20mm",
    category: "siteh3ro",
    subcategory: "step-reamer",
    shortDescription: "Impact-ready step reamer covering 8mm to 20mm in a single tool.",
    longDescription: "The SITEH3RO Step Reamer 8–20mm is built for impact wrenches and drills alike. Its proprietary SITEH3RO coating delivers up to 75% longer tool life compared to standard HSS reamers. Each step is precision-ground to match common bolt sizes used in structural steel, bridge work, and plant maintenance. One tool replaces a drawer full of individual reamers.",
    keyFeatures: [
      "SITEH3RO coating — up to 75% longer life",
      "Impact-wrench compatible (6.35mm hex shank)",
      "Covers 8mm to 20mm in single tool",
      "Precision-ground steps for common bolt sizes",
      "Ideal for on-site steel and plate work",
    ],
    specs: {
      "Size Range": "8–20mm",
      "Steps": "9",
      "Shank": "6.35mm hex",
      "Coating": "SITEH3RO",
      "Material": "M2 HSS",
      "Weight": "145g",
    },
    price: 64.99,
    imageUrl: "/images/products/siteh3ro-step-reamer.png",
    videoPlaceholderUrl: "/videos/siteh3ro-step-reamer-8-20-demo.mp4",
    isFeatured: true,
    isBestSeller: true,
    idealFor: ["Bridge work", "Structural steel", "Plant maintenance", "Metal fabrication"],
  },
  {
    id: "sh-sr-002",
    slug: "siteh3ro-step-reamer-4-12mm",
    name: "SITEH3RO Step Reamer 4–12mm",
    category: "siteh3ro",
    subcategory: "step-reamer",
    shortDescription: "Compact step reamer for smaller bolt sizes, impact-wrench ready.",
    longDescription: "Purpose-built for smaller fastener holes in sheet metal, enclosures, and light structural work. The SITEH3RO coating means you won't be swapping tools mid-job. Hex shank locks into any impact driver for fast, clean hole enlargement.",
    keyFeatures: [
      "SITEH3RO coating — 75% longer tool life",
      "Impact-wrench compatible",
      "Covers 4mm to 12mm",
      "Clean, burr-free cuts",
      "Compact design for tight spaces",
    ],
    specs: {
      "Size Range": "4–12mm",
      "Steps": "7",
      "Shank": "6.35mm hex",
      "Coating": "SITEH3RO",
      "Material": "M2 HSS",
      "Weight": "95g",
    },
    price: 44.99,
    imageUrl: "/images/products/siteh3ro-step-reamer.png",
    videoPlaceholderUrl: "/videos/siteh3ro-step-reamer-4-12-demo.mp4",
    idealFor: ["Sheet metal", "Enclosures", "HVAC ductwork", "Light structural"],
  },
  {
    id: "sh-sd-001",
    slug: "siteh3ro-step-drill-6-30mm",
    name: "SITEH3RO Step Drill 6–30mm",
    category: "siteh3ro",
    subcategory: "step-drill",
    shortDescription: "Large-range step drill for impact wrenches — cuts clean holes up to 30mm.",
    longDescription: "When you need to drill and size holes in one pass, the SITEH3RO Step Drill 6–30mm handles it. Designed for use with impact wrenches on structural steel, this drill features the signature SITEH3RO coating for extended life under heavy use. Each step is laser-marked for easy size identification on the jobsite.",
    keyFeatures: [
      "SITEH3RO coating for extreme durability",
      "Impact-wrench compatible hex shank",
      "6mm to 30mm in 13 steps",
      "Laser-marked sizes for jobsite readability",
      "Split-point tip for accurate starts",
    ],
    specs: {
      "Size Range": "6–30mm",
      "Steps": "13",
      "Shank": "9.5mm hex",
      "Coating": "SITEH3RO",
      "Material": "M2 HSS",
      "Weight": "210g",
    },
    price: 79.99,
    imageUrl: "/images/products/siteh3ro-step-drill.png",
    videoPlaceholderUrl: "/videos/siteh3ro-step-drill-6-30-demo.mp4",
    isFeatured: true,
    idealFor: ["Structural steel", "Construction", "Metal plate work", "Ironwork"],
  },
  {
    id: "sh-cr-001",
    slug: "siteh3ro-car-reamer-12mm",
    name: "SITEH3RO Car Reamer 12mm",
    category: "siteh3ro",
    subcategory: "car-reamer",
    shortDescription: "Precision car reamer for aligning and expanding bolt holes in steel connections.",
    longDescription: "The SITEH3RO Car Reamer is the tool steel erectors reach for when bolt holes don't quite line up. This 12mm reamer cleans, aligns, and expands holes in structural connections. The SITEH3RO coating lets you ream dozens of holes before showing wear. Use with an impact wrench for fast work at height.",
    keyFeatures: [
      "Designed for hole alignment in steel erection",
      "SITEH3RO coating — 75% longer life",
      "Impact wrench compatible",
      "Tapered entry for easy engagement",
      "Hardened for structural steel",
    ],
    specs: {
      "Diameter": "12mm",
      "Shank": "6.35mm hex",
      "Coating": "SITEH3RO",
      "Material": "M2 HSS",
      "Length": "105mm",
      "Weight": "85g",
    },
    price: 39.99,
    imageUrl: "/images/products/siteh3ro-car-reamer.jpg",
    videoPlaceholderUrl: "/videos/siteh3ro-car-reamer-demo.mp4",
    idealFor: ["Steel erection", "Bridge connections", "Structural bolting", "Alignment work"],
  },
  {
    id: "sh-tp-001",
    slug: "siteh3ro-tap-m12",
    name: "SITEH3RO Tap M12 x 1.75",
    category: "siteh3ro",
    subcategory: "tap",
    shortDescription: "Impact-ready M12 tap for threading holes directly on the jobsite.",
    longDescription: "Thread holes in structural steel without a bench setup. The SITEH3RO M12 Tap features a hex shank for impact wrenches and the proprietary coating that resists heat and wear far longer than standard HSS taps. Ideal for adding threaded connections on-site during construction and maintenance.",
    keyFeatures: [
      "Impact-wrench compatible threading",
      "SITEH3RO coating for heat resistance",
      "M12 x 1.75mm thread pitch",
      "Spiral flute for chip evacuation",
      "No bench or tap handle needed",
    ],
    specs: {
      "Thread": "M12 x 1.75",
      "Shank": "6.35mm hex",
      "Coating": "SITEH3RO",
      "Material": "HSS-E (cobalt)",
      "Flute": "Spiral",
      "Weight": "75g",
    },
    price: 34.99,
    imageUrl: "/images/products/siteh3ro-tap.png",
    videoPlaceholderUrl: "/videos/siteh3ro-tap-m12-demo.mp4",
    idealFor: ["On-site threading", "Structural maintenance", "Equipment repair", "Plant work"],
  },
  {
    id: "sh-kt-001",
    slug: "siteh3ro-3-piece-step-reamer-kit",
    name: "SITEH3RO 3-Piece Step Reamer Kit",
    category: "siteh3ro",
    subcategory: "kit",
    shortDescription: "Three step reamers covering 4–30mm — the core reaming kit for any crew.",
    longDescription: "This 3-piece kit covers the full range of common bolt sizes from 4mm to 30mm. All three reamers feature the SITEH3RO coating and hex shanks for impact wrenches. Comes in a rugged carrying case that fits in a tool bag. This is the kit steel crews keep in the gang box.",
    keyFeatures: [
      "3 step reamers: 4–12mm, 8–20mm, 16–30mm",
      "Full SITEH3RO coating on all tools",
      "Impact-wrench compatible hex shanks",
      "Rugged carrying case included",
      "Covers virtually all common bolt sizes",
    ],
    specs: {
      "Pieces": "3",
      "Range": "4–30mm combined",
      "Shanks": "6.35mm & 9.5mm hex",
      "Coating": "SITEH3RO",
      "Case": "Molded polymer",
      "Total Weight": "480g",
    },
    price: 149.99,
    compareAtPrice: 174.97,
    imageUrl: "/images/products/siteh3ro-step-reamer-kit.png",
    videoPlaceholderUrl: "/videos/siteh3ro-3pc-kit-demo.mp4",
    isFeatured: true,
    isBestSeller: true,
    idealFor: ["Steel erection crews", "Bridge work", "Plant maintenance", "General construction"],
  },
  {
    id: "sh-kt-002",
    slug: "siteh3ro-ultimate-kit",
    name: "SITEH3RO Ultimate Kit",
    category: "siteh3ro",
    subcategory: "kit",
    shortDescription: "The complete SITEH3RO system — drill, ream, thread, and align holes in steel.",
    longDescription: "Everything a steel crew needs in one case. The Ultimate Kit includes step drills, step reamers, car reamers, and taps — all with SITEH3RO coating and impact-wrench compatibility. Covers drilling, threading, aligning, and expanding holes in metal. This is the flagship set for crews who want one kit that handles every hole-making task on structural steel.",
    keyFeatures: [
      "Complete system: drill, ream, thread, align",
      "All tools SITEH3RO-coated for 75% longer life",
      "Impact-wrench ready across the board",
      "Heavy-duty case with labeled slots",
      "Covers common bolt sizes M6–M20",
    ],
    specs: {
      "Pieces": "12",
      "Includes": "Step drills, step reamers, car reamers, taps",
      "Range": "4–30mm (drilling/reaming), M6–M20 (threading)",
      "Coating": "SITEH3RO on all tools",
      "Case": "Heavy-duty molded",
      "Total Weight": "1.8kg",
    },
    price: 349.99,
    compareAtPrice: 429.00,
    imageUrl: "/images/products/siteh3ro-ultimate-kit.png",
    videoPlaceholderUrl: "/videos/siteh3ro-ultimate-kit-demo.mp4",
    isFeatured: true,
    idealFor: ["Steel erection", "Bridge construction", "Refinery maintenance", "Fabrication shops"],
  },
  {
    id: "sh-sd-002",
    slug: "siteh3ro-step-drill-4-20mm",
    name: "SITEH3RO Step Drill 4–20mm",
    category: "siteh3ro",
    subcategory: "step-drill",
    shortDescription: "Mid-range step drill for everyday steel and sheet-metal drilling.",
    longDescription: "A versatile step drill that handles common hole sizes from 4mm to 20mm. The SITEH3RO coating keeps the cutting edges sharp through extended use on mild steel, stainless, and aluminum. Split-point tip prevents walking on flat surfaces.",
    keyFeatures: [
      "SITEH3RO coating",
      "Impact-wrench compatible",
      "4mm to 20mm in 9 steps",
      "Split-point tip",
      "Works on steel, stainless, aluminum",
    ],
    specs: {
      "Size Range": "4–20mm",
      "Steps": "9",
      "Shank": "6.35mm hex",
      "Coating": "SITEH3RO",
      "Material": "M2 HSS",
      "Weight": "155g",
    },
    price: 54.99,
    imageUrl: "/images/products/siteh3ro-step-drill.png",
    idealFor: ["Sheet metal", "Structural steel", "Maintenance", "General metalwork"],
  },

  // ── MAGNETIC DRILLS ──────────────────────────────
  {
    id: "md-el-001",
    slug: "unibor-elite-50",
    name: "Unibor Elite 50 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "elite-magnetic-drill",
    shortDescription: "Flagship 50mm mag drill with Smart Controls, DrillSmart, and LiftShield technology.",
    longDescription: "The Elite 50 is Unibor's flagship magnetic drill, designed in Sheffield, England for the most demanding structural steel and fabrication work. It features Smart Controls for automatic feed optimization, DrillSmart technology that monitors drill load in real time, and LiftShield magnet safety that prevents accidental release under load. A 1500W motor handles annular cutters up to 50mm with ease.",
    keyFeatures: [
      "Smart Controls — automatic feed optimization",
      "DrillSmart — real-time drill load monitoring",
      "LiftShield — magnet safety system",
      "1500W motor, 50mm max cutter capacity",
      "Designed in Sheffield, England",
    ],
    specs: {
      "Max Cutter Diameter": "50mm",
      "Max Depth of Cut": "50mm",
      "Motor": "1500W",
      "Magnet Force": "16,000N",
      "Spindle Travel": "210mm",
      "Weight": "16.5kg",
      "Voltage": "110V / 240V",
    },
    price: 1299.99,
    imageUrl: "/images/products/magdrill-e5000-auto.png",
    videoPlaceholderUrl: "/videos/elite-50-demo.mp4",
    isFeatured: true,
    isBestSeller: true,
    idealFor: ["Structural steel erection", "Heavy fabrication", "Shipbuilding", "Bridge construction"],
  },
  {
    id: "md-el-002",
    slug: "unibor-elite-35",
    name: "Unibor Elite 35 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "elite-magnetic-drill",
    shortDescription: "Compact Elite-series mag drill for 35mm capacity with full smart features.",
    longDescription: "All the Elite-series technology in a lighter package. The Elite 35 brings Smart Controls, DrillSmart, and LiftShield to a 35mm capacity drill that's easier to maneuver overhead and in tight spaces. A 1200W motor delivers smooth, controlled cutting through structural steel.",
    keyFeatures: [
      "Smart Controls and DrillSmart technology",
      "LiftShield magnet safety",
      "1200W motor, 35mm max capacity",
      "Lightweight for overhead work",
      "Sheffield-designed engineering",
    ],
    specs: {
      "Max Cutter Diameter": "35mm",
      "Max Depth of Cut": "50mm",
      "Motor": "1200W",
      "Magnet Force": "14,000N",
      "Spindle Travel": "180mm",
      "Weight": "13.2kg",
      "Voltage": "110V / 240V",
    },
    price: 999.99,
    imageUrl: "/images/products/magdrill-e3000.png",
    videoPlaceholderUrl: "/videos/elite-35-demo.mp4",
    isFeatured: true,
    idealFor: ["Structural steel", "Overhead work", "Fabrication", "Maintenance shutdowns"],
  },
  {
    id: "md-pr-001",
    slug: "unibor-pro-50",
    name: "Unibor Professional 50 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "pro-magnetic-drill",
    shortDescription: "Professional-grade 50mm mag drill — reliable workhorse for daily use.",
    longDescription: "The Professional 50 is built for crews that drill holes every day. A 1400W motor powers annular cutters up to 50mm diameter. The integrated coolant system and variable speed control give you clean, consistent holes in structural steel. No-fuss setup, solid magnet, and proven reliability.",
    keyFeatures: [
      "1400W motor, 50mm capacity",
      "Variable speed control",
      "Integrated coolant system",
      "Strong permanent magnet",
      "Built for daily production use",
    ],
    specs: {
      "Max Cutter Diameter": "50mm",
      "Max Depth of Cut": "50mm",
      "Motor": "1400W",
      "Magnet Force": "14,000N",
      "Spindle Travel": "200mm",
      "Weight": "15.8kg",
      "Voltage": "110V / 240V",
    },
    price: 899.99,
    imageUrl: "/images/products/magdrill-e6000.png",
    videoPlaceholderUrl: "/videos/pro-50-demo.mp4",
    idealFor: ["Steel fabrication", "Construction", "Maintenance", "Production drilling"],
  },
  {
    id: "md-pr-002",
    slug: "unibor-pro-35",
    name: "Unibor Professional 35 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "pro-magnetic-drill",
    shortDescription: "Mid-size professional mag drill — 35mm capacity, variable speed.",
    longDescription: "A solid mid-range mag drill for professional use. The Pro 35 balances power with portability — the 1100W motor handles most structural drilling tasks while staying light enough for extended overhead use. Variable speed and coolant system are standard.",
    keyFeatures: [
      "1100W motor, 35mm capacity",
      "Variable speed control",
      "Integrated coolant system",
      "Compact and portable",
      "Professional-grade reliability",
    ],
    specs: {
      "Max Cutter Diameter": "35mm",
      "Max Depth of Cut": "50mm",
      "Motor": "1100W",
      "Magnet Force": "12,000N",
      "Spindle Travel": "180mm",
      "Weight": "12.5kg",
      "Voltage": "110V / 240V",
    },
    price: 749.99,
    imageUrl: "/images/products/magdrill-e4000.png",
    idealFor: ["Fabrication shops", "On-site drilling", "Maintenance", "Steel construction"],
  },
  {
    id: "md-cm-001",
    slug: "unibor-commando-40",
    name: "Unibor Commando 40 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "budget-magnetic-drill",
    shortDescription: "Budget-friendly 40mm mag drill — great entry point for smaller crews.",
    longDescription: "The Commando 40 brings Unibor quality to a budget-friendly price point. A 1050W motor and 40mm cutter capacity handle most common drilling tasks. It won't have the smart features of the Elite line, but the Sheffield design DNA is there — reliable magnet, smooth feed, and solid build quality.",
    keyFeatures: [
      "Budget-friendly Unibor quality",
      "1050W motor, 40mm capacity",
      "Reliable magnet adhesion",
      "Simple, rugged controls",
      "Sheffield design DNA",
    ],
    specs: {
      "Max Cutter Diameter": "40mm",
      "Max Depth of Cut": "40mm",
      "Motor": "1050W",
      "Magnet Force": "10,000N",
      "Spindle Travel": "160mm",
      "Weight": "11.8kg",
      "Voltage": "110V / 240V",
    },
    price: 549.99,
    imageUrl: "/images/products/magdrill-cmd400.png",
    videoPlaceholderUrl: "/videos/commando-40-demo.mp4",
    isBestSeller: true,
    idealFor: ["Small crews", "Occasional drilling", "Maintenance work", "Budget-conscious buyers"],
  },
  {
    id: "md-cm-002",
    slug: "unibor-commando-35",
    name: "Unibor Commando 35 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "budget-magnetic-drill",
    shortDescription: "Compact budget mag drill — lightest in the Commando range.",
    longDescription: "The lightest and most affordable Unibor magnetic drill. The Commando 35 is designed for maintenance crews and occasional users who still need reliable hole-making in steel. At under 10kg, it's easy to carry and position. Single-speed motor keeps it simple.",
    keyFeatures: [
      "Lightest Unibor mag drill",
      "900W motor, 35mm capacity",
      "Under 10kg for easy transport",
      "Simple single-speed operation",
      "Solid magnet for safe operation",
    ],
    specs: {
      "Max Cutter Diameter": "35mm",
      "Max Depth of Cut": "35mm",
      "Motor": "900W",
      "Magnet Force": "9,000N",
      "Spindle Travel": "150mm",
      "Weight": "9.8kg",
      "Voltage": "110V / 240V",
    },
    price: 429.99,
    imageUrl: "/images/products/magdrill-cmd350.png",
    idealFor: ["Maintenance crews", "Light-duty drilling", "Portable use", "Entry-level buyers"],
  },
  {
    id: "md-el-003",
    slug: "unibor-elite-75",
    name: "Unibor Elite 75 Magnetic Drill",
    category: "magnetic-drill",
    subcategory: "elite-magnetic-drill",
    shortDescription: "Heavy-duty 75mm Elite mag drill for large-diameter hole-making.",
    longDescription: "When 50mm isn't enough, the Elite 75 steps up. This heavy-duty mag drill powers annular cutters up to 75mm diameter, making it the choice for large bolt holes, pipe penetrations, and heavy structural connections. Full Smart Controls, DrillSmart, and LiftShield come standard. A 1800W motor and 22,000N magnet keep it locked down and cutting through the thickest steel.",
    keyFeatures: [
      "75mm max cutter capacity",
      "1800W motor for heavy cutting",
      "22,000N magnet force",
      "Full Smart Controls suite",
      "For heavy structural and industrial work",
    ],
    specs: {
      "Max Cutter Diameter": "75mm",
      "Max Depth of Cut": "75mm",
      "Motor": "1800W",
      "Magnet Force": "22,000N",
      "Spindle Travel": "250mm",
      "Weight": "22.5kg",
      "Voltage": "110V / 240V",
    },
    price: 1899.99,
    imageUrl: "/images/products/magdrill-e8000.png",
    videoPlaceholderUrl: "/videos/elite-75-demo.mp4",
    idealFor: ["Heavy structural steel", "Pipe penetrations", "Shipbuilding", "Large bolt connections"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}
