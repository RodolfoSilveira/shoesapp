import React from 'react';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './style';
import bg from '../../../assets/img/bg.png';
import logo from '../../../assets/img/Logo.png';
import NavigationService from '../../NavigationService';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <S.HeaderBox source={bg}>
      <View>
        <TouchableOpacity onPress={() => NavigationService.navigate('Home')}>
          <S.Logo source={logo} alt="logo" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginLeft: 50}}>
        <TouchableOpacity onPress={() => NavigationService.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={30} />
          <S.CartAlert>
            <S.CartAlertText>{cartSize}</S.CartAlertText>
          </S.CartAlert>
        </TouchableOpacity>
      </View>
    </S.HeaderBox>
  );
}
