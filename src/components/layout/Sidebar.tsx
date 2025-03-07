import {Dispatch, JSX, SetStateAction} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

export default function Sidebar({isOpen, setIsOpen}: SidebarProps) {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      name: "Início",
      path: "/",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Preço Justo de Graham",
      path: "/graham-calculator",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } z-50`}
    >
      <div className="flex items-center justify-between h-24 px-4 border-b border-gray-200">
        <div className={`${!isOpen && "hidden"} h-10 flex items-center`}>
          <Image
            src="/logo-light.png"
            alt="FinTools Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>
        <button
          title="btn"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-3 ${
              router.pathname === item.path
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            } hover:bg-blue-50 hover:text-blue-600 transition-colors`}
          >
            <span className="inline-flex items-center justify-center">
              {item.icon}
            </span>
            <span className={`ml-3 ${!isOpen && "hidden"}`}>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
