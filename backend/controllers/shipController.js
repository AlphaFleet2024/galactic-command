const db = require('../config/db.config');

// Get user ships
exports.getUserShips = (req, res) => {
    const userId = req.params.userId;

    db.query('SELECT * FROM player_ships WHERE user_id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Add new ship
exports.addShip = (req, res) => {
    const { userId, name } = req.body;

    db.query('INSERT INTO player_ships (user_id, name) VALUES (?, ?)', [userId, name], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Ship added successfully!', shipId: result.insertId });
    });
};
