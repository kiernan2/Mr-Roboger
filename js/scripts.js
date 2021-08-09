// Business logic
function numberConverter(number) {
  if (number.toString().includes("3")) {
    return "Won't you be my neighbor?";
  } else if (number.toString().includes("2")) {
    return "Boop!";
  } else if (number.toString().includes("1")) {
    return "Beep!";
  } else {
    return number;
  }
}

function arrayMaker(number) {
  let array = [];
  let newArray = [];
  for (let i = 0;i <= parseInt(number);i++) {
    array.push(i.toString());
  }
  array.forEach(function(number) {
    newArray[number] = numberConverter(number);
  })
  return newArray
}

// UI logic

