import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedDishes from "../components/home/FeaturedDishes";
import LocationsSection from "../components/home/LocationsSection";
import ReviewsSection from "../components/home/ReviewsSection";
import FinalCTA from "../components/home/FinalCTA";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const ABOUT_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const DISH_IMAGES = [
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/2bada4c45_WhatsAppImage2026-05-03at1803101.jpg",
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg",
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/2bada4c45_WhatsAppImage2026-05-03at1803101.jpg",
  "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg",
];

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <FeaturedDishes />
      <LocationsSection />
      <ReviewsSection />
      <FinalCTA bgImage={ABOUT_IMAGE} />
    </div>
  );
}