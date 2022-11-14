import { axiosInstance } from './index';

const subNotifications = (subscription: PushSubscription) =>
  axiosInstance.post('/subNotifications', JSON.stringify(subscription), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default subNotifications;
