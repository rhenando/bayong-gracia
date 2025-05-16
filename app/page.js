// app/page.jsx
import React from "react";
import SidebarCategories from "@/components/Layout/SidebarCategories";
import HeroCarousel from "@/components/Home/HeroCarousel";
import FlashSale from "@/components/Sections/FlashSale";
import TopBrands from "@/components/Sections/TopBrands";
import Recommended from "@/components/Sections/Recommended";

export default function HomePage() {
  return (
    <div className='flex'>
      {/* Sidebar (lg+) */}
      <aside className='hidden lg:block w-1/6'>
        <SidebarCategories />
      </aside>

      {/* Main content */}
      <main className='flex-1 space-y-8 px-4'>
        <HeroCarousel />
        <FlashSale />
        <TopBrands />
        <Recommended />
        {/* …other sections */}
      </main>

      {/* Right promos (xl+) */}
      <aside className='hidden xl:block w-1/6'>
        {/* Promo banners or ads */}
      </aside>
    </div>
  );
}
