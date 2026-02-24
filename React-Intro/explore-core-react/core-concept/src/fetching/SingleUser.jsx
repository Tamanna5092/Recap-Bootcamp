import React from 'react'

export default function SingleUser({user}) {
    const {name, company, address} = user
    console.log(user.company.name)
  return (
    <div>
        <h3>Name: {name}</h3>
        <h4>Company name: {company.name}</h4>
        <li>City: {address.city}</li>
    </div>
  )
}
