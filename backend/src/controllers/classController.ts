import { Request, Response } from "express";
import Class from "../models/Class";

export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createClass = async (req: Request, res: Response) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};
