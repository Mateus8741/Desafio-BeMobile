import { THeader } from "./components/THeader";
import { TRow } from "./components/TRow";

export function TBody() {
  return (
    <>
      <THeader />
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <TRow key={item} />
      ))}
    </>
  );
}
