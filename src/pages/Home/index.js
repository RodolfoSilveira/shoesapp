import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';
import bg from '../../../assets/img/bg.png';
import logo from '../../../assets/img/Logo.png';
import api from '../../services/api';
import {currencyFormat} from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get('/products');

      setProducts(response.data);
    }
    getProduct();
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderBox source={bg}>
        <View>
          <S.Logo source={logo} alt="logo" />
        </View>
        <View style={{flex: 1, marginLeft: 50}}>
          <Icon name="shopping-basket" color="#FFF" size={30} />
          <S.CartAlert>
            <S.CartAlertText>0</S.CartAlertText>
          </S.CartAlert>
        </View>
      </S.HeaderBox>
      <S.ProductList
        renderItem={({item}) => (
          <S.ProductBox>
            <S.ProductImage source={{uri: `${item.image}`}} />
            <S.ProductText>{item.title}</S.ProductText>
            <S.ProductValue>{currencyFormat(item.price)}</S.ProductValue>
            <S.ButtonBox>
              <S.ButtonIcon>
                <Icon name="shopping-cart" color="#FFF" size={20} />
                <S.CartValue>0</S.CartValue>
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
