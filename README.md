# Project "ts-node-template"

This is a template project for developing Node.js applications using TypeScript.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ElfNevisokogoRosta/ts-node-template.git
   ```
2. Go to the project folder:
   ```bash
   cd ts-node-template
   ```
3. Install the dependencies using npm:
  ```bash
   npm install
  ```
or using yarn
```bash
   yarn install
```
or using pnpm:
```bash
   pnpm install
```
4. Start development mode:
   ```bash
   npm run dev
   ```
WARNING
For some packages that do not have built-in TypeScript support, you need to add @types/package_name. For example:
```bash
   npm install -D @types/express
```
Code example:
```bash
import express from 'express';

const app = express();
const port = 3333; // Replace with any available value

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
```
