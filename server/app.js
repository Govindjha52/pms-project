import express from "express"
import {config} from "dotenv"
import { connection } from "./db/dbConnection.js"

const app = express()

config({path: "./config/.env"})
connection()

export default app