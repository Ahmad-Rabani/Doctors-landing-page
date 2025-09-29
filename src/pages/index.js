import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import DentalCareHero from "./components/NavHero";
import DentalExperienceSection from "./components/DentelExperiencre";
import DentalServicesSection from "./components/DentelService";
import DentalFeaturesGrid from "./components/DentelFeature";
import DentalTeamSection from "./components/DentelTeamSection";
import DentalTechnologySection from "./components/DentelTechnology";
import TestimonialsSection from "./components/TestimonialSection";
import BlogPostsSection from "./components/BlogPost";
import AppointmentContactSection from "./components/Appointment";
import FAQSection from "./components/FAQ";
import SocialMediaCommunitySection from "./components/SocialCommunity";
import ClinicHoursSection from "./components/ClinicHours";
import FooterSection from "./components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <DentalCareHero />
      <DentalExperienceSection />
      <DentalServicesSection />
      <DentalFeaturesGrid />
      <DentalTeamSection />
      <DentalTechnologySection />
      <TestimonialsSection />
      <BlogPostsSection />
      <AppointmentContactSection />
      <FAQSection />
      <SocialMediaCommunitySection />
      <ClinicHoursSection />
      <FooterSection />
    </div>
  );
}
