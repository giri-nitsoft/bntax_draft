import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
                        aria-label="메뉴 열기"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-black">
                        가현 세무법인 성수점
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10">

                        <Link to="/location" className="text-gray-600 hover:text-black font-medium transition-colors">
                            찾아오시는길
                        </Link>
                        <Link to="/careers" className="text-gray-600 hover:text-black font-medium transition-colors">
                            인재채용
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="bg-black text-white px-4 md:px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                        <span className="hidden sm:inline">상담 신청하기</span>
                        <span className="sm:hidden">상담</span>
                    </Link>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xl font-bold text-black">메뉴</span>
                    <button
                        onClick={closeMenu}
                        className="p-2 text-gray-600 hover:text-black transition-colors"
                        aria-label="메뉴 닫기"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-black font-medium transition-colors py-2"
                        onClick={closeMenu}
                    >
                        홈
                    </Link>

                    <Link
                        to="/location"
                        className="text-gray-600 hover:text-black font-medium transition-colors py-2"
                        onClick={closeMenu}
                    >
                        찾아오시는길
                    </Link>
                    <Link
                        to="/careers"
                        className="text-gray-600 hover:text-black font-medium transition-colors py-2"
                        onClick={closeMenu}
                    >
                        인재채용
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-600 hover:text-black font-medium transition-colors py-2"
                        onClick={closeMenu}
                    >
                        상담 신청하기
                    </Link>
                </nav>
            </div>
        </>
    );
}
