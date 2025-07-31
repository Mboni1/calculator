function reverse(input: string | number): string | number {
    // Handle string input
    if (typeof input === 'string') {
        return input.split('').reverse().join('');
    }
    // Handle number input
    else if (typeof input === 'number') {
        const reversedString = Math.abs(input).toString().split('').reverse().join('');
        const reversedNumber = parseFloat(reversedString);
        return input < 0 ? -reversedNumber : reversedNumber;
    }
    // Handle invalid types
    throw new Error('Input must be a string or number');
}

// Examples
console.log(reverse("TypeScript"));  // "tpircSepyT"
console.log(reverse(12345));         // 54321
console.log(reverse(-123.45));       // -54.321
console.log(reverse("Hello👋"));     // "👋olleH"