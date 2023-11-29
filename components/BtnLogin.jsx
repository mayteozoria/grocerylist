import { useSession, signIn, signOut } from 'next-auth/react'

const Signin = () => {
  const { data: session, status } = useSession()

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="font-rocknRollOne font-bold text-xl ">
          Welcome, {session.user.name}
        </p>
        <button
          onClick={() => signOut()}
          className=" submit-btn font-rocknRollOne"
        >
          Sign Out
        </button>
      </div>
    )
  }
  return (
    <button
      id="submit"
      onClick={() => signIn()}
      className="submit-btn font-rocknRollOne"
    >
      Sign In
    </button>
  )
}

export default Signin
