import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Features = lazy(() => import('./components/Features'));
const ActivitySection = lazy(() => import('./components/ActivitySection'));
const ServiceSection = lazy(() => import('./components/ResourceSection'));
const TeacherSection = lazy(() => import('./components/TeacherSection'));
const Classes = lazy(() => import('./components/Classes'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Suspense fallback={<div>Loading...</div>}>
                  <Features />
                  <ActivitySection />
                  <ServiceSection />
                  <TeacherSection />
                  <Classes />
                  <div id="contact">
                    <ContactForm />
                  </div>
                </Suspense>
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;