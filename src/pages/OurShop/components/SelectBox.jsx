import styles from '../styles.module.scss';
import cls from 'classnames';

function SelectBox({ options, getValue, type }) {
  const { selectBox } = styles;

  return (
    <select className={selectBox} onChange={(e) => getValue(e.target.value, type)}>
      {options.map((option, index) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
