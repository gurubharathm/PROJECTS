import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid'; 
import { LogoutOutlined, People, Settings } from '@mui/icons-material';
import ProfilePage from '../../pages/ProfilePage';
import DashboardPage from '../../pages/DashboardPage';
import LoginPage from '../../pages/LoginPage';
import {  useNavigate } from 'react-router-dom';
import SecurityPage from '../../pages/SecurityPage';
import AccountsPage from '../../pages/AccountsPage';
import RolesPage from '../../pages/RolesPage';
const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <People />,
    children: [
      {
        segment: 'accounts',
        title: 'Accounts',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'roles',
        title: 'Roles',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <Settings />,
    children: [
      {
        segment: 'profile',
        title: 'Profile',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'security',
        title: 'Security',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <LogoutOutlined />,
  }
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => {
        setPathname(String(path));
        // navigate('/dashboard');
        console.log(String(path));
      },
    };
  }, [pathname]);
  window.history.pushState({}, '', pathname);

  // useEffect(() => {
    
  // }, [pathname]);
  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));


export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');


  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  const navigate = useNavigate();
  const renderPage = () => {
    
    if(router.pathname == '/logout')
      navigate('/');
    switch (router.pathname) {
      case '/dashboard':
        return <DashboardPage />;
      case '/users/accounts':
        return <AccountsPage />;
      case '/users/roles':
        return <RolesPage />;
      case '/settings/profile':
        return <ProfilePage />;
      case '/settings/security':
          return <SecurityPage />;
      case '/logout':
        return <LoginWrapper/>;
      default:
        return <DashboardPage />;
    }
  };

  



  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
        {renderPage()}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}


const LoginWrapper: React.FC = () => {
  const navigate = useNavigate();
  // window.history.pushState({}, '', '/');
  const handleLogin = (username: string, password: string) => {
    // window.history.pushState({}, '', '/');
    console.log(`Login successful with username: ${username} and password: ${password}`);
    navigate('/dashboard');
  };
 

  return <LoginPage onLogin={handleLogin} />;
};