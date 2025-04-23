import Main from "@/components/layout/Main";
import Header from "@/components/layout/Header";

const App = () => {
  return (
    <div className="w-full mx-auto px-4 py-4 flex flex-col gap-4 lg:max-w-7xl xl:px-0 md:gap-10">
      <Header/>
      <Main/>
    </div>
  );
};

export default App;
