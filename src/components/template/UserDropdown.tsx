import Avatar from '@/components/ui/Avatar';
import profileImage from '/img/avatars/profile.jpg';
import withHeaderItem from '@/utils/hoc/withHeaderItem';
import classNames from 'classnames';
import type { CommonProps } from '@/@types/common';
import useResponsive from '@/utils/hooks/useResponsive';

const _UserDropdown = ({ className }: CommonProps) => {
  const { smaller } = useResponsive();

  const UserAvatar = (
    <div className={classNames(className, 'flex items-center gap-2')}>
      <Avatar size={smaller.md ? 35 : 60} shape='circle' src={profileImage} />
    </div>
  );

  return <div>{UserAvatar}</div>;
};

const UserDropdown = withHeaderItem(_UserDropdown);

export default UserDropdown;
