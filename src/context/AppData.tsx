import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const DATA_URL =
  "https://gist.githubusercontent.com/Gexary/d008c8c95d604c1fb717824fc13828c9/raw";

interface AppDataContextType {
  data: any;
  loading: boolean;
  error: any;
}

const AppDataContext = createContext<AppDataContextType | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return <AppDataContext.Provider value={{ data, loading, error }}>{children}</AppDataContext.Provider>;
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (context === null) throw new Error("useAppData must be used within a AppDataProvider");
  return context;
}
