import { Button } from "@/components/button";
import { FiEdit } from "react-icons/fi";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2em",
      }}
    >
      <h1>Button Component Demo</h1>

      <Button label="編集" variant="black" iconLeft={<FiEdit />} />
      <Button label="編集" variant="border" iconLeft={<FiEdit />} />
      <Button label="編集" variant="white" iconLeft={<FiEdit />} />
    </div>
  );
}
