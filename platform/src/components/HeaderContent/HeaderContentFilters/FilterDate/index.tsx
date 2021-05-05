import { setFilters } from "../../../../store/filters.reducer";
import { useStoreSelector, useStoreDispatch } from "../../../../hooks";
import { FilterDateItem, FilterDateColumns, CheckboxElement } from "./styles";

interface FilterDateParamsInterface {
  [key: string]: string;
}

const FilterDateParams: FilterDateParamsInterface = {
  daily: "Codzienne",
  weekly: "Tygodniowe",
  monthly: "Miesięczne",
};

/**
 * FilterDate component.
 * Component for render filters for date.
 */
export default function FilterDate() {
  const dispatch = useStoreDispatch();
  const apiState = useStoreSelector((state) => state.global);
  const currentLanguageFilters = useStoreSelector((state) => state.filters);

  return (
    <FilterDateColumns>
      {Object.keys(FilterDateParams).map((key) => (
        <FilterDateItem key={key}>
          <CheckboxElement
            type="checkbox"
            disabled={apiState.isApiDisbaled}
            value={key}
            onChange={(event) =>
              dispatch(
                setFilters({
                  ...currentLanguageFilters,
                  since:
                    event.target.value === currentLanguageFilters.since
                      ? "none"
                      : event.target.value,
                })
              )
            }
            id={key}
            checked={currentLanguageFilters.since === key}
          />
          <label htmlFor={key}>{FilterDateParams[key]}</label>
        </FilterDateItem>
      ))}
    </FilterDateColumns>
  );
}
