import { FeedbackProvider } from "./FeedbackProvider";
import { RoleProvider } from "./RoleProvider";
import { ThemeProvider } from "./ThemeProvider";
import { PropertyProvider } from "./PropertyProvider";
import { FiltersProvider } from "./FiltersProvider";

const providers = [FeedbackProvider, RoleProvider, ThemeProvider, PropertyProvider, FiltersProvider];

export function AppProviders({ children }) {
  return providers.reduceRight(
    (content, Provider) => <Provider>{content}</Provider>,
    children
  );
}
