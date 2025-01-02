import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Chart from "@/components/shared/Chart";

type WeeklyActivityProps = {
  className?: string;
};

const WeeklyActivity = ({ className }: WeeklyActivityProps) => {
  const [visibleSeries, setVisibleSeries] = useState({
    Deposit: true,
    Withdraw: true,
  });

  const data = [
    {
      name: "Deposit",
      data: [480, 350, 330, 480, 170, 390, 400],
    },
    {
      name: "Withdraw",
      data: [250, 120, 280, 380, 270, 270, 370],
    },
  ];

  const handleToggleSeries = (seriesName: string) => {
    setVisibleSeries((prev:any) => ({
      ...prev,
      [seriesName]: !prev[seriesName],
    }));
  };

  return (
    <div className={className}>
      <h4 className="text-lg lg:text-[22px] font-semibold text-primary mb-5">
        Weekly Activity
      </h4>

      <Card>
        <div className="w-full flex items-center justify-end gap-5">
          <div
            className={`flex items-center gap-2 font-inter font-normal md:text-base text-sm cursor-pointer ${
              visibleSeries.Deposit ? "text-[#718EBF]" : "text-gray-400"
            }`}
            onClick={() => handleToggleSeries("Deposit")}
          >
            <span
              className={`md:h-4 md:w-4 h-3 w-3 rounded-full ${
                visibleSeries.Deposit ? "bg-[#396AFF]" : "bg-gray-300"
              }`}
            ></span>
            Deposit
          </div>
          <div
            className={`flex items-center gap-2 font-inter font-normal md:text-base text-sm cursor-pointer ${
              visibleSeries.Withdraw ? "text-[#718EBF]" : "text-gray-400"
            }`}
            onClick={() => handleToggleSeries("Withdraw")}
          >
            <span
              className={`md:h-4 md:w-4 h-3 w-3 rounded-full ${
                visibleSeries.Withdraw ? "bg-[#232323]" : "bg-gray-300"
              }`}
            ></span>
            Withdraw
          </div>
        </div>

        <Chart
          series={data.filter((series:any) => visibleSeries[series.name])}
          height="240px"
          type="bar"
          customOptions={{
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "15px",
                borderRadius: 6,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              colors: ["transparent"],
            },
            xaxis: {
              categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
            },
            fill: {
              opacity: 1,
            },
            colors: ["#396AFF", "#232323"],
            tooltip: {
              y: {
                formatter: (val) => `$${val} thousands`,
              },
            },
            legend: {
              show: false,
            },
          }}
        />
      </Card>
    </div>
  );
};

export default WeeklyActivity;
