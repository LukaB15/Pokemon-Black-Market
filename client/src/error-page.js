import { useRouteError } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar />
    <div id="error-page" className="mt-32 mb-52">
      
      <img className="hover:scale-0 delay-500 hover:rotate-180 hover:ease-out transition ml-auto mr-auto" src="404.png" />
      <p className="ml-auto mr-auto w-fit pokemon text-red-rocket mt-8 text-center">Once again Team Rocket flies to other skies !!!</p>
      <p className="ml-auto mr-auto w-fit mt-4">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    <Footer />
    </>
  );
}