import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoReveal from '@/components/VideoReveal';
import ProblemSection from '@/components/ProblemSection';
import GuestControlSection from '@/components/GuestControlSection';
import HorizontalScrollSection from '@/components/HorizontalScroll';
import ExplainControl from '@/components/ExplainControl';
import AutomatedSystem from '@/components/AutomatedSystem';
import MeetTeamSection from '@/components/MeetTeamSection';
import FeaturesSection from '@/components/FeaturesSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full bg-[#f1f7ed]">
      <Navbar />
      <Hero />
      <VideoReveal />
      <ProblemSection />
      <GuestControlSection />
      <HorizontalScrollSection />
      <FeaturesSection />
      <ExplainControl />
      <AutomatedSystem />
      <MeetTeamSection />
      <FaqSection />
      <Footer />
    </main>
  );
}