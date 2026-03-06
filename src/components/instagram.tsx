import { FaInstagram } from "react-icons/fa";
import Instagram1 from "../assets/instagram1.png"
import Instagram2 from "../assets/instagram2.png"
import Instagram3 from "../assets/instagram3.png"
import Instagram4 from "../assets/instagram4.png"
import Instagram5 from "../assets/instagram5.png"
import Instagram6 from "../assets/instagram-6.png"
import Instagram7 from "../assets/instagram7.png"
import Instagram8 from "../assets/instagram-8.png"


function Instagram() {
    return(
        <section className="wrapper w-full">
            <div className="flex flex-row w-full items-center justify-center gap-6">
                <h3 className="text-2xl md:text-2xl font-black text-(--brand-color-font)">FOLLOW US HERE</h3>
                <p className="text-md font-light text-(--brand-color-font)">@hjchelmets</p>
                <FaInstagram className="w-6 h-6"/>
            </div>
            <div className="grid grid-cols-2 md:gap-6 md:grid-cols-4 py-20 px-4">
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram1})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram2})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram3})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram4})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram5})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram6})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram7})`}}>
                </div>
                <div className="relative flex flex-col min-h-48 md:min-h-72 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${Instagram8})`}}>
                </div>
            </div>
        </section>

    );
}

export default Instagram