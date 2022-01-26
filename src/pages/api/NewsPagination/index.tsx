import { NextApiRequest, NextApiResponse } from "next"
import Content from "../../../components/Menu/Content"

export default async (request: NextApiRequest, response: NextApiResponse) => {
  let body = await JSON.parse(request.body)

  let newsApiResult = await fetch(`${process.env.BACKEND_URL}noticias?page=${body.page}&size=${body.pageSize}`, {
    method: 'GET'
  }).then(
    response => {
      return response.json().then(
        result => {
          return result.content;
        }
      ).catch(
      error => {
          console.log(error);
          return [];
        }
      )
    }
  ).catch(
    error => {
      console.log(error);
      return [];
    }
  )

  return response.status(200).send(newsApiResult);
}