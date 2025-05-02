import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import icon from '@/assets/icon.png';
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import { useState } from 'react';

export const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={icon}
            alt="Period Tracker Logo"
            className="h-10 sm:h-12 w-auto"
          />
          <span className="font-semibold text-xl sm:text-2xl">
            Period Tracker
          </span>
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center b-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl={'/fill-your-info'}
            fallbackRedirectUrl={'/fill-your-info'}
          />
        </div>
      )}
    </>
  );
};
