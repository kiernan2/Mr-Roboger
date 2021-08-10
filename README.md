# _Kiernan's Portfolio_

#### _Mr-Roboger_

#### By _**Kiernan Beattie**_

## Technologies Used

* HTML 
* JS 
* JQuery
* CSS
* Bootstrap

## Description

_Assignment made for Figitech it will count up to the assigned number replacing numbers containing 1 2 or 3 with strings_

## Setup/Installation Requirements

* _clone this repo with `git clone https://github.com/kiernan2/Mr-Roboger`_
* _open index.html in any browser_

## Known Bugs

* _N/A_

## License

_Licensed under the MIT License_
_©Kiernan Beattie 2021_

## Contact Information

_kiernan1994@gmail.com_


The webpage receives two variables a number and a name the number and name are then passed into the a rainmaker function which first creates array by counting up to the number, number and name are then passed into the number converter function which converts numbers containing 1 2 and 3 into the strings the assignment suggests

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

Test: "It should Convert the numbers with ones into beep"  
Code: numberConverter(1,"")  
Expected Output: Beep!  

Test: "It should convert the numbers with two into Boop"
Code: numberConverter(2,"")  
Expected Output: Boop!  

Test: "It should convert the numbers with three into won't you be my neighbor (Assuming no name is been entered)"
Code: numberConverter(3,"")  
Expected Output: Won't you be my neighbor?  

Test: "The convert three rule should override the convert one rule"
Code: numberConverter(31,"")  
Expected Output: Won't you be my neighbor?  

Test: "The convert two rule should override the convert one rule"
Code: numberConverter(12,"")  
Expected Output: Boop! 

Test: "The convert three rule should override the convert two rule"  
Code: numberConverter(23,"")  
Expected Output: Won't you be my neighbor?  

Test: "The convert one rule should work with multiple digits"
Code: numberConverter(16,"")  
Expected Output: Beep!  