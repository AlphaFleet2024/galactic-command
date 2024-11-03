const db = require('../config/db.config');

// Get user resources
exports.getUserResources = (req, res) => {
    const userId = req.params.userId;

    db.query('SELECT * FROM resources WHERE user_id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Add resource
exports.addResource = (req, res) => {
    const { userId, resourceType, amount } = req.body;

    db.query('INSERT INTO resources (user_id, resource_type, amount) VALUES (?, ?, ?)', [userId, resourceType, amount], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Resource added successfully!', resourceId: result.insertId });
    });
};
