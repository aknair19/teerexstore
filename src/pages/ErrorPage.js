import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="  text-center m-12 h-full ">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <h2 className="text-red-600 text-2xl">Something went wrong</h2>
      <p className="text-gray-600 font-semibold text-xl">
        {error.statusText || error.message}
      </p>
    </div>
  );
};
export default ErrorPage;
