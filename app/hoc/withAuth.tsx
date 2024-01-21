import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAuthToken } from '../utils/authutil';

interface WithAuthProps {
  username: string; // Replace with your actual user data type
}

const withAuth = <P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter();

    // Replace this with your actual authentication logic
    const isAuthenticated = getAuthToken() ? true : false;

    useEffect(() => {
      // Redirect to the login page if the user is not authenticated
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);

    // Render the wrapped component if authenticated, or null if not
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
