import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import LocationsSection from "@/components/home/LocationsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import InstagramCarousel from "@/components/home/InstagramCarousel";
import FinalCTA from "@/components/home/FinalCTA";
import { useOperation } from "@/lib/OperationContext";
import { setMeta } from "@/lib/seo";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const ABOUT_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";

export default function BrazilLanding() {
  const { setOperation } = useOperation();
  useEffect(() => {
    setMeta(
      "Jejori Asian Haus Brasil — Gravataí & Porto Alegre",
      "Jejori Asian Haus Brasil — dim sum, lumpia e cozinha filipina e asiática em Gravataí e Porto Alegre. Aberto para almoço e jantar."
    );
    setOperation("brasil");
  }, [setOperation]);

  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <FeaturedDishes />
      <LocationsSection />
      <ReviewsSection />
      <GoogleReviewsSection />
      <InstagramCarousel />
      <FinalCTA bgImage={ABOUT_IMAGE} />
    </div>
  );
}