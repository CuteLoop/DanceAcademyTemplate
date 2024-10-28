import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.send("List of users"));
router.post("/", (req, res) => res.send("Create a new user"));

export default router;
