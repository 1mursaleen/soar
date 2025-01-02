
import Card from '@/components/ui/Card';
import Chart from '@/components/shared/Chart';

type BalanceHistoryProps = {
  data?: {
    series?: {
      name: string;
      data: number[];
    }[];
    categories?: string[];
  };
  className?: string;
};

const BalanceHistory = ({ className }: BalanceHistoryProps) => {
  const data = {
    series: [
      {
        // name: 'Marketing Sales',
        data: [370, 220, 450, 750, 200, 590, 220],
      },
    ],
    categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  };

  return (
    <div className={className}>
      <h4 className='text-[22px] font-semibold text-primary mb-5'>
        Balance History
      </h4>

      <Card className={`${className} rounded-3xl `} >
        <Chart
          series={data.series}
          xAxis={data.categories}
          height='220px'
          type='area'
          customOptions={{ legend: { show: false } }}
        />
      </Card>
    </div>
  );
};

export default BalanceHistory;
