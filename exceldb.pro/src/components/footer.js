import s from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.main_footer}>
        <div className={s.container_main_footer}>
          <div className={s.content_main_footer}>
            <div className={s.footer_row}>
              <div className={s.footer_icon}>
                <figure>
                  <figcaption>
                    <div className={s.footer_telegram_icons}
                      src="../../../img/telegram-mini.svg"
                      width="15px"
                      height="15px"
                      alt="телеграм"
                    ></div>
                    Москва
                  </figcaption>
                </figure>
              </div>
              <div className={s.footer_telephone}>
                <div className={s.footer_telephone_list}>
                  <ul className={s.footer_telephone_list}>
                    <li>+7 495 000 00 00 — Бизнесу и ИП</li>
                    <li>+7 495 111 11 11 — Частным клиентам</li>
                  </ul>
                </div>
                <div className={s.footer_telegram}>
                  <Link to="#">
                    <div
                      src="../../../img/icon_telegram.svg"
                      width="24px"
                      height="24px"
                      alt="телеграм"
                    ></div>
                  </Link>
                </div>
              </div>
            </div>
            <img
              src="../pages/img/Separator.svg"
              width=" 1140px"
              height="1px"
              alt=""
              className={s.separator}
            ></img>
            <div className={s.footer_second}>
              <div className={s.footer_nav}>
                <ul className={s.footer_nav_list}>
                  <Link to="http://localhost:3000/listOfArticles">
                    <li className={s.footer_nav_list_item}>Блог</li>
                  </Link>
                  <Link to="http://localhost:3000/contact">
                    <li className={s.footer_nav_list_item}>Контакты</li>
                  </Link>
                  <Link to="http://localhost:3000/questionnaire">
                    <li className={s.footer_nav_list_item}>
                      Получить годовую лицензию
                    </li>
                  </Link>
                </ul>
              </div>
              <div className={s.footer_date}>
                <p className={s.footer_date_text}>
                  © 2021-2023.ООО «ЧТО ТО», официальный сайт in2sql. Передавая
                  нам свои контактные данные, мы гарантируем безопасность их
                  хранения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
