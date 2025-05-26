
import React from 'react';
import { 
  LayoutGrid, 
  History, 
  CalendarDays, 
  ClipboardList, 
  BarChart3, 
  FlaskConical,
  MessageSquare, 
  LifeBuoy, 
  Settings 
} from 'lucide-react';
import { mockSidebarNav } from '@/data/mockData';
import './Sidebar.css';

const iconMap = {
  LayoutGrid,
  History,
  CalendarDays,
  ClipboardList,
  BarChart3,
  FlaskConical,
  MessageSquare,
  LifeBuoy,
  Settings
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          {mockSidebarNav.filter(item => !item.isFooter).map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            return (
              <li key={index} className={`sidebar-nav-item-wrapper ${item.marginTopClass ? item.marginTopClass.replace('mt-', 'margin-top-') : ''}`}>
                {item.isTitle ? (
                  <span className="sidebar-nav-title">{item.label}</span>
                ) : (
                  <a
                    href={item.href}
                    className={`sidebar-nav-link ${item.active ? 'sidebar-nav-link-active' : ''}`}
                  >
                    {IconComponent && <IconComponent className={`sidebar-nav-icon ${item.active ? 'sidebar-nav-icon-active' : ''}`} />}
                    <span className="sidebar-nav-label">{item.label}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="sidebar-footer">
        {mockSidebarNav.filter(item => item.isFooter).map((item, index) => {
          const IconComponent = item.icon ? iconMap[item.icon] : null;
          return (
            <a
              key={`footer-${index}`}
              href={item.href}
              className="sidebar-nav-link sidebar-footer-link"
            >
              {IconComponent && <IconComponent className="sidebar-nav-icon" />}
              <span className="sidebar-nav-label">{item.label}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
  