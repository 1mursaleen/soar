import { lazy } from 'react';
import { ADMIN, USER } from '@/constants/roles.constant';
import type { Routes } from '@/@types/routes';

const soarRoute: Routes = [
  {
    key: 'soar.dashboard',
    path: `/dashboard`,
    component: lazy(() => import('@/views/soar/Dashboard')),
    authority: [ADMIN, USER],
  },

  {
    key: 'soar.settings',
    path: `/account/settings`,
    component: lazy(() => import('@/views/soar/Settings')),
    authority: [ADMIN, USER],
  },
];

export default soarRoute;
