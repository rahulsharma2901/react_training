import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <div>
      <h2>Welcome to the Users' Details Page</h2>
      <h4>
        <Link to='/users/1'>User 1</Link>
      </h4>

      <h4>
        <Link to='/users/2'>User 2</Link>
      </h4>

      <h4>
        <Link to='/users/3'>User 3</Link>
      </h4>
    </div>
  )
}

export default Users
