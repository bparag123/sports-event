import express, { Request, Response, NextFunction, Application } from "express";
import "./sync"
import {userRouter, categoryRouter, teamRouter, tournamentRouter, gameRouter} from "./routers"

const app: Application = express()
app.use(express.json())
app.get("", (req: Request, res: Response, next: NextFunction) => {
    res.json("Hello Json Data")
})

app.use("/user", userRouter)
app.use("/team", teamRouter)
app.use("/game", gameRouter)
app.use("/tournament", tournamentRouter)
app.use("/category", categoryRouter)

app.listen(3000, () => {
    console.log(`Server is running`);
})


