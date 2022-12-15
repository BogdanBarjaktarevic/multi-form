import FormControls from "./components/formControls";
import FormNavigation from "./components/formNavigation";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-side-bar-mobile bg-cover bg-no-repeat h-[172px] pt-10">
        <FormNavigation />
      </div>
      <main className="bg-magnolia flex-1 p-4">
        <div className="bg-alabaster shadow-lg h-40 rounded-lg -translate-y-16">
          Main Component
        </div>
      </main>
      <div>
        <FormControls />
      </div>
    </div>
  );
};

export default App;
