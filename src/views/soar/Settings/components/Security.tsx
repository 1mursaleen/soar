import { DoubleSidedImage } from '@/components/shared';

const Security = ({}) => {
  return (
    <div className='h-[60vh]'>
      <div className='h-full flex flex-col items-center justify-center'>
        <DoubleSidedImage
          src='/img/others/img-2.png'
          darkModeSrc='/img/others/img-2-dark.png'
          alt='No orders found!'
          width='150px'
          height='auto'
          className='py-4'
        />
        <h6 className='mt-8'>No Data found!</h6>
      </div>
    </div>
  );
};

export default Security;
