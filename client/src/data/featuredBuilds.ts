export type FeaturedBuild = {
  id: string;
  companyName: string;
  location: string;
  projectTitle: string;
  toolsUsed: string[]; // product IDs
  shortDescription: string;
  badge?: string;
  websitePlaceholder?: string;
  views: number;
};

export const featuredBuilds: FeaturedBuild[] = [
  {
    id: "fb-001",
    companyName: "Gulf Coast Ironworks",
    location: "Houston, TX",
    projectTitle: "Refinery Pipe Rack Expansion",
    toolsUsed: ["md-el-001", "sh-sr-001", "sh-tp-001"],
    shortDescription: "32-bay pipe rack extension for a major Pasadena refinery. 1,800 holes drilled and reamed in 6 weeks using Elite 50 mag drills and SITEH3RO reamers.",
    badge: "Most Viewed This Month",
    websitePlaceholder: "https://example.com/gulf-coast-ironworks",
    views: 342,
  },
  {
    id: "fb-002",
    companyName: "Panhandle Steel Erectors",
    location: "Amarillo, TX",
    projectTitle: "Wind Farm Substation Steel",
    toolsUsed: ["md-pr-001", "sh-kt-001"],
    shortDescription: "Structural steel for a 200MW wind farm substation. The 3-piece SITEH3RO kit kept the crew moving fast on bolt hole alignment across 48 columns.",
    badge: "Bridge Work Standout",
    views: 287,
  },
  {
    id: "fb-003",
    companyName: "Lone Star Structural",
    location: "Dallas-Fort Worth, TX",
    projectTitle: "I-35E Overpass Widening",
    toolsUsed: ["md-el-002", "sh-cr-001", "sh-sr-001"],
    shortDescription: "TxDOT bridge widening project on I-35E. SITEH3RO car reamers aligned hundreds of splice connections on steel girders at height.",
    badge: "Infrastructure Hero",
    views: 415,
  },
  {
    id: "fb-004",
    companyName: "RGV Fabrication Co.",
    location: "McAllen, TX",
    projectTitle: "Custom Processing Plant Frame",
    toolsUsed: ["md-cm-001", "sh-sd-001"],
    shortDescription: "Full structural frame for a citrus processing facility. The Commando 40 proved you don't need the top-shelf drill for quality shop work.",
    views: 198,
  },
  {
    id: "fb-005",
    companyName: "Alamo City Maintenance",
    location: "San Antonio, TX",
    projectTitle: "Military Base Hangar Retrofit",
    toolsUsed: ["md-el-001", "sh-kt-002"],
    shortDescription: "Retrofitting three aircraft hangars with new connection points. The Ultimate Kit handled every hole-making task from drilling to threading.",
    badge: "Crew Favorite",
    views: 523,
  },
  {
    id: "fb-006",
    companyName: "Hill Country Welding",
    location: "Fredericksburg, TX",
    projectTitle: "Hill Country Ranch Entrance Gate",
    toolsUsed: ["sh-sd-001", "sh-tp-001"],
    shortDescription: "Custom 24-foot ranch entrance gate with forged steel details. SITEH3RO step drills and taps made quick work of the decorative connection points.",
    views: 156,
  },
  {
    id: "fb-007",
    companyName: "Permian Basin Services",
    location: "Midland-Odessa, TX",
    projectTitle: "Tank Battery Platform",
    toolsUsed: ["md-pr-002", "sh-sr-002"],
    shortDescription: "Access platforms for a new tank battery. The Pro 35 was light enough to carry up ladders and powerful enough to drill through 3/8\" plate all day.",
    badge: "Best Value Build",
    views: 231,
  },
  {
    id: "fb-008",
    companyName: "East Texas Steel Co.",
    location: "Tyler, TX",
    projectTitle: "Warehouse Mezzanine System",
    toolsUsed: ["md-cm-002", "sh-kt-001", "sh-cr-001"],
    shortDescription: "4,000 sq ft mezzanine in an existing warehouse. Commando 35 and SITEH3RO kit handled every connection point — fast install, zero rework.",
    views: 189,
  },
];
