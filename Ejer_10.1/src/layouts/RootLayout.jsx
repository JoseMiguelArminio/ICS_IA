import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function RootLayout() {
  const countries = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: "300px", overflowY: "auto" }}>
        <input
          type="text"
          placeholder="Buscar país..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3}>
              <NavLink
                to={`/country/${country.name.common.toLowerCase()}`}
              >
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  width="20"
                />
                {country.name.common}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <main style={{ padding: "1rem", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
