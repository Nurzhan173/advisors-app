import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Advisor } from "../stores/AdvisorsStore";
import { useAdvisorsStore } from "../providers/RootStoreProvider";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import SearchFilters from "../components/SearchFilters/SearchFilters";
import "./index.css";
import Card from "../components/Card/Card";
import { toJS } from "mobx";

const Index: React.FC = observer(() => {
  const { getAdvisors, filteredAdvisors } = useAdvisorsStore();

  const { targetRef, isIntersecting } = useIntersectionObserver({
    rootMargin: "10px",
  });

  useEffect(() => {
    if (isIntersecting) {
      getAdvisors();
    }
  }, [isIntersecting]);

  console.log(toJS(filteredAdvisors));

  return (
    <>
      <SearchFilters />
      <div className="wrapper">
        <h1>Advisors List</h1>
        <div className="advisors-list">
          {filteredAdvisors.map((advisor: Advisor) => (
            <Card key={advisor.id} advisor={advisor} />
          ))}
        </div>
        <div ref={targetRef} />
      </div>
    </>
  );
});

export default Index;
