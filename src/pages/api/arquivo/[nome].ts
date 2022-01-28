import { NextApiRequest, NextApiResponse } from 'next';
import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const pipeline = promisify(stream.pipeline);

    let result = await fetch(`${process.env.PORTALTEMPORARIO_API_URL}arquivo/get`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome: request.query.nome})
    })

    const filename =  result.headers.get('Content-Disposition').split('filename=')[1];
    const type =  result.headers.get('Content-Disposition');

    response.setHeader('Content-Type', type);
    response.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    await pipeline(result.body, response);
}