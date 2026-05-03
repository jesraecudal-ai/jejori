import React from "react";
import HeroSection from "../components/home/HeroSection";
import AnnouncementStrip from "../components/home/AnnouncementStrip";
import FeaturedDishes from "../components/home/FeaturedDishes";
import LocationsSection from "../components/home/LocationsSection";
import ReviewsSection from "../components/home/ReviewsSection";
import FinalCTA from "../components/home/FinalCTA";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/aae1a996d_generated_68b9d686.png";
const ABOUT_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5c65208d5_generated_e66787bc.png";
const DISH_IMAGES = [
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/8e5c13ab9_generated_4554f765.png",
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/c15111e2e_generated_040fcced.png",
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/d01908ba2_generated_2f9be485.png",
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/7ad0cdae3_generated_10ab52e4.png",
];

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <AnnouncementStrip />
      <FeaturedDishes images={DISH_IMAGES} />
      <LocationsSection />
      <ReviewsSection />
      <FinalCTA bgImage={ABOUT_IMAGE} />
    </div>
  );
}