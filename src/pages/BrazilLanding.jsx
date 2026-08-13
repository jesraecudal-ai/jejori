import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import LocationsSection from "@/components/home/LocationsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FinalCTA from "@/components/home/FinalCTA";
import { useOperation } from "@/lib/OperationContext";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const ABOUT_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";

export default function BrazilLanding() {
  const { setOperation } = useOperation();
  useEffect(() => {
    setOperation("brasil");
  }, [setOperation]);

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