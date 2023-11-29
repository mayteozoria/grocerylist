import clientPromise from '@/lib/mongodb'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('fridge')
    const { title, amount, description } = req.body

    const food = await db
      .collection('foods')
      .insertOne({ title, amount, description })

    res.json(food)
  } catch (e) {
    console.error(e)
    // throw new Error(e).message
  }
}
