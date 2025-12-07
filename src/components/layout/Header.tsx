import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tight text-black">
                    B&TAX
                </Link>
                <nav className="hidden md:flex space-x-10">
                    <Link to="/services" className="text-gray-600 hover:text-black font-medium transition-colors">
                        서비스 소개
                    </Link>
                    <Link to="/location" className="text-gray-600 hover:text-black font-medium transition-colors">
                        찾아오시는 길
                    </Link>
                    <Link to="/careers" className="text-gray-600 hover:text-black font-medium transition-colors">
                        회사 복지
                    </Link>
                </nav>
                <Link
                    to="/contact"
                    className="bg-black text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                    상담 신청하기
                </Link>
            </div>
        </header>
    );
}
