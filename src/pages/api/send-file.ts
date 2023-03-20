// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import formidable from 'formidable';
export const config = {
  api: {
    bodyParser: false,
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method === 'POST') {
  //
  //   try {
  //     const data = await new Promise((resolve, reject) => {
  //       const form = formidable();
  //
  //       form.parse(req, (err, fields, files) => {
  //         if (err) reject({ err });
  //         resolve({ err, fields, files });
  //       });
  //     });
  //
  //     const formData = new FormData();
  //
  //     Object.entries(data.fields).forEach(([key, value]) => {
  //       console.log(key, value)
  //       formData.set(key, value);
  //     });
  //     for(let [name, value] of formData) {
  //       console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
  //     }
  //     // const {data, url} = req.body
  //     // const formData = new FormData();
  //     // Object.entries(data.imagesCredentials?.logo.fields).forEach(([key, value]) => {
  //     //   formData.set(key, value);
  //     // });
  //     // formData.set('Content-Type', 'image/png');
  //     // formData.set('file', featuredImageFile, `featuredImageFile-${companySoulId}`);
  //     // formData.get('file')
  //     //
  //     // console.log(formData)
  //     // const data = await axios.post(req.body.url, req.body.formData);
  //     // console.log(data, 'data');
  //   } catch (e: any) {
  //     res.status(400).json(e);
  //   }
  // }
}
