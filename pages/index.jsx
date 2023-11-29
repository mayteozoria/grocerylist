import Head from 'next/head'
import clientPromise from '../lib/mongodb'

import AddFood from '../components/AddFood'
import { React, useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi'

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise
    const db = client.db('fridge')

    const foods = await db.collection('foods').find({}).limit(20).toArray()

    return {
      props: {
        foods: JSON.parse(JSON.stringify(foods))
        // session: await getSession(context)
      }
    }
  } catch (e) {
    console.error(e)
  }
}

export default function Food({ foods }) {
  const [food, setFood] = useState('')

  const router = useRouter()

  const removeFood = async (id) => {
    // try {
    const res = await fetch(`api/deleteFood?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-ID': id
      }
    })
    console.log(id)
    setFood()
    router.refresh('/')
  }

  return (
    <div>
      <Head>
        <title>Fridge</title>
        <link rel="icon" href="fridge.png" sizes="any" />
      </Head>
      <main className="container">
        <h1 className="font-rocknRollOne font-bold text-3xl items-center">
          Shopping List
        </h1>
        <AddFood />
        <table className="list-content ">
          <thead className="font-bold">
            <tr className="font-bold text-xl">
              <th>Name</th>
              <th>Amount</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id}>
                <td>{food.title}</td>
                <td>{food.amount}</td>
                <td>
                  <button
                    type="submit"
                    value="Submit"
                    onClick={() => removeFood(food._id)}
                    className="button text-red-600"
                  >
                    <HiOutlineTrash size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
