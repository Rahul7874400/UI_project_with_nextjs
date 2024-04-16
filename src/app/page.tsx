import FeaturedCourses from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructor";
import TestimonialCard from "@/components/TestimonialCard";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.8] antialiased ">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcommingWebinar/>
      <Instructors/>
      <Footer/>
  </main>
  )
}
