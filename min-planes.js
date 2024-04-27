/**
 * function determines the minimum number of planes needed to reach the last airport.
 * @param {number[]} airports - array represents units of fuels in each airport plane.
 * @returns {number} - minimum number of planes needed.
 */
function minimumPlanesNeeded(airports) {
    const totalAirports = airports.length;
    let planesNeeded = 0;
    let maxReachable = 0;
    let currentMaxReachable = 0;    
    for (let i = 0; i < totalAirports; i++) {
        // if current fuel is insufficient to reach another airport
        if (i > maxReachable) {
            if (maxReachable === currentMaxReachable) {
                return -1; // break loop if farthest airport is not reachable
            }
            maxReachable = currentMaxReachable; // updating maxReachable with farthest reachable airport
            planesNeeded++; // incrementing count of planes taken
        }
        
        // updating currentMaxReachable if farthest airport is reachable from current airport
        currentMaxReachable = Math.max(currentMaxReachable, i + airports[i]);
        
        // returning count of planes needed
        if (currentMaxReachable >= totalAirports - 1) {
            return planesNeeded + 1;
        }
    }
    
    return -1; // if route to last airport is not possible
}
console.log(minimumPlanesNeeded([2,1,2,3,1]));
console.log(minimumPlanesNeeded([1,6,3,4,5,0,0,0,6]));