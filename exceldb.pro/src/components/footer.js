import "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div class="main-footer">
        <div class="container-main-footer">
          <div class="content-main-footer">
            <div class="footer-row">
              <div class="footer_icon">
                <figure>
                  <figcaption>
                    <img
                      src="../pages/img/telegram-mini.svg"
                      width="15px"
                      height="15px"
                      alt="телеграм"
                    ></img>
                    Москва
                  </figcaption>
                </figure>
              </div>
              <div class="footer-telephone">
                <div class="footer-telephone-list">
                  <ul class="footer-telephone-list">
                    <li>+7 495 000 00 00 — Бизнесу и ИП</li>
                    <li>+7 495 111 11 11 — Частным клиентам</li>
                  </ul>
                </div>
                <div class="footer-telegram">
                  <a href="#">
                    <img
                      src="../pages/img/icon_telegram.svg"
                      width="24px"
                      height="24px"
                      alt="телеграм"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <img
              src="../pages/img/Separator.svg"
              width=" 1140px"
              height="1px"
              alt=""
              class="separator"
            ></img>
            <div class="footer-second">
              <div class="footer-nav">
                <ul class="footer-nav-list">
                  <a href="http://127.0.0.1:8080/pages/listOfArticles.html">
                    <li class="footer-nav-list-item">Блог</li>
                  </a>
                  <a href="http://127.0.0.1:8080/pages/contact.html">
                    <li class="footer-nav-list-item">Контакты</li>
                  </a>
                  <a href="http://127.0.0.1:8080/pages/questionnaire.html">
                    <li class="footer-nav-list-item">
                      Получить годовую лицензию
                    </li>
                  </a>
                </ul>
              </div>
              <div class="footer-date">
                <p class="footer-date-text">
                  © 2021-2023.ООО «ЧТО ТО», официальный сайт in2sql. Передавая
                  нам свои контактные данные, мы гарантируем безопасность их
                  хранения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
