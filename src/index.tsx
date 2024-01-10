/* @refresh reload */
import { render } from "solid-js/web";
import "shared/assets/styles/global.css";
import "shared/assets/styles/fonts.css";

import { AppRouter } from "app/router/router";

const root = document.getElementById("root");

render(() => <AppRouter />, root!);
