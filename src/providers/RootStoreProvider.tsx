import React, { createContext, useContext, ReactNode } from "react";
import { RootStore } from "../stores/RootStore";

interface RootStoreProviderProps {
  rootStore: RootStore;
  children: ReactNode;
}

const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({
  rootStore,
  children,
}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }
  return store;
};

export function useAdvisorsStore() {
  const { advisors } = useRootStore();
  return advisors;
}
