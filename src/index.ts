import { Calculator } from './calculator';
import { getNumberInput, getOperation } from './utils';

function main() {
  console.log('Simple Calculator\n');
  
  try {
    const num1 = getNumberInput('Enter first number: ');
    const num2 = getNumberInput('Enter second number: ');
    const operation = getOperation();

    let result: number;
    switch (operation) {
      case 'add':
        result = Calculator.add(num1, num2);
        break;
      case 'subtract':
        result = Calculator.subtract(num1, num2);
        break;
      case 'multiply':
        result = Calculator.multiply(num1, num2);
        break;
      case 'divide':
        result = Calculator.divide(num1, num2);
        break;
      default:
        throw new Error('Invalid operation');
    }

    console.log(`\nResult: ${num1} ${operation} ${num2} = ${result}`);
} catch (error) {
    let errorMessage = "\nAn unknown error occurred";
    if (error instanceof Error) {
        errorMessage = `\nError: ${error.message}`;
    }
    console.error(errorMessage);
}
}

main();