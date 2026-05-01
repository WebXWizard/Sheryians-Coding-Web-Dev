# Node Basic Server

A basic Node.js project using Express with calculator APIs, health checks, and Jest unit tests.

## Project Info

- Name: `node_basic_server`
- Version: `1.0.0`
- Runtime: Node.js (CommonJS)

## What Is In This Project

- `server.js`: Express server and API routes
- `mathOperations.js`: Utility functions (`sum`, `difference`, `multiplication`, `division`)
- `test.js`: Jest unit tests for math functions
- `package.json`: Scripts and dependencies

## Why These Packages Are Used

- `express`: Build routes and JSON APIs quickly
- `nodemon`: Auto-restart server during development
- `jest`: Write and run unit tests

## API Routes

- `GET /`
  - Returns welcome message + project info
- `GET /health`
  - Returns server health status
- `GET /about-project`
  - Returns full project details and testing guidance
- `GET /calculate/:operation/:a/:b`
  - Supported operations: `sum`, `difference`, `multiplication`, `division`

Example:

```bash
http://localhost:3000/calculate/sum/10/5
```

## Local Setup

1. Open terminal in this folder:

```bash
cd Node_Basic_Server
```

2. Install dependencies:

```bash
npm install
```

3. Run server:

```bash
npm run dev
```

or

```bash
npm start
```

## Manual Testing

Open these URLs in browser/Postman:

- `http://localhost:3000/`
- `http://localhost:3000/health`
- `http://localhost:3000/about-project`
- `http://localhost:3000/calculate/sum/10/5`
- `http://localhost:3000/calculate/difference/10/5`
- `http://localhost:3000/calculate/multiplication/10/5`
- `http://localhost:3000/calculate/division/10/5`
- `http://localhost:3000/calculate/division/10/0` (error case)

## Unit Testing

Run:

```bash
npm test
```

Expected: all tests in `test.js` should pass.

## GitHub Actions Setup Guide

This project includes CI workflow at:

`.github/workflows/ci.yml`

It runs automatically on push and pull request to `main`/`master` and executes:

- `npm ci`
- `npm test`

### Steps To Enable On GitHub

1. Create a new GitHub repository.
2. Push this project code to that repository.
3. Ensure workflow file exists at repository root path: `.github/workflows/ci.yml`.
4. Push to `main` (or open a PR to `main`).
5. Open the GitHub repository `Actions` tab.
6. Confirm `Node.js CI` workflow is running/passing.

### If This Project Is Inside A Bigger Repository

If `Node_Basic_Server` is a subfolder of a larger repo, keep the workflow at the repository root and set workflow `working-directory` to `Node_Basic_Server`.
