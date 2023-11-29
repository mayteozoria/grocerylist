import clientPromise from '@/lib/mongodb'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('fridge')

    const foods = await db.collection('foods').find({}).limit(10).toArray()

    res.json(foods)
  } catch (e) {
    console.error(e)
  }
}
