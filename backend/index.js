const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const app = express();

app.use(express.json());
app.use(cors());
require('dotenv').config();

// Use the correct environment variable
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
    });

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/auth", userRoutes);
app.use("/post", postRoutes);

const port = process.env.PORT || 5000; // Use a default port if PORT is not set in the environment
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
