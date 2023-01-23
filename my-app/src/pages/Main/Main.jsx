import { Button, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import map from './assets/map.png';
import Btn from "./Btn";
import Card from "./Card";
import Card2 from "./Card2";
import bg from './assets/bg3.png';
import logo from './assets/logo.png';



function Main() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="container m-auto">
      <header className="md:flex px-5">
        <article className="md:px-[15vh] py-10 md:py-[15pc] text-[#FEAD04] text-[25px] md:text-[50px] font-[700]">
          <p> {t("Technology")} </p>
          <p className="text-black text-[25px] font-[400]">
                {t("Clean2")}
          </p>
          <Btn title={t("Submityourapplication")}/>
        </article>
        <section className="md:pr-[10vh] py-10 md:py-[10pc]">
            <img src={photo1} className="w-[800px] min-w-[300px]" />
        </section>
      </header>
      <main className="md:px-[15vh] py-[5vh]">
            <section className="flex justify-around flex-wrap gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <section className="px-6 py-20 flex justify-around flex-wrap gap-5">
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
            </section>
            <section className="md:flex justify-between md:px-[15vh] py-[5vh]">
                <article className="px-5">
                    <p className="font-[800] text-[30px]"> {t("AboutUs")} </p>
                    <p>
                        {t("Text1")}
                    </p>
                    <Btn title={t('Download')} />
                </article>
                <section className="py-[50px] px-5">
                    <img src={photo2} className="w-[2800px]" />
                </section>
            </section>
            <section className="md:flex justify-evenly md:px-[15vh] py-[5vh]">
                <section className="py-[10px] px-2  ">
                    <img src={map} className="w-[1500px]" />
                </section>
                <article className="px-5">
                    <p className="font-[800] text-[30px]"> {t("Country")} </p>
                    <p>
                        {t("Text2")}
                    </p>
                    <Btn title={t('Download')} />
                </article>
            </section>
      </main>
    </div>
  );
}

export default Main;
