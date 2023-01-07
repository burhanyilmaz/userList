import { Dimensions } from 'react-native';

export const { width } = Dimensions.get('screen');
export const VERTICAL_PADDING = 16;
export const CARD_WIDTH = (width - 4 * 16) / 2;
