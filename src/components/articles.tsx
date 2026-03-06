import { FaChevronDown } from "react-icons/fa";
import Elmet1 from '../assets/helmet_1.webp'
import Elmet2 from '../assets/helmet_2.webp'
import Elmet3 from '../assets/helmet_3.webp'
import Elmet4 from '../assets/helmet_4.webp'
import Elmet5 from '../assets/helmet_5.webp'

function Articles () {
    return(
        <section className='bg-(--brand-color-back) w-full px-4 py-20'>
            <div className="wrapper">
                <div className="hidden md:flex flex-row justify-between">
                    <button className="relative w-fit bg-(--brand-color-font) px-6 py-2 text-sm font-bold text-white skew-x-[-12deg]"><span className="inline-block font-light text-2xl skew-x-[12deg]">NEW</span></button>
                    <button className="relative w-fit bg-(--brand-color-back) px-6 py-2 text-sm font-bold text-black skew-x-[-12deg] hover:bg-white hover:text-black transition">
                        <span className="inline-block text-2xl font-light skew-x-[12deg]">LICENSED</span>
                    </button>
                    <button className="relative w-fit bg-(--brand-color-back) px-6 py-2 text-sm font-bold text-black skew-x-[-12deg] hover:bg-white hover:text-black transition">
                        <span className="inline-block text-2xl font-light skew-x-[12deg]">RPHA SERIES</span>
                    </button>
                    <button className="relative w-fit bg-(--brand-color-back) px-6 py-2 text-sm font-bold text-black skew-x-[-12deg] hover:bg-white hover:text-black transition">
                        <span className="inline-block text-2xl font-light skew-x-[12deg]">FULL FACE</span>
                    </button>
                    <button className="relative w-fit bg-(--brand-color-back) px-6 py-2 text-sm font-bold text-black skew-x-[-12deg] hover:bg-white hover:text-black transition">
                        <span className="inline-block text-2xl font-light skew-x-[12deg]">MODULAR</span>
                    </button>
                    <button className="relative w-fit bg-(--brand-color-back) px-6 py-2 text-sm font-bold text-black skew-x-[-12deg] hover:bg-white hover:text-black transition">
                        <span className="inline-block text-2xl font-light skew-x-[12deg]">OPEN FACE</span>
                    </button>
                </div>
                <button className="flex flex-row md:hidden gap-2 justify-between w-full">
                    <a className="text-(--brand-color-font)">NEW</a>
                    <FaChevronDown className="text-(--brand-color-font)" />
                </button>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
                    <div className="flex flex-col gap-2 bg-gray-200 py-2 px-2">
                        <img src={Elmet1} alt="Casque n°1"></img>
                    </div>
                    <div className="flex flex-col gap-2 bg-gray-200 py-2 px-2">
                        <img src={Elmet2} alt="Casque n°2"></img>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 bg-gray-200 py-2 px-2">
                        <img src={Elmet3} alt="Casque n°3"></img>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 bg-gray-200 py-2 px-2">
                        <img src={Elmet4} alt="Casque n°4"></img>
                    </div>
                    <div className="hidden lg:flex flex-col gap-2 bg-gray-200 py-2 px-2">
                        <img src={Elmet5} alt="Casque n°5"></img>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Articles