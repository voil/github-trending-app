import {
  HeaderListLink,
  ColorLanguage,
  SpaceHeaderList,
  AvatarHeaderList,
  HeaderListColumns,
  HeaderListColumnItem,
  LanguageDescription,
} from "./styles";
import { RepositoryType } from "../../../store/repositories.reducer";

/**
 * RepositoriesTableHeader component.
 * Component for render header table.
 */
export default function RepositoriesTableHeader({
  item,
}: {
  item: RepositoryType;
}) {
  return (
    <HeaderListColumns>
      <HeaderListColumnItem>
        <AvatarHeaderList src={item.avatar} />
      </HeaderListColumnItem>
      <HeaderListColumnItem>
        <div>
          <HeaderListLink href={item.url}>
            {item.author} / {item.name}
          </HeaderListLink>
        </div>
        <div>
          {item.language === "" ? (
            "----"
          ) : (
            <SpaceHeaderList>
              <ColorLanguage color={item.languageColor} />
              <LanguageDescription>
                {item.language || "----"}
              </LanguageDescription>
            </SpaceHeaderList>
          )}
        </div>
      </HeaderListColumnItem>
    </HeaderListColumns>
  );
}
