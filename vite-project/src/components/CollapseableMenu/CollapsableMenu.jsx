/**
 ** This is a collapsable menu
 */

import { useState } from "react";

function CollapsableMenu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((oldState) => !oldState);
        }}
      >
        {title}
      </button>
      <nav>{isOpen && children}</nav>
    </div>
  );
}

export default CollapsableMenu;
