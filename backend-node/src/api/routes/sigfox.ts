import express from 'express';
import { logSigfoxData } from '../controllers';

export const sigfoxRouter = express.Router();


sigfoxRouter.route('/uplink')
    .post(logSigfoxData)
