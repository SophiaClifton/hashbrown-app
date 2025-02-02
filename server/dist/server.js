"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const budgetFilePath = path_1.default.join(__dirname, 'dummy_assets', 'budget.json');
// Controller to handle saving a transaction
app.post('/save-budget', (req, res) => {
    const transaction = req.body;
    fs_1.default.readFile(budgetFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading budget file' });
        }
        const budget = JSON.parse(data || '[]');
        budget.push(transaction);
        fs_1.default.writeFile(budgetFilePath, JSON.stringify(budget, null, 2), (err) => {
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
