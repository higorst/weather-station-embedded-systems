import express, { Request, Response } from 'express';

const router = express.Router();

router.post(
    '/values',
    (request: Request, response: Response) => {
        console.log(request.body);
        response.status(201).send({success: true});
    }
);

export { router as station};