import Header from '@/components/template/Header';
import SidePanel from '@/components/template/SidePanel';
import UserDropdown from '@/components/template/UserDropdown';
import LanguageSelector from '@/components/template/LanguageSelector';
import Notification from '@/components/template/Notification';
import SideNavToggle from '@/components/template/SideNavToggle';
import MobileNav from '@/components/template/MobileNav';
import Search from '@/components/template/Search';
import SideNav from '@/components/template/SideNav';
import View from '@/views';
import Input from '@/components/ui/Input';
import { HiOutlineSearch } from 'react-icons/hi';
import useResponsive from '@/utils/hooks/useResponsive';
import { useLocation } from 'react-router';

const HeaderActionsStart = () => {
  const { smaller } = useResponsive();
  const location = useLocation();
  return (
    <>
      <MobileNav />
      <h3
        className={`text-primary text-xl md:text-[28px] font-semibold ml-4 ${
          smaller.md && 'w-full text-center'
        }`}
      >
        {location.pathname.includes('/account/settings')
          ? 'Setting'
          : 'Overview'}
      </h3>
      {/* <SideNavToggle /> */}
      {/* <Search /> */}
    </>
  );
};

const HeaderActionsEnd = () => {
  const { smaller } = useResponsive();

  return (
    <>
      {/* <LanguageSelector /> */}
      {!smaller.md && (
        <>
          <Input
            size='sm'
            placeholder='Search for something'
            prefix={
              <HiOutlineSearch
                color='#718EBF'
                size={22}
                className='text-lg ms-2'
              />
            }
            onChange={() => {}}
            className='header-search'
          />

          <SidePanel />
          <Notification />
        </>
      )}

      <UserDropdown hoverable={false} />
    </>
  );
};

const ModernLayout = () => {
  return (
    <div className='app-layout-modern flex flex-auto flex-col'>
      <div className='flex flex-auto min-w-0'>
        <SideNav />
        <div className='flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700'>
          <Header
            className='border-b border-gray-200 dark:border-gray-700 py-5'
            headerEnd={<HeaderActionsEnd />}
            headerStart={<HeaderActionsStart />}
          />
          <View />
        </div>
      </div>
    </div>
  );
};

export default ModernLayout;
