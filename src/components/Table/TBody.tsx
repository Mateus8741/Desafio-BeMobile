import { VStack } from "native-base";
import { useEffect, useState } from "react";
import { useApp } from "../../hooks/useApp";
import { SeachBar } from "../SearchBar";
import { THeader } from "./components/THeader";
import { TRow } from "./components/TRow";

export function TBody() {
  const { employees } = useApp();

  const [searchEmployees, setSearchEmployees] = useState("");
  const [list, setList] = useState(employees);

  function filterEmployees() {
    const filtered = employees.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchEmployees.toLowerCase()) ||
        item.job.toLowerCase().includes(searchEmployees.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchEmployees)
      );
    });

    setList(filtered);
  }

  useEffect(() => {
    filterEmployees();
  }, [searchEmployees]);

  return (
    <VStack mb={6}>
      <SeachBar
        placeholder="Pesquisar "
        onChangeText={(value) => setSearchEmployees(value)}
      />

      <THeader />
      {list?.map((item) => (
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
