import { title } from "process";

export const features = [
  {
    title: "Points of interest",
    key: "points-of-interest",
    items: [
      {
        title: "Emergency",
        key: "emergency",
        items: [
          { title: "Fire", key: "fire" },
          { title: "Hospital", key: "hospital" },
          { title: "Pharmacy", key: "pharmacy" },
          { title: "Police", key: "police" },
        ],
      },
      {
        title: "Entertainment",
        key: "entertainment",
        items: [
          { title: "Arts", key: "arts" },
          { title: "Casino", key: "casino" },
          { title: "Cinema", key: "cinema" },
          { title: "Historic", key: "historic" },
          { title: "Museum", key: "museum" },
          { title: "Theme park", key: "theme-park" },
          { title: "Tourist attraction", key: "tourist-attraction" },
        ],
      },
      {
        title: "Food and drink",
        key: "food-and-drink",
        items: [
          { title: "Bar", key: "bar" },
          { title: "Cafe", key: "cafe" },
          { title: "Restaurant", key: "restaurant" },
          { title: "Winery", key: "winery" },
        ],
      },
      {
        title: "Landmark",
        key: "landmark",
        items: [],
      },
      {
        title: "Lodging",
        key: "lodging",
        items: [],
      },
      {
        title: "Recreation",
        key: "recreation",
        items: [
          { title: "Beach", key: "beach" },
          { title: "Boating", key: "boating" },
          { title: "Fishing", key: "fishing" },
          { title: "Golf course", key: "golf-course" },
          { title: "Hot spring", key: "hot-spring" },
          { title: "Nature reserve", key: "nature-reserve" },
          { title: "Park", key: "park" },
          { title: "Peak", key: "peak" },
          { title: "Sports complex", key: "sports-complex" },
          { title: "Sports field", key: "sports-field" },
          { title: "Trailhead", key: "trailhead" },
          { title: "Zoo", key: "zoo" },
        ],
      },
      {
        title: "Retail",
        key: "retail",
        items: [
          { title: "Grocery", key: "grocery" },
          { title: "Shopping", key: "shopping" },
        ],
      },
      {
        title: "Services",
        key: "services",
        items: [
          { title: "ATM", key: "atm" },
          { title: "Bank", key: "bank" },
          { title: "Car rental", key: "car-rental" },
          { title: "EV charging", key: "ev-charging" },
          { title: "Gas station", key: "gas-station" },
          { title: "Parking lot", key: "parking-lot" },
          { title: "Post office", key: "post-office" },
          { title: "Rest stop", key: "rest-stop" },
          { title: "Restroom", key: "restroom" },
        ],
      },
      {
        title: "Transit",
        key: "transit",
        items: [{ title: "Airport", key: "airport" }],
      },
      {
        title: "Other",
        key: "other",
        items: [
          { title: "Bridge", key: "bridge" },
          { title: "Cemetery", key: "cemetery" },
          { title: "Government", key: "government" },
          { title: "Library", key: "library" },
          { title: "Military", key: "military" },
          { title: "Place of worship", key: "place-of-worship" },
          { title: "School", key: "school" },
          { title: "Town square", key: "town-square" },
        ],
      },
    ],
  },
  {
    title: "Political",
    key: "political",
    items: [
      { title: "Country", key: "country", items: [] },
      { title: "Country border", key: "country-border", items: [] },
      { title: "Reservation", key: "reservation", items: [] },
      { title: "State or province", key: "state-or-province", items: [] },
      { title: "City", key: "city", items: [] },
      { title: "Sublocality", key: "sublocality", items: [] },
      { title: "Neighborhood", key: "neighborhood", items: [] },
      { title: "Land parcel", key: "land-parcel", items: [] },
    ],
  },
  {
    title: "Infrastructure",
    key: "infrastructure",
    items: [
      {
        title: "Building",
        key: "building",
        items: [{ title: "Commercial", key: "commercial" }],
      },
      { title: "Business corridor", key: "business-corridor", items: [] },
      {
        title: "Road network",
        key: "road-network",
        items: [
          {
            title: "No traffic",
            key: "no-traffic",
            items: [
              { title: "Pedestrian mall", key: "pedestrian-mall" },
              { title: "Trail", key: "trail" },
            ],
          },
          {
            title: "Trail types",
            key: "trail-types",
            items: [
              { title: "Paved", key: "paved" },
              { title: "Unpaved", key: "unpaved" },
            ],
          },
          { title: "Parking aisle", key: "parking-aisle", items: [] },
          { title: "Ramp", key: "ramp", items: [] },
          { title: "Road shield", key: "road-shield", items: [] },
          { title: "Road sign", key: "road-sign", items: [] },
          {
            title: "Roads",
            key: "roads",
            items: [
              { title: "Arterial", key: "arterial" },
              { title: "Highway", key: "highway" },
              { title: "Local", key: "local" },
              { title: "No outlet", key: "no-outlet" },
            ],
          },
        ],
      },
      { title: "Railway track", key: "railway-track", items: [] },
      {
        title: "Transit station",
        key: "transit-station",
        items: [
          { title: "Bicycle share", key: "bicycle-share", items: [] },
          { title: "Bus station", key: "bus-station", items: [] },
          { title: "Ferry terminal", key: "ferry-terminal", items: [] },
          { title: "Funicular station", key: "funicular-station", items: [] },
          { title: "Gondola station", key: "gondola-station", items: [] },
          { title: "Monorail", key: "monorail", items: [] },
          {
            title: "Rail station",
            key: "rail-station",
            items: [
              { title: "Subway station", key: "subway-station" },
              { title: "Tram station", key: "tram-station" },
            ],
          },
        ],
      },
      { title: "Urban area", key: "urban-area", items: [] },
    ],
  },
  {
    title: "Natural",
    key: "natural",
    items: [
      { title: "Continent", key: "continent", items: [] },
      { title: "Archipelago", key: "archipelago", items: [] },
      { title: "Island", key: "island", items: [] },
      {
        title: "Land cover",
        key: "land-cover",
        items: [
          {
            title: "Vegetation",
            key: "vegetation",
            items: [
              { title: "Crops", key: "crops" },
              { title: "Dry crops", key: "dry-crops" },
              { title: "Forest", key: "forest" },
              { title: "Ice", key: "ice" },
              { title: "Sand", key: "sand" },
              { title: "Shrub", key: "shrub" },
              { title: "Tundra", key: "tundra" },
            ],
          },
        ],
      },
      {
        title: "Water",
        key: "water",
        items: [
          { title: "Ocean", key: "ocean" },
          { title: "Lake", key: "lake" },
          { title: "River", key: "river" },
          { title: "Other", key: "other" },
        ],
      },
      { title: "Background", key: "background", items: [] },
    ],
  },
] as const;

type Decrement = [never, 0, 1, 2, 3, 4, 5];
type ExtractFeatureKey<
  T extends { key: string; items: readonly any[] },
  D extends number = 5,
> = D extends 0
  ? never
  : T extends { items: [] }
    ? T["key"]
    :
        | T["key"]
        | `${T["key"]}.${ExtractFeatureKey<T["items"][number], Decrement[D]>}`;

type Feature = (typeof features)[number];

type FeatureKeyUnion = ExtractFeatureKey<Feature>;

export function getFeature(featureKey: FeatureKeyUnion) {
  if (!featureKey) return [];

  const [topKey, ...keys] = featureKey.split(".");

  const topFeature = features.find((feature) => feature.key === topKey);
  if (!topFeature) return [];

  if (keys.length === 0) return [topFeature.title];

  let titleArray: string[] = [topFeature.title];
  let currentFeature: { key: string; items: readonly any[] } = topFeature;

  for (const key of keys) {
    const feature = currentFeature.items.find((item) => item.key === key);
    if (!feature) {
      break;
    }
    titleArray.push(feature.title);
    currentFeature = feature;
  }

  return titleArray;
}

export function getHierarchy() {
  return [
    {
      legacy: "Administrative",
      new: getFeature("political"),
      details: [
        { legacy: "Country", new: getFeature("political.country") },
        { legacy: "Province", new: getFeature("political.state-or-province") },
        { legacy: "Locality", new: getFeature("political.city") },
        { legacy: "Neighborhood", new: getFeature("political.neighborhood") },
        { legacy: "Land Parcel", new: getFeature("political.land-parcel") },
      ],
    },
    {
      legacy: "Landscape",
      new: [getFeature("natural.land-cover"), getFeature("infrastructure")],
      details: [
        {
          legacy: "Commercial corridors",
          new: getFeature("infrastructure.business-corridor"),
        },
        { legacy: "Human-made", new: getFeature("infrastructure") },
        { legacy: "Buildings", new: getFeature("infrastructure.building") },
        { legacy: "Natural", new: getFeature("natural.land-cover") },
        { legacy: "Landcover", new: getFeature("natural.land-cover") },
        { legacy: "Terrain", new: null },
      ],
    },
    {
      legacy: "Points of interest",
      new: getFeature("points-of-interest"),
      details: [
        {
          legacy: "Attraction",
          new: [
            getFeature("points-of-interest.entertainment"),
            getFeature("points-of-interest.recreation"),
          ],
        },
        {
          legacy: "Business",
          new: [
            getFeature("points-of-interest.retail"),
            getFeature("points-of-interest.services"),
          ],
        },
        {
          legacy: "Shopping",
          new: getFeature("points-of-interest.retail.shopping"),
        },
        {
          legacy: "Food & drink",
          new: getFeature("points-of-interest.food-and-drink"),
        },
        {
          legacy: "Gas station",
          new: getFeature("points-of-interest.services.gas-station"),
        },
        {
          legacy: "Car rental",
          new: getFeature("points-of-interest.services.car-rental"),
        },
        { legacy: "Lodging", new: getFeature("points-of-interest.lodging") },
        {
          legacy: "Government",
          new: getFeature("points-of-interest.other.government"),
        },
        {
          legacy: "Medical",
          new: getFeature("points-of-interest.emergency.pharmacy"),
        },
        {
          legacy: "Park",
          new: getFeature("points-of-interest.recreation.park"),
        },
        {
          legacy: "Place of worship",
          new: getFeature("points-of-interest.other.place-of-worship"),
        },
        {
          legacy: "School",
          new: getFeature("points-of-interest.other.school"),
        },
        {
          legacy: "Sports complex",
          new: getFeature("points-of-interest.recreation.sports-complex"),
        },
      ],
    },
    {
      legacy: "Road",
      new: getFeature("infrastructure.road-network"),
      details: [
        {
          legacy: "Highway",
          new: getFeature("infrastructure.road-network.roads.highway"),
        },
        { legacy: "Controlled access", new: null },
        {
          legacy: "Arterial",
          new: getFeature("infrastructure.road-network.roads.arterial"),
        },
        {
          legacy: "Local",
          new: getFeature("infrastructure.road-network.roads.local"),
        },
        {
          legacy: "Drivable",
          new: getFeature("infrastructure.road-network.roads.local"),
        },
        {
          legacy: "Trail",
          new: getFeature("infrastructure.road-network.no-traffic.trail"),
        },
      ],
    },
    {
      legacy: "Transit",
      new: getFeature("infrastructure.transit-station"),
      details: [
        { legacy: "Line", new: getFeature("infrastructure.railway-track") },
        { legacy: "Rail", new: getFeature("infrastructure.railway-track") },
        {
          legacy: "Ferry",
          new: [
            "Car ferries styled with Road network",
            "Foot ferries styled with No Traffic",
          ],
        },
        { legacy: "Routes", new: null },
        {
          legacy: "Station",
          new: getFeature("infrastructure.transit-station"),
        },
        {
          legacy: "Airport",
          new: getFeature("points-of-interest.transit.airport"),
        },
        { legacy: "Bus", new: null },
        {
          legacy: "Rail",
          new: getFeature("infrastructure.transit-station.rail-station"),
        },
      ],
    },
    {
      legacy: "Water",
      new: getFeature("natural.water"),
    },
  ];
}
