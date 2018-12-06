function jediName(firstName, lastName) {
  return `${lastName.slice(0, 3)}${firstName.slice(0, 2)}`;
}

function beyond(num) {
  if (isFinite(num) && num > 0) {
    console.log('To infinity');
  } else if (isFinite(num) && num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  } else {
    console.log('And beyond');
  }
}

function decode(word) {
  let charNum;
  switch (word.charAt()) {
    case 'a':
      charNum = 2;
      break;
    case 'b':
      charNum = 3;
      break;
    case 'c':
      charNum = 4;
      break;
    case 'd':
      charNum = 5;
      break;
    default:
      charNum = undefined;
  }
  return charNum ? word.charAt(charNum - 1) : ' ';
}

function daysInMonth(month, leap) {
  let sent;
  let isLeap = leap || false;
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'October':
    case 'December':
      sent = `${month} has 31 days`;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      sent = `${month} has 30 days`;
      break;
    case 'February':
      if (leap) {
        sent = `${month} has 29 days`;
      } else {
        sent = `${month} has 28 days`;
      }
      break;
    default:
      throw new Error('Most provide a valid month');
  }
}

function rockPaperScissor(num) {
  //1 = rock
  //2 = paper
  //3 = scissors
  const compAns = Math.floor(Math.random() * 3) + 1;
  let outcome;
  if (num < 1 || num > 3) throw new Error('Please enter 1, 2, or 3');
  if (num === compAns) {
    outcome = "It's a tie!";
  } else if (
    (num === 1 && compAns === 2) ||
    (num === 2 && compAns === 3) ||
    (num === 3 && compAns === 1)
  ) {
    outcome = 'Computer Wins!';
  } else {
    outcome = 'You Win!';
  }
  return outcome;
}

console.log(rockPaperScissor(1));
