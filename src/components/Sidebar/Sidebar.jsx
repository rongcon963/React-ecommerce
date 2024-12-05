import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import { useContext } from 'react';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';

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
        Sidebar
      </div>
    </div>
  );
}

export default Sidebar;
