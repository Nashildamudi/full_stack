let employee = [
    {name: "nashil", salary: 2000000},
    {name: "ahmed", salary: 2000000},
    {name: "sharan", salary: 2000000},
    {name: "sallu", salary: 2000000},
];

let newDEtails = employee.map((emp) => ({
    name: emp.name,
    salary: emp.salary + 4000,
}));

