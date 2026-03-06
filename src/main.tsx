import * as ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Articles from './components/articles'
import VideoSection from './components/video_section';
import CallToAction from './components/cta';
import News from './components/news'
import Instagram from './components/instagram'
import Footer from './components/footer'
import bgImage from './assets/header_image.webp';
import { FaChevronRight } from "react-icons/fa";


ReactDOM.createRoot(document.getElementById('app')!).render(
  <div className='min-h-screen flex flex-col'>
    <section className='h-screen w-full relative flex flex-col items-center bg-cover bg-center overflow-x-hidden -bg-linear-30' style={{ backgroundImage: `url(${bgImage})`}}>

    {/* Filtre sombre */}
    <div className="absolute inset-0 bg-black/40" />

    <Navbar />

    <div className='relative z-10 w-full h-full flex flex-col justify-between px-4 pt-48 pb-12'>
      <div className='flex flex-col gap-8'>
        <div className="wrapper">
          <h1 className='heading-1'>RPHA 72</h1>
          <p className="text-2xl font-light text-(--brand-color-back) tracking-wide">PREMIUM SPORT TOURING</p>
        </div>
        <div className='wrapper'>
          <button className="btn-primary">
            <span className="inline-block skew-x-[12deg]">LEARN MORE</span>
          </button>
          <button className="flex flex-row gap-2 items-center">
            <a className="text-(--brand-color-back)">RELATED PRODUCT</a>
            <FaChevronRight className="text-(--brand-color-back)" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-white text-xs font-bold">
        {/* Icône souris */}
        <svg width="16" height="24" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="white" strokeWidth="2"/>
          <rect x="11" y="6" width="2" height="6" rx="1" fill="white"/>
        </svg>
        <p className='text-xs text(--brand-color-back) font-medium'>SCROLL DOWN</p>
        <p className='text-xs/0.5 text(--brand-color-back) font-medium'>FOR MORE</p>
      </div>

      {/* Carroussel */}
      <div className="flex flex-row w-full justify-center items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </div>
  </section>

  <Articles />

  <VideoSection />

  <CallToAction />

  <News />

  <Instagram />

  <Footer />


  </div>
  
);