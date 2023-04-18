import "./App.css";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Add from "./views/Add"
import Home from "./views/Home"
function App() {
  return ( <>
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
        <NavLink className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to="/">Home</NavLink> 
        <NavLink className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to="/add">Add</NavLink> 
            </div>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="add" element={<Add/>}/>
        </Routes>
      </main>
      </>
  );
}

export default App;
