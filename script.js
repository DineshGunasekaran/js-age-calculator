// Age calculator app

const dateInputElement = document.getElementById("input-date");
// To restrct future date selection
dateInputElement.max = new Date().toISOString().split('T')[0];

const resultElement = document.getElementById('result');

// console.log(dateOfBirth);


function calAge() {
  let dateOfBirth = new Date(dateInputElement.value);
  if (dateInputElement.value !== "") {
    let today = new Date();
    console.dir(dateOfBirth);
    let birthYear = dateOfBirth.getFullYear();
    let birthMonth = (dateOfBirth.getMonth()) + 1;
    let birthDate = dateOfBirth.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = (today.getMonth()) + 1;
    let currentDate = today.getDate();
    let dateDiff;
    let monthDiff;
    let yearDiff = currentYear - birthYear;

    if ( currentMonth >= birthMonth) {
      monthDiff = currentMonth - birthMonth;
    } else {
      yearDiff--;
      monthDiff = 12 + currentMonth - birthMonth;
    }

    if ( currentDate >= birthDate) {
      dateDiff = currentDate - birthDate;
    } else {
      monthDiff--;
      dateDiff = (currentDate + getDaysInMonth(birthYear, birthMonth)) - birthDate;
    }
    if (monthDiff < 0 ) {
      yearDiff--;
      monthDiff = 11;
    }
    let htmlText = `You are <span>${yearDiff}</span> years, <span>${monthDiff}</span> months, <span>${dateDiff}</span> days old`;

    resultElement.style.display = "block";
    resultElement.innerHTML = htmlText;
  }
  else {
    resultElement.innerHTML = 'Select your DOB'
    resultElement.style.display = "block";
    resultElement.style.color = "#d1a3a3";
  }
}

function getDaysInMonth(year, month) {
  let dates = new Date(year, month, 0).getDate();
  console.log(dates);
  return dates;
}

