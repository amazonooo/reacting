import { FC } from 'react';
import { IoIosClose } from 'react-icons/io';
import { IoRemoveOutline } from 'react-icons/io5';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <h1 className={styles.header__title}>Minecraft</h1>
          <div className={styles.header__btns}>
            <div className={styles.header__collapse}>
              <IoRemoveOutline size={30} />
            </div>
            <div className={styles.header__close}>
              <IoIosClose size={30} className={styles.close} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
