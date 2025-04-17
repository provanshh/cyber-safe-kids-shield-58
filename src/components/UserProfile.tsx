
import { User } from "lucide-react";

export const UserProfile = () => {
  return (
    <div className="glass-card p-4">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-[#1E1E2C] flex items-center justify-center border border-[#2A2A3C]">
          <User className="h-6 w-6 text-cipher-blue" />
        </div>
        <div>
          <h3 className="font-medium neon-blue-text">Parent Account</h3>
          <p className="text-sm text-gray-400">Sarah Johnson</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-[#2A2A3C]">
        <h4 className="text-sm font-medium mb-2">Monitored Profiles</h4>
        <div className="flex items-center space-x-2 p-2 bg-[#1E1E2C] rounded">
          <div className="h-8 w-8 rounded-full bg-cipher-purple/20 flex items-center justify-center">
            <span className="text-xs text-white">E</span>
          </div>
          <span className="text-sm">Emma</span>
        </div>
      </div>
    </div>
  );
};
