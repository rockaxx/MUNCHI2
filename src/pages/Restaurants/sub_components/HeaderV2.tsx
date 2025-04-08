import React from 'react';
import { Link } from 'react-router-dom';
import munchiLogo from '../../../assets/images/munchiText.png'; // Adjust the path as necessary
import { doSignOut } from '../../../Firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/authContext/index';
import LocationSelector from './LocationSelector';

const HeaderV2: React.FC = () => {
  const { currentUser } = useAuth();
  const user = currentUser; // For clarity

  const handleLogout = async (): Promise<void> => {
    try {
      await doSignOut();
      toast.success('Logged out successfully!');
    } catch (error: any) {
      console.error('Error logging out:', error);
      toast.error('Error logging out: ' + error.message);
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#ffa31a',
        color: '#ffffff',
        padding: '6px 20px', // Reduce vertical padding for a slimmer header
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '40px', // Lower the minHeight for a slimmer header
      }}
    >
      {/* Left: Logo */}
      <Link to="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={munchiLogo}
          alt="Munchi Logo"
          style={{
            maxWidth: '150px', // Increase this value to make the logo bigger
            height: 'auto',
          }}
        />
      </Link>

      {/* Middle: LocationSelector (centered) */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', margin: '0 20px' }}>
        <LocationSelector />
      </div>

      {/* Right: User or Create Account button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {user ? (
          <>
            <img
              src={user.photoURL || '/default-profile.png'}
              alt="Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <span style={{ fontWeight: 'bold', color: '#292929' }}>
              {user.displayName || user.email}
            </span>
            <buttonimport React from 'react';
import { Link } from 'react-router-dom';
import munchiLogo from '../../../assets/images/munchiText.png'; // Adjust the path as necessary
import { doSignOut } from '../../../Firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/authContext/index';
import LocationSelector from './LocationSelector';

const HeaderV2 = () => {
  const { currentUser } = useAuth();
  const user = currentUser;

  const handleLogout = async () => {
    try {
      await doSignOut();
      toast.success('Logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out: ' + error.message);
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#ffa31a',
        color: '#ffffff',
        // ↓ 1) Reduce vertical padding to make header slimmer
        padding: '6px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // ↓ 2) Lower or remove minHeight to allow a slimmer header
        minHeight: '40px',
      }}
    >
      {/* Left: Logo */}
      <Link to="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={munchiLogo}
          alt="Munchi Logo"
          style={{
            // ↓ Increase this value to make the logo bigger
            maxWidth: '150px',
            height: 'auto',
          }}
        />
      </Link>

      {/* Middle: LocationSelector (centered) */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', margin: '0 20px' }}>
        <LocationSelector />
      </div>

      {/* Right: User or Create Account button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {user ? (
          <>
            <img
              src={user.photoURL || '/default-profile.png'}
              alt="Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <span style={{ fontWeight: 'bold', color: '#292929' }}>
              {user.displayName || user.email}
            </span>
            <button
              onClick={handleLogout}
              type="button"
              style={{
                backgroundColor: '#292929',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/create-account">
            <button
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#292929',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '999px',
                cursor: 'pointer',
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: '20px', height: '20px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A9 9 0 1119 10.104M12 7a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Create Account</span>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderV2;

                backgroundColor: '#292929',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/create-account">
            <button
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#292929',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '999px',
                cursor: 'pointer',
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: '20px', height: '20px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A9 9 0 1119 10.104M12 7a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Create Account</span>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderV2;
