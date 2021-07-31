import { Link } from "react-router-dom";
const CountryList = ({ countries, isActive, fetchError }) => {
  const lt__eleBg = isActive ? "lt__ele-Bg" : "";

  return (
    <ul className="countries">
      {countries && !fetchError ? (
        countries.map((country, i) => {
          if (i < 20) {
            return (
              <li className="countries__item" key={i + 1}>
                <div className="countries-img-holder">
                  <Link to={`/country/${country.name}`}>
                    <img
                      className="countries-img"
                      src={country.flag}
                      alt={`${country.name} flag`}
                    />
                  </Link>
                </div>
                <div className={`countries__description ${lt__eleBg}`}>
                  <h3 className="countries__title">{country.name}</h3>
                  <ul className="countries__stats">
                    <li className="countries__pop">
                      <span>Population</span>: {country.population}
                    </li>
                    <li className="countries__region">
                      <span>Region</span>: {country.region}
                    </li>
                    <li className="countries__capital">
                      <span>Capital</span> {country.capital}
                    </li>
                  </ul>
                </div>
              </li>
            );
          }
        })
      ) : (
        <h2>There are no countries avaliables</h2>
      )}
    </ul>
  );
};

export default CountryList;
