// Nice work on your calculator everyone!
// I like the history function, and I like how your equals function
// simply processes all the opterations in the display - works nicely.
// Clearly you did a good bunch of testing and you're catching some good errors before they
// get to the user.  Nicely done, looks and works great - and with comments and click graphics as well.
// 10/10

/*Global  Variables */
var display="";
var counter = 0;
var getHistoryBtn = document.getElementById("showHistory");
var getClearAllBtn = document.getElementById("clearAll");
var getCalculatorDisplay = document.getElementById("txtNumber");
var prvNumber = false;      // to check if the previous input is a number
var prvOperation = false;
var prvBracket = false;
// var bracketStarted = false;
MAXLENGTH = 10;
var operation;
var currentInput="";
/* END GLOBAL VARIABLES*/

function addNumber(buttonElement){

    if (display.length <= MAXLENGTH)
    {
        //add the number of the clicked number to the display
        currentInput = document.getElementById(buttonElement.id).value;
        display += document.getElementById(buttonElement.id).value;

        //take the value in my display variable and put it into txtNumber

        document.getElementById('txtNumber').value=display;

        // This means that the previous input was a number
        prvNumber = true;
        prvOperation = false;
    }




}




function equal() {


        // for simple operations, we need to make sure only two numbers are inputed
        if (display == "")
        {
            // if there is no operation displayed, do nothing
        }
        else if (prvNumber){
            var operation = display;
            try {
                    displayResult = eval(operation);
            }
            catch(error)
            {
                alert("Please check your operation format, Clear operation to start over");
                return;
            }


            getHistory();
            getCalculatorDisplay.value=displayResult;
            divideByZero();
            display = "";

        }
        else if (!prvNumber)
        {
            alert("Please Make sure you finish your operation Input");

        }

}

function getHistory() {
  var getCalculatorDisplay = document.getElementById("txtNumber");
  var getDiv1 = document.getElementById("div1");
  if(counter <= 10) {
  getDiv1.innerHTML += getCalculatorDisplay.value + "="  + displayResult + "<br>";
  counter++;

  }
  //counter resets and clears the element where the equation history is contained
  else if(counter > 10) {
    counter = 0;
    getDiv1.innerHTML = "";
    getDiv1.innerHTML += getCalculatorDisplay.value + "="  + displayResult + "<br>";
    counter++;


  }
}




getHistoryBtn.addEventListener("click", function() {
  var getDiv1 = document.getElementById("div1");

  if(getDiv1.style.display == "block") {

    getDiv1.style.display = "none";

  }
  else {
    getDiv1.style.display = "block";
  }


});

function clearAll() {
  var getCalculatorDisplay = document.getElementById('txtNumber');
  getCalculatorDisplay.value = "";
  var display="";

}

  getClearAllBtn.addEventListener("click", function(){
    clearAll();
    display="";
  });

function divideByZero() {
    if((getCalculatorDisplay.value).toLowerCase()=="infinity"){
        getCalculatorDisplay.value = "Error";

        }
    }

function validate() {
      for (i = 0; i < getCalculatorDisplay.value.length; i++) {
        console.log(getCalculatorDisplay.value[i]);
      }
    }
function operate(buttonElement)
{

    if (prvNumber)
    {
        operation = buttonElement.value;
        currentInput = buttonElement.value;
        display +=operation;
        getCalculatorDisplay.value = display;
        prvNumber = false;      // Set prvNumber to be false because it was an
        prvOperation = true;

    }

}

// FUNCTION TO validate Decimal input

function addDot() {
    currentInput = ".";

    // cHECK IF THE LAST number has a decimal already or not
    var currentDisplay = getCalculatorDisplay.value;
    var TempCurrentDisplay = currentDisplay;
    var selectors = ['\\\+','-','\\*','/','\\\%'];
    var numbersArray = TempCurrentDisplay.split(new RegExp(selectors.join('|'),'g'));

    var arrLen = numbersArray.length;

    if (numbersArray[arrLen-1].indexOf(".")== -1)
    {

        if (display == "")
        {
            display = "0.";
            prvNumber = true;
            getCalculatorDisplay.value = display;
        }
        else if (prvNumber) {
            display += ".";
            getCalculatorDisplay.value = display;
        }
        else if (prvOperation)
        {
            display += "0."
            prvNumber = true;
            getCalculatorDisplay.value = display;
        }
    }

}
//
// function addBracket(bracketElement){
//     currentInput = bracketElement.value;
//
//     // if there is no display yet, do not allow adding ) , but only (
//     if ((display =="") && (currentInput == "(") && ! bracketStarted)
//     {
//         display = currentInput;
//         getCalculatorDisplay.value = display;
//         prvBracket = true;
//         bracketStarted = true;
//
//     }
//     else if (prvOperation && currentInput == ")")
//     {
//         // do nothing, don't allow this operation
//     }
//
//     else if ((prvOperation) || bracketStarted)
//     {
//         display += currentInput;
//         getCalculatorDisplay.value = display;
//         prvBracket = true;
//         if (currentInput == '(' && bracketStarted) {
//             bracketStarted = true;
//         }
//         else if (currentInput == ')') {
//             bracketStarted = false;
//         }
//
//
//     }
// }
