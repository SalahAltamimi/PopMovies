import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-slate-800 h-screen grid grid-rows-[auto_1fr] space-3">
      <Header />
      <div>
        <main className="max-w-[48rem] m-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
