const year = 1990;

if (year % 400 === 0) {
    console.log("leap year");
} else if (year % 100 === 0) {
    console.log("Not leap year");
} else if (year % 4 === 0) {
    console.log(" leap year");
} else {
    console.log("Not leap year");
}
