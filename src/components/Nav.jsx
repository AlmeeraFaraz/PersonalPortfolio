import React,{ useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 border-b text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-4xl font-semibold cursor-pointer italic">Meera.</h1>
          <div className="hidden md:flex space-x-6 text-xl italic text-white ">
            {[
              { name: "Home", to: "hero" },
              { name: "About", to: "about" },
              { name: "Skills", to: "skills" },
              { name: "Project", to: "projects" },
              { name: "Services", to: "services" },
              { name: "Contact", to: "contact" },

            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black border border-white shadow-md p-4 space-y-4 text-lg italic">
          {[
             { name: "Home", to: "hero" },
             { name: "About", to: "about" },
             { name: "Skills", to: "skills" },
             { name: "Project", to: "projects" },
             { name: "Services", to: "services" },
             { name: "Contact", to: "contact" },

          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
