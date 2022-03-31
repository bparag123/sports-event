import express, { Application } from "express";
import "./sync"
import { userRouter, categoryRouter, teamRouter, tournamentRouter, gameRouter } from "./routers"
import errorHandler from "./middlewares/errorHandler";

const app: Application = express()
app.use(express.json())

//Defining Routes for all Controllers
app.use("/user", userRouter)
app.use("/team", teamRouter)
app.use("/game", gameRouter)
app.use("/tournament", tournamentRouter)
app.use("/category", categoryRouter)
app.use(errorHandler)
app.listen(3000, () => {
    console.log(`Server is running`);
})


