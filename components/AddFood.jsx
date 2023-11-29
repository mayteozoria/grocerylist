import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AddFood() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (title.trim() !== '') {
      setTitle('')
      setAmount()
      setDescription('')
    }
    let food = {
      title,
      amount,
      description
    }

    const res = await fetch('api/addFood', {
      method: 'POST',
      body: JSON.stringify(food),

      headers: {
        'Content-type': 'application/json'
      }
    })

    router.push('/')
    router.refresh('/')
    console.log(food)
  }

  return (
    <div>
      <form action="">
        <div className="form__name-container align-center ">
          <label htmlFor="name"> Name: </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Food item"
          />
          <label htmlFor="description"> Description: </label>
          <input
            id="description"
            type="description"
            autoComplete="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <label htmlFor="amount"> Amount: </label>
          <input
            id="amount"
            type="number"
            autoComplete="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1"
          />
        </div>
      </form>
      <div className="submit align-center">
        <button
          type="submit"
          className="submit-btn"
          icon="fa-solid fa-plus"
          onClick={handleSubmit}
        >
          Add Item
        </button>
      </div>
    </div>
  )
}
