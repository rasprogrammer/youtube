import { createContext, useContext, useEffect, useState } from "react";
import { authorize } from "../api/auth";

type User = {
  id: string;
  name: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void; // important for login/logout
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await authorize({ token });
        setUser(response.user);
      } catch (error) {
        console.log("Auth failed:", error);
        localStorage.removeItem("token"); // cleanup invalid token
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext)!
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider"); 
  }
  return context; 
};