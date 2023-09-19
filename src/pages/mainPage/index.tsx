import {Link} from 'react-router-dom'
import s from './index.module.scss'

//TODO:
//const baseUrl =  "http://localhost:3000";
//if local 

const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.survey}>
        <div className={s.hero}>
          <div className={s.hero_main_header}>
            <h1 className={s.hero_main_header_text}>
              Excel перестал быть просто таблицей
            </h1>
            <div className={s.hero_main_text}>
              Инструмент анализа данных
              <div> Управление справочниками</div>
              <div>Сбор регуляторной отчетности</div>
              <div>CPM/EPM приложение</div>
            </div>

            <button className={s.one_year_free}>
              <Link to = "#" className={s.one_year_free_text}>
                Получить 1 год бесплатно
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={s.page_content__TwuVy}>
        <div className={s.blocks}>
          <div className={s.block}>
            <div className={s.block_title}> РЕСУРСЫ</div>
            <div className={s.blog_article_text}>
              {' '}
              Уменьшение потребности в IT услугах для бизнеса
            </div>
          </div>
          <div className={s.block}>
            <div className={s.block_title}>СКОРОСТЬ</div>
            <div className={s.blog_article_text}>
              Ускорение процессов консолидации данных
            </div>
          </div>
          <div className={s.block}>
            <div className={s.block_title}>BI</div>
            <div className={s.blog_article_text}>Элементы self service BI</div>
          </div>
          <div className={s.block_last}>
            <div className={s.block_title}>БЕЗОПАСНОСТЬ</div>
            <div className={s.blog_article_text}>Повышение прозрачности</div>
          </div>
        </div>
      </div>
      <div className={s.about}>
        <h1 className={s.about_heading}>Что такое in2sql?</h1>
        <div className={s.about_container}>
          <div className={s.about_first_column}>
            <div className={s.about_first_column_block}>
              <div className={s.block_content}>
                <div className={s.block_content_main}>
                  <Link to="#" className={s.block_content_main_title}>
                    Plugin для Excel
                  </Link>

                  <p className={s.block_content_main_text}>
                    Установщик, который расширяет программный код Excel или web
                    приложений которое интегрируется в Excel
                  </p>
                </div>
                <div
        
                  className={s.block_content_main_icon_one}
                ></div>
              </div>
            </div>

            <div className={s.about_first_column}>
              <div className={s.about_first_column_block}>
                <div className={s.block_content}>
                  <div className={s.block_content_main}>
                    <Link to="#" className={s.block_content_main_title}>
                      Простое совместное пользование
                    </Link>

                    <p className={s.block_content_main_text_two}>
                      Упрощение совместной обработки данных для бизнес
                      пользователей data. Финансисты, Маркетинг и Комплаенс
                      будут иметь удобный доступ к данным.
                    </p>
                  </div>
                  <div
                 
                    className={s.block_content_main_icon_two}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.about_second_column}>
            <div className={s.about_first_column_block}>
              <div className={s.block_content}>
                <div className={s.block_content_main}>
                  <Link to="#" className={s.block_content_main_title}>
                    Сокращение инструментов для редактирования данных
                  </Link>

                  <p className={s.block_content_main_text}>
                    Избавим вас от MDM, FDQM, CPM, и ETL процессов.
                  </p>
                </div>
                <div
             
                  className={s.block_content_main_icon_tree}
                ></div>
              </div>
            </div>

            <div className={s.about_first_column_block}>
              <div className={s.block_content}>
                <div className={s.block_content_main}>
                  <Link to="#" className={s.block_content_main_title}>
                    Технологичное решение
                  </Link>

                  <p className={s.block_content_main_text_four}>
                    Плагины в Excel (Р7/Мой Офис/OpenOffice ) для интеграции c
                    базами данных и серверами приложений (C#/JavaScript).
                    Собственный сервер приложений (Python/Pandas/PySpark) для
                    процессинга расчетов.
                  </p>
                </div>
                <div
             
                  className={s.block_content_main_icon_four}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.mainQuestionnaire}>
        <div className={s.mainQuestionnaire_content}>
          <div className={s.navbar}>
            <h1 className={s.mainQuestionnaire_title}>
              Узнай силу автоматизации баз данных
            </h1>
            <div className={s.steps}>
              <div className={s.first_step}>
                <figure>
                  <figcaption>
                    <div
                  
                    ></div>
                    <div
                      className={s.step_number_one}
                 
                    ></div>
                    <b>
                      <div>Анкета</div>
                    </b>
                  </figcaption>
                </figure>
              </div>

              <div className={s.second_step}>
                <figure>
                  <figcaption>
                    <div
                
                    ></div>
                    <div
                      className={s.step_number_two}
                 
                    ></div>
                    <b>Бесплатный доступ</b>
                  </figcaption>
                </figure>
              </div>

              <div className={s.tree_step}>
                <figure>
                  <figcaption>
                    <div
               
                    ></div>
                    <div
                      className={s.step_number_tree}
                    
                    ></div>
                    <b>
                      <div>Успешное пользование</div>
                    </b>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className={s.number_box}>
            <input
              name="mobile"
              placeholder="Мобильный телефон"
              className={s.mobile_input}
            ></input>
          </div>

          <div className={s.email_box}>
            <input
              name="login"
              placeholder="Электронная почта*"
              className={s.email_input}
            ></input>
          </div>

          <div className={s.buttons}>
            <div className={s.button_take_one_month}>
              <button className={s.one_month}>
                <text className={s.text_month}>Получить лицензию 30 дней</text>
              </button>
            </div>

            <div className={s.button_take_one_year}>
              <button className={s.one_year}>
                <text className={s.text_year}>Получить лицензию на 1 год</text>
              </button>
            </div>
          </div>
        </div>
        <footer className={s.footer_main}>
          <div className={s.footer_content}>
            <figure>
              <figcaption>
                <div
                  className={s.guard_icon}
            
                >
                  {' '}
                  <p className={s.garant_text}>
                    Мы гарантируем безопасность и сохранность ваших данных
                  </p>
                </div>{' '}
              </figcaption>
            </figure>
          </div>
        </footer>
        <p className={s.mainQuestionnaire_footer}>
          Оставляя свои контактные данные, вы разрешаете нам обратиться к вам за
          обратной связью по нашему продукту.
        </p>
      </div>

      <div className={s.quests}>
        <div className={s.quests_content}>
          <h1 className={s.quests_title}>Часто задаваемые вопросы</h1>

          <figure>
            <figcaption className={s.quests_content_text}>
              <div
                className={s.plus}
        
              >
                {' '}
                <p className={s.plus_text}> Как начать работать с in2sql?</p>
              </div>{' '}
            </figcaption>
          </figure>

          <figure>
            <figcaption className={s.quests_content_text}>
              {' '}
              <div
                className={s.plus}
           
              >
                {' '}
                <p className={s.plus_text}>
                  {' '}
                  Нужны ли мне навыки программирования дла работы с in2sql?
                </p>
              </div>{' '}
            </figcaption>
          </figure>

          <figure>
            <figcaption className={s.quests_content_text}>
              {' '}
              <div
                className={s.plus}
          
              >
                {' '}
                <p className={s.plus_text}>
                  {' '}
                  С чем можно интегрировать in2sql?{' '}
                </p>
              </div>{' '}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={s.what}>
        <div
        
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
            {' '}
            <p className={s.button_free_text_try}>Попробовать бесплатно</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
