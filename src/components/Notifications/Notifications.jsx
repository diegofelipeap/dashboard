import PropTypes from 'prop-types';
import { NotificationContainer, NotificationCard } from './styles';

const Notifications = ({ notifications }) => {
  return (
    <NotificationContainer>
      {notifications.map((notification, index) => (
        <NotificationCard key={index} type={notification.type}>
          <p>{notification.message}</p>
        </NotificationCard>
      ))}
    </NotificationContainer>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
    })
  ).isRequired,
};

export default Notifications;
