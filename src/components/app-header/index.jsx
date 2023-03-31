import useScrollPosition from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";
import React, { memo, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import HeaderConter from "./c-cpns/header-conter";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  const [isSearch, setSearch] = useState(false);

  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  const [name, setName] = useState();
  if (!isSearch) prevY.current = scrollY;

  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setSearch(false);

  const location = useLocation();
  useEffect(() => {
    setName(location.pathname === "/home");
  }, [location]);

  // 是否透明
  const isAlpha = scrollY === 0 && name;

  return (
    <ThemeProvider theme={{ isAlpha, name: name }}>
      <HeaderWrapper y={prevY.current}>
        <div className="header-top">
          <div className="content">
            <div className="top">
              <HeaderLeft />
              <HeaderConter
                isSearch={isAlpha || isSearch}
                searchClick={() => setSearch(true)}
              />
              <HeaderRight />
            </div>
            <SearchAreaWrapper isSearch={isAlpha || isSearch} />
          </div>
          {isSearch && (
            <div className="cover" onClick={() => setSearch(false)}></div>
          )}
        </div>
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
