import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(router);

app.listen(3000, () => {
	console.log('listening on port 3000');
});

// app.get('/', (req: Request, res: Response) => {
// 	res.send(`
//     <div>
//       <h1>Hi There!</h1>
//     </div>
//   `);
// });
