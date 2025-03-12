import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
    boxCard,
    quantity
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen, setType, listProductCart } = useContext(SideBarContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    // if (scrollPosition > 80) {
    //   setFixedPosition(true);
    // } else {
    //   setFixedPosition(false);
    // }

    // setFixedPosition(scrollPosition > 80 ? true : false);

    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>

          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt='Logo'
            style={{
              width: '153px',
              height: '53px'
            }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>

          <div className={containerBoxIcon}>
            <TfiReload
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('compare')}
            />
            <BsHeart
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <div className={boxCard} onClick={() => handleOpenSideBar('cart')}>
              <PiShoppingCart
                style={{
                  fontSize: '25px'
                }}
                //onClick={() => handleOpenSideBar('cart')}
              />

              <div className={quantity}>{listProductCart.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
