import React, { memo, useState } from "react";
import SearchSections from "./c-cpns/search-sections";
import SearchTabs from "./c-cpns/search-tabs";
import IconSearch from "@/assets/svg/icon_search";
import { ConterWrapper } from "./style";
import searchTitles from "@/assets/data/search_titles.json";
import { CSSTransition } from "react-transition-group";

const HeaderConter = memo((props) => {
  const { isSearch, searchClick } = props;
  const tabs = searchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);

  function searchClickHandle() {
    if (searchClick) searchClick();
  }

  return (
    <ConterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs tabs={tabs} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections
              isSearch={isSearch}
              searchInfo={searchTitles[tabIndex].searchInfos}
            />
          </div>
        </div>
      </CSSTransition>
    </ConterWrapper>
  );
});

export default HeaderConter;
