import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';

import { eventsController } from './controllers/events';
import { pingController } from './controllers/ping';

const app = express();

app.use(cors());
app.use(pingController);
app.use(eventsController);

const publicPath = path.join(__dirname, '../..', 'front-end/build');
app.use(express.static(publicPath));

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, '../../front-end/build', 'index.html'));
});

app.get('*', (_, response: express.Response) => {
  response
    .status(404)
    .json({ status: 404, message: 'Route does not exist', success: false });
});

export default app;
