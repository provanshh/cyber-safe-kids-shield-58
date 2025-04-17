
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DashboardControls } from "@/components/DashboardControls";
import { SectionHeading } from "@/components/SectionHeading";
import { DashboardPreview } from "@/components/DashboardPreview";
import { UserProfile } from "@/components/UserProfile";
import { DashboardStats } from "@/components/DashboardStats";
import { DeviceList } from "@/components/DeviceList";
import { ProtectionStatus } from "@/components/ProtectionStatus";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto mt-8">
          <SectionHeading
            title="CipherGuard Dashboard"
            subtitle="Monitor and protect your child's online activities"
            glowColor="blue"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-6">
              <UserProfile />
              <DashboardControls activeView={activeView} setActiveView={setActiveView} />
              <ProtectionStatus isActive={true} />
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              {activeView === "overview" && (
                <>
                  <DashboardStats />
                  <DashboardPreview />
                </>
              )}
              
              {activeView === "devices" && (
                <DeviceList />
              )}
              
              {activeView === "settings" && (
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 neon-blue-text">Settings</h3>
                  <p className="text-gray-400 mb-6">Configure your CipherGuard protection settings</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-[#11111D] rounded-lg">
                      <span>Notification preferences</span>
                      <div className="flex gap-2">
                        <button className="btn-blue text-sm py-1 px-3">Configure</button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-[#11111D] rounded-lg">
                      <span>Advanced protection</span>
                      <div className="flex gap-2">
                        <button className="btn-blue text-sm py-1 px-3">Enable</button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-[#11111D] rounded-lg">
                      <span>Export data</span>
                      <div className="flex gap-2">
                        <button className="btn-blue text-sm py-1 px-3">Export</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
