import Image from 'next/image'
import Link from 'next/link'
import bag from '../public/bag.png'
// import { IoIosArrowRoundBack } from 'react-icons/io'

export default function About() {
  return (
    <div>
      <nav>
        <Link
          className="font-rocknRollOne font-bold text-3xl text-left"
          href="/"
        >
          <h2>Home</h2>
          {/* <IoIosArrowRoundBack /> */}
        </Link>
      </nav>

      <body>
        <div className=" py-0 flex flex-row text-2xl">
          <Image
            src={bag}
            // layout="responsive"
            height={700}
            width={700}
            quality={100}
            alt="Grocery bag "
          />

          <p>
            Shopping list app with MongoDB and NextAuth. Add and Delete items to
            your list. Use Google Auth or Credentials.
            <p className="font-bold">Username: "fridge" </p>
            <p className="font-bold">Password: "list" </p>
          </p>
        </div>
      </body>
    </div>
  )
}
