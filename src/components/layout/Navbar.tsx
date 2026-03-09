import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Accueil", href: "#accueil", path: "/" },
  { label: "Services", href: "#services", path: "/" },
  { label: "Portfolio", href: "/portfolio", path: "/portfolio" },
  { label: "À propos", href: "#apropos", path: "/" },
  { label: "Contact", href: "#contact", path: "/" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleNav = (link: typeof navLinks[0]) => {
    setOpen(false);
    if (link.path === "/portfolio") {
      navigate("/portfolio");
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + link.href);
      return;
    }
    const el = document.querySelector(link.href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass bg-background/80 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Deep-Technologies" className="h-10 w-auto rounded" />
          <span className="text-lg font-bold text-foreground hidden sm:inline">
            Deep<span className="text-primary">-Technologies</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button
            onClick={handleContact}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            Nous Contacter
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-background/95 backdrop-blur-xl border-border">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={handleContact}
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-full mt-2"
                >
                  Nous Contacter
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
