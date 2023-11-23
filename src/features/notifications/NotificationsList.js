import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllNotifications } from './notificationsSlice'
import { selectAllUsers } from '../users/usersSlice'
import { formatDistanceToNow, parseISO } from 'date-fns'
export const NotificationsList = (props) => {
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)
  const renderedNotifications = notifications.map((notification) => {
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    }
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    return (
      <div key={notification.id} className="notification">
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>{<i>{timeAgo} ago</i>}</div>
      </div>
    )
  })

  return (
    <section className="users-list">
      <h2>Notifications</h2>
      <ul>{renderedNotifications}</ul>
    </section>
  )
}
