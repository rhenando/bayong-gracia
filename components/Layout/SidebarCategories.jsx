"use client";
import React from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Cpu, ShoppingCart, Gift } from "lucide-react";

// Map of category to Lucide icon component
const categoryIcons = {
  Company: ShoppingBag,
  Category: Heart,
  Electronics: Cpu,
  Groceries: ShoppingCart,
  Toys: Gift,
};

const categories = [
  { title: "Company", href: "/fashion" },
  { title: "Category", href: "/beauty" },
  { title: "Electronics", href: "/electronics" },
  { title: "Groceries", href: "/groceries" },
  { title: "Toys", href: "/toys" },
];

export default function SidebarCategories() {
  return (
    <nav className='bg-white shadow rounded p-4 space-y-4'>
      {categories.map((cat) => {
        const Icon = categoryIcons[cat.title];
        return (
          <Link
            key={cat.title}
            href={cat.href}
            className='flex items-center space-x-3 hover:bg-gray-50 p-2 rounded'
          >
            <Icon size={20} className='text-gray-700' />
            <span className='text-sm font-medium text-gray-700'>
              {cat.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
