import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Specialties from './components/Specialties';
import Process from './components/Process';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingQuoteButton from './components/FloatingQuoteButton';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard'; // Assuming you have this based on previous file list

// Landing Page Component to keep App clean
const LandingPage = ({ projects }) => (
  <>
    <Header />
    <main>
      <Hero />
      <Features />
      <Specialties />
      <Process />
      <Gallery projects={projects} />
      <AboutUs />
      <CallToAction />
      <ContactForm />
    </main>
    <Footer />
    <div className="flex flex-col gap-4 fixed bottom-6 right-6 z-[100] items-end">
      <FloatingQuoteButton />
      <WhatsAppButton />
    </div>
  </>
);

const initialProjects = [
  {
    id: 1,
    title: "Cocina Integral",
    location: "Almagro, CABA",
    category: "Cocina",
    images: [
      "/images/cocina-Almagro.png",
      "/images/cocina-Almagro2.png"
    ]
  },
  {
    id: 2,
    title: "Diseño Contemporáneo",
    location: "Pilar, Buenos Aires",
    category: "Cocina",
    images: [
      "/images/cocina-Pilar.png",
      "/images/cocina-Pilar2.png"
    ]
  },
  {
    id: 3,
    title: "Living & Estar",
    location: "Flores, CABA",
    category: "Living",
    images: [
      "/images/living-Flores1.png",
      "/images/living-flores2.png"
    ]
  },
  {
    id: 4,
    title: "Rack TV Moderno",
    location: "Caballito, CABA",
    category: "Sala de Estar",
    images: [
      "/images/rackTv-Caballito.png"
    ]
  },
  {
    id: 5,
    title: "Detalle de Autor",
    location: "Buenos Aires",
    category: "Mobiliario",
    images: [
      "/images/proyecto-7.png"
    ]
  }
];

function App() {
  const [projects, setProjects] = React.useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : initialProjects;
  });

  React.useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleLogout = () => {
    // Handle logout logic, clear tokens etc
    console.log("Logged out");
  };

  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage projects={projects} />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminDashboard
                projects={projects}
                setProjects={setProjects}
                onLogout={handleLogout}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
