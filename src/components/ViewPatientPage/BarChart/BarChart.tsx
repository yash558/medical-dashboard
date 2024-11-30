import { Bar } from "react-chartjs-2"
import styles from "./BarChart.module.css"
const BarChart = ({
  options1,
  chartData,
  options2,
  chartData2,
  boxRef,
  getBoxWidth,
}) => {
  return (
    <div className={styles.chartBox}>
      <div className={styles.colSmall}>
        <Bar options={options2} data={chartData2} />
      </div>
      <div className={styles.colLarge + " " + "theme-scrollbar"}>
        <div
          className={styles.box}
          style={{ minWidth: `${getBoxWidth()}px` }}
          ref={boxRef}
        >
          <Bar options={options1} data={chartData} />
        </div>
      </div>
    </div>
  )
}

export default BarChart
