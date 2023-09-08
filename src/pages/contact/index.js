import { Link } from "react-router-dom";
import s from "./contact.module.scss"

const Contact = () => {
  return (
    <body className={s.page}>
      <div className={s.wrapper}>
        <div className={s.survey}>
          <div className={s.content}>
            <div className={s.hero}>
              <Link to="#">
                {" "}
                <h1 className={s.hero_title}>Контактные данные</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.content_main}>
          <div className={s.content_main_text}>
            <p>Тел: +7 (915) 777-00-12</p>

            <p> Почта: dom-rsk2014@yandex.ru</p>

            <p>
              {" "}
              141310, Московская область, г. Сергиев Посад,ул. Осипенко д. 6 оф.
              Реквизиты Строительная компания ООО «РСК»
            </p>

            <p>
              ИНН 3301032210
              <div>ОГРН 1143339000485</div>
            </p>
            <div src="../pages/img/map.png" alt="" className={s.map_png}></div>
          </div>

          <div className={s.questionnaire}>
            <div className={s.questionnaire_input}>
              <ul className={s.input_list}>
                <li className={s.input_list_item}>
                  <input
                    name="mail"
                    placeholder="Электронная почта"
                    type="text"
                    value=""
                    className={s.mail}
                  ></input>
                </li>
                <li className={s.input_list_item}>
                  <input
                    name="FAQ"
                    placeholder="ФИО"
                    type="text"
                    value=""
                    className={s.faq}
                  ></input>
                </li>
                <li className={s.input_list_item}>
                  <input
                    name="appeal"
                    placeholder=""
                    type="text"
                    className={s.appeal}
                  ></input>
                </li>
              </ul>
            </div>
            <div className={s.button_one_year}>
              <button href="#" className={s.button_one_year_text}>
                Отправить
              </button>
            </div>
            <footer className={s.questionnaire_footer}>
              <div className={s.questionnaire_footer_image}>
                <figure>
                  <figcaption>
                    <div
                      src="../pages/img/iconGuard.svg"
                      width="24px"
                      height="24px"
                      alt="Защита"
                    >
                      <p className={s.garant}>
                        Мы гарантируем безопасность и сохранность ваших данных
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div>
                <p className={s.contacts_text}>
                  Оставляя свои контактные данные, вы разрешаете нам обратиться
                  к вам за обратной связью по нашему продукту.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className={s.what}>
        <div
          src="../../../img/pngwing.png"
          width="244px"
          height="204px"
          alt="in2sql"
          className={s.insql_image}
        ></div>
        <div className={s.what_row}>
          <Link to="#" className={s.link_title}>
            <h1>Попробуй in2sql прямо сейчас</h1>
          </Link>

          <p className={s.about_sql}>
            Клиент для интеграции excel c внешними источниками данных.
          </p>

          <div className={s.action}>
            <div className={s.one_month_what}>
              <p className={s.one_month_text_days}>30 дней</p>
              <p className={s.one_month_text}>создавай свои отчеты</p>
            </div>
            <div className={s.price}>
              <p className={s.price_number}>0 Р</p>
              <p className={s.action_time}> акция до декабря 2022</p>
            </div>
            <div className={s.empty_div}>
              <p className={s.empty_div_text}></p>
            </div>
          </div>

          <button className={s.button_free}>
            {" "}
            <p className={s.button_free_text_try}>Попробовать бесплатно</p>
          </button>
        </div>
      </div>
    </body>
  );
};

export default Contact;
