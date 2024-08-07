import {StyleProp, ViewStyle} from 'react-native';

export interface UserHolding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface ApiResponse {
  data: {
    userHolding: Array<UserHolding>;
  };
}

export interface TotalValueItem {
  name: string;
  value: number;
  style: StyleProp<ViewStyle>;
}
