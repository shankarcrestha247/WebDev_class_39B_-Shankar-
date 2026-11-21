const calculateBill = (units) => {
    const charge = 50;
    if (units <= 20) {
        return 20 * 5 + charge;
    } else if (units <= 50) {
        return 20 * 5 + (units - 20) * 7 + charge;
    } else {
        return 20 * 5 + 7 * 30(units - 50) * 10 + charge;
    }
}
const displayBill = (name, units, action) => {
    const totalbill = action(units);
    console.log("Name: ", name);
    console.log("Units: ", units);
    console.log("Total Bill:Rs", totalbill);
}

displayBill("rem", 21, calculateBill);