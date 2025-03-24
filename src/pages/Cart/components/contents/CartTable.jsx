import SelectBox from '@pages/OurShop/components/SelectBox';
import styles from '../../styles.module.scss';

function CartTable() {
  const { cartTable } = styles;
  const cartItem = [
    {
      id: 1,
      name: 'AmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmetAmet',
      price: 1879.99,
      sku: 87654,
      size: 'M',
      quantity: 1,
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
    },
    {
      id: 2,
      name: 'Amet',
      price: 1879.99,
      sku: 87654,
      size: 'M',
      quantity: 1,
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
    },
    {
      id: 3,
      name: 'Amet',
      price: 1879.99,
      sku: 87654,
      size: 'M',
      quantity: 1,
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
    }
  ];

  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
  ];

  const getValueSelect = (value, type) => {
    console.log(value)
  };

  return (
    <div className={cartTable}>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th />
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item) => (
            <tr key={item.id}>
              <td className={styles.product}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                </div>
              </td>
              <td>
                <div
                  onClick={() =>
                    getDataDelete({
                      userId: item.userId,
                      productId: item.productId
                    })
                  }
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  &#128465;
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.sku}</td>
              <td>
                <SelectBox
                  options={showOptions}
                  getValue={getValueSelect}
                  type={'show'}
                />
                {/* <SelectBox
                  options={showOptions}
                  getValue={(e) =>
                    getValueSelect(item.userId, item.productId, e, item.size)
                  }
                  type='show'
                  defaultValue={item.quantity}
                /> */}
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
