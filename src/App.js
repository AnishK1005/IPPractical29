import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const SalaryEstimator = () => {
    const [salary, setSalary] = useState("");
    const [netSalary, setNetSalary] = useState(null);

    const estimateSalary = () => {
        axios
            .post("http://localhost:5000/api/salary", { salary })
            .then((res) => setNetSalary(res.data.netSalary))
            .catch((error) => console.error("Error estimating salary:", error));
    };

    return (
        <div className="main-container">
            <h1>Quick Salary Estimator</h1>
            <input className="InputBox" type="number" placeholder="Gross Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
            <button onClick={estimateSalary}>Estimate</button>
            {netSalary && <h2>Net Salary: {netSalary}</h2>}
        </div>
    );
};

export default SalaryEstimator;
