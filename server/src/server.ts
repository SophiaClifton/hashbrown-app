import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

const budgetFilePath = path.join(__dirname, 'budget.json');


// Controller to handle saving a transaction
app.post('/save-budget', (req, res) => {
    const transaction = req.body;

    fs.readFile(budgetFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading budget file' });
        }

        const budget = JSON.parse(data || '[]');
        budget.push(transaction);

        fs.writeFile(budgetFilePath, JSON.stringify(budget, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving budget file' });
            }
            res.json({ message: 'Transaction added successfully!' });
        });
    });
});

const PORT = 3001; // Backend will run on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
