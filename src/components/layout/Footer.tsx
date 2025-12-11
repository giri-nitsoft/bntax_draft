import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Footer() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <footer className="bg-white border-t border-gray-100">
            <div
                className="w-full py-3 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="text-xs text-gray-500 mr-2 font-medium">가현 세무법인 성수점 사업자 정보</span>
                {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
            </div>

            {isExpanded && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="flex flex-col md:flex-row justify-between items-start text-sm text-gray-500 leading-relaxed">
                        <div className="space-y-1 mb-8 md:mb-0">
                            <p>대표 : 김재우</p>
                            <p>사업자등록번호 : 220-08-36525</p>
                            <div className="flex gap-4">
                                <span>개인정보처리방침</span>
                                <span>이메일무단수집거부</span>
                            </div>
                            <p className="mt-4 text-xs text-gray-400">ⓒ 2025. 가현 세무법인 성수점. All Rights Reserved.</p>
                        </div>
                        <div className="md:text-right space-y-1">
                            <p>주소 : 서울 성동구 광나루로 176 (성수동1가) 밤부성수 8층</p>
                            <p>Tel : 02-595-3680 <span className="mx-2">|</span> Fax : 02-6499-3799</p>
                            <p>이메일 : email@email.em</p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
