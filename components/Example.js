import { useEffect, useState } from "react";

export function Example() {
  const [name, setName] = useState("");
  async function fetchData() {
    try {
      const result = await fetch("/api/hello").then((response) =>
        response.json()
      );
      setName(result.name);
    } catch (e) {
      setName("Something bad happen, try again");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Result is: {name}</div>;
}
