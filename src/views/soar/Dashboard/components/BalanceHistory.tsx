import Card from '@/components/ui/Card';
import Chart from '@/components/shared/Chart';

// Mock data for the balance history chart
const data = {
  series: [
    {
      data: [370, 220, 450, 750, 200, 590, 220], // Balance values over time
    },
  ],
  categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'], // Corresponding time periods
};

const BalanceHistory = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {/* Title for the balance history section */}
      <h4 className='text-[16px] lg:text-[22px] font-semibold text-primary mb-0 md:mb-5 mt-4'>
        Balance History
      </h4>

      {/* Card container for the chart */}
      <Card
        className={`border-0 bg-transparent md:bg-white ${className} rounded-3xl `}
      >
        {/* Chart component to display the balance history */}
        <Chart
          series={data.series} // Data points for the chart
          xAxis={data.categories} // Categories for the X-axis (time periods)
          height='220px' // Height of the chart
          type='area' // Chart type (area chart)
          customOptions={{
            legend: { show: false }, // Hide the legend for simplicity
          }}
        />
      </Card>
    </div>
  );
};

export default BalanceHistory;
