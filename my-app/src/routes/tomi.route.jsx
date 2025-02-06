import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// ========== Router app ==============
const AppError404 = lazy(() => import("../routes/_404"));
const AppLayout = lazy(() => import("../layout/Default"));
const MainPages = lazy(() => import("../views/mainPages/HomePage"));
const MenuButton1 = lazy(() => import("../views/Pages2/MenuButton1"));
const MenuButton2 = lazy(() => import("../views/Pages3/MenuButton2"));
const MenuButton3 = lazy(() => import("../views/Pages4/MenuButton3"));

// ========== path Routers =============
const privateRoutes = [
  { path: "/", component: <MainPages /> },
  { path: "/TOMI/Home", component: <MainPages /> },
  { path: "/TOMI/Menu1", component: <MenuButton1 /> },
  { path: "/TOMI/Menu2", component: <MenuButton2 /> },
  { path: "/TOMI/Menu3", component: <MenuButton3 /> },
];

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {privateRoutes.map((routes, index) => (
            <Route key={index} path={routes.path} element={routes.component} />
          ))}
        </Route>

        <Route path="*" element={<AppError404 />} />
      </Routes>
    </div>
  );
};
export default AppRoute;
