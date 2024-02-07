import { RootStore } from "./RootStore";
import { action, makeObservable, observable } from "mobx";
import { Advisor, generateAdvisors } from "../service/service";

export class AdvisorsStore {
  root: RootStore;
  advisors: Advisor[];

  constructor(root: RootStore) {
    this.root = root;
    this.advisors = [];

    makeObservable(this, {
      filter: action,
      getAdvisors: action,
      advisors: observable,
    });
  }

  filter = () => {
    console.log("ASD");
  };

  getAdvisors = () => {
    this.advisors = generateAdvisors(30);
  };

  getMoreAdvisors = () => {
    this.advisors = [...this.advisors, ...generateAdvisors(20)];
  };
}
