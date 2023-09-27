import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  userRole: string | null;
  setUserRole: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextProps>({
  userRole: null,
  setUserRole: () => {},
  token: null,
  setToken: () => {},
  userName:null,
  setUserName: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userRole, setUserRole] = useState<string | null>(
    Cookies.get("userRole") || null
  );
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );

  const [userName, setUserName] = useState<string | null>(
    Cookies.get("userName") || null
  )

  //automatically save stuff to cookies when thers a change
  useEffect(() => {
    // Save user role to cookie when it changes
    if (userRole) {
      Cookies.set("userRole", userRole);
      console.log("user role: ",userRole, Cookies.set("userRole", userRole));
    } else {
      Cookies.remove("userRole");
    }

    // Save token to cookie when it changes
    if (token) {
      Cookies.set("token", token);
      console.log("token", token, Cookies.set("token", token));
    } else {
      Cookies.remove("token");
    }
  }, [userRole, token]);

  if(userName) {
    Cookies.set("userName", userName);
  }
  else {
    Cookies.remove("userName")
  }

  return (
    <AuthContext.Provider value={{ userRole, setUserRole, token, setToken, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => useContext(AuthContext);

export { AuthProvider, useAuth };
