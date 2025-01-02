import reducer from './store';
import { injectReducer } from '@/store';
import DashboardBody from './components/DashboardBody';

injectReducer('salesDashboard', reducer);

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 h-full'>
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
