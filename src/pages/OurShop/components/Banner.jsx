import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function Banner() {
  const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <>
      <div className={containerBanner}>
        <div className={contentBox}>
          <div className={countDownBox}>
            <CountdownTimer targetDate={targetDate.toISOString()} />
          </div>
          <div className={title}>The Classics Make A Comeback</div>

          <div className={boxBtn}>
            <Button content={'Buy Now'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
