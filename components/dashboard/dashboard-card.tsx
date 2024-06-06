import { Card, CardContent } from "../ui/card";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className=" flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
