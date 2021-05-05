import Spin from "../Common/Spin";
import EmptyList from "../Common/EmptyList";
import {
  getRepositoriesList,
  RepositoryType,
} from "../../store/repositories.reducer";
import { useEffect } from "react";
import {
  AuthorSpan,
  AuthorDescription,
  ListItem,
  AvatarList,
  AuthorLink,
  ListElementItem,
} from "./styles";
import { useStoreSelector, useStoreDispatch } from "../../hooks";
import RepositoriesTableActions from "./RepositoriesTableActions";
import RepositoriesTableHeader from "./RepositoriesTableHeader";

/**
 * HeaderContent component.
 * Component for render repositories table.
 */
export default function RepositoriesTable() {
  const dispatch = useStoreDispatch();
  const respositoriesState = useStoreSelector((state) => state.repositories);

  useEffect(() => {
    async function fetchDataLanguages() {
      dispatch(await getRepositoriesList());
    }
    fetchDataLanguages();
  }, [dispatch]);

  return (
    <div>
      <Spin spinning={respositoriesState.isLoadingActive}>
        {respositoriesState.list.map((item: RepositoryType) => (
          <ListItem key={item.name}>
            <RepositoriesTableHeader item={item} />
            {item.description === "" ? "----" : item.description}
            <ListElementItem>
              <AuthorDescription>Utworzone przez:</AuthorDescription>
              <div>
                {item.builtBy.map((author) => (
                  <AuthorLink href={author.href} key={author.username}>
                    <AvatarList src={author.avatar} />
                    <AuthorSpan>{author.username}</AuthorSpan>
                  </AuthorLink>
                ))}
              </div>
            </ListElementItem>
            <RepositoriesTableActions item={item} />
          </ListItem>
        ))}
      </Spin>
      <EmptyList isVisible={respositoriesState.list.length === 0} />
    </div>
  );
}
