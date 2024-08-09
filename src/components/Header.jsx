import React from "react";

function Header() {
  return (
    <header className="flex flex-row justify-between p-4 border border-b-blue-500">
      <div>LOGO</div>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>Profile Me</li>
          <li>Frontend Menter</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
