import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './UpstoxHoldingItem.style';
import {UserHolding} from '../../types';

const UpstoxHoldingItem = ({item}: {item: UserHolding}) => {
  const currentValue = item?.ltp * item?.quantity;
  const investmentValue = item?.avgPrice * item?.quantity;
  const profitAndLoss = currentValue - investmentValue;

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <View style={styles.symbolViewStyle}>
          <Text style={styles.symbolTextStyle}>{item.symbol}</Text>
          <View style={styles.flexRowStyle}>
            <Text style={styles.ltpTextStyle}>LTP: </Text>
            <Text style={styles.ltpValueStyle}>{`₹ ${item.ltp}`}</Text>
          </View>
        </View>
        <View style={styles.quantityViewStyle}>
          <Text style={styles.quantityTextStyle}>{item.quantity}</Text>
          <View style={styles.flexRowStyle}>
            <Text style={styles.ltpTextStyle}>P/L: </Text>
            <Text style={styles.ltpValueStyle}>{`₹ ${profitAndLoss.toFixed(
              2,
            )}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpstoxHoldingItem;
