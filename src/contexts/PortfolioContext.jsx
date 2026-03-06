import { createContext, useContext } from "react";
import {portfolioData} from '../data/Portfolio.data';

const PortfolioDataContext = createContext(null);

export const PortfolioDataProvider = ({ children }) => {
  return (
    <PortfolioDataContext.Provider value={portfolioData}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error("usePortfolioData must be used inside PortfolioDataProvider");
  }
  return context;
};
