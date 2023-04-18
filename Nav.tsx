import { Outlet, Link } from "react-router-dom";
function Navigation () {
  return <><nav>
<ul className="flex">
            <li>
              <Link to={'/add'}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
</ul>
</nav>
</>
};
export default Navigation;
