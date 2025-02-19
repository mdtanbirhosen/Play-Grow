import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="selection:bg-[#DB915E] selection:text-white">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
