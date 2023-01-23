import React from 'react'
import { useTranslation } from "react-i18next";
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f3.jpg';

function About() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (
    <div className='container m-auto'>
        <p className='text-[30px] font-[700] text-center md:py-10'> {t("About")} </p>
        <section className='grid md:grid-cols-3 grid-rows-2 gap-10 px-10'>
            <section>
                <img src={f1}  alt="" />
            </section>
            <section>
                <img src={f1}  alt="" />
            </section>
            <section>
                <img src={f1}  alt="" />
            </section>
            <section>
                <img src={f1}  alt="" />
            </section>
            <section>
                <img src={f1}  alt="" />
            </section>
            <section>
                <img src={f1}  alt="" />
            </section>
        </section>
        <section className='grid md:grid-cols-2 grid-rows-2 gap-10 md:py-5'>
            <article className='px-[10vh]'>
                <p>
                    {t("Bigtxt1")}
                </p>
            </article>
            <section>
                <img src={f2} alt="" />
            </section>
            <section>
                <img src={f3} alt="" />
            </section>
            <article className='px-[10vh]'>
                <p>
                    {t("Bigtxt1")}
                </p>
            </article>
        </section>
    </div>
  )
}

export default About
