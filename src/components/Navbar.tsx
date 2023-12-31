import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="mb-4">
      <div className="navbar bg-base-100 my-2">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Todo
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="mx-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
