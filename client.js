const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// calculates bonus percentage of the object input
function bonusPercentageCalculator(employee) { 
  let totalPercentage = 0;
  if (employee.reviewRating === 5) {
    totalPercentage += .10;
  } else if (employee.reviewRating === 4) {
    totalPercentage += .06;
  } else if (employee.reviewRating === 3) {
    totalPercentage += .04;
  } 
  if (employee.employeeNumber.length === 4) {
    totalPercentage += .05;
  }
  if (employee.annualSalary > 65000) {
    totalPercentage -= .01;
  }
  if (totalPercentage > .13) {
    totalPercentage = .13;
  } else if (totalPercentage < 0) {
    totalPercentage = 0;
  }
  return totalPercentage;
}

// takes object as an argument, and outputs new object with new properties bonusPercentage, totalBonus, totalCompensation
function newEmployeeObject (employee) {
  return {
    name: employee.name,
    bonusPercentage: bonusPercentageCalculator(employee),
    totalBonus: Math.round(bonusPercentageCalculator(employee) * employee.annualSalary),
    totalCompensation: Math.round(bonusPercentageCalculator(employee) * employee.annualSalary) + Number(employee.annualSalary)
  }
}

// takes array of initial employess, and outputs new objects using newEmployeeObject function
function newEmployeeList (array) {
  let employeeList = [];
  for (employee of array) {
    console.log(newEmployeeObject(employee));
    employeeList.push(newEmployeeObject(employee));
  }
  for (employee of employeeList) {
    $("#EmployeeBonusInformation").append(`<br />This is ${employee.name}! I got a total bonus of $${String(employee.totalBonus)} this year,
    with a bonus percentage of ${employee.bonusPercentage*100}%. My total yearly compensation was $${employee.totalCompensation}.\r\n`);
  }
  return employeeList;
}

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
