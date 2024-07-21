"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  const { user } = useUser();

  return (
    <div className="flex bg-black text-white justify-between items-center p-5">
      {user && <h1>{user?.firstName}</h1>}

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default NavBar;
