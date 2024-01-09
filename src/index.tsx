/* @refresh reload */
import { render } from "solid-js/web";
import "shared/assets/styles/global.css";
import "shared/assets/styles/fonts.css";
import { Route, Router } from "@solidjs/router";

import { PublicPage } from "pages/public";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={PublicPage} />
    </Router>
  ),
  root!
);
