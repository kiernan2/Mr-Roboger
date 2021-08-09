// Business logic
function numberConverter(number, name) {
  if (number.toString().includes("3")) {
    return name + " Won't you be my neighbor? ";
  } else if (number.toString().includes("2")) {
    return "Boop! ";
  } else if (number.toString().includes("1")) {
    return "Beep! ";
  } else {
    return number + " ";
  }
}

function arrayMaker(number, name) {
  let array = [];
  let newArray = [];
  for (let i = 0;i <= parseInt(number);i++) {
    array.push(i.toString());
  }
  array.forEach(function(number) {
    newArray[number] = numberConverter(number, name);
  })
  return newArray
}

console.log(numberConverter(3, "bob"))
// UI logic

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    let input = ($("input#input").val());
    let input2 = ($("input#inputTwo").val());
    $("#output").html(arrayMaker(input, input2));
  })
})