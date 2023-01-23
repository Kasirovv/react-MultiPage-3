import React from 'react'
import { useTranslation } from "react-i18next";
import map from './map.png';
function Contact() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  return (
    <div className='container m-auto'>
        <p className='text-[35px] font-[800] text-center py-[10vh]'>{t("Contacts")}</p>
      <section className="py-5 px-20 md:flex">
            <aside className='text-[#FEAD04] font-[700] text-[25px] space-y-5'>
                <p className='text-[20px] font-[500]'>
                    {t("See")}
                </p>
                <p>
                    +38 (67) 822-85-58 <br />
                    {t("Tel")}
                </p>
                <p>
                    +38 (48) 752-85-58 <br />
                    {t("Multi")}
                </p>
                <p>
                    +38 (67) 485-19-95 <br />
                    +38 (67) 511-29-99 <br />
                    {t("Dep")}
                </p>
                <p>
                    +380 (67) 899-47-97 <br />
                    {t("Lab")}
                </p>
                <p>
                    +380 (68) 939-65-85 <br />
                    {t("Exp")}
                </p>
                <p>
                    +380 (96) 714-46-61 <br />
                    {t("Exp")}
                </p>
                <p>
                    +7 (831) 288-93-74 <br />
                    {t("See")}
                </p>
                <p>
                    {t("See")}
                </p>
            </aside>
            <section>
                <img src={map} alt="" />
            </section>
      </section>
    </div>
  )
}

export default Contact
