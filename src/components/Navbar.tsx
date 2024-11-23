import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "../Context/Theme";
import { useEffect } from "react";
import { useUser } from "../Context/UserContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-black";
  }, [theme]);

  return (
    <div
      className={`sticky py-2 px-6 m-auto flex max-md:w-full w-full justify-between items-center md:rounded-lg border border-[#343434] bg-opacity-50 backdrop-blur-lg backdrop-filter ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-white hover:text-[#2e2e2e]"
      }`}
    >
      <Link to="/" className="text-2xl cursor-pointer font-semibold">
        Eventory
      </Link>
      <div className="flex gap-6 max-lg:text-sm text-base items-center">
        <a
          className="cursor-pointer hidden sm:block"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("features");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Features
        </a>
        <a className="cursor-pointer">
          {user?.uid ? (
            <img
              src={`${user.photoURL}`}
              width={20}
              className="rounded-full"
              title="profile"
              onClick={() => navigate("/user/profile")}
            />
          ) : (
            <User size={18} onClick={() => navigate("/user/login")} />
          )}
        </a>

        {theme === "dark" ? (
          <Sun size={16} onClick={toggleTheme} />
        ) : (
          <Moon size={16} onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

// className="sticky md:top-4 m-auto md:mt-4 flex max-md:w-full w-full justify-between items-center md:rounded-lg border border-[#343434] bg-[#0a0a0a] bg-opacity-50 max-md:px-4  px-10 py-3 text-xl backdrop-blur-lg backdrop-filter"
