import { GithubRepository } from "../../models/github-repositories.dto";

function Repositories(props: { repositories: GithubRepository[] | null }) {
  const repostiories = props?.repositories;
  const repositoryList = repostiories?.map((item: GithubRepository, index) => {
    return (
      <>
        <div>
          Name: {item.name}
          ID: {item.id}
          URL: {item.url}
        </div>
        <hr></hr>
      </>
    );
  });

  if (repositoryList) {
    return (
      <>
        <h2> Repository List </h2>
        {repositoryList}
      </>
    );
  }
  return <></>;
}
export default Repositories;
