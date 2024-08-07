import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './UpstoxHolding.style';
import useListingPage from './useListingPage';
import UpstoxHoldingItem from '../../components/UpstoxHoldingItem';

const UpstoxHolding = () => {
  const {
    upstoxHoldingData,
    loading,
    expandComponent,
    setExpandComponent,
    totalPortfolio,
  } = useListingPage();

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <View style={styles.headingViewStyle}>
            <Text style={styles.headingTextStyle}>Upstox Holding</Text>
          </View>
          <FlatList
            data={upstoxHoldingData}
            renderItem={({item}) => {
              return <UpstoxHoldingItem item={item} />;
            }}
            keyExtractor={item => item.symbol}
          />
          {!expandComponent ? (
            <TouchableOpacity
              style={styles.triangleContainer}
              onPress={() => {
                setExpandComponent(true);
              }}>
              <View style={styles.triangle} />
            </TouchableOpacity>
          ) : (
            <View style={styles.footerStyle}>
              <TouchableOpacity
                style={styles.triangleContainer}
                onPress={() => {
                  setExpandComponent(false);
                }}>
                <View style={styles.downTriangle} />
              </TouchableOpacity>
              {totalPortfolio?.map(data => {
                return (
                  <View key={data.name}>
                    <View style={[styles.totalPortfolioStyle, data?.style]}>
                      <Text style={styles.totalTextStyle}>{data?.name}</Text>
                      <Text
                        style={
                          styles.totalValueStyle
                        }>{`₹ ${data?.value.toFixed(2)}`}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default UpstoxHolding;
