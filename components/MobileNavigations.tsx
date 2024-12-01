"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user-actions";

type Props = {
  $id: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
};

const MobileNavigations = ({
  $id: ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={120}
        className="h-auto"
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src={"/assets/icons/menu.svg"}
            alt="Search"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetHeader>
            <SheetTitle>
              <div className="header-user">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={44}
                  height={44}
                  className="header-user-avatar"
                />

                <div className="sm:hidden lg:block">
                  <p className="subtitle-2 capitalize">{fullName}</p>
                  <p className="caption">{email}</p>
                </div>
                <Separator className="my-4 bg-light-200/20" />
              </div>
            </SheetTitle>
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navItems.map(({ url, name, icon }) => (
                  <Link href={url} key={name} className="lg:w-full">
                    <li
                      className={cn(
                        "mobile-nav-item",
                        pathName === url && "shad-active"
                      )}
                    >
                      <Image
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className={cn(
                          "nav-icon",
                          pathName === url && "nav-icon-active"
                        )}
                      />
                      <p>{name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            <Separator className="my-5 bg-light-200/20" />

            <div className="flex flex-col justify-between items-start gap-5">
              <FileUploader
                accountId={accountId}
                ownerId={ownerId}
                className=""
              />
              <Button
                type="submit"
                className="mobile-sign-out-button"
                onClick={async () => await signOutUser}
              >
                <Image
                  src={"/assets/icons/logout.svg"}
                  alt="logo"
                  width={24}
                  height={24}
                />
                <p>Logout</p>
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigations;
