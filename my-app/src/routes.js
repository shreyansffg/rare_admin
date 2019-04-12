import ChallengesPage from "./Challenge/ChallengePage";
import Users from "./Users/users";

const Routes = [
  {
    path: '/users',
    sidebarName: 'Home',
    navbarName: 'usersNav',
    icon: 'home',
    component: Users
  },
  {
    path: '/dashboard/profile',
    sidebarName: 'home',
    navbarName: 'challengeNav',
    icon: 'file',
    component: ChallengesPage
  }
];

export default Routes;
