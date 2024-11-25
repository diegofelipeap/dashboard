import PropTypes from 'prop-types';
import { ChartContainer } from './styles';

const LineChart = ({ points }) => {
  return (
    <ChartContainer>
      <h3>Gráfico de Linhas</h3>
      <svg width="100%" height="200px">
        <polyline
          fill="none"
          stroke="#2196f3"
          strokeWidth="3"
          points={points.map(point => `${point.x},${point.y}`).join(' ')}
        />
      </svg>
    </ChartContainer>
  );
};

LineChart.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChart;
