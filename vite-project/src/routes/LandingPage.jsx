// Libaries
import { Link, Outlet } from "react-router-dom";

// CSS
import styles from "./layout.modules.css";

// Components

import CollapsableMenu from "../components/CollapseableMenu/CollapsableMenu";

function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>
      <CollapsableMenu title="The Menu" className={styles.navMenu}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </CollapsableMenu>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default LandingPage;
