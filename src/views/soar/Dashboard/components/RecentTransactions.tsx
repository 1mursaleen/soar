import classNames from 'classnames';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import type { ReactNode } from 'react';
import BusinessFinanceIcon from '@/assets/svg/BusinessFinanceIcon';
import PaypalIcon from '@/assets/svg/PaypalIcon';
import CurrencyIcon from '@/assets/svg/CurrencyIcon';

// Define the props type for the RecentTransactions component
export type RecenTransactionsProps = {
  className?: string; // Optional additional class names for styling
  title?: string; // Optional title of the component
  extra?: ReactNode; // Optional additional content to display
};

// Mock data representing recent transactions
const recentTrsansactionsData = [
  {
    data: [
      {
        action: 'Deposit from my Card',
        fiatValue: '850',
        curency: '$',
        transactionDate: '28 January 2021',
        actionType: 0, // Action type determines the avatar and color scheme
      },
      {
        fiatValue: '2,500',
        curency: '$',
        action: 'Deposit Paypal',
        transactionDate: '25 January 2021',
        actionType: 1,
      },
      {
        fiatValue: '5,400',
        curency: '$',
        action: 'Jemi Wilson',
        transactionDate: '21 January 2021',
        actionType: 2,
      },
    ],
  },
];

// Component to render an avatar based on the action type
const ActionAvatar = ({ actionType }: { actionType: number }) => {
  switch (actionType) {
    case 0:
      return (
        <Avatar
          className='rounded-full bg-lightYellow text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100'
          icon={<BusinessFinanceIcon />}
        />
      );
    case 1:
      return (
        <Avatar
          className='rounded-full bg-lightBlue text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100'
          icon={<PaypalIcon />}
        />
      );
    case 2:
      return (
        <Avatar
          className='rounded-full bg-lightGreen text-red-600 dark:bg-red-500/20 dark:text-red-100'
          icon={<CurrencyIcon />}
        />
      );
    default:
      return <Avatar />; // Default avatar for unknown action types
  }
};

// Main component to render recent transactions
const RecentTransactions = (props: RecenTransactionsProps) => {
  const { className } = props;

  return (
    <div className={className}>
      {/* Component title */}
      <h4 className='text-[16px] lg:text-[22px] font-semibold text-primary mb-0 md:mb-5'>
        Recent Transactions
      </h4>

      {/* Card to display the transactions */}
      <Card
        className={`border-0 flex flex-col justify-center bg-transparent md:bg-white h-auto lg:max-h-[240px] overflow-y-auto box-border ${className}`}
        style={{ scrollbarWidth: 'thin' }}
      >
        {/* Iterate through the mock data to render transactions */}
        {recentTrsansactionsData.map((timeline) => (
          <>
            {timeline.data.map((activity, index) => (
              <div
                key={index}
                className='flex items-center justify-between my-4'
              >
                {/* Left section: Action avatar and details */}
                <div className='text-[14px] flex items-center gap-[10px]'>
                  <ActionAvatar actionType={activity.actionType} />
                  <div>
                    <h6 className='text-base font-medium'>{activity.action}</h6>
                    <span className='text-[#718EBF]'>
                      {activity?.transactionDate}
                    </span>
                  </div>
                </div>

                {/* Right section: Transaction amount */}
                <div className='text-right'>
                  <p
                    className={classNames(
                      'font-semibold text-base',
                      activity.actionType === 0
                        ? 'text-red-600' // Negative transactions
                        : 'text-green-400 dark:text-gray-100' // Positive transactions
                    )}
                  >
                    {activity.actionType === 0 ? '-' : '+'}
                    {activity.curency}
                    {activity.fiatValue}
                  </p>
                </div>
              </div>
            ))}
          </>
        ))}
      </Card>
    </div>
  );
};

export default RecentTransactions;
