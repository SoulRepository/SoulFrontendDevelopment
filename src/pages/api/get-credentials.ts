// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import SoulSearchApi from '@app/api/http/apiServices';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = await SoulSearchApi.getImageCredentials(req.body);
      res.status(200).json(data);
    } catch (e: any) {
      res.status(400).json(e);
    }
  }
}
