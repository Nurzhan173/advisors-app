import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Advisor } from "../service/service";
import { useAdvisorsStore } from "../providers/RootStoreProvider";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import SearchFilters from "../components/SearchFilters/SearchFilters";
import "./index.css";
import { toJS } from "mobx";

const Index: React.FC = observer(() => {
  const {
    getAdvisors,
    getMoreAdvisors,
    getAdvisorsList,
    filters,
    filterAdvisors,
    filteredAdvisors,
  } = useAdvisorsStore();

  const { targetRef, isIntersecting } = useIntersectionObserver({
    rootMargin: "10px",
  });

  useEffect(() => {
    getAdvisors();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      getMoreAdvisors();
    }
  }, [isIntersecting]);

  console.log(toJS(filteredAdvisors));

  return (
    <>
      <SearchFilters />
      <div className="wrapper">
        <h1>Advisor List</h1>
        {getAdvisorsList.map((advisor: Advisor) => (
          <div key={advisor.id}>
            <p>{advisor.name}</p>
            <p>{advisor.language}</p>
            <p>{advisor.status}</p>
            <p>Rating: {advisor.rating}</p>
            <p>Review:{advisor.reviews}</p>
            <p>Price: {advisor.price}</p>

            <img src={advisor.avatar} alt="" width={150} height={150} />
            {/*<p>Online: {advisor.online ? 'Yes' : 'No'}</p>*/}
            {/*<p>Languages: {advisor.languages.join(', ')}</p>*/}
            {/*<p>Reviews: {advisor.reviews}</p>*/}
          </div>
        ))}
        <div ref={targetRef} style={{ height: "20px" }} />
      </div>
    </>
  );
});

export default Index;
