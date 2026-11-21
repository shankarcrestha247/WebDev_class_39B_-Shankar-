const calcAverage = (m1, m2, m3) => {
    let avg = (m1 + m2 + m3) / 3;
    return avg;
}
const getDivision = (avg) => {
    if (avg >= 70) {
        return "First division";
    } else if (avg >= 60) {
        return "Second division";
    } else if (avg >= 50) {
        return "Third division";
    } else {
        return "Last";

    }
}
const processResult = (name, m1, m2, m3, action) => {
    const avg = calcAverage(m1, m2, m3);
    const result = action(avg);
    console.log("Name :", name);
    console.log("Average :", avg);
    console.log("division :", result);
}
processResult("rem", 80, 10, 60, getDivision)