import "./topbar.css";
import { Search, Person } from "@material-ui/icons";
export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLefT">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search for friends, post or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
          </div>
        </div>
      </div>
    </div>
  );
}
