import { RootStore } from "./RootStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  reaction,
  toJS,
} from "mobx";
import { Advisor, generateAdvisors } from "../service/service";

export interface Filters {
  language: string;
  status: string;
  sortBy: string;
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
      language: "All",
      status: "All",
      sortBy: "rating",
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
      sortAdvisors: action,
      setSortBy: action,
      sortedAdvisors: computed,
      advisors: observable,
      isFiltersApplied: observable,
      getAdvisorsList: computed,
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

  get getAdvisorsList() {
    return this.isFiltersApplied ? this.filteredAdvisors : this.advisors;
  }

  get sortedAdvisors() {
    return this.advisors.slice().sort((a, b) => {
      switch (this.filters.sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        case "priceHighToLow":
          return b.price - a.price;
        case "priceLowToHigh":
          return a.price - b.price;
        default:
          return 0;
      }
    });
  }

  sortAdvisors = () => {
    this.filteredAdvisors = this.sortedAdvisors;
  };

  setSortBy = (sortBy: string) => {
    this.isFiltersApplied = true;
    this.filters.sortBy = sortBy;
    this.sortAdvisors();
  };

  filterAdvisors = () => {
    const filteredAdvisors = this.sortedAdvisors.filter((advisor) => {
      const isLanguageMatch =
        this.filters.language === "All" ||
        advisor.language === this.filters.language;
      const isStatusMatch =
        this.filters.status === "All" || advisor.status === this.filters.status;

      return isLanguageMatch && isStatusMatch;
    });

    this.setFilteredAdvisors(filteredAdvisors);
  };

  setFilteredAdvisors = (filteredAdvisors: Advisor[]) => {
    this.filteredAdvisors = filteredAdvisors;
  };

  setAdvisors = (advisors: Advisor[]) => {
    this.advisors = advisors;
  };

  filterByLanguage = (language: string) => {
    this.isFiltersApplied = true;
    this.filters.language = language;
    this.filterAdvisors();
  };

  filterByStatus = (status: string) => {
    this.isFiltersApplied = true;
    this.filters.status = status;
    this.filterAdvisors();
  };

  getAdvisors = () => {
    this.setAdvisors(generateAdvisors(5, this.filters));
  };

  getMoreAdvisors = () => {
    this.setAdvisors([...this.advisors, ...generateAdvisors(5, this.filters)]);
  };
}
