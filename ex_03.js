function fillBus(peopleAtBusStops, busSeats) {
  let index = 0; 
  let totalPeopleOnBus = 0; 
  while (index < peopleAtBusStops.length) {
    totalPeopleOnBus += peopleAtBusStops[index];
    if (totalPeopleOnBus >= busSeats) {
      return index; 
    }
 index++; 
   }
}
console.log(fillBus([1, 3, 10, 1], 12)); 
    
    
