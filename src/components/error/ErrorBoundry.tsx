import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import "@lottiefiles/dotlottie-wc";
import PropTypes from "prop-types";

import * as React from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        autoplay?: boolean;
        controls?: boolean;
        loop?: boolean;
        playMode?: string;
        src?: string;
      };
    }
  }
}

function ErrorBoundary({ children }: { children: any }) {
  const [hasError, setHasError] = useState(false);

  // Catch errors in the render phase
  useEffect(() => {
    const handleErrors = (
      error: string | Event | Error,
      info: {
        url: string | undefined;
        line: number | undefined;
        column: number | undefined;
      }
    ) => {
      console.error("Error caught:", error, info);
      setHasError(true);
    };

    window.onerror = (error, url, line, column, errorObj) => {
      handleErrors(errorObj || error, { url, line, column });
    };

    return () => {
      window.onerror = null; // Cleanup on unmount
    };
  }, []);

  if (hasError) {
    return (
      <div className="py-10">
        <div className="relative flex items-center justify-center">
          <dotlottie-wc
            autoplay
            controls={false}
            loop
            playMode="normal"
            src="https://lottie.host/eaa4619c-5ba3-45ce-a9bb-1bf4e6bbd62b/Ut97u9ZtHs.json"
            style={{ width: "220px" }}
          ></dotlottie-wc>
          <div className="w-full bg-[#161616] h-12 absolute bottom-0"></div>
        </div>
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Oops, Something went wrong.
          </h1>
          <p className="mt-4 text-base leading-7 text-[#d1d1d1]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-3">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-[#1c1c1c] transition duration-300 ease-in-out"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
