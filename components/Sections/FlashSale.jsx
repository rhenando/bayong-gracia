"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Replace these with your actual sale items
const saleItems = [
  {
    id: 1,
    name: "Item 1",
    image: "/banners/6.png",
    price: "₱100",
    href: "/item/1",
  },
  {
    id: 2,
    name: "Item 2",
    image: "/banners/6.png",
    price: "₱150",
    href: "/item/2",
  },
  {
    id: 3,
    name: "Item 3",
    image: "/banners/6.png",
    price: "₱200",
    href: "/item/3",
  },
  {
    id: 4,
    name: "Item 4",
    image: "/banners/6.png",
    price: "₱250",
    href: "/item/4",
  },
  {
    id: 5,
    name: "Item 5",
    image: "/banners/6.png",
    price: "₱300",
    href: "/item/5",
  },
];

export default function FlashSale({ endTime }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endTime) - +new Date();
      if (difference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }
      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold'>Flash Sale</h2>
        <div className='text-red-600 font-medium'>Ends in {timeLeft}</div>
      </div>
      <div className='overflow-x-auto flex space-x-4 pb-4'>
        {saleItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className='w-40 flex-shrink-0 bg-white rounded shadow p-2 hover:shadow-md'
          >
            <div className='relative w-full h-40'>
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className='mt-2 text-sm font-medium text-gray-800'>
              {item.name}
            </div>
            <div className='mt-1 text-red-600 font-bold'>{item.price}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
