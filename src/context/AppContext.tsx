import { createContext, ReactNode, useEffect, useState } from "react";
import { EmployeesDTO } from "../DTOs/EmployeesDTO";
import { api } from "../services/api";

interface AppContextData {
  employees: EmployeesDTO[];
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

interface ContextProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: ContextProps) {
  const [employees, setEmployees] = useState<EmployeesDTO[]>([]);

  async function fetchApi() {
    const { data } = await api.get("/employees");
    setEmployees(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const value = {
    employees,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
