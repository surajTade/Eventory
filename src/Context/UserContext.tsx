import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { app } from "../db/firebase";

// Define a type for the context
interface UserContextType {
  user: User | undefined;
  login: () => void;
  logout: () => void;
}

// Define a default value for the context
const defaultUserContext: UserContextType = {
  user: undefined,
  login: () => {},
  logout: () => {},
};

// Create the UserContext with default values
const UserContext = createContext<UserContextType>(defaultUserContext);

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Create the UserProvider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [appInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    if (!appInitialized) {
      app;
      setAppInitialized(true);
    }
    const fetchUser = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    fetchUser();
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);

    if (result == null) {
      console.log("Error while signIn: result not found");
      return;
    }

    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (credential == null) {
      console.log("Error while signIn: Credentials not found");
      return;
    }

    const user = result.user;

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
