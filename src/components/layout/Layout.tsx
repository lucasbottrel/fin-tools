import {ReactNode, useState} from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main
        className={`flex-1 overflow-auto transition-all duration-300 flex flex-col ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="p-6 flex-grow">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
