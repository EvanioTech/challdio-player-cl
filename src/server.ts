import express, {Request, Response} from 'express';
import startServer from './app';


const app = startServer();
const port = process.env.PORT || 3333;




app.listen(port, () => {
  console.log('Server is running on port 3333');
});