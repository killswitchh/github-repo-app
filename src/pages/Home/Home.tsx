import GithubUserDetails from "../../components/Github/GithubUserDetails";
import UserSearch from "../../components/SearchBar/UserSearch";
import "./home.css";

function Home() {
  return (
    <>
      <UserSearch></UserSearch>
      <GithubUserDetails></GithubUserDetails>
    </>
  );
}
export default Home;
