
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Shield, Clock, Activity, Search, Users, Bell, Eye } from "lucide-react";

export const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState("parent");

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <Tabs defaultValue="parent" onValueChange={setActiveTab}>
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="parent">Parent Dashboard</TabsTrigger>
            <TabsTrigger value="child">Child View</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="parent" className="p-0">
          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="dashboard-card col-span-3 md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Activity Overview</h3>
                <span className="text-xs text-cipher-gray">Today</span>
              </div>
              <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
                <Activity className="h-8 w-8 text-cipher-purple opacity-50" />
              </div>
            </div>
            
            <div className="dashboard-card col-span-3 md:col-span-1">
              <h3 className="font-semibold mb-3">Alerts</h3>
              <div className="space-y-3">
                <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-start">
                  <Bell className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Attempted access to blocked site</span>
                </div>
                <div className="bg-yellow-50 text-yellow-700 p-3 rounded-lg text-sm flex items-start">
                  <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Screen time limit approaching</span>
                </div>
              </div>
            </div>
            
            <div className="dashboard-card col-span-3 md:col-span-1">
              <h3 className="font-semibold mb-3">Recent Searches</h3>
              <div className="space-y-2">
                <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                  <Search className="h-4 w-4 text-cipher-gray mr-2" />
                  <span className="text-sm truncate">how to do math homework</span>
                </div>
                <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                  <Search className="h-4 w-4 text-cipher-gray mr-2" />
                  <span className="text-sm truncate">science project ideas</span>
                </div>
              </div>
            </div>
            
            <div className="dashboard-card col-span-3 md:col-span-1">
              <h3 className="font-semibold mb-3">Time Management</h3>
              <div className="space-y-2">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Today's usage</span>
                    <span className="text-xs">3h 24m</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cipher-blue h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Daily limit</span>
                    <span className="text-xs">5h 00m</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="dashboard-card col-span-3 md:col-span-1">
              <h3 className="font-semibold mb-3">Website Categories</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                  <span className="text-sm">Education</span>
                  <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">Allowed</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                  <span className="text-sm">Gaming</span>
                  <span className="text-xs bg-red-100 text-red-800 py-0.5 px-2 rounded-full">Blocked</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
                  <span className="text-sm">Social Media</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">Limited</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="child" className="p-0">
          <div className="p-4 md:p-6 flex flex-col items-center">
            <div className="max-w-md w-full">
              <div className="flex items-center justify-center flex-col mb-6">
                <Shield className="h-12 w-12 text-cipher-purple mb-2" />
                <h3 className="text-lg font-semibold">CipherGuard is protecting you</h3>
                <p className="text-sm text-center text-cipher-gray">We're making sure you stay safe online</p>
              </div>
              
              <div className="dashboard-card mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-cipher-purple mr-3" />
                    <div>
                      <h4 className="font-medium">Screen Time</h4>
                      <p className="text-xs text-cipher-gray">3h 24m remaining today</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-xs font-medium">68%</span>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-card">
                <div className="flex items-center mb-3">
                  <Eye className="h-5 w-5 text-cipher-purple mr-3" />
                  <h4 className="font-medium">Protected from:</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 p-2 rounded-lg flex items-center text-sm">
                    <Lock className="h-4 w-4 text-cipher-gray mr-2" />
                    <span>Harmful content</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg flex items-center text-sm">
                    <Users className="h-4 w-4 text-cipher-gray mr-2" />
                    <span>Cyberbullying</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
