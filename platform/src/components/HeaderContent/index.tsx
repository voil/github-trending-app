import { HeaderColumns, HeaderColumnItem } from "./styles";
import FilterDate from "./HeaderContentFilters/FilterDate";
import FilterLanguages from "./HeaderContentFilters/FilterLanguages";
import FilterSortingStars from "./HeaderContentFilters/FilterSortingStars";

/**
 * HeaderContent component.
 * Component for header content whit filters.
 */
export default function HeaderContent() {
  return (
    <HeaderColumns>
      <HeaderColumnItem>
        <FilterDate />
      </HeaderColumnItem>
      <HeaderColumnItem>
        <FilterLanguages />
      </HeaderColumnItem>
      <HeaderColumnItem>
        <FilterSortingStars />
      </HeaderColumnItem>
    </HeaderColumns>
  );
}
