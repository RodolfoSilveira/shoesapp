import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import * as S from './styles';
import api from '../../services/api';
import {currencyFormat} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: currencyFormat(product.price),
      }));

      setProducts(data);
    }
    getProduct();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <S.Wrapper>
      <S.ProductList
        renderItem={({item}) => (
          <S.ProductBox>
            <S.ProductImage source={{uri: `${item.image}`}} alt={item.title} />
            <S.ProductText>{item.title}</S.ProductText>
            <S.ProductValue>{item.priceFormatted}</S.ProductValue>
            <S.ButtonBox onPress={() => handleAddProduct(item.id)}>
              <S.ButtonIcon>
                <Icon name="shopping-cart" color="#FFF" size={20} />
                <S.CartValue>{amount[item.id] || 0}</S.CartValue>
              </S.ButtonIcon>
              <S.InnerButtonBox>
                <S.ButtonText>ADICIONAR</S.ButtonText>
              </S.InnerButtonBox>
            </S.ButtonBox>
          </S.ProductBox>
        )}
        keyExtractor={item => String(item.id)}
        data={products}
      />
    </S.Wrapper>
  );
}
