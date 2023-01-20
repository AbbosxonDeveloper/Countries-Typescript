import express, {Application} from "express";
import router from "./modules/countries/router";
import mongo from "./utils/mongo";

const app:Application = express()

app.use(express.json())
app.use(router)

mongo()
  .then((): void => console.log("Connected"))
  .catch((err: unknown) => console.log(err));

app.listen(6060, ():void => console.log(':6060'))
