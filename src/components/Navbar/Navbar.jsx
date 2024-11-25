import { Container, Title, UserProfile } from './styles';

const Navbar = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <UserProfile>
        <img src="/assets/user.png" alt="User" />
        <span>Webficar</span>
      </UserProfile>
    </Container>
  );
};

export default Navbar;
