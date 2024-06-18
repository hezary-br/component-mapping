import { NotificationPayload } from "./_types"

export function NotificationMapping(payload: NotificationPayload) {
  switch (payload.type) {
    case "INVITED-YOU-TO-EVENT":
      return <NotificationInvitedYouToEvent {...payload} />
    case "SOMEONE-FOLLOWED-YOU":
      return <NotificationSomeoneFollowedYou {...payload} />
    case "SOMEONE-LIKED-YOUR-POST":
      return <NotificationSomeoneLikedYourPost {...payload} />
  }
}

/**
 * Components
 */

type NotificationPayloadProps<T extends NotificationPayload["type"]> = Extract<NotificationPayload, { type: T }>

export function NotificationInvitedYouToEvent({ eventDate, eventName, username }: NotificationPayloadProps<"INVITED-YOU-TO-EVENT">) {
  return (
    <div>
      <strong>{username}</strong> invited you to {eventName} that is going to happen in {eventDate.toLocaleDateString()}
    </div>
  )
}

export function NotificationSomeoneFollowedYou({ username, when }: NotificationPayloadProps<"SOMEONE-FOLLOWED-YOU">) {
  return (
    <div>
      <strong>{username}</strong> followed you {when.toLocaleTimeString()}
    </div>
  )
}

export function NotificationSomeoneLikedYourPost({ post_description, post_slug, username }: NotificationPayloadProps<"SOMEONE-LIKED-YOUR-POST">) {
  return (
    <div>
      <strong>{username} liked your post</strong>
      <span>
        {post_description.substring(0, 20)}... <a href={`/${post_slug}`}>Ver mais</a>
      </span>
    </div>
  )
}
