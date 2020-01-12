import styled from 'styled-components/native';
import {widthPercentageToDP, heightPercentageToDP} from '../../styles/global';

export const HeaderBox = styled.ImageBackground.attrs(props => ({
  source: props.source,
}))`
  height: ${heightPercentageToDP('15%')}px;
  width: ${widthPercentageToDP('1000%')}px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs(props => ({
  source: props.source,
}))``;

export const CartAlert = styled.View`
  position: absolute;
  left: 17px;
  top: -10px;
  z-index: 1;
  border-radius: 18px;
  padding: 5px;
  background-color: #7159c1;
`;

export const CartAlertText = styled.Text`
  color: #FFF;
  margin: 2px 5px;
  font-size: 8px;
`;
