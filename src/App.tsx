import { NotificationMapping } from "./_component"
import { NotificationPayload } from "./_types"

function App() {
  const notificationsFromDB: NotificationPayload[] = [
    {
      type: "INVITED-YOU-TO-EVENT",
      eventDate: new Date("2024-05-15T14:30:00"),
      eventName: "React Conf",
      username: "vitormarkis",
    },
    {
      type: "SOMEONE-FOLLOWED-YOU",
      username: "theobard",
      when: new Date("2024-05-13T12:34:00"),
    },
    {
      type: "SOMEONE-LIKED-YOUR-POST",
      post_description:
        'É como se você dissese "Vai rolar uma guerra aqui, meus dados mudarão frequentemente, se eu tiver que renderizar esses componentes, eles vão sofrer"',
      post_slug: "por_que_acham_que_context",
      username: "vitormarkis",
    },
  ]

  return notificationsFromDB.map(NotificationMapping)
}

export default App
