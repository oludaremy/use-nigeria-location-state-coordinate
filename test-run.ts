import { useAllStates, useAllStatesCoordinates, useSingleState } from './src/index'; // Adjust path to your file

console.log("--- Testing All States with Coordinates ---");

const allStates = useAllStates();
console.log(JSON.stringify(allStates.slice(0, 2), null, 2)); 


const allStatesCoordinates = useAllStatesCoordinates();
console.log(JSON.stringify(allStates.slice(0, 2), null, 2)); // Shows first 2 states formatted

console.log("\n--- Testing Single State (Lagos) ---");
const lagos = useSingleState('lagos');
console.log(lagos);

console.log("\n--- Testing Invalid State ---");
const ghostState = useSingleState('invalid-id');
console.log(ghostState);