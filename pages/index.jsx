import Head from 'next/head'
import AddFood from '@/components/AddFood'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fridge</title>
        <link rel="icon" href="fridge.png" sizes="any" />
      </Head>
      <AddFood />
    </div>
  )
}
