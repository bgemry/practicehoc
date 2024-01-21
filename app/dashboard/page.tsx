'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken, removeAuthToken } from '../utils/authutil';
import withAuth from '../hoc/withAuth';



const Dashboard: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string | null>('')
  const handleLogout = () => {
    // Perform any additional cleanup or API calls on logout if needed
    removeAuthToken()
    router.push('/login'); // Redirect to the login page after logout
  };

  useEffect(() => {
    setUsername( getAuthToken())
  }, [])
  

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Your Dashboard</div>
        <div style={styles.userSection}>
          <span style={styles.username}>{username}</span>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </nav>
      <div style={styles.dashboardContent}>
        <h2>Welcome, {username}!</h2>
        <p>This is your dashboard content. Replace it with your actual content.</p>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  username: {
    marginRight: '10px',
  },
  logoutButton: {
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
  },
  dashboardContent: {
    padding: '20px',
  },
};

export default withAuth(Dashboard);
