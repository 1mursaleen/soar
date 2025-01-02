import { useState, Suspense, lazy } from 'react';
import Tabs from '@/components/ui/Tabs';
import AdaptableCard from '@/components/shared/AdaptableCard';
import Container from '@/components/shared/Container';
import Security from './components/Security';
import Preferences from './components/Preferences';

type AccountSetting = {
  profile: {
    name: string;
    email: string;
    title: string;
    avatar: string;
    timeZone: string;
    lang: string;
    syncData: boolean;
  };
  loginHistory: {
    type: string;
    deviceName: string;
    time: number;
    location: string;
  }[];
  notification: {
    news: string[];
    accountActivity: string[];
    signIn: string[];
    reminders: string[];
    mentioned: string[];
    replies: string[];
    taskUpdate: string[];
    assigned: string[];
    newProduct: string[];
    newOrder: string[];
  };
};

type GetAccountSettingData = AccountSetting;

const Profile = lazy(() => import('./components/Profile'));

const { TabNav, TabList } = Tabs;

const settingsMenu: Record<
  string,
  {
    label: string;
    path: string;
  }
> = {
  profile: { label: 'Edit Profile', path: 'profile' },
  preferences: { label: 'Preferences', path: 'preferences' },
  security: { label: 'Security', path: 'security' },
};

const Settings = () => {
  const [currentTab, setCurrentTab] = useState('profile');

  const onTabChange = (val: string) => {
    setCurrentTab(val);
  };

  return (
    <Container>
      <AdaptableCard>
        <Tabs
          defaultValue={'profile'}
          value={currentTab}
          onChange={(val) => onTabChange(val)}
        >
          <TabList className='gap-5'>
            {Object.keys(settingsMenu).map((key) => (
              <TabNav
                key={key}
                value={key}
                className={`border-b-3 p-2 text-sm ${
                  currentTab === key
                    ? 'border-inputLabel border-b-inputLabel-3 text-inputLabel'
                    : ''
                } text-inputColor hover:text-inputLabel`}
              >
                {settingsMenu[key].label}
              </TabNav>
            ))}
          </TabList>
        </Tabs>
        <div className='p-0 md:px-4 py-6'>
          <Suspense fallback={<></>}>
            {currentTab === 'profile' && <Profile />}
            {currentTab === 'preferences' && <Preferences />}
            {currentTab === 'security' && <Security />}
          </Suspense>
        </div>
      </AdaptableCard>
    </Container>
  );
};

export default Settings;
