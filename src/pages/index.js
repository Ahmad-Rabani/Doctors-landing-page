import Head from "next/head";
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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Head>
        <title>Noble Dental Care | Implant & Comprehensive Dentistry</title>
      </Head>
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
    </main>
  );
}