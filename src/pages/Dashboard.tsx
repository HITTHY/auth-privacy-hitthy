import React from 'react';
import { Shield, Settings, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Privacy Status</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Data Encryption</span>
                <span className="text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Blockchain Verification</span>
                <span className="text-green-600">Connected</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Privacy Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Public Profile</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Data Sharing</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-gray-600">Authentication request from dApp</p>
                <p className="text-sm text-gray-400">2 minutes ago</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-gray-600">Privacy settings updated</p>
                <p className="text-sm text-gray-400">1 hour ago</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-gray-600">New device connected</p>
                <p className="text-sm text-gray-400">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;