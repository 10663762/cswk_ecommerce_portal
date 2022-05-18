import React from "react";
import DocumentMeta from "react-document-meta";
import { IoFilter } from "react-icons/io5";
import { Navbar } from "../components/molecules";
import { Footer, ProductCard } from "../components/organisms";
import { best_sellers as items } from "../db";


const pageMeta = {
  title: "Martin and Carl Commerce Center - Store",
  description:"Browse through a list of affordable luxurious clothes",
}

export default function Shop() {
      return (
        <DocumentMeta {...pageMeta}>
          <div className="w-full h-full">

              <Navbar />

                  <div className="w-full">
                      <div className="w-full h-36 lg:h-96 hero-banner bg-slate-800"/>
                      <header className="w-full bg-slate-700 px-2 py-4 leading-3 flex justify-between items-center text-white">
                          <div className="flex items-center">
                              <IoFilter className="text-lg mr-2" /> Filter Products
                          </div>
                      </header>

                      <div className="w-full grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6  flex-wrap mb-4 px-2 pt-4">
                          {
                              items.map((item, index)=>(

                                  // <React.Fragment>
                                      <div className=" lg:mt-4">
                                          <ProductCard 
                                              key={index}
                                              data={item}
                                              width="full"
                                          />
                                      </div>
                                  // </React.Fragment>
                                  
                              ))
                          }
                      </div>
                  </div>

              <Footer/>
              
          </div>
        </DocumentMeta>
      )
}
