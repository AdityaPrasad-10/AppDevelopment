import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { CSVLink } from "react-csv";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Reports.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Table component
const ReportTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table className="reports-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

<<<<<<< HEAD
// Chart component for dynamic data
const ReportChart = ({ data }) => {
  const labels = data.map((event) => event.event);
  const participants = data.map((event) => event.participants);
  const revenue = data.map((event) => event.revenue);
  const cost = data.map((event) => event.cost);
=======
// Chart component with static data
const ReportChart = () => {
  const staticData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };
>>>>>>> 09c24e7d8bbc8c25052e563a1c85b1e35bff8e5c

  const lineChartData = {
    labels,
    datasets: [
      {
        label: "Participants",
        data: participants,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const barChartData = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: revenue,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Cost",
        data: cost,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const pieChartData = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: revenue.map((rev, i) => rev - cost[i]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart">
        <h3>Event Attendance Over Time</h3>
        <Line data={lineChartData} />
      </div>
      <div className="chart">
        <h3>Revenue and Cost</h3>
        <Bar data={barChartData} />
      </div>
      <div className="chart">
        <h3>Profit Distribution</h3>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

// Export Button component
const ExportButton = ({ data }) => (
  <CSVLink data={data} filename="report.csv">
    <button className="btn">Export to CSV</button>
  </CSVLink>
);

// Mock function to fetch report data
const fetchReportData = async (type, filters) => {
  // Return mock data for testing
  return [
<<<<<<< HEAD
    {
      event: "Event 1",
      participants: 120,
      revenue: 5000,
      cost: 3000,
      satisfaction: 4.5,
    },
    {
      event: "Event 2",
      participants: 95,
      revenue: 3000,
      cost: 1500,
      satisfaction: 4.2,
    },
    {
      event: "Event 3",
      participants: 150,
      revenue: 7000,
      cost: 4000,
      satisfaction: 4.8,
    },
  ];
};

=======
    { Event: 'Event 1', Participants: 120, Revenue: 5000, Satisfaction: 4.5 },
    { Event: 'Event 2', Participants: 95, Revenue: 3000, Satisfaction: 4.2 },
    { Event: 'Event 3', Participants: 150, Revenue: 7000, Satisfaction: 4.8 },
  ];
};

// Report Filters component (mock implementation)
const ReportFilters = ({ onChange }) => {
  // Sample filter update
  const updateFilters = () => {
    onChange({}); // Update with real filters as needed
  };

  return (
    <div className="report-filters">
    </div>
  );
};

>>>>>>> 09c24e7d8bbc8c25052e563a1c85b1e35bff8e5c
// Main Reports component
const Reports = () => {
  const [reportData, setReportData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const loadReportData = async () => {
      try {
        const data = await fetchReportData("attendance", filters);
        setReportData(data);
      } catch (error) {
        console.error("Failed to load report data:", error);
      }
    };

    loadReportData();
  }, [filters]);

  // Calculate summary statistics
<<<<<<< HEAD
  const totalParticipants = reportData.reduce(
    (total, event) => total + event.participants,
    0
  );
  const totalRevenue = reportData.reduce(
    (total, event) => total + event.revenue,
    0
  );
  const totalCost = reportData.reduce((total, event) => total + event.cost, 0);
  const totalProfit = totalRevenue - totalCost;
  const averageSatisfaction = reportData.length
    ? (
        reportData.reduce((total, event) => total + event.satisfaction, 0) /
        reportData.length
      ).toFixed(2)
    : 0;
=======
  const totalParticipants = reportData.reduce((total, event) => total + (Number(event.Participants) || 0), 0);
  const totalRevenue = reportData.reduce((total, event) => total + (Number(event.Revenue) || 0), 0);
  const averageSatisfaction = (reportData.length > 0
    ? (reportData.reduce((total, event) => total + (Number(event.Satisfaction) || 0), 0) / reportData.length)
    : 0).toFixed(2);
>>>>>>> 09c24e7d8bbc8c25052e563a1c85b1e35bff8e5c

  return (
    <div className="reports-widget">
      <h2 className="header21">Reports</h2>
      <p>Generate and view reports and analytics for corporate events.</p>

      <div className="summary1">
        <ReportChart />
      </div>
  
      <ReportFilters onChange={setFilters} />
  
      <div>
        <ReportTable data={reportData} />
        <h3>Summary</h3>
<<<<<<< HEAD
        <p>
          <strong>Total Participants:</strong> {totalParticipants}
        </p>
        <p>
          <strong>Total Revenue:</strong> ${totalRevenue}
        </p>
        <p>
          <strong>Total Cost:</strong> ${totalCost}
        </p>
        <p>
          <strong>Total Profit:</strong> ${totalProfit}
        </p>
        <p>
          <strong>Average Satisfaction:</strong> {averageSatisfaction} / 5
        </p>
      </div>

      <ReportTable data={reportData} />
      <ReportChart data={reportData} />
      <ExportButton data={reportData} />

      <div className="insights">
        <h3>Key Insights</h3>
        <div className="insight">
          <p>
            <strong>Highest Revenue Event:</strong>{" "}
            {reportData.length
              ? reportData.reduce((prev, current) =>
                  prev.revenue > current.revenue ? prev : current
                ).event
              : "N/A"}
          </p>
          <p>
            <strong>Lowest Cost Event:</strong>{" "}
            {reportData.length
              ? reportData.reduce((prev, current) =>
                  prev.cost < current.cost ? prev : current
                ).event
              : "N/A"}
          </p>
        </div>
      </div>
=======
        <p><strong>Total Participants:</strong> {totalParticipants}</p>
        <p><strong>Total Revenue:</strong> ${totalRevenue}</p>
        <p><strong>Average Satisfaction:</strong> {averageSatisfaction} / 5</p>
        <ExportButton data={reportData} />
      </div>
>>>>>>> 09c24e7d8bbc8c25052e563a1c85b1e35bff8e5c
    </div>
  );
};

export default Reports;
