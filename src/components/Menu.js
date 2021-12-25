import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
    console.log(`Clicked showMenu toggle button, showMenu: ${showMenu}`);
  };
  return (
    <nav className="lg:hidden">
      <div className="flex flex-row justify-between px-5">
        <h1>e-Shop</h1>
        <Icon
          icon="bx:bx-menu-alt-right"
          color="blue"
          width="48"
          height="48"
          onClick={toggle}
        />
      </div>
    </nav>
  );
}

export default Menu;
