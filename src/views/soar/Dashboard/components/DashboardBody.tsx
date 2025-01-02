import { useEffect } from 'react';
import Loading from '@/components/shared/Loading';
import QuickTransfer from './QuickTransfer';
import BalanceHistory from './BalanceHistory';
import ExpenseStatistics from './ExpenseStatistics';
import { getSalesDashboardData, useAppSelector } from '../store';
import { useAppDispatch } from '@/store';
import WeeklyActivity from './WeeklyActivity';
import RecentTransactions from './RecentTransactions';
import CreditCards from './CreditCards';
import ChipCardIcon from '@/assets/svg/ChipIconBlack';
import CardChipIcon from '@/assets/svg/ChipIconWhite';

const DashboardBody = () => {
  const dispatch = useAppDispatch();

  const dashboardData = useAppSelector(
    (state) => state.salesDashboard.data.dashboardData
  );

  const loading = useAppSelector((state) => state.salesDashboard.data.loading);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    dispatch(getSalesDashboardData());
  };

  const cards = [
    {
      currentBalance: '5,756.00',
      cardHolderName: 'Eddy Cusuma',
      validThru: '12/22',
      cardNo: '3778 **** **** 1234',
      actionType: 0,
      bgCardColor: 'bg-gradient-to-br from-gray-700 to-black',
      textColorClass: 'text-gray-100',
      iconColorClass: 'text-gray-200',
      titleColorClass: 'text-gray-400',
      icon: <CardChipIcon />,
      borderColor: 'transparent',
    },
    {
      currentBalance: '5,000.00',
      cardHolderName: 'John Wick',
      validThru: '12/22',
      cardNo: '9087 **** **** 0456',
      actionType: 0,
      bgCardColor: 'bg-white from-gray-700 to-white',
      textColorClass: 'text-gray-800',
      iconColorClass: 'text-gray-200',
      titleColorClass: 'text-gray-800',
      icon: <ChipCardIcon />,
      borderColor: '#DFEAF2',
    },
  ];

  return (
    <Loading loading={loading}>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <CreditCards cardsData={cards} className='lg:col-span-2' />
        <RecentTransactions className='lg:col-span-1' />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <WeeklyActivity className='lg:col-span-2' />
        <ExpenseStatistics data={dashboardData?.salesByCategoriesData} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
        <QuickTransfer className='lg:col-span-2' />

        <BalanceHistory
          data={dashboardData?.salesReportData}
          className=' lg:col-span-3'
        />
      </div>
    </Loading>
  );
};

export default DashboardBody;
