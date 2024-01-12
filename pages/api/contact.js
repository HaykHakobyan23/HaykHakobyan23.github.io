import { mongooseConnect } from "@/lib/mongoose";
import { Contact } from "@/models/Contact";
export default async function handel(req, res) {
  const { method } = req
  await mongooseConnect()
 

  if (method == "GET") {
    if (req.query?.id) {
      res.json(await Contact.findOne({ _id: req.query.id }))
    } else {
      res.json(await Contact.find())
    }
  }

  if (method === "POST") {
    const {firstname, lastname, email, phoneNumber, messenger} = req.body;
    const productDoc = await Contact.create({
        firstname, lastname, email, phoneNumber, messenger
    })
    res.json(productDoc)
  }

  if (method === "PUT") {
    const { firstname, lastname, email, phoneNumber, messenger, _id } = req.body;
    await Contact.updateOne({ _id, }, { firstname, lastname, email, phoneNumber, messenger })
    res.json(true)
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Contact.deleteOne({ _id: req.query?.id })
      res.json(true)
    }
  }
}