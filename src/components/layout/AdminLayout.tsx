import React from 'react';
import { Outlet } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-[#E5E5E5] flex p-8 font-sans">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 flex flex-col mr-8">
                <div className="text-2xl font-bold mb-12 px-4">LOGO</div>

                <div className="bg-[#808080] text-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">문의접수내역</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col min-h-0">
                <Outlet />
            </main>
        </div>
    );
}
