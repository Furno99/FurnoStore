// Adding packages
import express,{Express ,Application} from "express";
import dotenv from "dotenv";
import router from "../server_manager/server_router/serverRouter";
import cors from "cors";

dotenv.config();

// Creating Server App
const app : Application = express();
const port = process.env.PORT;
const API = process.env.ReqServerAPI

const corsOptions = {
    origin : API,
}

// Configuring App
app.use(cors(corsOptions));
app.use(express.json({limit : "50mb"}));
app.use(express.urlencoded({ extended: true ,limit : "50mb"}));

// Router
app.use("/api/v1/furno",router);

app.listen(port, () => console.log(`The server is listening on port : ${port}`));
