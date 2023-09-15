import { Link } from "react-router-dom";
import s from "./topBar.module.scss";

const TopBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.survey}>
        <header className={s.content__container_header}>
          <div className={s.content__container}>
            <nav className={s.main_nav}>
              <input type="checkbox" name="menu" id="btn-menu" />
       

              <ul>
                <li>
                  <Link to="http://localhost:3000" className={s.contact_nav}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="http://localhost:3000/contact"
                    className={s.blog_nav}
                  >
                    Контакты
                  </Link>
                </li>

                <Link
                  to="http://localhost:3000/questionnaire"
                  className={s.button_year_text_nav}
                >
                  Получить 1 год бесплатно
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default TopBar;
