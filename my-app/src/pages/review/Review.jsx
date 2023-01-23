import React from 'react'
import { useTranslation } from "react-i18next";
import f1 from './assets/m.png';
import f2 from './assets/l.png';
import f3 from './assets/b.png';

function Review() {
  
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    return (
    <div className='container m-auto'>
        <p className='font-[800] text-[30px] text-center'> {t("Review")} </p>
        <section className='grid md:grid-cols-2 place-content-center py-5 px-5 gap-10'>
            <secton className='m-auto' >  <img src={f1} className='w-[500px]' alt="" />  </secton>
            <secton className='m-auto' >  <img src={f2} className='w-[500px]' alt="" /> </secton>
        </section>
        <section className='grid md:grid-cols-2 place-content-center py-[5vh] px-[5vh] md:px-[15vh] gap-10'>
            <article>
                <p className='text-[25px] font-[800]'> {t("LLC")} </p>
                <p>
                    {t("Txt")}
                </p>
            </article>
            <article>
                <p className='text-[25px] font-[800]'> {t("LLC")} </p>
                <p>
                    {t("Txt")}
                </p>
            </article> 
        </section>
        <section className='grid md:grid-cols-2 place-content-center py-[5vh] px-[5vh] md:px-[15vh] gap-10'>
            <section className='bg-[#F8F8F8]    grid md:grid-cols-2 place-content-center py-[5vh] px-[5vh] gap-10'>
                <section>
                    <img src={f3} alt="" />
                </section>
                <article>
                    <p className='text-[20px] font-[800]'> {t("LLC")} </p>
                    <p className='text-[15px]'> {t("Txt")} </p>
                </article>
            </section>
            <section className='bg-[#F8F8F8]    grid md:grid-cols-2 place-content-center  px-[5vh] gap-10'>
                <section>
                    <img src={f3} alt="" />
                </section>
                <article>
                    <p className='text-[20px] font-[800]'> {t("LLC")} </p>
                    <p className='text-[15px]'> {t("Txt")} </p>
                </article>
            </section>
        </section>
        <section className='grid md:grid-cols-2 place-content-center py-5 px-5 gap-10'>
            <secton className='m-auto' >  <img src={f1} className='w-[500px]' alt="" />  </secton>
            <secton className='m-auto' >  <img src={f2} className='w-[500px]' alt="" /> </secton>
        </section>
        <section className='grid md:grid-cols-2 place-content-center py-[5vh] px-[5vh] md:px-[15vh] gap-10'>
            <article>
                <p className='text-[25px] font-[800]'> {t("LLC")} </p>
                <p>
                    {t("Txt")}
                </p>
            </article>
            <article>
                <p className='text-[25px] font-[800]'> {t("LLC")} </p>
                <p>
                    {t("Txt")}
                </p>
            </article> 
        </section>
    </div>  
  )
}

export default Review
