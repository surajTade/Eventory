import Button from "../components/Button";
import Features from "../components/Features";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const checkLoginAndRedirect = (): void => {
    user ? navigate("/events/create") : navigate("/user/login");
  };

  return (
    <>
      <div className="mt-20 md:mt-30">
        <div>
          <h1 className="bg-opacity-50 text-center text-4xl font-bold max-md:text-3xl md:text-6xl xl:text-7xl">
            From Your Ideas to Local Happenings: <br /> Connect, List, and
            Discover Events!
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal max-md:text-sm">
            Eventory connects you to events that match your interests and
            passions. Explore Events That Matter: Share Yours and Discover New
            Favorites, all in one place!
          </p>
        </div>
        <div className="mt-10 w-full flex items-center justify-center gap-4 md:gap-10">
          <Button
            className="rounded-full px-8 py-3 text-xs lg:text-lg font-normal"
            onClick={() => navigate("/events/list")}
          >
            Explore Events
          </Button>
          <Button
            onClick={() => checkLoginAndRedirect()}
            className="rounded-full px-8 py-3 text-xs lg:text-lg font-normal"
          >
            Create Events
          </Button>
        </div>
        <Features />
      </div>
    </>
  );
};

export default Home;
