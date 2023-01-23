import React from 'react'
import bg from './assets/bg2.png';
import zerno from './assets/zerno.png'
import { useTranslation } from "react-i18next";
function Card() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  return (
        <section className='m-auto w-[350px] h-[250px] flex items-center'style={{ backgroundImage:`url(${bg})`}}>
                <section className='bg-white py-[5vh] flex justify-center items-center h-[70px]'>
                    <img src={zerno} alt="" />
                    <p>{t("Zerno")}</p>
                </section>
        </section>

  )
}

export default Card
