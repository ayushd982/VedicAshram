import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fallback from './Component/Fallback.jsx'
import LoadingIndicator from './Component/LoadingIndicator.jsx'
import { LanguageProvider } from './context/LanguageContext'
import ScrollButtons from './Component/Header/ScrollButtons'
import chatnow from './Component/Header/chatnow';
import Talknow from './Component/Header/Talknow';
import Bookreport from './Component/Header/Bookreport';
// Lazy load components to improve performance
const Home = lazy(() => import('./Component/Header/Home.jsx'))
const About = lazy(() => import('./Component/Header/About.jsx'))
const Contact = lazy(() => import('./Component/Header/Contact.jsx'))
const Service = lazy(() => import('./Component/Header/Service.jsx'))
const Vedicastrology = lazy(() => import('./Component/Header/Vedicastrology.jsx'))
const Vastu = lazy(() => import('./Component/Header/Vastu.jsx'))
const Numerology = lazy(() => import('./Component/Header/Numerology.jsx'))
const CareerAstrology = lazy(() => import('./Component/Header/CareerAstrology.jsx'))
const ChildAstrology = lazy(() => import('./Component/Header/ChildAstrology.jsx'))
const Yagya = lazy(() => import('./Component/Header/yagya.jsx'))
const Askques = lazy(() => import('./Component/Header/Askques.jsx'))

// Training Program Section
const TrainingProgram = lazy(() => import('./Component/Header/TrainingProgram.jsx'))
const MusicCourse = lazy(() => import('./Component/Header/MusicCourse.jsx'))
const Mantrocharan = lazy(() => import('./Component/Header/Mantrocharan.jsx'))
const VedicJyotish = lazy(() => import('./Component/Header/VedicJyotish.jsx'))

//Vedic Astrology Pages
const HastRekha = lazy(() => import('./Component/Header/HastRekha.jsx'))
const Numberjyotish = lazy(() => import('./Component/Header/Numberjyotish.jsx'))
const Employeehoroscope = lazy(() => import('./Component/Header/Employeehoroscope.jsx'))
const BirthChart = lazy(() => import('./Component/Header/Birthchart.jsx'))
const Namechange = lazy(() => import('./Component/Header/Namechange.jsx'))
const Nuemorologyconsult = lazy(() => import('./Component/Header/Nuemorologyconsult.jsx'))
const Lifepath = lazy(() => import('./Component/Header/Lifepath.jsx'))
const BirthAstrology = lazy(() => import('./Component/Header/Birth&Astrology.jsx'))
const Carreroverview = lazy(() => import('./Component/Header/Carreroverview.jsx'))
const Jobanalysis = lazy(() => import('./Component/Header/jobBusinessAnalysis.jsx'))
const Careeranalysis = lazy(() => import('./Component/Header/Careeranalysis.jsx'))
const ChildHoroscope = lazy(() => import('./Component/Header/ChildHoroscope.jsx'))
const Lovemarriage = lazy(() => import('./Component/Header/Lovemarriage.jsx'))
const Love = lazy(() => import('./Component/Header/Love.jsx'))
const Marital = lazy(() => import('./Component/Header/Marital.jsx'))
const Muhurat = lazy(() => import('./Component/Header/Muhurat.jsx'))
const Vedic = lazy(() => import('./Component/Header/Vedic.jsx'))
const Planetary = lazy(() => import('./Component/Header/Planetary.jsx'))
// Child Astrology page
const Babyname = lazy(() => import('./Component/Header/Babyname.jsx'))
const Birthtime = lazy(() => import('./Component/Header/Birthtime.jsx'))
const ChildAstro = lazy(() => import('./Component/Header/ChildAstro.jsx'))
const ChildEdu = lazy(() => import('./Component/Header/ChildAstro.jsx')) // Temporarily using ChildAstro for ChildEdu
// const ChildEdu = lazy(() => import('./Component/Header/ChildAstro.jsx')) // Temporarily using ChildAstro for ChildEdu

// Vastu specific pages
const Vastushastra = lazy(() => import('./Component/Header/Vastushastra.jsx'))
const Residentialvastu = lazy(() => import('./Component/Header/Residentialvastu.jsx'))
const Commercialvastu = lazy(() => import('./Component/Header/Commercialvastu.jsx'))
const Vastucorrection = lazy(() => import('./Component/Header/Vastucorrection.jsx'))


// Yagya specific pages
const Mahamritunjya = lazy(() => import('./Component/Header/Mahamritunjya.jsx'))
const Manglik = lazy(() => import('./Component/Header/Manglik.jsx'))
const Navratripujan = lazy(() => import('./Component/Header/Navratripujan.jsx'))
const Rudraabhishek = lazy(() => import('./Component/Header/Rudraabhishek.jsx'))
const KalSarp = lazy(() => import('./Component/Header/KalSarp.jsx'))
const PitraDosh = lazy(() => import('./Component/Header/Pitradosh.jsx'))
const Moolshanti = lazy(() => import('./Component/Header/Moolshanti_new.jsx'))
const Bhoomipujan = lazy(() => import('./Component/Header/Bhoomipujan.jsx'))
const Grahpravesh = lazy(() => import('./Component/Header/Grahpravesh.jsx'))
const Santanprapti = lazy(() => import('./Component/Header/Santanprapti.jsx'))
const Vivah = lazy(() => import('./Component/Header/Vivah.jsx'))
const Narayanbali = lazy(() => import('./Component/Header/Narayanbali.jsx'))
const Bangalamukhi = lazy(() => import('./Component/Header/Banglamukhi.jsx'))


const App = () => {
  console.log('App component rendered');
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // This effect will run once when the component mounts
  useEffect(() => {
    // Preload the most common routes to avoid showing fallback on navigation
    const preloadComponents = async () => {
      try {
        // Create an array of promises for the most commonly accessed components
        const preloadPromises = [
          import('./Component/Header/Home.jsx'),
          import('./Component/Header/About.jsx'),
          import('./Component/Header/Service.jsx'),
          import('./Component/Header/TrainingProgram.jsx')
        ];

        // Wait for the Home component to load (most important)
        await preloadPromises[0];

        // Mark first load as complete after Home is loaded
        setIsFirstLoad(false);

        // Continue loading other components in the background
        Promise.all(preloadPromises).catch(err =>
          console.warn('Background preloading had some errors:', err)
        );
      } catch (error) {
        console.error('Error preloading components:', error);
        setIsFirstLoad(false);
      }
    };

    preloadComponents();

    // Map of route paths to their corresponding lazy components
    const routeComponentMap = {
      '/': './Component/Header/Home.jsx',
      '/about': './Component/Header/About.jsx',
      '/contact': './Component/Header/Contact.jsx',
      '/services': './Component/Header/Service.jsx',
      '/yagya': './Component/Header/yagya.jsx',
      '/musiccourse': './Component/Header/MusicCourse.jsx',
      '/mantrocharan': './Component/Header/Mantrocharan.jsx',
      '/training-program': './Component/Header/TrainingProgram.jsx',
      // Add more mappings as needed
    };

    // Function to preload a component based on path
    const preloadComponentForPath = (path) => {
      const normalizedPath = path.split('?')[0]; // Remove query params
      const componentPath = routeComponentMap[normalizedPath];

      if (componentPath) {
        // Preload the component
        import(componentPath).catch(err =>
          console.warn(`Error preloading ${componentPath}:`, err)
        );
      }
    };

    // Add event listeners to handle page transitions
    const handleStartTransition = () => {
      // We're already past the first load, so optimize navigation
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.href.includes(window.location.origin)) {
          // Preload on hover to make navigation feel instant
          link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/')) {
              preloadComponentForPath(href);
            }
          });

          // Also track clicks for analytics or other purposes
          link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/')) {
              console.log(`Navigating to: ${href}`);
            }
          });
        }
      });
    };

    // Call once and also set up for future navigation
    handleStartTransition();
    window.addEventListener('popstate', handleStartTransition);

    return () => {
      window.removeEventListener('popstate', handleStartTransition);
    };
  }, []);

  // Only show full Fallback component on first load, use minimal loading indicator for navigation
  const fallbackElement = isFirstLoad ? <Fallback /> : <LoadingIndicator />;

  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
          <Suspense fallback={fallbackElement}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Service />} />

              {/* services drop-down page */}
              <Route path="/services/vedic-astrology" element={<Vedicastrology />} />
              <Route path="/services/vastu" element={<Vastu />} />
              <Route path="/services/vastu/vastu-shastra" element={<Vastushastra />} />
              <Route path="/services/vastu/residential-vastu" element={<Residentialvastu />} />
              <Route path="/services/vastu/commercial-vastu" element={<Commercialvastu />} />
              <Route path="/services/vastu/vastu-correction" element={<Vastucorrection />} />
              <Route path="/services/child-astrology" element={<ChildAstrology />} />

              <Route path="/yagya" element={<Yagya />} />
              <Route path="/training-program" element={<TrainingProgram />} />
              <Route path="/training-program/Classical-Music-Course" element={<MusicCourse />} />
              <Route path="/training-program/mantrocharan" element={<Mantrocharan />} />
              <Route path="/training-program/vedic-jyotish" element={<VedicJyotish />} />

              {/* Numerology page */}
              <Route path="/services/numerology" element={<Numerology />} />
              <Route path="/services/numerology/name-change" element={<Namechange />} />
              <Route path="/services/numerology/consultation" element={<Nuemorologyconsult />} />
              <Route path="/services/numerology/life-path" element={<Lifepath />} />

              {/* career astrology */}
              <Route path="/services/career-astrology" element={<CareerAstrology />} />
              <Route path="/services/career-astrology/overview" element={<Carreroverview />} />
              <Route path="/services/career-astrology/job-business" element={<Jobanalysis />} />
              <Route path="/services/career-astrology/timing" element={<Careeranalysis />} />

              {/*Vedic Page*/}
              <Route path="/services/vedic-astrology/hast-rekha" element={<HastRekha />} />
              <Route path="/services/vedic-astrology/number-jyotish" element={<Numberjyotish />} />
              <Route path="/services/vedic-astrology/employee-horoscope" element={<Employeehoroscope />} />
              <Route path="/services/vedic-astrology/child-horoscope" element={<ChildHoroscope />} />
              <Route path="/services/vedic-astrology/love-marriage" element={<Lovemarriage />} />
              <Route path="/services/love-relationship" element={<Love />} />
              <Route path="/services/love-relationship/marital-problem" element={<Marital />} />
              <Route path="/services/love-relationship/mahurata" element={<Muhurat />} />
              <Route path="/services/love-relationship/matchmaking" element={<Vedic />} />
              <Route path="/services/vedic-astrology/birth-chart" element={<BirthChart />} />
              <Route path="/services/vedic-astrology/birth-personal" element={<BirthAstrology />} />

              {/* child astrology */}
              <Route path="/services/child-astrology/Baby-Name-Selection" element={<Babyname />} />
              <Route path="/services/child-astrology/birth-time" element={<Birthtime />} />
              <Route path="/services/child-astrology/consultation" element={<ChildEdu />} />
              <Route path="/services/child-astrology/education" element={<ChildEdu />} />

              {/* Yagya Specific Page */}
              <Route path="/yagya/mahamrityunjaya" element={<Mahamritunjya />} />
              <Route path="/yagya/manglik-dosh" element={<Manglik />} />
              <Route path="/yagya/Rudrabhishek" element={<Rudraabhishek />} />
              <Route path="/yagya/Navratri-Pooja-Vidhi-Vidhan" element={<Navratripujan />} />
              <Route path="/yagya/pitra-dosh" element={<PitraDosh />} />
              <Route path="/yagya/mool-shanti" element={<Moolshanti />} />
              <Route path="/yagya/Bhoomi-Poojan" element={<Bhoomipujan />} />
              <Route path="/yagya/Grah-Pravesh" element={<Grahpravesh />} />
              <Route path="/yagya/santaan-prapti" element={<Santanprapti />} />
              <Route path="/yagya/Vivah-Sanskar" element={<Vivah />} />
              <Route path="/yagya/narayan-bali" element={<Narayanbali />} />
              <Route path="/yagya/Banglamukhi" element={<Bangalamukhi />} />
              <Route path="/yagya/kal-sarp-dosh" element={<KalSarp />} />
              <Route path="/askques" element={<Askques />} />
              <Route path="/chatnow" element={<chatnow />} />
              <Route path="/bookreport" element={<Bookreport />} />
              <Route path="/talknow" element={<Talknow />} />
              <Route path="/services/career-astrology/planetary-influence" element={<Planetary />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
        <ScrollButtons />
      </Router>
    </LanguageProvider>
  )
}

export default App
