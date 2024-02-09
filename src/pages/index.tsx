import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Advisor } from "../service/service";
import { useAdvisorsStore } from "../providers/RootStoreProvider";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import SearchFilters from "../components/SearchFilters/SearchFilters";
import "./index.css";

const Index: React.FC = observer(() => {
  const {
    getAdvisors,
    advisors,
    getMoreAdvisors,
    isFiltersApplied,
    filteredAdvisors,
  } = useAdvisorsStore();

  const { targetRef, isIntersecting } = useIntersectionObserver({
    rootMargin: "10px",
  });

  useEffect(() => {
    getAdvisors();
  }, []);

  console.log(isIntersecting);

  useEffect(() => {
    if (isIntersecting) {
      getMoreAdvisors();
    }
  }, [isIntersecting]);

  const advisorsData = isFiltersApplied ? filteredAdvisors : advisors;

  return (
    <>
      <SearchFilters />
      <div className="wrapper">
        <h1>Advisor List</h1>
        {advisorsData.map((advisor: Advisor) => (
          <div key={advisor.id}>
            <p>{advisor.name}</p>
            <p>{advisor.language}</p>
            <p>{advisor.status}</p>

            <img src={advisor.avatar} alt="" width={150} height={150} />
            {/*<p>Online: {advisor.online ? 'Yes' : 'No'}</p>*/}
            {/*<p>Languages: {advisor.languages.join(', ')}</p>*/}
            {/*<p>Reviews: {advisor.reviews}</p>*/}
          </div>
        ))}
        <div ref={targetRef} style={{ height: "20px" }} />
        {!isIntersecting && <p>Loading...</p>}
      </div>
    </>
  );
});

export default Index;
