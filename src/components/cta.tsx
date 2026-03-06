import CtaImage from '../assets/cta.webp'

function CallToAction() {
    return(
        <section className="px-4 py-20">
            <div className="flex flex-col min-h-96 w-full items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${CtaImage})`}}>
                <p className='text-(--brand-color-back) font-thin text-xs'>HJC SPECIAL</p>
                <h2 className='text-3xl md:text-8xl font-black text-(--brand-color-back)'>KRAKEN</h2>
                <p className='text-(--brand-color-back) text-xl'>RPHA12</p>
                <button className="btn-primary mt-4">
                    <span className="inline-block skew-x-[12deg]">VIEW MORE</span>
                </button>
            </div>

        </section>
        


    );
}

export default CallToAction