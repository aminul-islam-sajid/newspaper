import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));

const PublicRouter = [
  { path: '/', Component: Home },
]

export default PublicRouter;
