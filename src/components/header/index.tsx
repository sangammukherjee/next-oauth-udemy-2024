import Link from "next/link";
import AuthButtons from "../auth-buttons";

interface menuItem {
  id: string;
  label: string;
}

const menus: menuItem[] = [
  {
    id: "server-example",
    label: "Server Example",
  },
  {
    id: "client-example",
    label: "Client Example",
  },
  {
    id: "route-handler",
    label: "Route Handler",
  },
  {
    id: "admin",
    label: "Admin",
  },
];

function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href={"/"} className="flex items-center">
            <h1 className="text-3xl font-extrabold">OAUTH EXAMPLE</h1>
          </Link>
          <ul className="flex gap-4">
            {menus.map((singleMenuItem: menuItem) => (
              <li key={singleMenuItem.id}>
                <Link
                  className="font-medium flex items-center text-sm hover:underline"
                  href={singleMenuItem.id}
                >
                  {singleMenuItem.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
