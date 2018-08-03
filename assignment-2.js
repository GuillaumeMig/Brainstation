
// CHALLENGE 1 - LOOPING A TRIANGLE - USING MULTIPLE TIMES CONSOLE.LOG()

                /* for every new line, we add the value '#' to 'line'
                         and display value of 'triangle' for each line in the terminal */  

    for (let abcd = '#'; abcd.length <= 7; abcd += '#') { // * we want a triangle 7 lines height *
        console.log(abcd); // * display the value of abcd in the terminal *
    }

// CHALLENGE 1 - LOOPING A TRIANGLE - USING ONE CONSOLE.LOG()

                /* for every new line, we add the value '#' to 'line' *
                         once the triangle is done, display the FINAL value of 'triangle' in the terminal */                

    let triangle = '';
    for (let line = 1; line <= 7; line++) { // * we want a triangle 7 lines height *
        for (let column = 1; column <= line; column++) { // * we want a triangle 7 lines width *
            triangle += '#'; // * add the value '#' to 'triangle' *
        }
        triangle += '\n'; // * add a new line to 'triangle' *
    }
    console.log(triangle);  // * display the final value of 'triangle' in the terminal *


// CHALLENGE 2 - EVEN OR ODD

    function isEven(n) { // * check if the parameter 'n' is a number *
        if (isNaN(n) == true){
            return ('enter a number please'); // * if 'n' is not a number, display an error message *
        } else if (n % 2 == 0) {
            return ('the number is even'); // * if the remainder is == 0, the number is even *
        } else if (n % 2 == 1) {
            return ('the number is odd'); // * if the remainder is == 1, the number is odd *
        } else if (n < 0) {
            return isEven(-n); // * if n < 0, change the sign of n to prevent an error *
        }
    }

// * display all the tests in the terminal *

    console.log(isEven(10))
    console.log(isEven(5))
    console.log(isEven(0))
    console.log(isEven(-9))
    console.log(isEven('bg4e'))