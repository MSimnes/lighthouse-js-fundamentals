// const chooseStations = function(stations){
//   let goodStations = []
//   for (const station of stations) {
//     const stationCapacity = station[1];
//     if (stationCapacity >= 20) {
//       const stationType = station[2];
//       if (stationType === "school" || "community centre") {
//         goodStations.push(station[0]);
//       }        
//     } 
//   } return goodStations;
// }
// console.log(chooseStations(stations));


function chooseStations (stations){
  const goodStations = [];
  for (const station of stations) {
    const stationCapacity = station[1];
    if (stationCapacity >= 20) {
      const stationType = station[2];
      if (stationType === "school" || stationType === "community centre") {
        goodStations.push(station[0]);
      }        
    } 
  } return goodStations;
}