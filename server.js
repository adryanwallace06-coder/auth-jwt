import express from "express";
import jwt from "jsonwebtoken"
import usuarios from "./usuarios"

const app = express();
app.use(express.json());
