
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Layers, CheckCircle2, Briefcase, Command, RefreshCw, ArrowRightCircle, Users, Inbox, ClipboardList, PieChart, Settings, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutGrid, path: '/dashboard' },
    { name: 'Leads', icon: Layers, path: '/leads' },
    { name: 'Booking', icon: CheckCircle2, path: '/booking' },
    { 
      name: 'Client', 
      icon: Briefcase, 
      path: '/client',
      // We turn the subItem into an object with its own path!
      subItems: [{ label: 'All Client', path: '/client/all' }] 
    },
    { name: 'Projects', icon: Command, path: '/projects' },
    { name: 'Inventory', icon: RefreshCw, path: '/inventory' },
    { name: 'Expenses', icon: ArrowRightCircle, path: '/expenses' },
    { name: 'Employee', icon: Users, path: '/employee' },
    { name: 'Tickets', icon: Inbox, path: '/tickets' },
    { name: 'Notes', icon: ClipboardList, path: '/notes' },
    { name: 'Report', icon: PieChart, path: '/report' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-[260px] bg-white border-r border-slate-200 flex flex-col h-screen shrink-0 font-inter text-slate-900">
      <div className="px-6 py-6 pb-8">
        <div className="text-[26px] font-black tracking-tight text-black flex items-center">
          apna<span className="text-[#8CC63F]">flat</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide space-y-[2px]">
        {menuItems.map((item) => {
          // If the URL starts with /client, the main button stays active
          const isActive = location.pathname.startsWith(item.path);

          return (
            <div key={item.name} className="flex flex-col">
              <NavLink
                to={item.path}
                // Use 'end' so the main button only navigates exactly to /client
                end={item.path === '/client'}
                className={`flex items-center justify-between px-4 py-[14px] rounded-[8px] transition-all ${isActive ? 'bg-[#238EEB] text-white shadow-sm' : 'text-[#5A6A85] hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-[20px] h-[20px] ${isActive ? 'text-white' : 'text-[#8094ae]'}`} strokeWidth={1.8} />
                  <span className={`text-[15px] ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.name}</span>
                </div>
                <ChevronDown className={`w-[18px] h-[18px] ${isActive ? 'opacity-100 text-white' : 'opacity-40 text-[#8094ae]'}`} strokeWidth={2} />
              </NavLink>

              {isActive && item.subItems && (
                <div className="pt-2 pb-2">
                  {item.subItems.map((subItem) => {
                    // Check if we are specifically on /client/all
                    const isSubActive = location.pathname === subItem.path;
                    return (
                      <NavLink 
                        key={subItem.label} 
                        to={subItem.path}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer group"
                      >
                        <div className="flex items-center gap-4 ml-1">
                          <div className={`w-[6px] h-[6px] rounded-full transition-colors ${isSubActive ? 'bg-[#238EEB]' : 'bg-[#b7c2d0] group-hover:bg-[#238EEB]'}`}></div>
                          <span className={`text-[14px] font-medium transition-colors ${isSubActive ? 'text-[#238EEB]' : 'text-[#5A6A85] group-hover:text-[#238EEB]'}`}>
                            {subItem.label}
                          </span>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;