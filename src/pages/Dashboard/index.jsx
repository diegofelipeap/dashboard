import { DashboardContainer, SummaryCard } from './styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>

      <div className="charts-container">
        <SummaryCard>
          <div className="icon">📊</div>
          <h2>Total de Usuários</h2>
          <p>1,200</p>
        </SummaryCard>
        <SummaryCard>
          <div className="icon">💼</div>
          <h2>Projetos Concluídos</h2>
          <p>85</p>
        </SummaryCard>
        <SummaryCard>
          <div className="icon">💬</div>
          <h2>Mensagens Recebidas</h2>
          <p>240</p>
        </SummaryCard>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
