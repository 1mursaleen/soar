import classNames from "classnames";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import {
  HiOutlineSwitchHorizontal,
  HiOutlineShoppingCart,
} from "react-icons/hi";
// import type { Acivity } from '../store'
import type { ReactNode } from "react";
import BusinessFinanceIcon from "@/assets/svg/BusinessFinanceIcon";
import PaypalIcon from "@/assets/svg/PaypalIcon";
import CurrencyIcon from "@/assets/svg/CurrencyIcon";

export type RecentAcivityProps = {
  className?: string;
  title?: string;
  extra?: ReactNode;
};

const ActionAvatar = ({ actionType }: { actionType: number }) => {
  switch (actionType) {
    case 0:
      return (
        <Avatar
          className="rounded-full bg-lightYellow text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100"
          icon={<BusinessFinanceIcon />}
        />
      );
    case 1:
      return (
        <Avatar
          className="rounded-full bg-lightBlue text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100"
          icon={<PaypalIcon />}
        />
      );
    case 2:
      return (
        <Avatar
          className="rounded-full bg-lightGreen text-red-600 dark:bg-red-500/20 dark:text-red-100"
          icon={<CurrencyIcon />}
        />
      );
    default:
      return <Avatar />;
  }
};

const RecentTransactions = (props: RecentAcivityProps) => {
  const { className } = props;

  const recentAcivity = [
    {
      // date: 'June 3, 2022',
      data: [
        {
          // coinValue: 0.0383522,
          action: "Deposit from my Card",
          fiatValue: "850",
          // symbol: 'BTC',
          curency: "$",
          transactionDate: "28 January 2021",
          actionType: 0,
        },
        {
          // coinValue: 0.0754234,
          fiatValue: "2,500",
          // symbol: 'BTC',
          curency: "$",
          action: "Deposit Paypal",
          transactionDate: "25 January 2021",
          actionType: 1,
        },
        {
          // coinValue: 0.0754234,
          fiatValue: "5,400",
          // symbol: 'BTC',
          curency: "$",
          action: "Jemi Wilson",
          transactionDate: "21 January 2021",
          actionType: 2,
        },
      ],
    },
    // {
    //   date: 'June 2, 2022',
    //   data: [
    //     {
    //       coinValue: 3.1754361,
    //       fiatValue: 5779.13,
    //       symbol: 'ETH',
    //       curency: 'USD',
    //       action: 'Buy ETH',
    //       actionType: 0,
    //     },
    //     {
    //       coinValue: 0.2821331,
    //       fiatValue: 513.47,
    //       symbol: 'ETH',
    //       curency: 'USD',
    //       action: 'Sent ETH',
    //       actionType: 2,
    //     },
    //     {
    //       coinValue: 0.1376231,
    //       fiatValue: 4163.84,
    //       symbol: 'BTC',
    //       curency: 'USD',
    //       action: 'Received BTC',
    //       actionType: 1,
    //     },
    //   ],
    // },
  ];

  return (
    <div className={className}>
      <h4 className="text-[22px] font-semibold text-primary mb-5">
        Recent Transactions
      </h4>
      <Card className={`h-[235px] box-border ${className}`}>
        {recentAcivity.map((timeline) => (
          <div className="mb-6">
            {/* <p className='mb-4'>{timeline.date}</p> */}
            {timeline.data.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-6 mb-4"
              >
                <div className="flex items-center gap-2">
                  <ActionAvatar actionType={activity.actionType} />
                  <div>
                    <h6 className="text-base font-medium">{activity.action}</h6>
                    <span className="text-[#718EBF]">
                      {activity?.transactionDate}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={classNames(
                      "font-semibold text-base",
                      activity.actionType === 0
                        ? "text-red-600"
                        : "text-green-400 dark:text-gray-100"
                    )}
                  >
                    {activity.actionType === 0 ? "-" : "+"}
                    {activity.curency}
                    {activity.fiatValue}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default RecentTransactions;