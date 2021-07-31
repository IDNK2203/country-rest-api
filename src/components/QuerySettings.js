import { useState } from "react";

const QuerySection = ({ fetchData, isActive }) => {
  const lt__eleBg = isActive ? "lt__ele-Bg" : "";
  // const lt__eleBg = isActive ? "lt__ele-Bg" : "";
  //
  const [searchVal, setSearchVal] = useState("");
  const handleSearchBar = (e) => {
    let url;
    setSearchVal(e.target.value);
    url = "https://restcountries.eu/rest/v2/name/" + e.target.value;
    if (e.target.value === "") url = "https://restcountries.eu/rest/v2/all/";
    fetchData(url);
  };

  //
  const [conrtyFilterDD, setConrtyFilterDD] = useState("");
  const handleConrtyFilterDD = (e) => {
    setConrtyFilterDD(e.target.value);
    let url = "https://restcountries.eu/rest/v2/region/" + e.target.value;
    fetchData(url);
  };
  return (
    <section className="query-opts">
      <div className="search-bar">
        <div className="search-bar__icon">
          <ion-icon name="search"></ion-icon>
        </div>
        <input
          type="text"
          className={`search-bar__input ${lt__eleBg}`}
          name="Search-bar"
          id="Search-bar"
          placeholder="search for a country"
          value={searchVal}
          onChange={handleSearchBar}
        />
      </div>
      <div className="dropdown">
        <select
          name="dropdown"
          id="dropdown"
          className={`dropdownInput ${lt__eleBg}`}
          value={conrtyFilterDD}
          onChange={handleConrtyFilterDD}
        >
          <option value="Africa" name="dropdown">
            {" "}
            Africa
          </option>
          <option value="Americas" name="dropdown">
            {" "}
            Americas
          </option>
          <option value="Asia" name="dropdown">
            {" "}
            Asia
          </option>
          <option value="Europe" name="dropdown">
            {" "}
            Europe
          </option>
          <option value="Oceania" name="dropdown">
            {" "}
            Oceania
          </option>
        </select>
      </div>
    </section>
  );
};

export default QuerySection;
