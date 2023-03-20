// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import SoulSearchApi from '@app/api/http/apiServices';
import { IPatchCompanyRequest } from '@app/types/httpTypes';

interface IBody extends NextApiRequest {
  body: IPatchCompanyRequest;
}

export default async function handler(req: IBody, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log(req.body)
      const data = await SoulSearchApi.patchCompanyBySoulId(req.body);
      res.status(200).json(data);
    } catch (e: any) {
      res.status(500).json(e);
    }
  }
}
