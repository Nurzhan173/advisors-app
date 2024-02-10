import React, { useState, useEffect } from "react";
import Select from "../Select/Select";
import "./SearchFilters.css";
import {
  optionsForLanguage,
  optionsForSorting,
  optionsForStatus,
} from "../../constants/constants";
import { useAdvisorsStore } from "../../providers/RootStoreProvider";

const SearchFilters: React.FC = () => {
  const { filterByLanguage, filterByStatus, setSortBy } = useAdvisorsStore();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectLanguage = (selectedLanguage: string) => {
    filterByLanguage(selectedLanguage);
  };

  const handleSelectStatus = (selectedStatus: string) => {
    filterByStatus(selectedStatus);
  };

  const handleSelectSorting = (selectedSort: string) => {
    setSortBy(selectedSort);
  };

  return (
    <div className={`search-filter ${isSticky ? "sticky" : ""}`}>
      <Select
        label="Language: "
        options={optionsForLanguage}
        onSelect={handleSelectLanguage}
      />
      <Select
        label="Sort by: "
        options={optionsForSorting}
        onSelect={handleSelectSorting}
      />
      <Select
        label="Status: "
        options={optionsForStatus}
        onSelect={handleSelectStatus}
      />
    </div>
  );
};

export default SearchFilters;
