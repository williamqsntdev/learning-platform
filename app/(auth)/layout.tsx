// AuthLayout.tsx
import Link from 'next/link';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white flex flex-wrap justify-left items-center">
        <div>
          <span className="text-2xl font-bold">William Qent</span>
        </div>
      </nav>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-20 px-4 h-full flex items-center justify-center bg-blue-800 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Développez vos compétences pour atteindre de nouveaux sommets</h1>
            <p className="text-lg">Accédez à des formations de qualité conçues pour stimuler votre carrière.</p>
            <br />
        
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 text-center md:text-left flex items-center flex-col justify-center md:justify-start md:py-20">
          <div>
            <p className="text-1xl font-bold mb-4 text-white bg-blue-800 py-4 px-4 ">Connectez-vous pour découvrir des formations inédites</p>
            <br /><br />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>

    </div>
  );
}

export default AuthLayout;
