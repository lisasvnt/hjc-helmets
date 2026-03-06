import moto1 from '../assets/video_section1.webp'
import moto2 from '../assets/video_section2.webp'
import moto3 from '../assets/video_section3.webp'
import { FaPlay } from 'react-icons/fa';



function VideoSection() {
    return(
    <section className="w-full flex items-center justify-center py-12 overflow-hidden gap-6">
      
      {/* Image gauche — floutée */}
      <div className="hidden md:block w-1/5 h-80 overflow-hidden opacity-40">
        <img src={moto2} alt="Femme tenant un casque de moto" className="w-full h-full object-cover" />
      </div>

      {/* Image centrale — mise en avant */}
      <div className="relative w-full md:w-3/5 h-80 overflow-hidden">
        <img src={moto1} alt="Vidéo" className="w-full h-full object-cover" />
        {/* Bouton play */}
        <div className="absolute bottom-6 left-6">
          <FaPlay className="text-white text-3xl drop-shadow-lg" />
        </div>
      </div>

      {/* Image droite — floutée */}
      <div className="hidden md:block w-1/5 h-80 overflow-hidden opacity-40">
        <img src={moto3} alt="Couple roulant sur une moto" className="w-full h-full object-cover" />
      </div>

    </section>

    );
}

export default VideoSection