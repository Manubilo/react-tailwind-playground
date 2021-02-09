import React from 'react';

const Navbar = () => {
  return (
    <nav
      class="relative flex items-center justify-between sm:h-10 lg:justify-start"
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            />
          </a>
          <div>
            <button type="button">
              <span className="sr-only">Open Main Menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
