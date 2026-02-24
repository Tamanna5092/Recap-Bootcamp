import { use } from "react"
import SingleUser from "./SingleUser"

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

export default function Users() {
    const users = use(fetchUsers)
    console.log(users)
  return (
    <div>
      <h1>All Users Here: {users.length}</h1>
      {
        users.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
      }
    </div>
  )
}
