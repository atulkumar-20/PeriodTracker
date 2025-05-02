import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div 
      className="min-h-screen" 
      style={{ 
        backgroundColor: '#fff5f7',
        backgroundImage: 'linear-gradient(to bottom right, #fff5f7, #ffe0e6)'
      }}
    >
      <div className="grid-background"></div>
      {/* All our routes will be rendered here due to outlet*/}
      <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="py-6">
          <Outlet />
        </div>
      </main>
      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        Made with Love and for my ❤️ by Atul
      </footer>
    </div>
  );
};
