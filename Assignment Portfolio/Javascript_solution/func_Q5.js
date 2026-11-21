const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 10 / 100;
    }
    else {
        return salary * 5 / 100;
    }
};

const calculateTax = (salary) => {
    return salary * 5 / 100;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    const bonus = bonusCallback(salary);
    const tax = taxCallback(salary);

    return salary + bonus - tax;
};

const generatePayslip = (name, salary, callback) => {
    const bonus = calculateBonus(salary);
    const tax = calculateTax(salary);
    const netSalary = callback(salary, calculateBonus, calculateTax);

    console.log("Employee Name:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", bonus);
    console.log("Tax Deduction: Rs.", tax);
    console.log("Net Salary: Rs.", netSalary);
};

generatePayslip("Shankar", 50000, calculateNetSalary);