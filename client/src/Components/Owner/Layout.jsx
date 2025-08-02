import Sidebar from '../../Components/Owner/Sidebar'
import Header from '../../Components/Owner/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="w-60" />
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
