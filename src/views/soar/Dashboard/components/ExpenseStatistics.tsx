import Card from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#343C6A', '#FC7900', '#232323', '#396AFF'];
// Mock data for the chart

const statisticsData = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  data: [30, 15, 35, 20],
};

const ExpenseStatistics = ({}) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = outerRadius - 50;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
    const categoryName = statisticsData?.labels[index];

    return (
      <g>
        <text
          x={x}
          y={y - 8}
          fill='white'
          textAnchor='middle'
          dominantBaseline='central'
          fontSize={'0.625rem'}
          fontWeight='bold'
        >
          {`${(percent * 100).toFixed(0)}%`} {/* Percentage in bold */}
        </text>
        <text
          x={x}
          y={y + 8}
          fill='white'
          textAnchor='middle'
          dominantBaseline='central'
          fontSize={'0.625rem'}
        >
          {categoryName} {/* Category name below */}
        </text>
      </g>
    );
  };

  return (
    <div>
      <h4 className='text-[16px] lg:text-[22px] font-semibold text-primary mb-0 md:mb-5'>
        Expense Statistics
      </h4>
      <Card className='border-0 bg-transparent md:bg-white'>
        <div className=' flex items-center justify-center'>
          {statisticsData?.data?.length > 0 && (
            <div style={{ width: '100%', height: 280 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={statisticsData?.data?.map((value, index) => ({
                      name: statisticsData?.labels[index],
                      value,
                    }))}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    label={renderCustomizedLabel} // Apply the custom label function here
                    outerRadius={130}
                    innerRadius={0}
                    dataKey='value'
                  >
                    {statisticsData?.data?.map((entry, index) => {
                      return (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          stroke='#fff'
                          strokeWidth={index % 2 === 1 ? 18 : 4}
                          className='expense_statistics'
                        />
                      );
                    })}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ExpenseStatistics;
