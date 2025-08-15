import type { User } from "../types/user";
import type { ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  useMemo,
  useState,
  useCallback,
} from "react";

interface AuthUser {
  user: User;
  token: string;
}

interface AuthContextValue {
  authUser: { user: User | null; token: string } | null;
  isAuthenticated: boolean;
  setAuthUser: (authUser: { user: User; token: string } | null) => void;
  removeAuthUser: () => void;
}

const AuthenticationContext = createContext<AuthContextValue>({
  authUser: null,
  isAuthenticated: false,
  setAuthUser: () => {},
  removeAuthUser: () => {},
});

export const getAuthUser = () => {
  const user = sessionStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;
  if (parsedUser) return parsedUser;
};

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(
    () => getAuthUser() || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!getAuthUser()?.token
  );
    const queryClient = useQueryClient();


  const setAuthUserHandler = useCallback(
    (value: { user: User; token: string } | null) => {
      if (value) {
        sessionStorage.setItem("user", JSON.stringify(value));
        setAuthUser(value);
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem("user");
        setAuthUser(null);
        setIsAuthenticated(false);
      }
    },
    []
  );

  const removeAuthUserHandler = useCallback(() => {
    sessionStorage.removeItem("user");
    setAuthUser(null);
    setIsAuthenticated(false);
    queryClient.clear();
  }, []);

  const values = useMemo(
    () => ({
      authUser,
      isAuthenticated,
      setAuthUser: setAuthUserHandler,
      removeAuthUser: removeAuthUserHandler,
    }),
    [authUser, isAuthenticated, setAuthUserHandler, removeAuthUserHandler]
  );

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
