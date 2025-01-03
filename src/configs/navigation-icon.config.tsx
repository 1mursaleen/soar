import AccountsIcon from '@/assets/svg/AccountsIcon';
import CreditCardIcon from '@/assets/svg/CreditCardIcon';
import EconometricsIcon from '@/assets/svg/EconometricsIcon';
import HomeIcon from '@/assets/svg/HomeIcon';
import InvestmentIcon from '@/assets/svg/InvestmentIcon';
import LoansIcon from '@/assets/svg/LoansIcon';
import ServicesIcon from '@/assets/svg/ServicesIcon';
import SettingIcon from '@/assets/svg/SettingIcon';
import TransactionIcon from '@/assets/svg/TransactionIcon';

export type NavigationIcons = Record<string, JSX.Element>;

const navigationIcon: NavigationIcons = {
  home: <HomeIcon />,
  transaction: <TransactionIcon />,
  account: <AccountsIcon />,
  investment: <InvestmentIcon />,
  credit: <CreditCardIcon />,
  loan: <LoansIcon />,
  services: <ServicesIcon />,
  econometrics: <EconometricsIcon />,
  setting: <SettingIcon />,
};

export default navigationIcon;
