import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="text-gray-600">
            <p>Developed by Lucas Bottrel Lopes de Moura</p>
            <Link
              href="https://github.com/lucasbottrel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              GitHub Profile
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} FinTools. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}