import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4059;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/personal-website",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Submission Schema
const submissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Submission = mongoose.model("Submission", submissionSchema);

// Routes
app.get("/submissions", async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ createdAt: -1 });
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/submissions", async (req, res) => {
    try {
        const submission = new Submission(req.body);
        const savedSubmission = await submission.save();
        res.status(201).json(savedSubmission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
