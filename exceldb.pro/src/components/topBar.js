import { Link } from "react-router-dom";
import s from "./topBar.module.scss";

const TopBar = () => {
  return (
    <nav class="main-nav">
      {/* <input type="checkbox" name="menu" id="btn-menu" /> */}
      <label for="btn-menu"></label>
      <ul>
        <li>
          <Link to="http://127.0.0.1:8080" class="contact_nav">
            Главная
          </Link>
        </li>
        <li>
          <Link to="http://127.0.0.1:8080/pages/contact.html" class="blog_nav">
            Контакты
          </Link>
        </li>

        <button
          onclick="window.location.href ='http://127.0.0.1:8080/pages/questionnaire.html';"
          class="button-year-tex-nav"
        >
          Получить 1 год бесплатно
        </button>
      </ul>
    </nav>
  );
};

export default TopBar;
