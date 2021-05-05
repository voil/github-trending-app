import { useEffect } from "react";
import { useStoreSelector, useStoreDispatch } from "../../../../hooks";
import { setFilters } from "../../../../store/filters.reducer";
import {
  getLanguageList,
  LanguageDataType,
} from "../../../../store/language.reducer";
import { SelectElement } from "./styles";

/**
 * FilterLanguages component.
 * Component for render filters for languages.
 */
export default function FilterLanguages() {
  const dispatch = useStoreDispatch();
  const apiState = useStoreSelector((state) => state.global);
  const currentLanguageFilters = useStoreSelector((state) => state.filters);
  const languageList = useStoreSelector((state) => state.languages);

  useEffect(() => {
    async function fetchDataLanguages() {
      dispatch(await getLanguageList());
    }
    fetchDataLanguages();
  }, [dispatch]);

  return (
    <div>
      <SelectElement
        disabled={apiState.isApiDisbaled}
        value={currentLanguageFilters.language}
        placeholder="Wybierz język programowania..."
        onChange={(event) =>
          dispatch(
            setFilters({
              ...currentLanguageFilters,
              language: event.target.value,
            })
          )
        }
      >
        {languageList.map((language: LanguageDataType) => (
          <option key={language.urlParam} value={language.urlParam}>
            {language.name}
          </option>
        ))}
      </SelectElement>
    </div>
  );
}
