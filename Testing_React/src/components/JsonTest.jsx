import { useEffect, useState } from "react";
const JsonTest = () => {
  const [loading, setLoading] = useState(false);
  const [json, setJson] = useState([]);
  const fetchJson = async (params = {}) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      console.log("response Data", { response });
      const data = await response.json();

      setJson(response);
      console.log("Json Data", { data });
      setLoading(true);
    } catch (err) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJson();
  }, []);
  return (
    <div>
      {json.map(j => (
        <div key={j.id}> <h3>{j.title}</h3>
          <p>{j.body}</p></div>
      ))}
    </div>
    
  );
};

export default JsonTest;
