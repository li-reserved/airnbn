import React, { Suspense, memo, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import AppTitle from "./components/app-title";
import useScrollTop from "./hooks/useScrollTop";
import routes from "./router";

const App = memo(() => {
  const [pathname, setPathname] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  useScrollTop();
  return (
    <div className="app">
      {pathname === "/entire" && <AppTitle />}
      <AppHeader />
      <Suspense fallback="loading...">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
