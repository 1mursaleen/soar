import QuickTransfer from './QuickTransfer';
import BalanceHistory from './BalanceHistory';
import ExpenseStatistics from './ExpenseStatistics';
import WeeklyActivity from './WeeklyActivity';
import RecentTransactions from './RecentTransactions';
import CreditCards from './CreditCards';

const DashboardBody = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <CreditCards className='lg:col-span-2' />
        <RecentTransactions className='lg:col-span-1' />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <WeeklyActivity className='lg:col-span-2' />
        <ExpenseStatistics />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
        <QuickTransfer className='lg:col-span-2' />

        <BalanceHistory className=' lg:col-span-3' />
      </div>
    </>
  );
};

export default DashboardBody;
