import Button from "../components/Button";
import Features from "../components/Features";
import { addUser } from "../db/userManager";

const Home = () => {
  return (
    <>
      <div className="mt-20 md:mt-36">
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
            className="rounded-full px-8 py-3 lg:text-lg font-normal"
            onClick={() =>
              addUser({
                userId: "",
                email: "",
                displayName: "",
                notificationsEnabled: false,
                role: "",
                createdAt: new Date(),
                lastLogin: new Date(),
              })
            }
          >
            Explore Events
          </Button>
          <Button className="rounded-full px-8 py-3 lg:text-lg font-normal">
            Create Events
          </Button>
        </div>
        <Features />
      </div>
    </>
  );
};

export default Home;
