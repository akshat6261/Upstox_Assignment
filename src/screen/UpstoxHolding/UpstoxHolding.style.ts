import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbf6f7',
  },
  headingViewStyle: {
    backgroundColor: '#8026a6',
    padding: 10,
  },
  headingTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
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
  plTextStyle: {
    color: 'black',
  },
  totalPortfolioStyle: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalTextStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  totalValueStyle: {
    color: 'black',
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowStyle: {flexDirection: 'row'},
  triangleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 15,
  },
  downTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#8026a6',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8026a6',
  },
  footerStyle: {padding: 15},
});

export default style;
