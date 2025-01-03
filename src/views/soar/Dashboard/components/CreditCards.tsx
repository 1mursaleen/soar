import ChipIconBlack from '@/assets/svg/ChipIconBlack';
import CreditCircleWhite from '@/assets/svg/CreditCircleWhite';
import CreditCircleGray from '@/assets/svg/CreditCircleGray';
import ChipIconWhite from '@/assets/svg/ChipIconWhite';

// Mock data for credit card
const cardsData = [
  {
    currentBalance: '5,756.00',
    cardHolderName: 'Eddy Cusuma',
    validThru: '12/22',
    cardNo: '3778 **** **** 1234',
    actionType: 0,
    bgCardColor: 'bg-gradient-to-br from-gray-700 to-black',
    textColorClass: 'text-gray-100',
    iconColorClass: 'text-gray-200',
    titleColorClass: 'text-gray-400',
    icon: <ChipIconWhite />,
    cardIcon: <CreditCircleWhite />,
    borderColor: 'transparent',
  },
  {
    currentBalance: '5,000.00',
    cardHolderName: 'John Wick',
    validThru: '12/22',
    cardNo: '9087 **** **** 0456',
    actionType: 0,
    bgCardColor: 'bg-white from-gray-700 to-white',
    textColorClass: 'text-gray-800',
    iconColorClass: 'text-gray-200',
    titleColorClass: 'text-gray-800',
    icon: <ChipIconBlack />,
    cardIcon: <CreditCircleGray />,
    borderColor: '#DFEAF2',
  },
];

const CreditCards = ({ className }: { className: string }) => {
  return (
    <div className={`${className} w-full overflow-hidden`}>
      <div className='flex items-center justify-between mb-4'>
        <p
          className={`text-[16px] lg:text-[22px] font-semibold text-left text-primary`}
        >
          My Cards
        </p>
        <p
          className={`text-[14px] lg:text-[17px] font-semibold text-left text-primary`}
        >
          See All
        </p>
      </div>

      <div
        className='flex gap-4 w-full overflow-x-auto'
        style={{ scrollbarWidth: 'none' }}
      >
        <div className='flex w-full overflow-x-auto gap-4 lg:grid lg:grid-cols-2'>
          {cardsData?.map((cardInfo, index) => (
            <div
              key={index}
              style={{ border: `1px solid ${cardInfo.borderColor}` }}
              className={`flex-shrink-0 w-full h-[238px] mb-4 rounded-[25px] ${cardInfo.bgCardColor}`}
            >
              <div className='p-6'>
                {/* Balance Section */}
                <div className='flex justify-between items-center w-full mb-4'>
                  <div>
                    <p
                      className={`text-xs text-left ${cardInfo.titleColorClass}`}
                    >
                      Balance
                    </p>
                    <p
                      className={`text-[16px] lg:text-[20px] font-semibold text-left ${cardInfo.textColorClass}`}
                    >
                      {cardInfo.currentBalance}
                    </p>
                  </div>
                  <div>
                    <ChipIconBlack />
                  </div>
                </div>
                {/* Card Holder and Valid Thru Section */}
                <div className='flex justify-between items-center w-full mb-4'>
                  <div>
                    <p
                      className={`text-xs text-left ${cardInfo.titleColorClass}`}
                    >
                      CARD HOLDER
                    </p>
                    <p
                      className={`text-[15px] font-semibold text-left ${cardInfo.textColorClass}`}
                    >
                      {cardInfo.cardHolderName}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-xs text-left text-${cardInfo.titleColorClass}`}
                    >
                      Valid Thru
                    </p>
                    <p
                      className={`text-[15px] font-semibold text-left ${cardInfo.textColorClass}`}
                    >
                      {cardInfo.validThru}
                    </p>
                  </div>
                </div>
              </div>
              {/* Card Number and Action Avatar Section */}
              <div
                style={{ borderTop: `1px solid ${cardInfo.borderColor}` }}
                className='w-full flex justify-between items-center h-[70px] rounded-bl-[25px] rounded-br-[25px] bg-gradient-to-b from-white/[0.15] to-white/0 p-4'
              >
                <p
                  className={`text-[16px] font-semibold text-left ${cardInfo.textColorClass}`}
                >
                  {String(cardInfo.cardNo).replace(/\d{4}(?=\d{4})/g, '**** ')}
                </p>
                <span>{cardInfo.cardIcon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CreditCards;
