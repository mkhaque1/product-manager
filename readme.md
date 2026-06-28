# Product Manager Tutorial Project

This is a small TypeScript tutorial project that demonstrates how to create and manage a simple product catalog with categories such as `electric`, `food`, and `clothing`.

## Project Overview

The app defines products with the following fields:

- `name`
- `price`
- `category`
- `inStock` (availability)
- `description`

It is built using TypeScript and shows how to structure a project with separate modules for types, storage, and business logic.

## Project Structure

- `src/index.ts` - application entry point
- `src/productManager.ts` - product management logic
- `src/storage.ts` - storage helpers or data handling
- `src/types.ts` - TypeScript interfaces and types

## Setup

1. Install dependencies:

```bash
npm install
```

## Run the Project

Start the project in development mode with:

```bash
npm run start
```

This runs `ts-node src/index.ts` and executes the TypeScript code directly.

## Build the Project

Compile the TypeScript into JavaScript with:

```bash
npm run build
```

This runs `tsc` and generates the output files according to `tsconfig.json`.

## Notes

- This project uses TypeScript with `commonjs` modules.
- Development dependencies include `typescript`, `ts-node`, and `@types/node`.
- You can extend the tutorial by adding product CRUD operations, validation, and persistence.
