var calculateWeeksPregnancy = function (currentDate, birthDate) {
    var end = new Date(birthDate);
    var start = new Date(currentDate);
    var timeDifference = end.getTime() - start.getTime(); // Obtain the diference in miliseconds
    var totalDaysDifference = timeDifference / (1000 * 3600 * 24); // miliseconds  in a day (1000ms*60secs*60 min*24hours*7days).
    // console.log('days diff: ' + totalDaysDifference)
    var weeks = Math.trunc((280 - totalDaysDifference) / 7); // truncate to obtain the integer part
    return weeks;
};
// MMDDYYY
console.log('03/15/2024 ->', calculateWeeksPregnancy('11/15/2023', '03/15/2024')); // = 122/22
console.log('01/01/2024 ->', calculateWeeksPregnancy('11/15/2023', '01/01/2024')); // = 48 /33
console.log('04/18/2024 ->', calculateWeeksPregnancy('11/15/2023', '04/18/2024')); // = 155.9/17
console.log('12/13/2023 ->', calculateWeeksPregnancy('11/15/2023', '12/13/2023')); // = 29/36
console.log('11/16/2023(mañana) ->', calculateWeeksPregnancy('11/15/2023', '11/16/2023')); // = 1/39 - Mañana
console.log('11/14/2023(ayer) ->', calculateWeeksPregnancy('11/15/2023', '11/14/2023')); // = -1/40 - Ayer
console.log('11/15/2023(hoy) ->', calculateWeeksPregnancy('11/15/2023', '11/15/2023')); // = 0/40 - hoy
console.log('10/12/2023 ->', calculateWeeksPregnancy('11/15/2023', '10/12/2023')); // = -34.0/44
console.log('09/05/2023 ->', calculateWeeksPregnancy('11/15/2023', '09/05/2023')); // = -70.0/50
console.log('11/07/2023 ->', calculateWeeksPregnancy('11/15/2023', '11/07/2023')); // = -7/41
console.log('11/11/2024 ->', calculateWeeksPregnancy('11/15/2023', '11/11/2024')); // -11
