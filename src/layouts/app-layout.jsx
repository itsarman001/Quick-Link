import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="mt-10 p-10 bg-gray-800 text-white text-center">
        <h4>
          Developed By {" "}
          <a target="_blank" href="https://github.com/itsarman001">
            Arman
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default AppLayout;
