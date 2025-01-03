import { useMemo, lazy, Suspense } from 'react';
import Loading from '@/components/shared/Loading';
import { useAppSelector } from '@/store';
import { LAYOUT_TYPE_MODERN } from '@/constants/theme.constant';
import useDirection from '@/utils/hooks/useDirection';
import useLocale from '@/utils/hooks/useLocale';

const layouts = {
  [LAYOUT_TYPE_MODERN]: lazy(() => import('./ModernLayout')),
};

const Layout = () => {
  const layoutType = useAppSelector((state) => state.theme.layout.type);

  useDirection();

  useLocale();

  const AppLayout = useMemo(() => {
    return layouts[layoutType];
  }, [layoutType]);

  return (
    <Suspense
      fallback={
        <div className='flex flex-auto flex-col h-[100vh]'>
          <Loading loading={true} />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};

export default Layout;
