import express from 'express';
import { sigfoxRouter } from './sigfox';


export const summaryRestRouter = express.Router();

summaryRestRouter.use('/sigfox', sigfoxRouter)