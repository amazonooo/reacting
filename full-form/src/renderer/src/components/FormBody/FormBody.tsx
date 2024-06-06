import { FC } from 'react';
import log__img from '../../assets/login.png';
import styles from './FormBody.module.css';

const FormBody: FC = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home__inner}>
          <div className={styles.home__login}>
            <form className={styles.form}>
              <div className={styles.form__heading}>
                <h1 className={styles.form__title}>Добро пожаловать</h1>
                <h4 className={styles.form__subtitle}>
                  Еще не зарегистрировались?{' '}
                  <span className={styles.purple}>
                    <a href="!#">Регистрация</a>
                  </span>
                </h4>
              </div>
              <div className={styles.input__box}>
                <input type="text" className={styles.input} />
                <label className={styles.input__label}>Логин</label>
              </div>
              <div className={styles.input__box}>
                <input type="password" className={styles.input} />
                <label className={styles.input__label}>Пароль</label>
              </div>
              <button className={styles.form__btn}>Войти</button>
              <p className={styles.forget}>
                <a href="!#">Забыли пароль?</a>
              </p>
            </form>
          </div>

          <div className={styles.home__img}>
            <img src={log__img} className={log__img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormBody;
