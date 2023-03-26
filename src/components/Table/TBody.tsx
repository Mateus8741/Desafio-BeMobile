import { Stack, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { EmployeesDTO } from "../../DTOs/EmployeesDTO";
import { api } from "../../services/api";
import { SeachBar } from "../SearchBar";
import { THeader } from "./components/THeader";
import { TRow } from "./components/TRow";

import { Skeleton } from "moti/skeleton";

export function TBody() {
  const [employees, setEmployees] = useState<EmployeesDTO[]>([]);
  const [searchEmployees, setSearchEmployees] = useState("");
  const [loading, setLoading] = useState(false);

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
    try {
      setLoading(true);

      const { data } = await api.get("/employees");

      setEmployees(data);

      setSearchEmployees(data);
    } catch (error) {
      console.log(error);

      setLoading(false);
    } finally {
      setLoading(false);
    }
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

      {loading ? (
        <Stack space={3} mt={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Skeleton
              key={item}
              width="100%"
              height={55}
              boxHeight={42}
              colorMode="light"
              transition={{
                type: "timing",
                duration: 1000,
                delay: 100,

                loop: true,

                repeatReverse: true,
              }}
            />
          ))}
        </Stack>
      ) : (
        employees?.map((item) => (
          <TRow
            key={item.id}
            image={item.image}
            name={item.name}
            job={item.job}
            admission_date={item.admission_date}
            phone={item.phone}
          />
        ))
      )}
    </VStack>
  );
}
