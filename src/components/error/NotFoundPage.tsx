import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/dotlottie-wc";
import Button from "../Button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10 h-dvh flex items-center justify-center">
      <div className="text-center">
        <span className="text-5xl font-bold">404</span>{" "}
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-11 flex items-center justify-center gap-x-3">
          <Button type="button" onClick={() => window.history.back()}>
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Button>
          <Button type="button" onClick={() => navigate("/user/feedback")}>
            <ArrowLeft size={16} className="mr-2" />
            Report bug
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
