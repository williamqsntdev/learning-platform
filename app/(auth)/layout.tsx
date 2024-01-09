import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Partie gauche avec le texte */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-blue-800 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Plateforme pour vous instruire</h1>
          <p className="text-lg">Bienvenue sur notre plateforme d'instruction. Connectez-vous pour accéder à votre compte.</p>
        </div>
      </div>

      {/* Partie droite avec le composant SignUp */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
