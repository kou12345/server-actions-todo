"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export const GetUser = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, user, isLoaded } = useUser();

  console.log(user);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isSignedIn) {
    return (
      <div>
        <UserButton afterSignOutUrl="/" />
        <div>Signed in as {user.username}</div>
        {children}
      </div>
    );
  }

  // return (
  //   <div>
  //     <div>Not signed in</div>
  //     {children}
  //   </div>
  // );
};
