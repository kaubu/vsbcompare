export enum Tier {
  BELOW_AVERAGE_HUMAN,      // 10-C
  HUMAN,                    // 10-B
  ATHLETE,                  // 10-A

  STREET,                   // 9-C
  WALL,                     // 9-B
  SMALL_BUILDING,           // 9-A

  BUILDING,                 // 8-C
  LARGE_BUILDING,           // High 8-C
  CITY_BLOCK,               // 8-B
  MULTI_CITY_BLOCK,         // 8-A

  SMALL_TOWN,               // Low 7-C
  TOWN,                     // 7-C
  LARGE_TOWN,               // High 7-C
  SMALL_CITY,               // Low 7-B
  CITY,                     // 7-B
  MOUNTAIN,                 // 7-A
  LARGE_MOUNTAIN,           // High 7-A

  ISLAND,                   // 6-C
  LARGE_ISLAND,             // High 6-C
  SMALL_COUNTRY,            // Low 6-B
  COUNTRY,                  // 6-B
  LARGE_COUNTRY,            // High 6-B
  CONTINENT,                // 6-A
  MULTI_CONTINENT,          // High 6-A

  MOON,                     // 5-C
  SMALL_PLANET,             // Low 5-B
  PLANET,                   // 5-B
  LARGE_PLANET,             // 5-A
  DWARF_STAR,               // High 5-A

  SMALL_STAR,               // Low 4-C
  STAR,                     // 4-C
  LARGE_STAR,               // High 4-C
  SOLAR_SYSTEM,             // 4-B
  MULTI_SOLAR_SYSTEM,       // 4-A

  GALAXY,                   // 3-C
  MULTI_GALAXY,             // 3-B
  UNIVERSE,                 // 3-A
  HIGH_UNIVERSE,            // High 3-A

  UNIVERSE_PLUS,            // Low 2-C
  LOW_MULTIVERSE,           // 2-C
  MULTIVERSE,               // 2-B
  MULTIVERSE_PLUS,          // 2-A

  LOW_COMPLEX_MULTIVERSE,   // Low 1-C
  COMPLEX_MULTIVERSE,       // 1-C
  HIGH_COMPLEX_MULTIVERSE,  // High 1-C
  HYPERVERSE,               // 1-B
  HIGH_HYPERVERSE,          // High 1-B
  LOW_OUTERVERSE,           // Low 1-A
  OUTERVERSE,               // 1-A

  BOUNDLESS,                // 0
};

enum GenderTypes {
  MALE,
  FEMALE,
  NON_BINARY,
  INAPPLICABLE,
  OTHER,
};

type Gender =
  | GenderTypes
  | {"gender": GenderTypes.OTHER, "type": string};

const PowerAbilityList = {
  "Absolute Zero"
}

type PAR = PowerAbility | Resistance;

/**
 * PAR – Powers, Abilities, and Resistances
 */
type PARTabs = Array<PAR>;

interface Key {
  keyName: string,
  tier: Tier,
  characterName: string,
  age: number,
  gender: Gender,
  classification: string,
  powers_and_abilities: PARTabs,
};

interface Character {
  entryName: string,
  summary: string,
  origin: string,
  keys: Array<Key>,
};
