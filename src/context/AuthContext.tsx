import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { User, AuthContextType } from '@/types';

// Mock user data
const MOCK_USERS = [
  { id: '1', username: 'testuser', email: 'test@example.com', password: 'password123' },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a logged-in user from localStorage or a cookie
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = MOCK_USERS.find(
          (u) => u.email === email && u.password === password,
        );
        if (foundUser) {
          const userSession = { id: foundUser.id, username: foundUser.username, email: foundUser.email };
          setUser(userSession);
          localStorage.setItem('currentUser', JSON.stringify(userSession));
          setLoading(false);
          resolve(true);
        } else {
          setLoading(false);
          resolve(false);
        }
      }, 500);
    });
  };

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API call and unique user check
    return new Promise((resolve) => {
      setTimeout(() => {
        const userExists = MOCK_USERS.some((u) => u.email === email || u.username === username);
        if (userExists) {
          setLoading(false);
          resolve(false); // User with this email or username already exists
        }

        const newUser = { id: String(MOCK_USERS.length + 1), username, email, password };
        MOCK_USERS.push(newUser);
        const userSession = { id: newUser.id, username: newUser.username, email: newUser.email };
        setUser(userSession);
        localStorage.setItem('currentUser', JSON.stringify(userSession));
        setLoading(false);
        resolve(true);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  if (loading) {
    return null; // Or a simple loading spinner if AuthProvider renders before App's LoadingScreen
  }

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
