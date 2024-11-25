import BarChart from '../../components/Charts/BarChart';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';
import Notifications from '../../components/Notifications/Notifications';

const Home = () => {
  const chartData = [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 40 },
    { label: 'Mar', value: 50 },
  ];

  const pieData = [
    { value: 30, color: '#4caf50' },
    { value: 40, color: '#2196f3' },
    { value: 30, color: '#ff9800' },
  ];

  const linePoints = [
    { x: 0, y: 50 },
    { x: 10, y: 70 },
    { x: 20, y: 40 },
    { x: 30, y: 90 },
  ];

  const notifications = [
    { message: 'Usuário cadastrado com sucesso.', type: 'success' },
    { message: 'Erro ao salvar o arquivo.', type: 'error' },
    { message: 'Senha fraca! Atualize sua senha.', type: 'warning' },
  ];

  return (
    <div>
      <BarChart data={chartData} />
      <LineChart points={linePoints} />
      <PieChart data={pieData} />
      <Notifications notifications={notifications} />
    </div>
  );
};

export default Home;
