import AccountsIcon from '@/assets/svg/AccountsIcon'
import CreditCardIcon from '@/assets/svg/CreditCardIcon'
import EconometricsIcon from '@/assets/svg/EconometricsIcon'
import HomeIcon from '@/assets/svg/HomeIcon'
import InvestmentIcon from '@/assets/svg/InvestmentIcon'
import LoansIcon from '@/assets/svg/LoansIcon'
import ServicesIcon from '@/assets/svg/ServicesIcon'
import SettingIcon from '@/assets/svg/SettingIcon'
import TransactionIcon from '@/assets/svg/TransactionIcon'
import {
    HiOutlineChartSquareBar,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
    HiOutlineUserCircle,
    HiOutlineBookOpen,
    HiOutlineCurrencyDollar,
    HiOutlineShieldCheck,
    HiOutlineColorSwatch,
    HiOutlineChatAlt,
    HiOutlineDesktopComputer,
    HiOutlinePaperAirplane,
    HiOutlineChartPie,
    HiOutlineUserAdd,
    HiOutlineKey,
    HiOutlineBan,
    HiOutlineHand,
    HiOutlineDocumentText,
    HiOutlineTemplate,
    HiOutlineLockClosed,
    HiOutlineDocumentDuplicate,
    HiOutlineViewGridAdd,
    HiOutlineShare,
    HiOutlineVariable,
    HiOutlineCode,
} from 'react-icons/hi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    apps: <HiOutlineViewGridAdd />,
    project: <HiOutlineChartSquareBar />,
    crm: <HiOutlineUserGroup />,
    sales: <HiOutlineTrendingUp />,
    crypto: <HiOutlineCurrencyDollar />,
    knowledgeBase: <HiOutlineBookOpen />,
    uiComponents: <HiOutlineTemplate />,
    common: <HiOutlineColorSwatch />,
    feedback: <HiOutlineChatAlt />,
    dataDisplay: <HiOutlineDesktopComputer />,
    forms: <HiOutlineDocumentText />,
    navigation: <HiOutlinePaperAirplane />,
    graph: <HiOutlineChartPie />,
    authentication: <HiOutlineLockClosed />,
    signIn: <HiOutlineShieldCheck />,
    signUp: <HiOutlineUserAdd />,
    forgotPassword: <HiOutlineLockClosed />,
    resetPassword: <HiOutlineKey />,
    pages: <HiOutlineDocumentDuplicate />,
    welcome: <HiOutlineHand />,
    accessDenied: <HiOutlineBan />,
    guide: <HiOutlineBookOpen />,
    documentation: <HiOutlineDocumentText />,
    sharedComponentDoc: <HiOutlineShare />,
    utilsDoc: <HiOutlineVariable />,
    changeLog: <HiOutlineCode />,

    home: <HomeIcon />,
    transaction: <TransactionIcon />,
    account: <AccountsIcon />,
    investment: <InvestmentIcon />,
    credit: <CreditCardIcon />,
    loan: <LoansIcon />,
    services: <ServicesIcon />,
    econometrics: <EconometricsIcon />,
    setting: <SettingIcon />


}

export default navigationIcon
