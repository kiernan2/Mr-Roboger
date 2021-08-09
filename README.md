Describe: arrayMaker()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: arrayMaker(0);
Expected Output: 0

Test: "It should return [0, beep] when the number is one"
Code: arrayMaker(1)
Expected Output: [0 , Beep!]

Test: "It should return [0, beep] when the number is one"
Code: arrayMaker(5)
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5]

Describe: numberConverter()

Test: "It should take numbers and convert them as the assignment suggests"
Code: numberConverter(1)
Expected Output: Beep!

Code: numberConverter(2)
Expected Output: Boop!

Code: numberConverter(3)
Expected Output: Won't you be my neighbor?

Code: numberConverter(31)
Expected Output: Won't you be my neighbor?

Code: numberConverter(12)
Expected Output: Boop!

Code: numberConverter(16)
Expected Output: Beep!

The webpage receives two variables a number and a name the number and name are then passed into the a rainmaker function which first creates array by counting up to the number, number and name are then passed into the number converter function which converts numbers containing 1 2 and 3 into the strings the assignment suggests