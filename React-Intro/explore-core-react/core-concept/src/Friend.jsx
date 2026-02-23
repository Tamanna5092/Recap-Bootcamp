import React from 'react'

export default function Friend({friend}) {
    const {name, email, phone} = friend
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <p>Phone: {phone}</p>
    </div>
  )
}
