import { VStack } from "native-base";
import { useEffect, useState } from "react";
import { EmployeesDTO } from "../../DTOs/EmployeesDTO";
import { api } from "../../services/api";
import { SeachBar } from "../SearchBar";
import { THeader } from "./components/THeader";
import { TRow } from "./components/TRow";

export function TBody() {
  const [employees, setEmployees] = useState<EmployeesDTO[]>([]);
  const [searchEmployees, setSearchEmployees] = useState("");

  function filterEmployees(s: string) {
    let arr = JSON.parse(JSON.stringify(searchEmployees));
    const filtered = arr.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(s.toLowerCase()) ||
        item.job.toLowerCase().includes(s.toLowerCase()) ||
        item.phone.toLowerCase().includes(s)
      );
    });
    setEmployees(filtered);
  }

  async function fetchApi() {
    const { data } = await api.get("/employees");
    setEmployees(data);
    setSearchEmployees(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <VStack mb={6}>
      <SeachBar
        placeholder="Pesquisar "
        onChangeText={(value) => filterEmployees(value)}
      />

      <THeader />
      {employees?.map((item) => (
        <TRow
          key={item.id}
          image={item.image}
          name={item.name}
          job={item.job}
          admission_date={item.admission_date}
          phone={item.phone}
        />
      ))}
    </VStack>
  );
}
