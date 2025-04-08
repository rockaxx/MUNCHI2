import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import munchiLogo from '../../assets/images/munchilogo.png';
import { doSignOut } from '../../Firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/authContext';

interface HeaderProps {
  openModal: () => void;
  handleUseCurrentLocation: () => void;
  userAddress: string;
  isLoadingLocation: boolean;
  locationError: string | null;
}

const Header: React.FC<HeaderProps> = ({
  openModal,
  handleUseCurrentLocation,
  userAddress,
  isLoadingLocation,
  locationError,
}) => {
  const { currentUser } = useAuth();
  const user = currentUser; // For clarity

  const [isSticky, setIsSticky] = useState<boolean>(false);

  // Listen to scroll events to set sticky header state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Log out handler
  const handleLogout = async () => {
    console.log('[Header] Logging out...');
    try {
      await doSignOut();
      toast.success('Logged out successfully!');
    } catch (error: any) {
      console.error('[Header] Error logging out:', error);
      toast.error('Error logging out: ' + error.message);
    }
  };

  return (
    <header className="unified-header" style={{ backgroundColor: '#ffa31a', color: '#ffffff' }}>
      <div className="unified-header__desktop unified-header-desktop">
        <div className="unified-header-desktop__top">
          {/* Left side: Logo */}
          <div className="unified-header-desktop__left">
            <Link to="/" className="header-logo" aria-label="Home">
              <img
                src={munchiLogo}
                alt="Munchi Logo"
                style={{ display: 'block', margin: '0 auto', maxWidth: '120px' }}
              />
            </Link>
          </div>
          {/* Center (Optional) */}
          <div className="unified-header-desktop__center">
            <div className="unified-header-desktop__address-wrapper" />
          </div>
          {/* Right side: User profile with Log Out or Create Account */}
          <div className="unified-header-desktop__right">
            {user ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={user.photoURL || '/default-profile.png'}
                  alt="Profile"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <span style={{ fontWeight: 'bold' }}>{user.displayName || user.email}</span>
                <button
                  onClick={handleLogout}
                  type="button"
                  style={{
                    marginLeft: '8px',
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
              </div>
            ) : (
              <Link to="/create-account" data-discover="true" style={{ marginLeft: '16px' }}>
                <button
                  type="button"
                  className="helio-button login-button pill"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#292929',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 16px',
                  }}
                >
                  <img
                    alt="Create Account"
                    src="https://glovoapp.com/images/svg/login.svg"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>Create Account</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Jumbotron */}
      <div className="header-jumbotron-container">
        <h1 className="landing__city">
          <span className="title title--inverted" style={{ color: '#ffffff' }}>
            <span className="title__city-name">Food delivery and more</span>
          </span>
        </h1>
        {/* Static address bar visible before scroll */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '10px 16px',
            maxWidth: '600px',
            margin: '20px auto 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3.75" stroke="#555" fill="none" />
              <path
                d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z"
                stroke="#555"
                fill="none"
              />
            </svg>
            <div
              onClick={openModal}
              style={{
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '800',
                color: '#000',
                backgroundColor: '#fff',
              }}
            >
              {userAddress || 'Write your address...'}
            </div>
          </div>
          <button
            onClick={handleUseCurrentLocation}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#EAF8F3',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 12px',
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M2 12L22 2L14 22L11 13L2 12Z" fill="#00997A" />
            </svg>
            <span style={{ color: '#00997A', fontSize: '14px', fontWeight: '700' }}>
              Use current location
            </span>
          </button>
        </div>

        {/* Sticky Header */}
        {isSticky && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              backgroundColor: '#ffa31a',
              zIndex: 9998,
              padding: '12px 24px',
              display: 'flex',
              flexDirection: 'column',
              animation: 'fadeDown 0.3s ease-in-out',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Logo on the left */}
              <img
                src="/assets/munchilogo-C28sZitf.png"
                alt="Munchi Logo"
                style={{ maxWidth: '100px', height: 'auto', marginRight: '16px' }}
              />

              {/* Center - Input + Text */}
              <div style={{ textAlign: 'center', flex: 1, maxWidth: '600px' }}>
                <div
                  style={{
                    fontWeight: '700',
                    fontSize: '16px',
                    color: '#292929',
                    marginBottom: '6px',
                  }}
                >
                  Enter your address to know what’s near you
                </div>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    width: '100%',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3.75" stroke="#555" fill="none" />
                      <path
                        d="M4.125 8.8648C4.125 4.59333 7.6601 1.125 12 1.125C16.3399 1.125 19.875 4.59333 19.875 8.8648C19.875 10.5107 19.5009 12.2592 18.7689 14.06C18.2011 15.4599 17.4128 16.8999 16.4244 18.3481C15.6945 19.4161 14.9171 20.4011 14.1403 21.282C13.6582 21.8288 13.2272 22.2758 13.036 22.4559C12.7553 22.7279 12.3837 22.875 12 22.875C11.614 22.875 11.2393 22.7269 10.966 22.4587C10.7533 22.2557 10.3387 21.8242 9.85811 21.278C9.08129 20.395 8.30417 19.4086 7.57439 18.3395C6.5875 16.8928 5.79879 15.452 5.23027 14.0531C4.4988 12.2512 4.125 10.5056 4.125 8.8648Z"
                        stroke="#555"
                        fill="none"
                      />
                    </svg>
                    <div
                      onClick={openModal}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: '800',
                        color: '#000',
                        backgroundColor: '#fff',
                      }}
                    >
                      {userAddress || 'Write your address...'}
                    </div>
                  </div>
                  <button
                    onClick={handleUseCurrentLocation}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#EAF8F3',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M2 12L22 2L14 22L11 13L2 12Z" fill="#00997A" />
                    </svg>
                    <span style={{ color: '#00997A', fontSize: '14px', fontWeight: '700' }}>
                      Use current location
                    </span>
                  </button>
                </div>
              </div>

              {/* Right side: User profile with Log Out or Create Account */}
              {user ? (
                <div
                  style={{
                    marginLeft: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <img
                    src={user.photoURL || '/default-profile.png'}
                    alt="Profile"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                  <span style={{ fontWeight: 'bold' }}>{user.displayName || user.email}</span>
                  <button
                    onClick={handleLogout}
                    type="button"
                    style={{
                      marginLeft: '8px',
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
                </div>
              ) : (
                <Link to="/create-account" data-discover="true" style={{ marginLeft: '16px' }}>
                  <button
                    type="button"
                    className="helio-button login-button pill"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#292929',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                    }}
                  >
                    <img
                      alt="Create Account"
                      src="https://glovoapp.com/images/svg/login.svg"
                      style={{ width: '20px', height: '20px' }}
                    />
                    <span>Create Account</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}

        {isLoadingLocation && (
          <div style={{ textAlign: 'center', marginTop: '10px', color: '#00997A' }}>
            <div className="loader-dots">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p>Fetching your location...</p>
          </div>
        )}
        {locationError && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{locationError}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
