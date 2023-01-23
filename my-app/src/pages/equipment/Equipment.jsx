import React from 'react'
import { useTranslation } from "react-i18next";
 
import f from './assets/f.png';

function Equipment() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (
    <div className='container m-auto'>
        <p className='md:text-[35px] font-[500] text-center px-[8vh] py-10'> {t("Clean")} </p>
        <section className='grid md:grid-cols-3 md:grid-rows-7 gap-5'>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>
            <section>
                <img src={f} alt="" />
                <p className='text-[25px] font-[600] text-center px-[15vh]'>
                    {t("Bvb")}
                </p>
            </section>  
        </section>
    </div>
  )
}

export default Equipment
