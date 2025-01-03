import { useState } from 'react';
import classNames from 'classnames';
import withHeaderItem from '@/utils/hoc/withHeaderItem';

import BellCircleIcon from '@/assets/svg/BellCircleIcon';

const NotificationToggle = ({
  className,
  dot,
}: {
  className?: string;
  dot: boolean;
}) => {
  return (
    <div className={classNames('text-2xl', className)}>
      <BellCircleIcon />
    </div>
  );
};

const _Notification = ({ className }: { className?: string }) => {
  const [unreadNotification, setUnreadNotification] = useState(false);

  return <NotificationToggle dot={unreadNotification} className={className} />;
};

const Notification = withHeaderItem(_Notification);

export default Notification;
