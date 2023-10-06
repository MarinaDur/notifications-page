import { createContext, useState } from "react";

const NotificationsContext = createContext();

function NotificationsProvider({ children }) {
  const [isNotRead, setIsNotRead] = useState([1, 2, 3]);
  const [isAllRead, setIsAllRead] = useState(false);

  function handleNotRead(notifId) {
    if (isNotRead.includes(notifId)) {
      setIsNotRead((prev) => {
        return prev.filter((id) => id !== notifId);
      });
    }
  }

  function handleAllMarked() {
    setIsAllRead(true);
  }

  return (
    <NotificationsContext.Provider
      value={{
        isNotRead,
        isAllRead,
        handleNotRead,
        handleAllMarked,
        setIsNotRead,
        setIsAllRead,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export { NotificationsProvider, NotificationsContext };
