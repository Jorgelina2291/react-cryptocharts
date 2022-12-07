export const chartOptions = {

    lineHeightAnnotation: {
        always: true,
        hover: true,
        lineWeight: 1.5,

    },
    animation: {
        duration: 3000,
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
        xAxes : [{
            type: "time",
            distribution: "linear",
            gridLines: {display:false}
        }]
    }
}