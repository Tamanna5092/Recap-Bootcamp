import { use } from 'react'

export default function User({fetchUser}) {
    const users = use(fetchUser)
    console.log(users)
  return (
    <div>
      <h1>User Card: {users.length}</h1>
      {/* <h2>User name: {users.name}</h2> */}
    </div>
  )
}
