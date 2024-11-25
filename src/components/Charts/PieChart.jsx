import PropTypes from 'prop-types';
import { ChartContainer } from './styles';

const PieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <ChartContainer>
      <h3>Gráfico de Pizza</h3>
      <svg width="100%" height="200px" viewBox="0 0 32 32" style={{ transform: 'rotate(-90deg)' }}>
        {data.reduce((acc, item, index) => {
          const start = acc.total;
          const value = (item.value / total) * 100;
          acc.total += value;

          return {
            total: acc.total,
            elements: [
              ...acc.elements,
              <circle
                key={index}
                r="16"
                cx="16"
                cy="16"
                fill="transparent"
                stroke={item.color}
                strokeWidth="32"
                strokeDasharray={`${value} ${100 - value}`}
                strokeDashoffset={100 - start}
              />,
            ],
          };
        }, { total: 0, elements: [] }).elements}
      </svg>
    </ChartContainer>
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PieChart;
