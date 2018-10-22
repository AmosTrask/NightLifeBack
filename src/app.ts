require("dotenv").config();

import express from "express";

const cors = require("cors");
import expressValidator from "express-validator";

import { EchoAPI } from "./api/echo";
import { UserAPI } from "./api/user-route";
import { AuthGuard } from "./auth/auth-guard";
import { TokenIssuer } from "./auth/token-issuer";

const app = express();

app.use(cors());
app.use(expressValidator());
app.use(express.json());

app.use("/auth", TokenIssuer);

app.use(AuthGuard);

app.use("/echo", EchoAPI);
app.use("/user", UserAPI);

export default app;
