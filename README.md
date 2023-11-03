![randy-binondo-high-resolution-logo](/assets/randy-binondo-high-resolution-logo_ozbsw9bj6.png)

[![Node.js Package to NPM](https://github.com/randy-binondo-dev/typescript-module/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/randy-binondo-dev/typescript-module/actions/workflows/npm-publish.yml)

# typescript-module
Sample Typescript Module

## Installation

```bash
$ npm i --save @randybinondo/typescript-module 
```

## Usage

### Pre-requisite

```bash
$ npm install -D typescript ts-node 
```

```javascript
import { sample } from "@randybinondo/typescript-module"

const name = 'zzz'
console.log(sample`aaa bbb ccc ${name}`);
```

### Output


Optional
```bash
$ git clone https://github.com/randy-binondo-dev/typescript-module-demo.git
```
Run
```bash
$ npm start
> @randybinondo/typescript-module-demo@1.0.0 start
> ts-node index.ts

string: aaa bbb ccc , first parameter: zzz
```

## License

Typescript Module is [MIT licensed](LICENSE).