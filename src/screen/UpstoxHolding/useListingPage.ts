import {useState, useEffect} from 'react';
import {fetchHoldings} from '../../api/fetch';
import {TotalValueItem, UserHolding} from '../../types';

const useListingPage = () => {
  const [upstoxHoldingData, setUpstoxHoldingData] = useState<
    Array<UserHolding>
  >([]);
  const [loading, setLoading] = useState(true);
  const [expandComponent, setExpandComponent] = useState(false);

  const [totals, setTotals] = useState({
    totalCurrentValue: 0,
    totalInvestmentValue: 0,
    totalCloseValue: 0,
    totalLtpValue: 0,
    totalQuantity: 0,
    todayPNL: 0,
  });

  useEffect(() => {
    const loadHoldings = async () => {
      try {
        const fetchedData = await fetchHoldings();
        setUpstoxHoldingData(fetchedData?.data?.userHolding);
        calculateTotals(fetchedData?.data?.userHolding);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    loadHoldings();
  }, []);

  const calculateTotals = (data: UserHolding[]) => {
    let totalCurrentValue = 0;
    let totalInvestmentValue = 0;
    let totalCloseValue = 0;
    let totalLtpValue = 0;
    let totalQuantity = 0;
    let todayPNL = 0;

    data.forEach(item => {
      const currentValue = item.ltp * item.quantity;
      const investmentValue = item.avgPrice * item.quantity;
      const todayPnl = (item.close - item.ltp) * item.quantity;

      totalCurrentValue += currentValue;
      totalInvestmentValue += investmentValue;
      totalCloseValue += item?.close;
      totalLtpValue += item?.ltp;
      totalQuantity += item?.quantity;
      todayPNL += todayPnl;
    });

    setTotals({
      totalCurrentValue,
      totalInvestmentValue,
      totalCloseValue,
      totalLtpValue,
      totalQuantity,
      todayPNL,
    });
  };

  const totalPortfolio: Array<TotalValueItem> = [
    {
      name: 'Current Value:',
      value: totals?.totalCurrentValue,
      style: {},
    },
    {
      name: 'Total Investment:',
      value: totals?.totalInvestmentValue,
      style: {},
    },
    {
      name: "Today's Profit & Loss:",
      value: totals?.todayPNL,
      style: {},
    },
    {
      name: 'Profit & Loss:',
      value: totals?.totalCurrentValue - totals?.totalInvestmentValue,
      style: {marginTop: 15},
    },
  ];

  return {
    upstoxHoldingData,
    loading,
    expandComponent,
    totalPortfolio,
    setExpandComponent,
  };
};

export default useListingPage;
