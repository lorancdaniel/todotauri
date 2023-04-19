import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
          <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
              <NavLink
                to="/"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                Home
              </NavLink>
              <NavLink
                to="add"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                Add
              </NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
