# Symbol.protected

Symbol.protected is a JavaScript library designed to provide a way to create unique, protected Symbols that are not enumerable by `Object.getOwnPropertySymbols()`. This can be useful for scenarios where you want to ensure that certain symbols are kept private or hidden, preventing them from being accidentally accessed or enumerated.

## Features

- **Create protected Symbols**: Generate symbols that cannot be accessed through `Object.getOwnPropertySymbols()`, adding an extra layer of privacy to your code.
- **Non-enumerability**: These protected symbols will not appear in property enumeration, making it difficult for other code to access them unintentionally.
- **Custom descriptions**: Like regular JavaScript symbols, you can provide a description when creating a protected symbol, which can be helpful for debugging.

## Installation

To use `Symbol.protected`, simply include the script in your project. You can copy the code directly into your project, or use it as a standalone script file.

### Example of Direct Inclusion:

You can include the provided JavaScript file in your HTML:

```html
<script src="path/to/symbol.protected.min.js"></script>
```

Alternatively, if you're using a build tool like Webpack, Rollup, or Parcel, you can add it to your project as a plain .js file.

## Usage

Once the library is included, you can use `Symbol.protected` to create new symbols that are protected from being accessed by `Object.getOwnPropertySymbols()`.

### Creating a Protected Symbol:

```javascript
const myProtectedSymbol = Symbol.protected('myProtectedSymbol');
console.log(myProtectedSymbol); // Unique Symbol with description 'myProtectedSymbol'
```

### Accessing Symbols:

Protected symbols cannot be accessed using `Object.getOwnPropertySymbols()`:

```javascript
const obj = {
    [myProtectedSymbol]: 'hidden value',
};

console.log(Object.getOwnPropertySymbols(obj)); // Will not show myProtectedSymbol
```

Only regular `Symbol` values can be accessed by `Object.getOwnPropertySymbols()`, but the protected ones will be excluded from the result.

### Example Use Case:

```javascript
const mySymbol = Symbol.protected('secret');
const obj = {
    [mySymbol]: 'This is protected',
    otherProp: 'This is not protected',
};

console.log(Object.getOwnPropertySymbols(obj)); // Only shows non-protected symbols
console.log(obj[mySymbol]); // Accessing the symbol works, but it's hidden from enumeration
```

## API
```typescript
Symbol.protected(description?: string | number): symbol
```

- **description** _(optional)_: A string or number that provides a description for the new symbol. This can be helpful for debugging.
- **Returns**: A unique, protected symbol.

### Example:

```javascript
const mySymbol = Symbol.protected('myUniqueSymbol');
```

## License
This project is licensed under the **GNU General Public License v3.0**. You can redistribute and/or modify it under the terms of this license.

- **License details**: [GNU General Public License v3.0](./LICENSE)

## Contributing
Contributions to improve this library are welcome. If you find a bug or would like to add a feature, feel free to open an issue or submit a pull request.
