import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import { useContext } from 'react';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSidebar/Login/Login';
import Compare from '@components/ContentSidebar/Compare/Compare';
import WishList from '@components/ContentSidebar/WishList/WishList';
import Cart from '@components/ContentSidebar/Cart/Cart';

function Sidebar() {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <WishList />;
      case 'cart':
        return <Cart />;
      default:
        return null;
    }
  }

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

        {handleRenderContent()}
      </div>
    </div>
  );
}

export default Sidebar;
