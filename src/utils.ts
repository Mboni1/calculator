import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true }); 

type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';
type OperationSymbol = '+' | '-' | '*' | '/';

const operationMap: Record<MathOperation, OperationSymbol> = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
};

const symbolToOperation: Record<OperationSymbol, MathOperation> = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide'
};

export function getNumberInput(promptMessage: string): number {
    while (true) {
        const input = prompt(promptMessage).trim();
        const number = parseFloat(input);
        
        if (!isNaN(number) && input !== '') {
            return number;
        }
        console.log('Invalid input. Please enter a valid number.');
    }
}

export function getOperation(): MathOperation {
    while (true) {
        console.log('\nAvailable operations:');
        
        const input = prompt('Enter operation symbol (+, -, *, /): ').trim();
        
        if (isOperationSymbol(input)) {
            return symbolToOperation[input];
        }
        console.log(`Invalid operation. Please enter one of: ${Object.keys(symbolToOperation).join(', ')}`);
    }
}
function isOperationSymbol(input: string): input is OperationSymbol {
    return ['+', '-', '*', '/'].includes(input);
}

export function getOperationSymbol(operation: MathOperation): OperationSymbol {
    return operationMap[operation];
}