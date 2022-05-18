import { IoArrowForward } from 'react-icons/io5'
import { HorizontalScrollWrapper } from '../components/atoms'
import { Navbar } from '../components/molecules'
import { Footer, ProductCard, PromotionCard } from '../components/organisms'
import DocumentMeta from 'react-document-meta'
import { best_sellers, on_sale, promotions } from '../db'



const pageMeta = {
    title: "Martin and Carl Commerce Center - Home",
    description:"Ghana's top online luxury place. Top brands, low prices & free shipping on many items.",
}


export default function Landing() {
  
    return (
      <DocumentMeta {...pageMeta}>
        <div className='w-full h-full'>
            <Navbar />
            
            <div className="w-full h-36 lg:h-96 hero-banner bg-slate-800"/>

            <header className="w-full bg-slate-700 p-2 leading-3 flex justify-between items-center">
                <div>
                  <h2 className="capitalize text-xl text-yellow-600 font-bold">
                      Best sellers
                  </h2>
                  <p className='text-sm text-white/60'>
                    Do not miss these offers
                  </p>
                </div>
                <button className="py-2 px-4 border border-white/30 rounded-lg flex justify-between items-center text-white text-sm">
                    View all <IoArrowForward />
                </button>
            </header>

            <div className="w-full p-2 flex flex-wrap mb-4">
                <HorizontalScrollWrapper>
                  {
                      best_sellers.map((best_seller, index)=>(

                        <div className='mr-2' key={index}>
                            <ProductCard 
                              data={best_seller}
                              // width=""
                            />
                        </div>
                        
                      ))
                    }
                </HorizontalScrollWrapper>
            </div>

            <header className="w-full bg-slate-700 p-2 leading-3 flex justify-between items-center">
                <div>
                  <h2 className="capitalize text-xl text-yellow-600 font-bold">
                      Promotion of the day
                  </h2>
                  <p className='text-sm text-white/60'>
                    Do not miss these offers
                  </p>
                </div>
                <button className="py-2 px-4 border border-white/30 rounded-lg flex justify-between items-center text-white text-sm">
                    View all <IoArrowForward />
                </button>
            </header>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                  
                  {
                    promotions.map((promotion, idx)=>(

                      <div
                        className="w-full p-2 flex flex-wrap mb-4"
                        key={idx}
                      >
                        <PromotionCard data={promotion} />
                      </div>
                      
                    ))
                  }
              
            </div>

            <header className="w-full bg-slate-700 p-2 leading-3 flex justify-between items-center">
                <div>
                  <h2 className="capitalize text-xl text-yellow-600 font-bold">
                      Products of the week
                  </h2>
                  <p className='text-sm text-white/60'>
                    Do not miss these offers
                  </p>
                </div>
                <button className="py-2 px-4 border border-white/30 rounded-lg flex justify-between items-center text-white text-sm">
                    View all <IoArrowForward />
                </button>
            </header>

            <div className="w-full px-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 my-4">
                {
                  on_sale.map((best_seller, index)=>(

                    <div className='odd:mr-1 mb-2' key={index}>
                        <ProductCard 
                          data={best_seller}
                          width="full"
                        />
                    </div>
                    
                  ))
                }
            </div>

            <Footer />
            
        </div>
      </DocumentMeta>
    )
}
