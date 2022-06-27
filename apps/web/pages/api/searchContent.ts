// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import groq from 'groq';
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/sanity';

type Data = {
  result: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      result: 'method not allowed',
      message: 'You should do a GET request to access this',
    });
  }

  const query = `${req.query.q}*`;

  try {
    const data = await client.fetch(
      groq`*[_type == "project" || _type == "webContent" ]  | score(pt::text(body) match "${query}") 
          | order(_score desc) [_score > 0][0..19]  
            {_score, _id, title, slug, webContentType}`
    );

    if (data.length === 0) {
      return res.status(404).json({
        result: '',
        message: 'No posts found',
      });
    }

    res.status(200).json({ result: data, message: 'success' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      result: 'En feil har oppstått',
      message: error.details.description,
    });
  }
}
