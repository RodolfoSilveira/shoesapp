import styled from 'styled-components/native';
import {darken} from 'polished';
import {widthPercentageToDP, heightPercentageToDP} from '../../styles/global';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const ProductList = styled.FlatList.attrs(props => ({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
}))`
  margin-top: 20px;
`;

export const ProductBox = styled.View`
  background-color: #fff;
  margin: 10px 5px 10px 20px;
  padding: 20px;
  border-radius: 4px;
  height: ${heightPercentageToDP('60%')}px;
  width: ${widthPercentageToDP('60%')}px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 50%;
`;

export const ProductText = styled.Text`
  margin-top: auto;
  font-size: 16px;
  color: #333;
`;

export const ProductValue = styled.Text`
  margin-top: auto;
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonBox = styled.TouchableOpacity`
  overflow: hidden;
  margin-top: auto;
  height: 12%;
  width: 100%;
  background-color: #7159c1;
  flex-direction: row;
  border-radius: 4px;
`;

export const InnerButtonBox = styled.View`
  padding: 10px;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ButtonIcon = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${darken(0.03, '#7159c1')};
`;

export const CartValue = styled.Text`
  color: #fff;
  margin: 0 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  margin: 20px;
  font-weight: bold;
`;
