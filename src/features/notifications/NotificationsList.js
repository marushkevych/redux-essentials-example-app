import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  allNotificationsRead,
  selectAllNotifications,
} from './notificationsSlice'
import { selectAllUsers } from '../users/usersSlice'
import { formatDistanceToNow, parseISO } from 'date-fns'
import classnames from 'classnames'

export const NotificationsList = (props) => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  useLayoutEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map((notification) => {
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    }
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const notificationClassname = classnames('notification', {
      new: notification.isNew,
    })
    return (
      <div key={notification.id} className={notificationClassname}>
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
