import Notification from "./Notification";
import { notifications } from "../data/data";
import { useContext, useEffect } from "react";
import { NotificationsContext } from "../context/NotificationContext";

function AllNotifications() {
  const { isNotRead, isAllRead, handleNotRead, setIsNotRead } =
    useContext(NotificationsContext);

  useEffect(
    function () {
      if (isAllRead) setIsNotRead([]);
    },
    [isAllRead, setIsNotRead]
  );

  return (
    <>
      {notifications.map((cur) => (
        <Notification
          key={cur.id}
          value={cur}
          isNotRead={isNotRead.includes(cur.id)}
          onClick={() => handleNotRead(cur.id)}
        />
      ))}
    </>
  );
}

export default AllNotifications;
