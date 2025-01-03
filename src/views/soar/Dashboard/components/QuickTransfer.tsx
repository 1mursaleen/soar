import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import { Button, Input } from '@/components/ui';
import SendIcon from '@/assets/svg/SendIcon';
import RightArrowCircleIcon from '@/assets/svg/RightArrowCircleIcon';

type QuickTransferProps = {
  className?: string;
};

// Mock user data for the Quick Transfer list
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
const QuickTransfer = ({ className }: QuickTransferProps) => {
  const [startIndex, setStartIndex] = useState(0); // State to track the starting index for the carousel
  const visibleCount = 3; // Number of users visible at a time

  /**
   * Move the carousel to the next set of users
   */
  const handleNext = () => {
    if (startIndex + visibleCount < usersData.length) {
      setStartIndex((prevIndex) => prevIndex + visibleCount);
    }
  };

  /**
   * Move the carousel to the previous set of users
   */
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
    }
  };

  // Check if the left and right navigation arrows should be visible
  const isLeftArrowVisible = startIndex > 0;
  const isRightArrowVisible = startIndex + visibleCount < usersData.length;

  return (
    <div className={className}>
      {/* Component Title */}
      <h4 className='text-[16px] lg:text-[22px] font-semibold text-primary mb-0 md:mb-5 mt-1 md:mt-4'>
        Quick Transfer
      </h4>

      {/* Main Card Container */}
      <Card
        className={`border-0 bg-transparent md:bg-white ${className} rounded-3xl px-1 py-4`}
      >
        {/* User Carousel */}
        <div className='flex items-center gap-9 overflow-hidden relative'>
          {/* Left Arrow for navigation */}
          {isLeftArrowVisible && (
            <button
              onClick={handlePrevious}
              className='absolute left-0 z-50 rotate-180'
            >
              <RightArrowCircleIcon />
            </button>
          )}

          {/* User List */}
          <div
            className='flex transition-transform duration-300'
            style={{ transform: `translateX(-${startIndex * 100}px)` }}
          >
            {usersData.map((user, index) => (
              <div
                key={index}
                className='flex flex-col items-center min-w-[100px]'
              >
                <Avatar size={70} src={user.avatar} shape='circle' /> {/* User avatar */}
                <span
                  className={`text-base text-secondary capitalize mt-2 ${
                    index === 0 ? 'font-bold' : ''
                  }`}
                >
                  {user.name} {/* User name */}
                </span>
                <span
                  className={`text-[15px] text-textGray capitalize ${
                    index === 0 ? 'font-bold' : ''
                  }`}
                >
                  {user.designation} {/* User designation */}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow for navigation */}
          {isRightArrowVisible && (
            <button onClick={handleNext} className='absolute right-0 z-20'>
              <RightArrowCircleIcon />
            </button>
          )}
        </div>

        {/* Amount Input and Send Button */}
        <div className='flex justify-between items-center gap-3 mt-7'>
          {/* Label for the input */}
          <p className='text-xs lg:text-base text-left text-textGray'>
            Write Amount
          </p>
          <div className="flex items-center rounded-full bg-lightGray h-[40px] md:h-[50px]">
            <div className="write-amount max-w-[110px]">
              <Input
                placeholder="525.50"
                className="bg-lightGray quick_transfer_price_input"
              />
            </div>
            <div>
              <Button
                block
                shape="circle"
                variant="solid"
                className="send_button bg-secondary hover:bg-secondary active:bg-secondary h-[40px] md:h-[50px]"
              >
                <div className="flex items-center gap-2">
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
