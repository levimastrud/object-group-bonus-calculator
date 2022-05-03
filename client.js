$(document).ready(function () {
  $('#calculateBonus').on('click', start)
});

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

//Brian, Levi, Ujjwal

let bonus = {};
function start() {
  for (currentEmployee of employees) {
    employeeBonus(currentEmployee);
  }
}
function employeeBonus(employee) {
  //new object with Name, bonusPecentage,totalCopmensation, totalBonus
  bonus.name = employee.name;
  let AnSal = parseInt(employee.annualSalary);
  //converts string into number
  //employee bonus based on rating
  bonus.bonusPercentage = 0;
  if (employee.reviewRating === 3) {
    bonus.bonusPercentage = .04;
  } else if (employee.reviewRating === 4) {
    bonus.bonusPercentage = .06;
  } else if (employee.reviewRating === 5) {
    bonus.bonusPercentage = .1;
  }
  //employee bonus based on employee number
  if (employee.employeeNumber.length === 4) {
    bonus.bonusPercentage += .05;
  }
  //employee bonus based on salary 
  if (employee.annualSalary > 65000) {
    bonus.bonusPercentage -= .01;
  }
  //bonus cannot be above 13%
  if (bonus.bonusPercentage >= .13) {
    bonus.bonusPercentage = .13;
  }
  //bonus cannot be below 0%
  if (bonus.bonusPercentage < 0) {
    bonus.bonusPercentage = 0;
  }
  //bonus.bonusPercentage = bonusCalc(employee);
  bonus.totalBonus = Math.ceil(employee.annualSalary * bonus.bonusPercentage);
  bonus.totalCompensation = AnSal + bonus.totalBonus;
  console.log(bonus);
  $('#employee').append(`<li>${bonus.name}, has a bonus percent of: ${bonus.bonusPercentage}%, makes a total of $${bonus.totalCompensation}, with a bonus of $${bonus.totalBonus}. </li>`);
  return bonus;
}


function bonusCalc(employee) {
  // if (employee.reviewRating = 3) {
  //   bonus.bonusPercentage = .04;
  // } else if (employee.reviewRating = 4) {
  //   bonus.bonusPercentage = .06;
  // } else if (employee.reviewRating = 5) {
  //   bonus.bonusPercentage = .1;
  // }

  // if (employee.employeeNumber.length >= 4) {
  //   bonus.bonusPercentage += .05;
  // }
  // if (employee.annualSalary > 65000) {
  //   bonus.bonusPercentage -= .01;
  // }
  // if (bonus.bonusPercentage >= .13) {
  //   bonus.bonusPercentage = .13;
  // }
  // if (bonus.bonusPercentage < 0) {
  //   bonusPercentage = 0;
  // }
  //return bonus;
}
// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
