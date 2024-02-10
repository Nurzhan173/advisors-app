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
  sortBy: string;

  constructor(root: RootStore) {
    this.root = root;
    this.advisors = [];
    this.filteredAdvisors = [];
    this.filters = {
      language: "English",
      status: "online",
      sortBy: "rating",
    };

    this.sortBy = "rating";

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
      sortBy: observable,
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
