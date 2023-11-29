import Link from 'next/link'
import BtnLogin from '../components/BtnLogin'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center  p-6">
      <Link
        href="/about"
        className="font-rocknRollOne font-bold text-3xl items-center"
      >
        <h1>About</h1>
      </Link>
      <BtnLogin />
    </nav>
  )
}
