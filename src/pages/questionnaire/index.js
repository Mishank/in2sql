
import s from "./questionnaire.module.scss";
const Questionnaire = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.survey}>
        <div className={s.content}>
           <div className={s.hero}>
        <div className={s.hero_main_header}>
        <h1 className={s.hero_main_header_text}>Заполни анкету и получи 1 год лицензии</h1>
        <p className={s.hero_main_text}> Нам нужны эти данные для анализа и улучшения нашего продукта.</p>
      
        <button onclick="window.location.href ='http://127.0.0.1:8080/pages/questionnaire.html';" className={s.one_year_free}><p className={s.one_year_free_text}>Получить 1 год бесплатно</p></button>
      </div>
      
        <img src="img/main.svg" width=" 475.34px" height="521.9px" alt="Разноцветные квадраты" className={s.insql_icon}></img>
    
  </div>
</div>
</div>
<div className={s.questionnaire}>
  <div className={s.questionnaire_input}>
    <ul className={s.input_list}>
    <li className={s.input_list_item}><input name="FAQ" placeholder="ФИО" type="text" value="" className={s.faq}></input></li>
    <li className={s.input_list_item}><input name="telephone" placeholder="Мобильный телефон" type="number" value="+7()"className={s.telephone}></input></li>
    <li className={s.input_list_item}><input name="mail" placeholder="Электронная почта*" type="text" value=""className={s.mail}></input></li>
    <li className={s.input_list_item}><input name="organization" placeholder="Название организации" type="text" value=""className={s.organization}></input></li>
    <li className={s.input_list_item}><input name="jobtitle" placeholder="Ваша должность" type="text" value=""className={s.jobtitle}></input></li>
  </ul>
  </div>
  <div className={s.button_one_year}>
    <button onclick="window.location.href ='http://127.0.0.1:8080/pages/questionnaire.html';"className={s.button_one_year_text}>Получить 1 год бесплатно</button>
  </div>
 


<footer className ={s.questionnaire_footer}>
  <div className={s.questionnaire_footer_image}>
  <figure>
    <figcaption>
    <img src="../pages/img/iconGuard.svg" width="24px" height="24px" alt=""></img>
    Мы гарантируем безопасность и сохранность ваших данных
</figcaption>
</figure>
</div>
</footer>

<p className={s.contacts_text}>Оставляя свои контактные данные, вы разрешаете нам обратиться к вам за обратной связью по нашему продукту.</p>

</div>
</div>

  );
};

export default Questionnaire;
