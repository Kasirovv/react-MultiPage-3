import React from 'react'
import { useTranslation } from "react-i18next";

import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/l.png';
import photo5 from './assets/m.png';
function Complex() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  return (
    <div className='container m-auto'>
        <section className='py-5 px-5 grid md:grid-cols-2'>
            <section className='min-w-[300px]'>
                <img src={photo1} className='w-full' alt="" />
            </section>
            <article className='px-7 flex flex-col justify-center'>
                <p className='text-[30px] font-[600]'>{t("Complex")}</p>
                <p>{t("Text3")}</p>
            </article>
        </section>
        <section className='py-5 px-5 grid md:grid-cols-2'>
            <article className='flex flex-col items-center justify-center'>
                <p className='text-[30px] font-[600]'>{t("Text4")}</p>
                <p>{t("Text5")}</p>
                <p className='text-[30px] font-[600]'>{t("Text4")}</p>
                
                <p>{t("Text5")}</p>
                <p className='text-[30px] font-[600]'>{t("Text4")}</p>
                
                <p>{t("Text5")}</p>
                <p className='text-[30px] font-[600]'>{t("Text4")}</p>
                
                <p>{t("Text5")}</p>
            </article>
            <section>
                <img src={photo2} className='w-full' alt="" />
            </section>
        </section>
        <section className='py-10 px-5 md:flex justify-around0'>
            <section className='w-[400px] m-auto h-[210px] bg-gray-100 grid place-content-center'>
                <img src={photo3} alt="" />
            </section>
            <section className='w-[400px] m-auto h-[210px] bg-gray-100 grid place-content-center'>
                <img src={photo3} alt="" />
            </section>
            <section className='w-[400px] m-auto h-[210px] bg-gray-100 grid place-content-center'>
                <img src={photo3} alt="" />
            </section>
            <section className='w-[400px] m-auto h-[210px] bg-gray-100 grid place-content-center'>
                <img src={photo3} alt="" />
            </section>
        </section>
        <section className='py-10 px-5 gap-10 grid md:grid-cols-2'>
            <section><img src={photo4} alt="" /></section>
            <section><img src={photo5} alt="" /></section>
        </section>
    </div>
  )
}

export default Complex
