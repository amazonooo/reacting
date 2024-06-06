import { FC, useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import log__img from '../../assets/login.png';
import styles from './FormBody.module.css';

const FormBody: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/home')
  }

  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
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
                <FaUser className={styles.user} />
                <input type="text" placeholder="Логин" className={styles.input} />
              </div>

              <div className={styles.input__box}>
                <FaLock className={styles.lock} />
                <input type={passwordVisible ? 'text' : 'password'} placeholder="Пароль" className={styles.input} />
                <span onClick={togglePasswordVisibility} className={styles.toggleButton}>
                  {passwordVisible? <FaEye className={styles.eye}  /> : <FaEyeSlash className={styles.slash}  />}
                </span>
              </div>
              <button className={styles.form__btn} onClick={handleSubmit}>
                Войти
              </button>
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
