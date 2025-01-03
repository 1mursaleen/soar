import { useState, Suspense, lazy } from 'react';
import Tabs from '@/components/ui/Tabs';
import AdaptableCard from '@/components/shared/AdaptableCard';
import Container from '@/components/shared/Container';

// Dynamically imported components for the tabs
const Profile = lazy(() => import('./components/Profile'));
const Preferences = lazy(() => import('./components/Preferences'));
const Security = lazy(() => import('./components/Security'));

// Define the settings menu with labels and paths for each tab
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
  // State to manage the current active tab
  const [currentTab, setCurrentTab] = useState('profile');

  // Handle tab change and update the state for the active tab
  const onTabChange = (val: string) => {
    setCurrentTab(val);
  };

  return (
    <Container>
      {/* Wrapper card for adaptable styling */}
      <AdaptableCard>
        {/* Tabs component managing the tab structure */}
        <Tabs
          defaultValue={'profile'}
          value={currentTab}
          onChange={(val) => onTabChange(val)}
        >
          <TabList className='gap-5'>
            {/* Dynamically generate tab navigation items from the settingsMenu object */}
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
          {/* Suspense to lazy load tab components */}
          <Suspense fallback={<></>}>
            {/* Conditionally render components based on the selected tab */}
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
