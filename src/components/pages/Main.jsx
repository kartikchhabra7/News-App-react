import React, { useEffect, useState, useCallback } from "react";
import NewsCard from "../../card/NewsCard";
import Input from "../common/Input/Input";
import Loading from "../loader/Loading";

function Main({ prop }) {
  const [apiData, setApiData] = useState([]);
  const [isError, setIsError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const FetchAllDetails = useCallback(async () => {
    try {
      const url = prop
        ? `https://gnews.io/api/v4/top-headlines?category=${prop}&lang=en&country=in&apikey=${process.env.REACT_APP_SECRET_KEY}`
        : `https://gnews.io/api/v4/search?q=example&country=in&token=${process.env.REACT_APP_SECRET_KEY}`;

      const response = await fetch(url);

      if (response.ok) {
        const actualData = await response.json();
        setApiData(actualData.articles);
      } else {
        throw new Error("Failed to Fetch");
      }
    } catch (error) {
      console.log(error);
      setIsError(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1 * 1000);
    }
  }, [prop]);

  useEffect(() => {
    FetchAllDetails();
  }, [FetchAllDetails]);

  const altTitle = "Image Not Found";

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  
  return (
    <>
      {isError && <div>{isError.stack}</div>}
      <div className="text-center">
        <Input
          type="search"
          placeholder="Looking for News..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <NewsCard
        apiData={apiData}
        altTitle={altTitle}
        searchInput={searchInput}
      />
    </>
  );
}

export default Main;
