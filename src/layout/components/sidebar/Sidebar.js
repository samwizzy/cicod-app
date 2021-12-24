import React, { useState, useEffect, useCallback } from "react";
import { getRepoById, getReposAsync } from "@/store/reducers/repository.slice";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import _ from "lodash";
import "./sidebar.scss";

function Sidebar() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [limit, setLimit] = useState(10);
  const repos = useSelector(({ repository }) => repository.repos);

  const seeMore = (e) => {
    e.preventDefault();
    setLimit(repos.length);
  };

  useEffect(() => {
    dispatch(getReposAsync());
  }, [dispatch]);

  const searchInput = useCallback(() => {
    if (searchText.length > 0) {
      const text = searchText.toLowerCase();
      const regex = new RegExp(text, "i");
      const filteredData = repos.filter((repo) => repo.full_name.match(regex));
      setData(filteredData);
    } else {
      setData(repos);
    }
  }, [repos, searchText]);

  const delayedQuery = _.debounce(searchInput, 1000);

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [searchText, delayedQuery]);

  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(getRepoById(id));
  };

  return (
    <React.Fragment>
      <div className="flex item-center justify-between">
        <h2 className="h2">Repositories</h2>
        <button className="add-btn">
          <MdOutlineCollectionsBookmark size={18} color="#fff" />
          <span>New</span>
        </button>
      </div>
      <input
        type="text"
        value={searchText}
        placeholder="Find a repository"
        onChange={handleChange}
        className="search"
      />

      <nav>
        <ul>
          {data.slice(0, limit).map((repo) => (
            <li key={repo.id} onClick={(e) => handleClick(e, repo.id)}>
              <img className="avatar" src={repo.owner?.avatar_url} alt="" />
              <a href={repo.svn_url} alt="">
                {repo.full_name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {limit !== repos.length && repos.length > 0 && (
        <a href="/#" className="more" onClick={seeMore}>
          see more
        </a>
      )}

      <hr className="divider" />

      <div>
        <h3 className="h2 mb-px">Recent activity</h3>
        <p className="text-sm text-gray">
          When you take actions across GitHub, we’ll provide links to that
          activity here.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
