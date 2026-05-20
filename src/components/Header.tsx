import { useEffect, useState } from "react";
import { getMenuInfo } from "../helpers/wp";
import { type Menu } from "../types";

export default function Header() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  useEffect(() => {
    getMenuInfo("navbar")
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    }
  };

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl 2xl:max-w-8xl relative">
        <nav className="flex md:justify-between pt-6 pb-4 md:px-10 px-4 gap-18 md:gap-0  w-full z-50 top-0 absolute">
          <div className="md:flex-1 z-50">
            <a
              href="/"
              className="flex z-50">
              <img
                className={`h-6  logo mx-auto ${menuOpen ? "invert" : ""}`}
                src={`${domain}wp-content/uploads/2026/05/logo.png`}
                alt="Logo de Voraxathletics"
              />
            </a>
          </div>
          <div className="hidden md:flex flex-2 justify-end">
            <ul
              id="desktop-menu"
              className="items-center justify-center hidden text-sm 2xl:text-base md:flex gap-10 fancy-menu font-inter-bold uppercase text-white">
              {menuItems.map((item, index) => {
                let namesSections = item.name.toLowerCase();
                if (item.permalink === "#") {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(namesSections)}
                        className="font-inter-bold uppercase pb-1 relative cursor-pointer">
                        {item.name}
                      </button>
                    </li>
                  );
                }
                let relativePath = new URL(item.permalink).pathname;
                if (relativePath.includes("wp")) {
                  relativePath = relativePath.replace("/wp", "");
                }

                return (
                  <li key={index}>
                    <button
                      className={` pb-1 relative cursor-pointer`}
                      onClick={() => scrollToSection(namesSections)}>
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar md:hidden absolute">
            <div className={`${menuOpen ? "open" : ""} container nav-container`}>
              <div
                className="hamburger-lines"
                onClick={toggleMenu}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <ul
                  id="mobile-menu"
                  className="items-center justify-center md:hidden text-sm  gap-4 fancy-menu uppercase font-inter-bold uppercase text-black">
                  {menuItems.map((item, index) => {
                    let namesSections = item.name.toLowerCase();
                    if (item.permalink === "#") {
                      return (
                        <li key={index}>
                          <button
                            onClick={() => scrollToSection(namesSections)}
                            className="font-inter-bold uppercase pb-1 relative cursor-pointer">
                            {item.name}
                          </button>
                        </li>
                      );
                    } let relativePath = new URL(item.permalink).pathname;
                    if (relativePath.includes("wp")) {
                      relativePath = relativePath.replace("/wp", "");
                    }
                    return (
                      <li key={index}>
                        <button
                          className={` pb-1 relative cursor-pointer`}
                          onClick={() => scrollToSection(namesSections)}>
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="spacer-fixed md:hidden"></div>
      </div>
    </header>
  );
}
