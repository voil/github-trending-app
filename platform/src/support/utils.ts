import { orderBy } from "lodash";
import { RepositoryType } from "../store/repositories.reducer";
import { FiltersType } from "../store/filters.reducer";

/**
 * Helper function to create url filters.
 * @param FiltersType filters
 * @return String
 */
export function hCreateUrlFilters(filters: FiltersType): string {
  const urlParams: Array<string> = [];
  urlParams.push(filters.since !== "none" ? `since=${filters.since}` : "");
  urlParams.push(
    filters.language !== "all" ? `language=${filters.language}` : ""
  );

  return urlParams.filter((item: string) => item !== "").join("&");
}

/**
 * Helper function to sort records by stars
 * @param Array<RepositoryType> records
 * @param FiltersType filters
 * @return String
 */
export function hSortResponseByStars(
  records: Array<RepositoryType>,
  filters: FiltersType
): Array<RepositoryType> {
  return filters.sortRating === "none"
    ? records
    : orderBy(records, "stars", filters.sortRating as boolean | "asc" | "desc");
}
