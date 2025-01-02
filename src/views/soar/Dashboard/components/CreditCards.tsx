import ChipIconBlack from '@/assets/svg/ChipIconBlack';
import ChipIconWhite from '@/assets/svg/ChipIconWhite';
import GroupCardIcon from '@/assets/svg/GroupCardIcon';
import { Avatar } from '@/components/ui';
import classNames from 'classnames';

const ActionAvatar = ({
  actionType,
  iconColorClass,
}: {
  actionType: number;
  iconColorClass: string;
}) => {
  switch (actionType) {
    case 0:
      return (
        <Avatar className={`rounded-full ${iconColorClass}`}>
          <GroupCardIcon className={iconColorClass} />
        </Avatar>
      );
    default:
      return <Avatar />;
  }
};
const CreditCards = ({
  cardsData,
  className,
}: {
  cardsData: {
    currentBalance: string;
    cardHolderName: string;
    validThru: string;
    cardNo: string;
    actionType: number;
    bgCardColor: string;
    bgColorClass?: string;
    textColorClass?: string;
    iconColorClass?: string;
    titleColorClass?: string;
    icon?: JSX.Element;
  };
  className: string;

}) => {
  return (
    <div className={`${className} w-full overflow-hidden`}>
      <div className='flex items-center justify-between mb-4'>
        <p className={`text-lg lg:text-[22px] font-semibold text-left text-primary`}>
          My Cards
        </p>
        <p className={`text-[17px] font-semibold text-left text-primary`}>
          See All
        </p>
      </div>

      <div
        className='flex gap-4 w-full overflow-x-auto'
        style={{ scrollbarWidth: 'none' }}
      >
        {/* <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'> */}

        <div className="flex w-full overflow-x-auto gap-4 lg:grid lg:grid-cols-2">
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
                      className={`text-xl font-semibold text-left ${cardInfo.textColorClass}`}
                    >
                      {cardInfo.currentBalance}
                    </p>
                  </div>
                  <div>
                    {/* {cardInfo.icon } */}
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
                <ActionAvatar
                  actionType={cardInfo.actionType}
                  iconColorClass={cardInfo.iconColorClass}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CreditCards;
