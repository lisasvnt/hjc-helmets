
import News1 from '../assets/news1.webp'
import News2 from '../assets/news2.webp'
import News3 from '../assets/news_3.webp'

function News() {
    return(
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3 py-20 px-4">
            <div className="relative flex flex-col min-h-96 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${News3})`}}>
                <div className="absolute inset-0 bg-black/40" />
                <p className='text-(--brand-color-back) text-xl z-10'>NEWS</p>
                <h3 className='text-xl md:text-2xl font-black text-(--brand-color-back) text-shadow-2xs z-10'>RPHA12 QUARTARARO REPLICA 2025</h3>
            </div>
            <div className="relative flex flex-col min-h-96 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${News1})`}}>
                <div className="absolute inset-0 bg-black/40" />
                <p className='text-(--brand-color-back) text-xl z-10'>VIDEO</p>
                <h3 className='text-xl md:text-2xl font-black text-(--brand-color-back) text-shadow-2xs z-10'>F100 - The Next Evolution in Modular Helmets</h3>
            </div>
            <div className="relative flex flex-col min-h-96 w-full justify-end bg-cover bg-center py-2 px-2" style={{ backgroundImage: `url(${News2})`}}>
                <div className="absolute inset-0 bg-black/40" />
                <p className='text-(--brand-color-back) text-xl z-10'>VIDEO</p>
                <h3 className='text-xl md:text-2xl font-black text-(--brand-color-back) text-shadow-2xs z-10'>RPHA12 12 VENUM III</h3>
            </div>

        </section>

    );
}

export default News