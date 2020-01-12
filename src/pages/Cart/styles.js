import styled from 'styled-components/native';
import {widthPercentageToDP, heightPercentageToDP} from '../../styles/global';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #191920;
  align-items: center;
`;

export const CartBox = styled.View`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  width: ${widthPercentageToDP('90%')}px;
  /* height: ${heightPercentageToDP('70%')}px; */
`;

export const ProductList = styled.FlatList.attrs(props => ({
  showsVerticalScrollIndicator: false,
  horizontal: false,
}))``;

export const ProductBox = styled.View`
  /* padding: 20px; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  /* height: ${heightPercentageToDP('70%')}px;
  width: ${widthPercentageToDP('80%')}px; */
`;

export const ProductItem = styled.View`
  flex-shrink: 1;
  margin-bottom: 20px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 80px;
  margin: 0 auto;
`;

export const ProductText = styled.Text`
  margin-top: auto;
  padding: 10px;
  font-size: 14px;
  color: #333;
  margin-left: 20px;
`;

export const ProductValue = styled.Text`
  margin-top: auto;
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const CountWrapper = styled.View`
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs(props =>  ({
  value: props.value,
  editable: false,
}))`
  border-radius: 4px;
  background-color: #FFF;
  width: 70px;
  margin: 0 10px;
  padding: 5px 15px;
`;

export const FooterBox = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #d3d3d3;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: #7159c1;
  border-radius: 4px;
  padding: 20px;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  text-align: center;
`;
