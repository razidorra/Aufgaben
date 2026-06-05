import { FooterPublic } from "../Footer/footer.public.jsx";
import { NavbarPublic } from "../Navbars/navbar.public.jsx";

export function LayoutPublic({ children }) {
  return (
    <>
      <NavbarPublic />
      {children}
      <FooterPublic />
    </>
  );
}
