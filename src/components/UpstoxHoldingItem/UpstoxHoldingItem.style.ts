import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 12,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  symbolViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  symbolTextStyle: {
    fontWeight: 'bold',
    color: 'black',
  },
  ltpTextStyle: {
    color: 'black',
  },
  ltpValueStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  quantityTextStyle: {
    color: 'black',
  },
  flexRowStyle: {flexDirection: 'row'},
});

export default style;
