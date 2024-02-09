import { RootStore } from "./RootStore";
import { action, makeObservable, observable, reaction, toJS } from "mobx";
import { Advisor, generateAdvisors } from "../service/service";
import { optionsForLanguage, optionsForStatus } from "../constants/constants";

interface Filters {
  language: string;
  status: string;
}

export class AdvisorsStore {
  root: RootStore;
  advisors: Advisor[];
  filteredAdvisors: Advisor[];
  filters: Filters;
  isFiltersApplied: boolean;

  constructor(root: RootStore) {
    this.root = root;
    this.advisors = [];
    this.filteredAdvisors = [];
    this.filters = {
      language: optionsForLanguage[0],
      status: optionsForStatus[0],
    };

    this.isFiltersApplied = false;

    makeObservable(this, {
      getAdvisors: action,
      filteredAdvisors: observable,
      filterByLanguage: action,
      filterByStatus: action,
      filters: observable,
      filterAdvisors: action,
      setAdvisors: action,
      setFilteredAdvisors: action,
      isFiltersApplied: observable,
    });

    reaction(
      () => toJS(this.filters),
      () => {
        this.filterAdvisors();
      }
    );

    reaction(
      () => this.advisors,
      () => {
        this.filterAdvisors();
      }
    );

    reaction(
      () => this.filteredAdvisors,
      (filteredAdvisors) => {
        if (filteredAdvisors.length < 3) {
          this.getMoreAdvisors();
        }
      }
    );
  }

  filterAdvisors = () => {
    const filteredAdvisors = this.advisors.filter((advisor) => {
      const isLanguageMatch =
        this.filters.language === "All" ||
        advisor.language === this.filters.language;
      const isStatusMatch =
        this.filters.status === "All" || advisor.status === this.filters.status;

      return isLanguageMatch && isStatusMatch;
    });

    this.isFiltersApplied = true;
    this.setFilteredAdvisors(filteredAdvisors);
  };

  setFilteredAdvisors = (filteredAdvisors: Advisor[]) => {
    this.filteredAdvisors = filteredAdvisors;
  };

  setAdvisors = (advisors: Advisor[]) => {
    this.advisors = advisors;
  };

  filterByLanguage = (language: string) => {
    this.filters.language = language;
  };

  filterByStatus = (status: string) => {
    this.filters.status = status;
  };

  getAdvisors = () => {
    this.setAdvisors(generateAdvisors(5));
  };

  getMoreAdvisors = () => {
    this.setAdvisors([...this.advisors, ...generateAdvisors(5)]);
    this.filterAdvisors();
  };
}
