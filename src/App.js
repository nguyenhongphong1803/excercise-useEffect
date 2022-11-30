import { useEffect, useState } from "react";

export default function App() {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [contents, setContents] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((content) => setContents(content));
  }, [type]);

  return (
    <div className="App">
      <div>
        <div style={{ padding: 10 }}>Nguyễn Hồng Phong thực hành useEffect</div>
        {tabs.map((tab) => (
          <button
            style={
              tab === type ? { color: "#fff", backgroundColor: "#333" } : {}
            }
            onClick={() => setType(tab)}
            key={tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>{content.title || content.name}</li>
        ))}
      </ul>
    </div>
  );
}
