import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import Image from "../image/hero-right.png"
import Partners from './Partners'
function Hero() {
    return (
        <div className="mt-12">
           <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-between">
           <div className=" w-full text-center lg:text-left xl:w-8/12 2xl:w-10/12">
            
               <h1 className="text-3xl font-bold leading-none text-primary-dark mb-4 lg:text-4xl xl:text-5xl 2xl:text-6xl">Иргэдийн <span className="text-primary-blue">санхүүгийн хүртээмжийг</span> нэмэгдүүлэхийн төлөө</h1>
               <p className="text-primary-gray leading-relaxed font-medium xl:w-8/12">Бидний эрхэм зорилго хүн бүр эдийн засгийн боломжоор хангагдсан санхүүгийн хувьд хүртээмжтэй нийгмийг бий болгох явдал юм. Хүмүүст амьдралаа дээшлүүлэхэд нь шаардлагатай санхүүгийн чадамжийг бүрдүүлэхэд туслах нь бидний алсын хараа юм.</p>
               <div className='flex flex-col w-8/12 mx-auto my-8 lg:flex-row lg:mx-0 lg:w-full'>
               <PrimaryBtn text="Санхүүгийн боловсрол"/>
               <SecondaryBtn text="Холбоо барих"/>
               </div>
               
            </div>
            <div className='mx-4 w-10/12 md:mx-0 '>
                <img src={Image}/>
            </div>
           </div>
            <div className="mx-auto text-center">Partners</div>
        </div>
    )
}

export default Hero
