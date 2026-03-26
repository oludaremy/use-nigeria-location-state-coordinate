/**
 * @package use-nigeria-locations-state-coordinates (Forked)
 * @original_author Muiz Haruna <hmuiyze@gmail.com>
 * @maintained_by Remilekun Dare Olowookere <oludaremy@gmail.com>
 * @description Enhanced version with Geo-spatial coordinates (Lat/Long) and optimized lookup logic.
 * @version 1.1.6
 */


import { TState, TStateCoordinates, TLGA, TStateInfo, TUniversity, TAirport } from "./types";
import { NigeriaLocations } from "./data/nigeria-locations";

/**
 * @function findSingleState
 * Internal helper to find a state by ID.
 * * @param {string} stateID - The location ID.
 * @returns {TStateInfo | undefined}
 */
/**
 * @function findSingleState
 * Internal helper to find a state by ID or Name.
 * @param {string} identifier - The location ID (UUID) or State Name.
 * @returns {TStateInfo | undefined}
 */
function findSingleState(identifier: string): TStateInfo | undefined {
  if (!identifier) return undefined;

  const query = identifier.toLowerCase().trim();

  return NigeriaLocations.find((loc) => {
    const s = loc.state;
    // Match by UUID OR by State Name (case-insensitive)
    return (
      s.id.toLowerCase() === query || 
      s.name.toLowerCase() === query
    );
  })?.state;
}

/**
 * @function useAllStatesInfo
 * Fetches all information from all states, including coordinates.
 * * @returns {TStateInfo[]} - Full data array.
 */
export function useAllStatesInfo(): TStateInfo[] {
  return NigeriaLocations.map((loc) => ({
    ...loc.state,
  }));
}

/**
 * @function useStateInfo
 * Fetches all information from a single state.
 * * @param {string} stateID - The location ID.
 * @returns {TStateInfo | string} - Full state data | Error Message.
 */
export function useStateInfo(stateID: string): TStateInfo | string {
  return findSingleState(stateID) ?? "Not Found!, Please check the ID or Name passed.";
}

/**
 * @function useAllStates
 * Fetch all states (Lite version).
 * * @returns {TState[]} - Name, ID and coordinates.
 */
export function useAllStates(): TState[] {
  return NigeriaLocations.map((loc) => ({
    name: loc.state.name,
    id: loc.state.id,
    latitude: loc.state.latitude, 
    longitude: loc.state.longitude
  }));
}


/**
 * @function useAllStatesCoordinates
 * Fetch all states with coordinates (Lite version).
 * * @returns {TStateCoordinates[]} - Name, ID and coordinates.
 */
export function useAllStatesCoordinates(): TStateCoordinates[] {
  return NigeriaLocations.map((loc): TStateCoordinates => ({
    name: loc.state.name,
    id: loc.state.id,
    latitude: loc.state.latitude,
    longitude: loc.state.longitude
  }));
}

/**
 * @function useSingleState
 * Fetches single state (Lite version) by ID or Name.
 * @param {string} identifier - The location ID or State Name.
 * @returns {TState | string} - Name, ID and coordinates | Error Message.
 */
export function useSingleState(identifier: string): TState | string {
  const state = findSingleState(identifier);
  
  return state 
    ? { 
        id: state.id, 
        name: state.name, 
        latitude: state.latitude, 
        longitude: state.longitude 
      } 
    : `State "${identifier}" not found. Please check the ID or Name passed.`;
}


/**
 * @function useStateCoordinates
 * Fetches latitude and longitude as an object.
 */
export function useStateCoordinates(stateID: string): { latitude: number; longitude: number } | string {
  const state = findSingleState(stateID);
  if (state) {
    return {
      latitude: state.latitude,
      longitude: state.longitude,
    };
  }
  return "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateLatitude
 * Fetches the latitude of a state.
 */
export function useStateLatitude(stateID: string): number | string {
  const state = findSingleState(stateID);
  return state?.latitude ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateLongitude
 * Fetches the longitude of a state.
 */
export function useStateLongitude(stateID: string): number | string {
  const state = findSingleState(stateID);
  return state?.longitude ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateCapital
 * Fetches capital of state.
 */
export function useStateCapital(stateID: string): string {
  return findSingleState(stateID)?.capital ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateLGAs
 * Fetches all LGAs in a state.
 */
export function useStateLGAs(stateID: string): TLGA[] | string {
  return findSingleState(stateID)?.lgas ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useSingleLGA
 * Fetches a single LGA from a state.
 */
export function useSingleLGA(stateID: string, LGAIdentifier: string): TLGA | string {
  const state = findSingleState(stateID);
  if (!state) return "Not Found!, Check the State ID/Name Passed.";

  const query = LGAIdentifier.toLowerCase().trim();
  
  // Look for LGA by ID or by Name
  const lga = state.lgas.find((l) => 
    l.id.toLowerCase() === query || 
    l.name.toLowerCase() === query
  );

  return lga ?? "Not Found!, Check the LGA ID/Name Passed.";
}

/**
 * @function useStateLandMass
 * Fetches land mass of a state.
 */
export function useStateLandMass(stateID: string): string {
  return findSingleState(stateID)?.land_mass ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateUnis
 * Fetches all Universities in a state.
 */
export function useStateUnis(stateID: string): TUniversity[] | string {
  return findSingleState(stateID)?.universities ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateAirports
 * Fetches all Airports in a state.
 */
export function useStateAirports(stateID: string): TAirport[] | string {
  return findSingleState(stateID)?.airports ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateGeoPoli
 * Fetches Geo-Political Zone of a state.
 */
export function useStateGeoPoli(stateID: string): string {
  return findSingleState(stateID)?.geopolitical_zone ?? "Not Found!, Check the ID Passed.";
}