let units = 60;
let bill;

if (units <= 50) {
    console.log(50 * 5);
}
else if (units >= 51 && units <= 100) {
    console.log((50 * 5) + (units - 50) * 7);
}
else if (units >= 101 && units <= 200) {
    console.log((50 * 5) + (50 * 7) + (units - 100) * 10);
}
else {
    console.log((50 * 5) + (50 * 7) + (50 * 10) + (units - 200) * 12);
}