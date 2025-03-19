import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, ArrowRight, Code2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <Wallet className="w-16 h-16 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Personal Expense Tracker
        </h1>
        <p className="text-gray-600 mb-8">
          Take control of your finances with our simple and effective expense tracking solution.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-8"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
          <Code2 className="w-4 h-4" />
          <p>Developed by Jayasurya J</p>
        </div>
      </div>
    </div>
  );
};

export default Home;