import {
  SortingStarsColumns,
  SortingStarsColumnItem,
  IconSorting,
} from "./styles";
import { useStoreSelector, useStoreDispatch } from "../../../../hooks";
import { setFilters } from "../../../../store/filters.reducer";

type StatesOfSortingType = {
  [asc: string]: string;
  desc: string;
  none: string;
};

const StatesOfSorting: StatesOfSortingType = {
  asc: "desc",
  desc: "none",
  none: "asc",
};

/**
 * FilterSortingStars component.
 * Component for render sorting filter.
 */
export default function FilterSortingStars() {
  const dispatch = useStoreDispatch();
  const apiState = useStoreSelector((state) => state.global);
  const currentLanguageFilters = useStoreSelector((state) => state.filters);

  return (
    <SortingStarsColumns
      data-testid="sortingElement"
      opacity={apiState.isApiDisbaled ? 0.4 : 1}
      onClick={() =>
        apiState.isApiDisbaled
          ? {}
          : dispatch(
              setFilters({
                ...currentLanguageFilters,
                sortRating: StatesOfSorting[currentLanguageFilters.sortRating],
              })
            )
      }
    >
      <SortingStarsColumnItem>
        Sortuj po liczbie gwiazdek
      </SortingStarsColumnItem>
      <SortingStarsColumnItem lineHeight={1} top={2}>
        <IconSorting
          color={
            currentLanguageFilters.sortRating === "asc" ? "#1DA57A" : "#000000"
          }
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 404.308 404.309"
          >
            <g>
              <path d="M404.308,303.229H0L202.157,101.08L404.308,303.229z" />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </IconSorting>
        <IconSorting
          color={
            currentLanguageFilters.sortRating === "desc" ? "#1DA57A" : "#000000"
          }
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 213.333 213.333"
          >
            <g>
              <g>
                <polygon points="0,53.333 106.667,160 213.333,53.333" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </IconSorting>
      </SortingStarsColumnItem>
    </SortingStarsColumns>
  );
}
