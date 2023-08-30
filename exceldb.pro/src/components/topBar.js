import { Link } from "react-router-dom";
import "./topBar.module.scss";

const TopBar = () => {
  return (
    <div class="wrapper">
      <div class="survey">
        <header class="content__container_header">
          <div class="content__container">
            <nav class="main-nav">
              <input type="checkbox" name="menu" id="btn-menu" />
              <label for="btn-menu"></label>
              <ul>
                <li>
                  <Link to="http://127.0.0.1:8080" class="contact_nav">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="http://127.0.0.1:8080/pages/contact.html"
                    class="blog_nav"
                  >
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
          </div>
        </header>
        
      </div>
    </div>
  );
};

export default TopBar;
