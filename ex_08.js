function houseEnergyScore(housingList) {
    const energyConsumptionMap = {
        "Log": 20, "Villa": 180, "Flat": 212, "Loft": 340, "Castle": 590, "Igloo": 0, "Hutch": 0
    };
  const getEnergyGrade = consumption => 
  consumption >= 450 ? 'G' :
  consumption >= 330 ? 'F' :
  consumption >= 230 ? 'E' :
  consumption >= 150 ? 'D' :
 consumption >= 90  ? 'C' :
 consumption >= 51  ? 'B' : 'A';

    return housingList
        .map(([houseType, area]) => {
            const totalConsumption = energyConsumptionMap[houseType] * area;
            return [houseType, totalConsumption, getEnergyGrade(totalConsumption)];
        })
        .sort((a, b) => a[1] - b[1]); 
}
const housingList = [['Igloo', 12], ['Hutch', 30], ['Flat', 212], ['Villa', 232], ['Loft', 345], ['Castle', 560]];
console.log(houseEnergyScore(housingList));
if (typeof houseEnergyScore === "function") {
    const scores = [["Hutch", 30], ["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
    const result = houseEnergyScore(scores); 
    displayResult(result); 
}
