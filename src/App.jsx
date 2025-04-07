import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";

const App = () => {
  return (
    <div className="w-full mx-auto px-4 py-4 flex flex-col gap-10 md:max-w-5xl md:px-0">
      <Header/>
      <Main/>
    </div>
  );
};

export default App;
