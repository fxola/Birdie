import * as express from "express";
import * as cors from "cors";
import { eventsController } from "./controllers/events";
import { pingController } from "./controllers/ping";

const app = express();

app.use(cors());
app.use(pingController);
app.use(eventsController);

app.use((_, __, next) => {
  let error = {
    message: new Error("You are trying to access a wrong Route"),
    status: 400,
    success: false
  };
  next(error);
});

//@ts-ignore
app.use((error: Error & { status: number }, _, response: express.Response) => {
  response.status(error.status || 500);
  response.json({
    status: error.status || 500,
    error: error.name,
    message: error.message
  });
});

export default app;
