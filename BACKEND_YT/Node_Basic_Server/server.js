const express = require("express");
const {
  sum,
  difference,
  multiplication,
  division,
} = require("./mathOperations");
const packageInfo = require("./package.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the basic Node.js server!",
    project: packageInfo.name,
    version: packageInfo.version,
    infoRoute: "/about-project",
    routes: ["/", "/health", "/calculate/:operation/:a/:b", "/about-project"],
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
  });
});

app.get("/about-project", (req, res) => {
  res.status(200).json({
    about: "Basic Node.js + Express calculator API project",
    version: packageInfo.version,
    whatIsInThisProject: [
      "Express server with JSON routes",
      "Calculator route using URL params",
      "Math utility functions in a separate module",
      "Jest unit tests for math functions",
      "Nodemon for auto-restart during development",
    ],
    whyWeUsed: {
      express: "To create API routes quickly and clearly",
      nodemon: "To restart server automatically when files change",
      jest: "To write and run unit tests for function correctness",
    },
    howToTestManually: [
      "1. Run `npm run dev` or `npm start`",
      "2. Open `http://localhost:3000/`",
      "3. Open `http://localhost:3000/health`",
      "4. Open `http://localhost:3000/calculate/sum/10/5`",
      "5. Open `http://localhost:3000/calculate/difference/10/5`",
      "6. Open `http://localhost:3000/calculate/multiplication/10/5`",
      "7. Open `http://localhost:3000/calculate/division/10/5`",
      "8. Check error case `http://localhost:3000/calculate/division/10/0`",
      "9. Run `npm test` for automated unit tests",
    ],
  });
});

app.get("/calculate/:operation/:a/:b", (req, res) => {
  const { operation, a, b } = req.params;
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return res.status(400).json({ error: "Please provide valid numbers" });
  }

  try {
    let result;

    if (operation === "sum") {
      result = sum(numA, numB);
    } else if (operation === "difference") {
      result = difference(numA, numB);
    } else if (operation === "multiplication") {
      result = multiplication(numA, numB);
    } else if (operation === "division") {
      result = division(numA, numB);
    } else {
      return res.status(400).json({
        error:
          "Invalid operation. Use sum, difference, multiplication, or division",
      });
    }

    return res.status(200).json({
      operation,
      a: numA,
      b: numB,
      result,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
