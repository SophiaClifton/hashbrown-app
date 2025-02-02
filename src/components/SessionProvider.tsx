import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  username: string;
  email: string;
  id: number;
}

export const defaultUser: User = {
  username: "Penny Stock",
  email: "penny_stock@gmail.com",
  id: 1,
};



interface SessionContextType {
  user: User;
  setUser: (user: User) => void;
}

// Create session context
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// SessionProvider component
export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : defaultUser;
  });

  useEffect(() => {
    if (user && user !== defaultUser) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use session state
export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  // Always return a default user when no session exists
  return {
    user: context.user ?? defaultUser,
    setUser: context.setUser,
  };
};


