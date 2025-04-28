// Lazy load to reduce chunk size
import { lazy, Suspense } from 'react';

const Main = lazy(() => import("@/components/layout/Main"))
const Header = lazy(() => import("@/components/layout/Header"))
const Footer = lazy(() => import("@/components/layout/Footer"))

const App = () => {
  return (
    <Suspense>
      <div className="w-full mx-auto px-4 pt-4 flex flex-col gap-4 lg:max-w-7xl xl:px-0 md:gap-10">
        <Header />
        <div>
          <Main />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
