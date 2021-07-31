import QuerySection from "./QuerySettings";
import { useState, useEffect } from "react";
import CountryList from "./CountryList";

const Home = ({ isActive }) => {
  // set blog data state & url
  const [countryData, setcountryData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  // const [isPending, setIsPending] = useState(false);
  const url = "https://restcountries.eu/rest/v2/all";
  // fetch blog data from url and blog data state to the blog data
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("This Country does not exist");
      }
      const data = await res.json();
      setFetchError(null);
      setcountryData(data);
    } catch (error) {
      setFetchError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <main className="main">
      {/* Search and Filter inputs section */}
      <QuerySection fetchData={fetchData} isActive={isActive} />
      {/* country componenet */}
      <CountryList
        countries={countryData}
        fetchError={fetchError}
        isActive={isActive}
      />
    </main>
  );
};

export default Home;
