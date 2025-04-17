
import { Laptop, Smartphone, Tablet, PowerOff, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const DeviceList = () => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Emma's Laptop",
      type: "laptop",
      lastActive: "Active now",
      status: "online",
      isLocked: false,
    },
    {
      id: 2,
      name: "Emma's Phone",
      type: "phone",
      lastActive: "2 hours ago",
      status: "offline",
      isLocked: false,
    },
    {
      id: 3,
      name: "Family Tablet",
      type: "tablet",
      lastActive: "Yesterday",
      status: "offline",
      isLocked: true,
    },
  ]);

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "laptop":
        return Laptop;
      case "phone":
        return Smartphone;
      case "tablet":
        return Tablet;
      default:
        return Laptop;
    }
  };

  const toggleLock = (deviceId: number) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        const newLockedState = !device.isLocked;
        
        toast({
          title: newLockedState ? "Device locked" : "Device unlocked",
          description: `${device.name} has been ${newLockedState ? 'locked' : 'unlocked'}`,
        });
        
        return {
          ...device,
          isLocked: newLockedState
        };
      }
      return device;
    }));
  };

  const remoteShutdown = (deviceId: number) => {
    const device = devices.find(d => d.id === deviceId);
    
    if (device) {
      toast({
        title: "Remote shutdown initiated",
        description: `${device.name} shutdown signal sent`,
      });
      
      // In a real app, this would send a signal to the device
      setDevices(devices.map(d => {
        if (d.id === deviceId) {
          return {
            ...d,
            status: "shutdown"
          };
        }
        return d;
      }));
      
      // Simulate the device going offline after shutdown
      setTimeout(() => {
        setDevices(devices.map(d => {
          if (d.id === deviceId) {
            return {
              ...d,
              status: "offline"
            };
          }
          return d;
        }));
      }, 3000);
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold mb-6 neon-blue-text">Connected Devices</h3>
      
      <div className="space-y-4">
        {devices.map((device) => {
          const DeviceIcon = getDeviceIcon(device.type);
          
          return (
            <div key={device.id} className="p-4 bg-[#11111D] rounded-lg border border-[#2A2A3C] flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  device.status === "online" ? "bg-cyan-900/20 text-cyan-400" : "bg-gray-800 text-gray-400"
                }`}>
                  <DeviceIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">{device.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className={`h-2 w-2 rounded-full mr-2 ${
                      device.status === "online" ? "bg-green-500" : 
                      device.status === "shutdown" ? "bg-orange-500 animate-pulse" : "bg-gray-500"
                    }`}></span>
                    <span className="text-xs text-gray-400">{device.lastActive}</span>
                    {device.isLocked && (
                      <span className="ml-2 text-xs bg-yellow-900/20 text-yellow-400 px-1.5 py-0.5 rounded-full">
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => toggleLock(device.id)}
                  className="p-2 rounded-lg bg-[#1E1E2C] hover:bg-[#252536] transition-colors"
                >
                  <Lock className={`h-4 w-4 ${device.isLocked ? 'text-yellow-400' : 'text-gray-400'}`} />
                </button>
                {device.status !== "shutdown" && (
                  <button 
                    onClick={() => remoteShutdown(device.id)}
                    className="p-2 rounded-lg bg-[#1E1E2C] hover:bg-[#252536] transition-colors"
                  >
                    <PowerOff className="h-4 w-4 text-red-400" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-[#2A2A3C] flex justify-between items-center">
        <span className="text-sm text-gray-400">Last scan: 5 minutes ago</span>
        <button className="btn-blue text-sm py-1.5 px-3">Scan for New Devices</button>
      </div>
    </div>
  );
};
