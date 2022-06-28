import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-2 h-12">
      <div className="p-0">
        <img
          width={50}
          height={50}
          src="https://plugins.jetbrains.com/files/10044/181514/icon/pluginIcon.png"
        />
      </div>
      <div className="ham_box mt-4 mx-2">
        <div className="ham_box_inner"></div>
      </div>
    </nav>
  );
}

export default NavBar;
