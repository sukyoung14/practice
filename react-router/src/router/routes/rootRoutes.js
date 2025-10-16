import RootLayout from "../../layouts/RootLayout";
import PATHS from "../../constants/paths.js";

import Home from "../../pages/RootPages/Home";

const rootRoutes = [
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];
export default rootRoutes;
