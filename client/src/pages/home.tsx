import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import OptimizeSleepSection from "@/components/OptimizeSleepSection";
import CookiesModal from "@/components/CookiesModal";

export default function Home() {
  const [showCookiesModal, setShowCookiesModal] = useState(true);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <OptimizeSleepSection />
      <CookiesModal 
        isOpen={showCookiesModal} 
        onClose={() => setShowCookiesModal(false)} 
      />
    </div>
  );
}
