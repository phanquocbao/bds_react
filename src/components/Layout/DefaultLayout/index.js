import Footer from "../../Footer/Footer";
import Partner from "../../Partner/Partner";
import SearhAvd from "../../SearchAvd/SearchAvd";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <SearhAvd /> 
      <div className="">
        <div className="flex justify-around items-center">
          <div className="w-[1050px]">
            <div className="grid grid-cols-12 gap-2 mt-4">
              <div className="content col-span-9">{children}</div>
              <div className="col-span-3">
                <Sidebar />
              </div>
            </div>
            <div className="">
              <Partner />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
