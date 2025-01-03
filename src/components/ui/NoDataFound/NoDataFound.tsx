

const NoDataFound = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <img
        src='/img/others/img-2.png'
        alt='No data found!'
        width='150px'
        height='auto'
      />
      <h6 className='mt-4 text-sm'>No Data found!</h6>
    </div>
  );
};

export default NoDataFound;
