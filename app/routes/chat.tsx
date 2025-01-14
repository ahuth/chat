import {Link, Outlet} from "@remix-run/react";

export default function Chat() {
  return (
    <div className="flex min-h-screen">
      <nav className="hidden w-64 flex-col gap-6 border-r border-neutral-800 p-4 md:flex">
        <h2 className="text-lg font-semibold">
          <Link
            className="block h-full w-full rounded-md p-2 hover:bg-neutral-800"
            to="/"
          >
            Chat
          </Link>
        </h2>
        <Link
          className="w-full rounded-md p-2 text-purple-400 hover:bg-neutral-800"
          to="/chat"
        >
          New chat
        </Link>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
