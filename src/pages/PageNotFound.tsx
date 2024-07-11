import { BASE_URL } from "@/api/api";
import { ArrowLeftIcon, Component2Icon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-300 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <AlertCircleIcon className="h-24 w-24 text-gray-500 dark:text-gray-400" />
      <h1 className="mt-4 text-4xl font-semibold text-gray-700 dark:text-gray-300">
        Page Not Found
      </h1>
      <a href={BASE_URL + "/auth/google"}>Google</a>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        The page you're looking for doesn't exist.
      </p>
      <div className="flex gap-4">
        <Link
          className="mt-8 inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-white bg-gray-900 rounded-md shadow hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          to="/"
        >
          <Component2Icon /> &nbsp; Go Home
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="mt-8 inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <ArrowLeftIcon /> &nbsp; Go Back
        </button>
      </div>
    </div>
  );
}

function AlertCircleIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}
