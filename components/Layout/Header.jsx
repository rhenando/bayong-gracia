// components/Layout/Header.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Bell as BellIcon,
  User as UserIcon,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className='bg-white border-b shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 flex items-center justify-between h-16'>
        {/* Logo & Mobile menu toggle */}
        <div className='flex items-center space-x-4'>
          <button
            className='lg:hidden p-2'
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='relative w-8 h-8'>
              <Image
                src='/logo.png'
                alt='Logo'
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className='text-xl font-bold text-gray-800'>
              Bayong Gracia
            </span>
          </Link>
        </div>

        {/* Search bar */}
        <div className='flex-1 mx-4 hidden md:flex'>
          <Input
            placeholder='Search for products, brands and more'
            className='rounded-r-none'
          />
          <Button className='rounded-l-none px-4'>
            <SearchIcon size={16} />
          </Button>
        </div>

        {/* Icons */}
        <nav className='flex items-center space-x-4'>
          <Button variant='ghost' className='hidden md:flex p-2'>
            <BellIcon size={20} />
          </Button>
          <Button variant='ghost' className='p-2'>
            <ShoppingCartIcon size={20} />
          </Button>
          <Button variant='ghost' className='p-2'>
            <UserIcon size={20} />
          </Button>
        </nav>
      </div>

      {/* Mobile search & categories drawer */}
      {mobileOpen && (
        <div className='lg:hidden bg-white border-t'>
          <div className='px-4 py-2'>
            <Input placeholder='Search products' />
          </div>
          <div className='px-4 pb-4'>
            <ul className='space-y-2'>
              {["Fashion", "Beauty", "Electronics", "Groceries", "Toys"].map(
                (cat) => (
                  <Link
                    key={cat}
                    href={`/${cat.toLowerCase()}`}
                    className='block py-2'
                  >
                    {cat}
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
