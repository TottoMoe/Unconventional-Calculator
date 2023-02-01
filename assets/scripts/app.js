const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries)

}

function add() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enterdNumber;
  createAndWriteOutput('+', initialResult, enterdNumber)
  writeToLog('ADD', initialResult, enterdNumber, currentResult);
}

function subtract() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enterdNumber;
  createAndWriteOutput("-", initialResult, enterdNumber);
  writeToLog("SUBTRACT", initialResult, enterdNumber, currentResult);

}

function multiply() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enterdNumber;
  createAndWriteOutput("*", initialResult, enterdNumber);
  writeToLog("MULTIPLY", initialResult, enterdNumber, currentResult);

}

function divide() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enterdNumber;
  createAndWriteOutput("/", initialResult, enterdNumber);
  writeToLog("DIVIDE", initialResult, enterdNumber, currentResult);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

