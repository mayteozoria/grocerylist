import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('fridge')
    const { id } = req.query

    const food = await db.collection('foods').findOne({
      _id: ObjectId(id)
    })

    res.json(food)
  } catch (e) {
    console.error(e)
  }
}
