import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/add-movie">Add Movie</Link>
          </li>
          <li>
            <Link to="/movies">View Movies</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminPage