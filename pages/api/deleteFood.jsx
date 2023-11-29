import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'bson'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('fridge')
    const { id } = req.query

    const food = await db.collection('foods').deleteOne({
      _id: new ObjectId(id)
    })
    res.json(id)
  } catch (e) {
    console.error(e)
    throw new Error(e).message
  }
}
