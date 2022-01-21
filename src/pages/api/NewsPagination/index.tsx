import { NextApiRequest, NextApiResponse } from "next"

export default async (request: NextApiRequest, response: NextApiResponse) => {
    let body = JSON.parse(request.body)
    
    let newsApiResult = await ((await fetch(`${process.env.BACKEND_URL}noticias?page=${body.page}&size=${body.pageSize}`, {
        method: 'GET'
    })).json())
    if (newsApiResult.content.length) {
        return response.status(200).setHeader('Content-Type', 'application/json').send(newsApiResult.content);
    } else {
        return response.status(500).setHeader('Content-Type', 'application/json').end()
    }
}