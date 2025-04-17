
import { BarChart2, HardDrive, Settings } from "lucide-react";

interface DashboardControlsProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const DashboardControls = ({ activeView, setActiveView }: DashboardControlsProps) => {
  const navItems = [
    { id: "overview", icon: BarChart2, label: "Overview" },
    { id: "devices", icon: HardDrive, label: "Devices" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="glass-card p-4">
      <h3 className="font-medium text-white mb-3">Dashboard Controls</h3>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              activeView === item.id 
                ? "bg-cipher-blue/20 text-white" 
                : "text-gray-400 hover:bg-[#1E1E2C] hover:text-white"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
            {activeView === item.id && (
              <span className="ml-auto h-2 w-2 rounded-full bg-cipher-blue animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};
