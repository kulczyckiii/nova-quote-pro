import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials'; // Importación
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-1000">
            <Hero />
            <Services />
            <Portfolio />
            <Process />
            <Testimonials />
            <FAQ />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;