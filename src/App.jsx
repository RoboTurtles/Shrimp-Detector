import React from 'react';
import './App.css';
import './fonts.css';
import shrimp from './shrimp.jpeg';

function App() {
  const [visible, setVisible] = React.useState(false);
  const [isShrimp, setIsShrimp] = React.useState(false);

  return (
    <div className="App flex flex-col min-h-screen items-center justify-center">
      {isShrimp && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <img src={shrimp} alt='Shrimp Detected' className="w-full h-full object-contain" />
        </div>
      )}
      <header className="text-black text-center font-oldenburg text-4xl p-4">
        Shrimp Detector
      </header>
      <main className="p-4 flex flex-col items-center">
        <p className="text-black text-center text-lg">
          🦐
        </p>
        <br />
        <button className="bg-gray-300 text-black px-4 py-2 border-x-gray-500 rounded-none" onClick={() => setVisible(true)}>
          start detection
        </button>
        {visible && (
          <>
            <p className="text-black text-center text-lg">
              Are you a shrimp?
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-500 text-white px-4 py-2 border-none rounded-none" onClick={() => setIsShrimp(true)}>
                Yes
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 border-none rounded-none" onClick={() => window.location.reload()}>
                No
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;