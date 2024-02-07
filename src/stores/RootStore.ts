import { AdvisorsStore } from "./AdvisorsStore";

export class RootStore {
  advisors: AdvisorsStore;

  constructor() {
    this.advisors = new AdvisorsStore(this);
  }
}
