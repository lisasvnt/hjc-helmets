import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from '../assets/hjc-mc-logo.svg';

function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16">

      {/* Back to top — mobile uniquement */}
      <div className="md:hidden flex items-center justify-center gap-2 pb-8 border-b border-gray-700 mb-8">
        <a href="#top" className="text-sm font-bold tracking-widest">BACK TO TOP ^</a>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-between pb-12 border-b border-gray-700">

        <div className="flex flex-col gap-4 max-w-sm">
          <img src={Logo} alt="Logo" className="max-w-24" />
          <h3 className="font-black text-lg tracking-widest">JOIN THE HJC NEWSLETTER</h3>
          <p className="text-xs text-gray-400 tracking-wide">
            BY PROVIDING YOUR E-MAIL, YOU AGREE TO RECEIVE THE HJC NEWSLETTER AND ACKNOWLEDGE THAT YOU HAVE READ OUR PRIVACY POLICY
          </p>
          <div className="flex">
            <input type="email" placeholder="Email" className="flex-1 bg-transparent border border-white px-4 py-2 text-sm outline-none" />
            <button className="bg-gray-600 px-6 py-2 text-sm font-bold skew-x-[-12deg]">
              <span className="inline-block skew-x-[12deg]">Subscribe</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-xs text-gray-400">I agree with storage and handling of my data by this website.</p>
          </div>
          <div className="flex md:hidden justify-center gap-6 text-xl pt-4">
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><MdEmail /></a>
          </div>
        </div>

        {/* Liens desktop */}
        <div className="hidden md:grid grid-cols-4 gap-12">

          <div className="flex flex-col gap-4">
            <h4 className="font-black tracking-widest">PRODUCTS</h4>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">RPHA SERIES</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">FULL FACE</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">MODULAR</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">OPEN FACE</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">OFF ROAD</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">SMART HJC</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-black tracking-widest">MEDIA</h4>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">NEWS</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">VIDEO</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">CATALOG</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">LIVE STREAMING</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-black tracking-widest">COMPANY</h4>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">ABOUT US</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">CONTACT US</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">WARRANTY</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">FAQ</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">PRIVACY POLICY</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-black tracking-widest">DEALERS</h4>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">DEALER LOCATOR</a>
            <a href="" className="text-xs text-gray-400 hover:text-white transition">DISTRIBUTION</a>
          </div>

        </div>

      </div>

      {/* Liens sur mobile */}
      <div className="md:hidden flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-700 py-4">
          <span className="font-black tracking-widest">PRODUCTS</span>
          <span className="text-xl">+</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-700 py-4">
          <span className="font-black tracking-widest">MEDIA</span>
          <span className="text-xl">+</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-700 py-4">
          <span className="font-black tracking-widest">COMPANY</span>
          <span className="text-xl">+</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-700 py-4">
          <span className="font-black tracking-widest">DEALERS</span>
          <span className="text-xl">+</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
        <p className="text-xs text-gray-500">HJC AMERICA, INC. All Rights Reserved 2023</p>
        <div className="hidden md:flex items-center gap-4 text-xl">
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><MdEmail /></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;