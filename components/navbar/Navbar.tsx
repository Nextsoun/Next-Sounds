import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "#about", text: "About" },
  { path: "#home", text: "Home" },
  { path: "#contact", text: "Contact" },
  { path: "#servicios", text: "Servicios" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
