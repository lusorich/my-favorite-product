/* @refresh reload */
import { render } from "solid-js/web";
import "shared/assets/styles/global.css";
import "shared/assets/styles/fonts.css";

import App from "./app/App/App";

const root = document.getElementById("root");

render(() => <App />, root!);
