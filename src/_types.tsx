export type NotificationPayload =
  | {
      type: "INVITED-YOU-TO-EVENT"
      username: string
      eventName: string
      eventDate: Date
    }
  | {
      type: "SOMEONE-FOLLOWED-YOU"
      username: string
      when: Date
    }
  | {
      type: "SOMEONE-LIKED-YOUR-POST"
      username: string
      post_description: string
      post_slug: string
    }
