import { Router } from "@solidjs/router";

import { generateRoutes } from "./lib/helpers";
import { ROUTES } from "./lib/constants";

export const AppRouter = () => <Router>{generateRoutes(ROUTES)}</Router>;
