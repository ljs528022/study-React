import { useRef, useEffect } from "react";
import "./Dashboard.css";
import "https://cdn.jsdelivr.net/npm/chart.js";

const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null);
    
    useEffect(() => {
        if(chartRef.current && window.Chart)
        {
            new window.Chart(chartRef.current, { type, data, options });
        }
    }, [type, data, options])

    return <canvas ref={chartRef}></canvas>
};

const Dashboard = () => {

    const labels = ["1월", "2월", "3월", "4월", "5월", "6월"];
    const dataValues = [65, 59, 80, 81, 56, 55];

    const charts = [
        {
            type: "bar",
            labels: labels,
            label: "월별 판매량",
            data: dataValues,
            bgColor: "rgba(0, 192, 255, 0.8)",
            borderColor: "rgba(0, 192, 255, 1)",
            options: { responsive: true }
        },
        {
            type: "line",
            label: "월별 변화",
            data: dataValues,
            borderColor: "#ff6384",
            options: { responsive: true }
        },
        {
            type: "pie",
            labels: ["A제품", "B제품", "C제품"],
            data: [30, 45, 25],
            borderColor: "#ff6384",
            bgColor: ["#ff6384", "#36a2eb", "#ffce56"],
            options: { responsive: true }
        },
        {
            type: "doughnut",
            labels: ["서울", "부산", "대구", "광주"],
            data: [40, 25, 20, 15],
            bgColor: ["#ff6384", "#36a2eb", "#4bc0c0", "#ff9f40"],
            options: { responsive: true }
        },
        {
            type: "radar",
            label: "제품 평가",
            labels: ["기술력", "디자인", "마케팅", "가격", "서비스"],
            data: [80, 90, 75, 85, 95],
            borderColor: "#36a2eb",
            bgColor: "rgba(54, 162, 235, 0.3)",
            options: { responsive: true }
        },
        {
            type: "scatter",
            label: "선점도 데이터",
            data: [
                { x: 10, y: 20 },
                { x: 15, y: 20 },
                { x: 25, y: 30 },
                { x: 35, y: 25 },
                { x: 50, y: 45 },
              ],
            bgColor: "#36a2eb",
            options: { responsive: true }
        },
    ]

    return (
        <div>
            <h2>Chart.js 대시보드</h2>
            <div className="dashboard">
                {
                    charts.map((chart, index) => (
                        <div key={index} className="chart-box">
                            <ChartComponent 
                                type={chart.type}
                                data={{
                                    labels: chart.labels,
                                    datasets: 
                                    [
                                        {
                                            label: chart.label,
                                            data: chart.data,
                                            backgroundColor: chart.bgColor,
                                            borderWidth: 2,
                                            fill: chart.type === "line" ? false : undefined
                                        },
                                    ],
                                }}
                                options={chart.options} 
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Dashboard;