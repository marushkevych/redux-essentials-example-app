import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchNotifications,
  selectUnreadNotificationsCount,
} from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount)
  const unreadNotificationsBadge =
    unreadNotificationsCount === 0 ? null : (
      <span className="badge">{unreadNotificationsCount}</span>
    )

  const fetchNewNotifications = () => dispatch(fetchNotifications())
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
