# Project "ts-node-template"

This is a template project for developing Node.js applications using TypeScript.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ts-node-template.git

2. Go to the project folder:
    cd ts-node-template

3. Install the dependencies:
    npm install
    pnpm install
    yarn install
4. Start development mode:
    npm run dev

    The address http://localhost:3333 will be your main development address. If you want to change the port, edit the indes.ts file.

WARNING
    For some packages that do not have built-in TypeScript support, you need to add @types/package_name. For example:

    npm install -D @types/express

Code example
 
    import express from 'express';

    const app = express();
    const port = 3333; // Replace with any available value

    app.get('/', (req, res) => {
        res.send('Hello world');
        });

    app.listen(port, () => {
        console.log(`Server is started on port ${port}`);
        });
