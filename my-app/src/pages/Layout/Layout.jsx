import { Button, IconButton } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./assets/logo.png";
import { Menu, MenuBook, Search, Send, } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import bg from './assets/bg.png';
import Btn from "../Main/Btn";
function Layout() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="container m-auto">
          <nav className="py-5 flex justify-evenly items-center">
              <section className="">
                  <img src={logo} alt="" className="max-w-[150px]"/>
              </section>
              <section className="hidden md:flex items-center space-x-10">
                    <Link to="/">
                        {t("Main")}
                    </Link>
                    <Link to="/complex">
                        {t("CompleteSolutions")}
                    </Link>
                    <Link to="/review">
                        {t("Review")}
                    </Link>
                    <Link to="/about">
                        {t("AboutCompany")}
                    </Link>
                    <Link to="/equipment">
                        {t("Ourequipment")}
                    </Link>
                    <Link to="/contact">
                        {t("Contacts")} 
                    </Link>
              </section>
              <section className="bg-yellow-200">
                    <IconButton color="warning" sx={{padding:"5px"}}><Search/></IconButton>
                <select name="" id="" className="py-3 px-3 bg-yellow-200" onChange={(e)=>{changeLanguage(e.target.value)}}>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
              </section>
              <section className="hidden md:grid">
                    <p className="px-5">{t("Contacts")}</p>
                    <p className="font-[800]">+38 (067) 822-85-58</p>
              </section>
              <section className="flex md:hidden bg-gray-100">
                  <IconButton color="warning">
                    <Menu/>
                  </IconButton>
              </section>
          </nav>
      <Outlet />
            <section className="md:flex py-[5pc] bg-cover" style={{ backgroundImage:`url(${bg})`}} >
                <section className="flex justify-center items-center w-[50%] m-auto">
                    <img src={logo} alt="" />
                </section>
                <section className="my-[10vh]  md:mx-[10vh] md:px-[5vh] py-[5vh] w-[50%] m-auto bg-white">
                    <p className="text-[25px] font-[700]"> {t("Callback")} </p>
                    <section className="flex gap-10 flex-wrap ">
                    <input type="text"  className="border" placeholder="Иван"/>
                    <input type="text"  className="border" placeholder="Телефон"/>
                    <input type="text"  className="border" placeholder="E-mail"/>
                    <Btn title="Оставить заявку"/>
                    </section>
                </section>
            </section>
          <footer className="grid justify-center space-y-5 md:flex md:justify-evenly items-center py-5">
              <section className="grid items-center justify-center">
                  <img src={logo} alt="" className="max-w-[150px]"/>
              </section>
              <section className="grid items-center justify-center">
                  <p>{t("Contacts")}</p>
                    <section className="flex items-center">
                      <TextField id="outlined-basic" label="E-mail" color="info" variant="outlined" />
                      <IconButton color="warning"><Send/></IconButton>
                    </section>
              </section>
              <article className="grid items-center justify-center">
                  <p className="font-[900]">{t("OurCompany")}</p>
                  <p> {t("HowWeWork")}</p>
                  <p>{t("Comments")}</p>
                  <p>{t("New")}</p>
              </article>
              <article className="grid items-center justify-center">
                  <p className="font-[900]">{t("PressCenter")}</p>
                  <p>{t("News")}</p>
                  <p>{t("Blogs")}</p>
                  <p>{t("Exhibitions")}</p>
              </article>
          </footer>
    </div>
  );
}

export default Layout;
