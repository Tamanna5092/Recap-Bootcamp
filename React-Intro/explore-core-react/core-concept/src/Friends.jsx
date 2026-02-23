import { use } from "react"
import Friend from "./Friend"

export default function Friends({fetchPromise}) {
    const friends = use(fetchPromise)
    console.log(friends)
  return (
    <div>
      <h1>All Frinds: {friends.length}</h1>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
      }
    </div>
  )
}
