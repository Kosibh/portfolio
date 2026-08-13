import portfolioData from "../data/portfolio.json";
import type { PortfolioData } from "../types/portfolio";

const data = portfolioData as PortfolioData;

/**
 * Typed accessor for all portfolio content.
 * Content lives in src/data/portfolio.json — edit that file, not the components.
 */
export function usePortfolio(): PortfolioData {
  return data;
}
