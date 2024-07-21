"use client";
import React from "react";
import AddSubj from "./AddSubj";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const SideBar = () => {
  const { user } = useUser();

  return (
    <div className="bg-[#0f0f0f] text-white">
      <Sheet>
        <SheetTrigger className="p-2">
          <MenuIcon size={40} className="p-2 hover:opacity-30 rouded-lg" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="hidden lg:inline">
        <div className="flex flex-col pt-6 p-4 gap-4">
          <div className="flex gap-4">
            <UserButton />
            {user?.firstName}
          </div>
          <AddSubj />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
