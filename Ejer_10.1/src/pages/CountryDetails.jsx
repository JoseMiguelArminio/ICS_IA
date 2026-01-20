import {
  useParams,
  useRouteLoaderData,
  Link,
} from "react-router-dom";

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData("root");

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName
  );

  if (!country) {
    return <h2>País no encontrado</h2>;
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No disponible";

  const borders = country.borders || [];

  return (
    <div>
      <h2>{country.name.official}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p>
        <strong>Población:</strong>{" "}
        {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Región:</strong> {country.region} –{" "}
        {country.subregion}
      </p>
      <p><strong>Idiomas:</strong> {languages}</p>

      <h3>Países Fronterizos</h3>
      {borders.length === 0 && <p>No tiene fronteras</p>}

      <ul>
        {borders.map((code) => {
          const borderCountry = countries.find(
            (c) => c.cca3 === code
          );

          return (
            <li key={code}>
              {borderCountry ? (
                <Link
                  to={`/country/${borderCountry.name.common.toLowerCase()}`}
                >
                  {borderCountry.name.common}
                </Link>
              ) : (
                code
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
