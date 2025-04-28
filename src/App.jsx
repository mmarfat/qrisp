import Header from '@/components/layout/Header';

// i18n
import { useTranslation } from 'react-i18next';

// Lazy load to reduce chunk size
import { lazy, Suspense } from 'react';

const Main = lazy(() => import("@/components/layout/Main"))
const Footer = lazy(() => import("@/components/layout/Footer"))

const App = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full mx-auto px-4 pt-4 flex flex-col gap-4 lg:max-w-7xl xl:px-0 md:gap-10">
      <Header />
      <div>
        <main className="flex flex-col items-center justify-center gap-4 md:gap-10">
          <div className="flex flex-col items-center justify-center text-center gap-4 hidden md:flex">
            <h1 className="text-4xl font-bold">{t("banner.header")}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{t("banner.subheader")}</p>
          </div>
          <Suspense fallback={null}>
            <Main />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
