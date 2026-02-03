import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "../ui/card";

type GraphProps = {
  type: "bar" | "line" | "pie" | "radar";
  data: any[];
  xKey?: string;
  yKey?: string;
};

export function Graph({ type, data = [], xKey, yKey }: GraphProps) {
  if (!data || data.length === 0) {
    return (
      <Card>
        <p>No data to visualize.</p>
      </Card>
    );
  }

  return (
    <Card>
      {type === "bar" && (
        <BarChart width={400} height={250} data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yKey} fill="#4f46e5" />
        </BarChart>
      )}

      {type === "line" && (
        <LineChart width={400} height={250} data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey={yKey} stroke="#10b981" />
        </LineChart>
      )}

      {type === "pie" && (
        <PieChart width={400} height={250}>
          <Pie data={data} dataKey={yKey} nameKey={xKey} label />
          <Tooltip />
        </PieChart>
      )}

      {type === "radar" && (
        <RadarChart width={400} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={xKey} />
          <PolarRadiusAxis />
          <Radar dataKey={yKey} stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
        </RadarChart>
      )}
    </Card>
  );
}
