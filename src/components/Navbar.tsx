import { NavLinks } from "./Navlinks";
import { NavSearch } from "./NavSearch";

export const Navbar = () => {
  console.log(`Navbar rendered`);
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
