import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Stories />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
