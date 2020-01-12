import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import {currencyFormat} from '../../util/format';
import * as S from './styles';

export default function Cart() {
  const total = useSelector(state =>
    currencyFormat(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0),
    ),
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: currencyFormat(product.price * product.amount),
    })),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <S.Wrapper>
      <S.CartBox>
        <S.ProductList
          renderItem={({item}) => (
            <>
              <S.ProductBox>
                <S.ProductItem>
                  <S.ProductImage
                    source={{uri: `${item.image}`}}
                    alt={item.title}
                    resizeMode="center"
                  />
                </S.ProductItem>
                <S.ProductItem>
                  <S.ProductText>{item.title}</S.ProductText>
                  <S.ProductValue>{item.priceFormatted}</S.ProductValue>
                </S.ProductItem>
                <S.ProductItem>
                  <TouchableOpacity
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }>
                    <Icon name="delete-forever" color="#7159c1" size={25} />
                  </TouchableOpacity>
                </S.ProductItem>
              </S.ProductBox>
              <S.CountWrapper>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={25}
                    />
                  </TouchableOpacity>
                  <S.Input value={String(item.amount)} />
                  <TouchableOpacity onPress={() => increment(item)}>
                    <Icon name="add-circle-outline" color="#7159c1" size={25} />
                  </TouchableOpacity>
                </View>
                <View>
                  <S.ProductValue>{item.subtotal}</S.ProductValue>
                </View>
              </S.CountWrapper>
            </>
          )}
          keyExtractor={item => String(item.id)}
          data={cart}
        />
        <S.FooterBox>
          <S.Title>Total</S.Title>
          <S.Total>{total}</S.Total>
        </S.FooterBox>
        <S.Button>
          <S.TextButton>FINALIZAR PEDIDO</S.TextButton>
        </S.Button>
      </S.CartBox>
    </S.Wrapper>
  );
}
