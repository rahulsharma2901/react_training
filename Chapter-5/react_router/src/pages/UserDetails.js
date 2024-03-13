import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const userId = useParams();
  const id = userId.id
  return (
    <div>
      <h2>User {id} Details Page</h2>

    </div>
  )
}

export default UserDetails
