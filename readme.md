# weakable

A Node.js module that returns true if a value can be used as a WeakSet item or a WeakMap key.

## Installation

```bash
npm install weakable --save
```

## Usage

```javascript
const weakable = require('weakable')
const set = new WeakSet()

const obj = {}
weakable(obj) // true
set.add(obj)

const str = 'test'
weakable(str) // false
set.add(str) // Uncaught TypeError: Invalid value used in weak set
```
