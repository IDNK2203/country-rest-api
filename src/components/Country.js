import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Country = ({ isActive }) => {
  const lt__eleBg = isActive ? "lt__ele-Bg" : "";

  const countryName = useParams("id");
  const [countryData, setCountryData] = useState(null);
  const url = `https://restcountries.eu/rest/v2/name/${countryName.id}?fullText=true`;
  // fetch country data from url and country data state to the country data
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountryData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <section>
      <div className="home-btn-container">
        <Link to={"/"} className={`btn btn--link ${lt__eleBg}`}>
          <ion-icon name="arrow-back-sharp"></ion-icon> Home
        </Link>
      </div>
      {countryData ? (
        countryData.map((country, i) => {
          let langArr = country.languages.map((lang) => lang.name);
          langArr = langArr.join(", ");

          return (
            <div className="country" key={i + 1}>
              <div className="country__flag-holder">
                <img
                  className="countries__flag"
                  src={country.flag}
                  alt={`${country.name} flag`}
                />
              </div>
              <div className="country__info">
                <h3 className="country__title">{country.name}</h3>
                <div className="country__data">
                  <ul className="country__stats">
                    <li className="country__stat">
                      <span>Native Name</span>: {country.nativeName}
                    </li>
                    <li className="country__stat">
                      <span>Population</span>: {country.population}
                    </li>
                    <li className="country__stat">
                      <span>Region</span>: {country.region}
                    </li>
                    <li className="country__stat">
                      <span>Sub Region</span>: {country.subregion}
                    </li>
                    <li className="country__stat">
                      <span>Capital</span>: {country.capital}
                    </li>
                  </ul>

                  <ul className="country__stats">
                    <li className="country__stat">
                      <span>Top Level Domain</span>: {country.topLevelDomain}
                    </li>
                    <li className="country__stat">
                      <span>Currencies</span>: {country.currencies[0].name}
                    </li>
                    <li className="country__stat">
                      <span>Languages</span>: {langArr}
                    </li>
                  </ul>
                </div>
                <div className="country__border">
                  <p className="country__border-countries-label">
                    Border Countries:
                  </p>
                  <ul className="country__border-countries">
                    {country.borders.map((border) => (
                      <li className={`country__border-country ${lt__eleBg}`}>
                        {border}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>This country was not found</h2>
      )}
    </section>
  );
};

export default Country;
