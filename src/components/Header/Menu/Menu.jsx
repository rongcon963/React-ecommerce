import styles from '../styles.module.scss';

function Menu({ content, href, setIsOpen }) {
  const { menu } = styles;

  const handleClickShowLogin = () => {
    if (content === 'Sign in') {
      setIsOpen(true);
    }
  };

  return (
    <div className={menu} onClick={() => handleClickShowLogin()}>
      {content}
    </div>
  );
}

export default Menu;
