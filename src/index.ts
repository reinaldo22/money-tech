import 'reflect-metadata';
import AppError from './shared/errors/AppError';
import 'express-async-errors';
import expenseRoutes  from './routes/expense-Router';
import express, { NextFunction, Request, Response } from 'express';
import './database/connect';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(expenseRoutes);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }
  
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    },
  );

app.listen(3333, () => console.log("Server started"));