import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <span className="text-2xl font-bold text-black mb-6 block">B&TAX</span>
                        <div className="text-gray-500 text-sm space-y-2 leading-relaxed">
                            <p>대표 김재우 <span className="mx-2 text-gray-300">|</span> 사업자번호 220-08-36525</p>
                            <p>주소: 서울 성동구 광나루로 176 밤부성수 8층</p>
                            <p>Tel: 02-595-3680 <span className="mx-2 text-gray-300">|</span> Fax: 02-6499-3799</p>
                        </div>
                    </div>
                    <div className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} B&TAX Tax Accounting Office. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
