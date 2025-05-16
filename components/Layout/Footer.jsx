"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Replace these with your actual recommended products
const recommendedItems = [
  {
    id: 1,
    name: "Product 1",
    image: "/products/1.png",
    price: "₱350",
    href: "/product/1",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/products/2.png",
    price: "₱450",
    href: "/product/2",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/products/3.png",
    price: "₱550",
    href: "/product/3",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/products/4.png",
    price: "₱650",
    href: "/product/4",
  },
  {
    id: 5,
    name: "Product 5",
    image: "/products/5.png",
    price: "₱750",
    href: "/product/5",
  },
];

export default function Recommended() {
  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold'>Recommended For You</h2>
        <Link
          href='/recommended'
          className='text-sm text-blue-600 hover:underline'
        >
          See All
        </Link>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {recommendedItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className='bg-white rounded shadow p-2 hover:shadow-md flex flex-col'
          >
            <div className='relative w-full pt-[100%]'>
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className='mt-2 text-sm font-medium text-gray-800 flex-1'>
              {item.name}
            </div>
            <div className='mt-1 text-red-600 font-bold'>{item.price}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
