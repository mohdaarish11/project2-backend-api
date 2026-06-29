const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Dummy Data

let users = [
    { 
       id: 1,
       name: "Aarish",
       email: "aarish@gmail.com" 

    }
];

// Home Route

app.get("/", (req, res) => {
    res.send("Backend API is Running");
});

// GET Users API
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User Added Successfully",
        user: newUser
    });
});

app.listen(PORT, () => {
    console.log('Server is Running on http://localhost:${PORT}');
});