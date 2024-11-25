import PropTypes from 'prop-types';
import { ChartContainer } from './styles';

const BarChart = ({ data }) => {
  return (
    <ChartContainer>
      <h3>Gráfico de Barras</h3>
      <div>
        {data.map((item, index) => (
          <div key={index} style={{ width: item.value + '%', background: '#4caf50', marginBottom: '8px' }}>
            {item.label} - {item.value}%
          </div>
        ))}
      </div>
    </ChartContainer>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChart;