const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Define the /api/salary route correctly
app.post("/api/salary", (req, res) => {
    const { salary } = req.body;
    if (!salary) {
        return res.status(400).json({ error: "Salary is required" });
    }

    const tax = salary * 0.2; // Example tax rate (20%)
    const netSalary = salary - tax;
    res.json({ netSalary });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
