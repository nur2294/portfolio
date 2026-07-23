import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Services from "@/components/home/Services";
import StatsBar from "@/components/home/StatsBar";
import GlobalPresence from "@/components/home/GlobalPresence";
import WorkflowSection from "@/components/home/WorkflowSection";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <GlobalPresence />
      <WorkflowSection />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
