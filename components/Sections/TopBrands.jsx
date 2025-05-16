"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Replace these with your actual brand logos and routes
const brands = [
  { id: 1, name: "Brand A", logo: "/brands/banner1.png", href: "/brand/a" },
  { id: 2, name: "Brand B", logo: "/brands/banner2.png", href: "/brand/b" },
  { id: 3, name: "Brand C", logo: "/brands/banner3.png", href: "/brand/c" },
  { id: 4, name: "Brand D", logo: "/brands/banner1.png", href: "/brand/d" },
  { id: 5, name: "Brand E", logo: "/brands/banner2.png", href: "/brand/e" },
];

export default function TopBrands() {
  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold'>Top Brands</h2>
        <Link href='/brands' className='text-sm text-blue-600 hover:underline'>
          See All
        </Link>
      </div>
      <div className='overflow-x-auto flex space-x-4 pb-4'>
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.href}
            className='w-24 flex-shrink-0 flex flex-col items-center'
          >
            <div className='relative w-16 h-16'>
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className='mt-2 text-xs text-gray-700 text-center'>
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
