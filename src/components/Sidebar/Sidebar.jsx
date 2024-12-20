import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import { useContext } from 'react';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSidebar/Login/Login';

function Sidebar() {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}

        <Login />
      </div>
    </div>
  );
}

export default Sidebar;
