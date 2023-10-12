import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'
export const UsersList = (props) => {
  const users = useSelector(selectAllUsers)
  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ))

  return (
    <section className="users-list">
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  )
}
