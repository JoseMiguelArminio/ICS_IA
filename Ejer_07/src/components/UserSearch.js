import React, { useEffect, useState } from "react";

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        fetch(`https://jsonplaceholder.typicode.com/users?username=${searchTerm}`)
          .then(res => res.json())
          .then(data => setResults(data))
          .catch(err => console.error(err));
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
