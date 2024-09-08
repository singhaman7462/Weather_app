import "./App.css";
import Highlights from "./components/Highlights";
import Temperature from "./components/Temperature";

function App() {
  return (
    <div className="bg-[#1F213A] h-screen flex justify-center">

      <div className="mt-40 w-1/5 h-1/3">
        <Temperature />
      </div>

      <div className="mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
      <h2 className="text-slate-200 text-2xl col-span-2">Todays highlights</h2>
      <Highlights/>
      <Highlights/>
      <Highlights/>
      <Highlights/>
      </div>
    </div>
  );
}

export default App;
