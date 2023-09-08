import { Link } from "react-router-dom";
import s from "./article.module.scss";

const Article = () => {
  return (
    <div className={s.box}>
      <div className={s.wrapper}>
        <div className={s.hero}>
          <h1 className={s.hero_title}>Lorem ipsum:</h1>
          <ul className={s.hero_title_list}>
            <li>
              <Link to="#" className={s.hero_list_item}>
                Что такое дебетовые карты
              </Link>{" "}
            </li>
            <li>
              <Link to="#" className={s.hero_list_item}>
                Для чего они нужны: преимущества и недостатки
              </Link>
            </li>
            <li>
              <Link to="#" className={s.hero_list_item}>
                Условия оформления
              </Link>
            </li>
          </ul>
        </div>

        <div className={s.main_article}>
          <p className={s.main_article_text}>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <h2 className={s.main_article_title}>Lorem ipsum dolor sit amet</h2>
          <p className={s.main_article_title_text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <p>На дебетовой карте обязательно будут следующие реквизиты:</p>
          <ul className={s.main_article_list}>
            <li className={s.main_article_list_item}>
              {" "}
              Aenean commodo ligula eget dolor
            </li>
            <li className={s.main_article_list_item}>
              {" "}
              Nulla consequat massa quis enim
            </li>
            <li className={s.main_article_list_item}>
              {" "}
              Donec quam felis, ultricies nec, pellentesque eu
            </li>
            <li className={s.main_article_list_item}>
              {" "}
              Aenean commodo ligula eget dolor
            </li>
          </ul>

          <p className={s.main_article_title_text}>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim.
          </p>
          <p className={s.main_article_title_text}>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
            tincidunt tempus.
          </p>
        </div>
        <div className={s.columns}>
          <div className={s.container}>
            <div className={s.vertical_body}>
              <div className={s.vertical_row_four}>
                <div className={s.vertical_column}>
                  <div className={s.vertical_item}>
                    <div className={s.vertical_subtitle}></div>
                    <div className={s.vertical_label}>
                      Очень длинный заголовок, хочется читать
                    </div>
                    <div className={s.vertical_date}>
                      01.12.2021{" "}
                      <Link
                        to="http://127.0.0.1:8080/pages/article"
                        class="vertical_date_link"
                      >
                        ・Читать
                      </Link>{" "}
                      <div>10 мин</div>
                    </div>
                  </div>
                </div>
                <div className={s.vertical_column}>
                  <div className={s.vertical_item}>
                    <div className={s.vertical_subtitle}></div>
                    <div className={s.vertical_label}>
                      Очень длинный заголовок, хочется читать
                    </div>
                    <div className={s.vertical_date}>
                      01.12.2021{" "}
                      <Link
                        to="http://127.0.0.1:8080/pages/article"
                        className={s.vertical_date_link}
                      >
                        ・Читать
                      </Link>{" "}
                      <div>10 мин</div>
                    </div>
                  </div>
                </div>
                <div className={s.vertical_column}>
                  <div className={s.vertical_item}>
                    <div className={s.vertical_subtitle}></div>
                    <div className={s.vertical_label}>
                      Очень длинный заголовок, хочется читать
                    </div>
                    <div className={s.vertical_date}>
                      01.12.2021{" "}
                      <Link
                        to="http://127.0.0.1:8080/pages/article"
                        className={s.vertical_date_link}
                      >
                        ・Читать
                      </Link>{" "}
                      <div>10 мин</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.read_more}>
          <Link to="" className={s.read_more_text}>
            <p>
              Смотреть все{" "}
              <div
                src="../pages/img/chevron-right-circle.svg.svg"
                width=" 24px"
                height=" 24px"
                alt=""
                className={s.icon}
              ></div>
            </p>
          </Link>
        </div>
      </div>

      <div className={s.what}>
        <div
          alt=""
          src="img/in2sql.svg"
          width="244px"
          height="204px"
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
            <div className={s.one_month}>
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

          <button
            onclick="window.location.href ='http://127.0.0.1:8080/pages/questionnaire.html';"
            className={s.button_free}
          >
            <p className={s.button_free_text}>Попробовать бесплатно</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
