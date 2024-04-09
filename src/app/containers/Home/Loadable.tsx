/**
 *
 * Asynchronously loads the component for Home
 *
 */
import { PageLoading } from "app/components/common/pageLoading";
import { lazyLoad } from "common/loadable";

export const Home = lazyLoad(
  () => import("./index"),
  (module) => module.Home,
  { fallback: <PageLoading /> }
);
