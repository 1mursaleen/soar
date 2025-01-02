import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import { Button, Input } from '@/components/ui';
import SendIcon from '@/assets/svg/SendIcon';
import RightArrowCircleIcon from '@/assets/svg/RightArrowCircleIcon';

type QuickTransferProps = {
  className?: string;
};

const QuickTransfer = ({ className }: QuickTransferProps) => {
  const usersData = [
    {
      name: 'livia bator',
      avatar: '/img/avatars/avatar-1.jpg',
      designation: 'CEO',
    },
    {
      name: 'randy press',
      avatar: '/img/avatars/avatar-2.jpg',
      designation: 'Director',
    },
    {
      name: 'workman',
      avatar: '/img/avatars/avatar-3.jpg',
      designation: 'Designer',
    },
    {
      name: 'livia bator',
      avatar: '/img/avatars/avatar-1.jpg',
      designation: 'CEO',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < usersData.length) {
      setStartIndex((prevIndex) => prevIndex + visibleCount);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
    }
  };

  const isLeftArrowVisible = startIndex > 0;
  const isRightArrowVisible = startIndex + visibleCount < usersData.length;

  return (
    <div className={className}>
      <h4 className='text-lg lg:text-[22px] font-semibold text-primary mb-5'>
        Quick Transfer
      </h4>
      <Card className={`${className} rounded-3xl  px-1 py-4`}>
        <div className='flex items-center gap-9 overflow-hidden relative'>
          {isLeftArrowVisible && (
            <button
              onClick={handlePrevious}
              className='absolute left-0 z-50 rotate-180'
            >
              <RightArrowCircleIcon />
            </button>
          )}
          <div
            className='flex transition-transform duration-300'
            style={{ transform: `translateX(-${startIndex * 100}px)` }}
          >
            {usersData.map((user, index) => (
              <div
                key={index}
                className='flex flex-col items-center min-w-[100px]'
              >
                <Avatar size={70} src={user.avatar} shape='circle' />
                <span
                  className={`text-base text-secondary capitalize mt-2 ${
                    index === 0 ? 'font-bold' : ''
                  } `}
                >
                  {user.name}
                </span>
                <span
                  className={`text-[15px] text-textGray capitalize ${
                    index === 0 ? 'font-bold' : ''
                  } `}
                >
                  {user.designation}
                </span>
              </div>
            ))}
          </div>
          {isRightArrowVisible && (
            <button onClick={handleNext} className='absolute right-0 z-50'>
              <RightArrowCircleIcon />
            </button>
          )}
        </div>
        <div className='flex justify-between items-center gap-3 mt-7'>
          <p className='text-xs lg:text-base text-left text-textGray'>Write Amount</p>
          <div className='flex items-center rounded-full bg-lightGray'>
            <div className='write-amount max-w-[110px]'>
              <Input placeholder='525.50' className='bg-lightGray' />
            </div>
            <div>
              <Button
                block
                shape='circle'
                variant='solid'
                className='bg-secondary hover:bg-secondary active:bg-secondary h-[50px]'
              >
                <div className='flex items-center gap-2'>
                  Send
                  <SendIcon />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuickTransfer;
