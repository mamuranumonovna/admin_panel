import Chart from 'chart.js/auto';
import {useEffect,useRef} from "react";
export default function DougthChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const ctx = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [100,30],
                        backgroundColor: [
                            '#1AC19D',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                        ],
                        hoverOffset: 0,
                    },
                ],
            },
            options: {
                responsive: true, // Make the chart responsive
            },
        });

        return () => {
            chartInstance.current.destroy();
        };
    }, []);


    return (
        <div>
                <canvas ref={chartRef} style={{width: '100%', height: 'auto'}}></canvas>
        </div>
    )
}
