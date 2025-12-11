import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

// Mock Data for demo purposes
const MOCK_DATA = Array.from({ length: 5 }).map((_, i) => ({
    id: 100 - i,
    company: ['삼성', 'LG', 'NAVER', '당근', '쿠팡'][i],
    ceo: ['이재용', '구광모', '최수연', '정재겸', '박대준'][i],
    contact: '010-1234-5678',
    path: ['지인추천', '지인추천', '지인추천', '유튜브', '유튜브'][i],
    content: '개인사업자(또는 프리랜서) 종합소득세 신고를 준비하고 있는데...',
    fullContent: '개인사업자(또는 프리랜서) 종합소득세 신고를 준비하고 있는데, 제가 어떤 공제 항목을 챙기고 어떻게 하면 합법적으로 세금을 줄일 수 있을지 상담받고 싶습니다.',
    date: '2025-12-11'
}));

export default function InquiryList() {
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    React.useEffect(() => {
        const loadData = () => {
            const localData = JSON.parse(localStorage.getItem('inquiries') || '[]');
            setInquiries([...localData, ...MOCK_DATA]);
        };

        loadData();
        window.addEventListener('storage', loadData);
        window.addEventListener('local-storage-update', loadData);

        return () => {
            window.removeEventListener('storage', loadData);
            window.removeEventListener('local-storage-update', loadData);
        };
    }, []);

    // Pagination Logic
    const totalItems = inquiries.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = inquiries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="h-full flex flex-col">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-medium">전체 {totalItems}건</span>
                <div className="relative w-96">
                    <input
                        type="text"
                        placeholder="검색어를 입력해 주세요."
                        className="w-full bg-transparent border border-gray-400 rounded-lg py-3 px-4 focus:outline-none"
                    />
                    <Search className="absolute right-4 top-3.5 text-gray-500 w-5 h-5" />
                </div>
            </div>

            {/* Table */}
            <div className="flex-grow bg-[#D9D9D9] bg-opacity-30 rounded-t-lg overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-[#D9D9D9] border-b border-black">
                        <tr>
                            <th className="py-4 px-6 font-bold text-center w-20">No</th>
                            <th className="py-4 px-6 font-bold text-center w-32">회사명</th>
                            <th className="py-4 px-6 font-bold text-center w-32">대표자명</th>
                            <th className="py-4 px-6 font-bold text-center w-40">연락처</th>
                            <th className="py-4 px-6 font-bold text-center w-32">알게된 경로</th>
                            <th className="py-4 px-6 font-bold text-start">상담내용</th>
                            <th className="py-4 px-6 font-bold text-center w-32">접수일</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {currentItems.map((item, index) => (
                            <tr
                                key={item.id || index}
                                onClick={() => setSelectedInquiry(item)}
                                className="hover:bg-black/5 cursor-pointer transition-colors"
                            >
                                <td className="py-4 px-6 text-center font-bold">
                                    {totalItems - startIndex - index}
                                </td>
                                <td className="py-4 px-6 text-center font-bold">{item.company}</td>
                                <td className="py-4 px-6 text-center font-bold">{item.ceo}</td>
                                <td className="py-4 px-6 text-center font-bold">{item.contact}</td>
                                <td className="py-4 px-6 text-center font-bold">{item.path}</td>
                                <td className="py-4 px-6 font-bold truncate max-w-md">{item.content}</td>
                                <td className="py-4 px-6 text-center font-bold">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 0 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded hover:bg-black/5 font-medium transition-colors ${currentPage === page ? 'bg-black text-white hover:bg-black/90' : 'text-gray-600'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}

            {/* Detail Modal */}
            {selectedInquiry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-lg w-[800px] max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedInquiry(null)}
                            className="absolute top-0 right-0 bg-black text-white p-3 hover:bg-gray-800 transition-colors rounded-bl-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-10 pt-16 space-y-8">
                            {/* 회사명 / 대표자명 */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold block">회사명</label>
                                    <input
                                        type="text"
                                        readOnly
                                        value={selectedInquiry.company}
                                        className="w-full border border-black rounded p-3 bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold block">대표자명</label>
                                    <input
                                        type="text"
                                        readOnly
                                        value={selectedInquiry.ceo}
                                        className="w-full border border-black rounded p-3 bg-white"
                                    />
                                </div>
                            </div>

                            {/* 연락처 */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold block">연락처</label>
                                <div className="flex items-center gap-2">
                                    <input type="text" value={selectedInquiry.contact?.split('-')[0] || ''} readOnly className="w-full border border-black rounded p-3 text-center bg-white" />
                                    <span>-</span>
                                    <input type="text" value={selectedInquiry.contact?.split('-')[1] || ''} readOnly className="w-full border border-black rounded p-3 text-center bg-white" />
                                    <span>-</span>
                                    <input type="text" value={selectedInquiry.contact?.split('-')[2] || ''} readOnly className="w-full border border-black rounded p-3 text-center bg-white" />
                                </div>
                            </div>

                            {/* 알게된 경로 */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold block">알게된 경로</label>
                                <div className="flex gap-6 py-2">
                                    {['지인추천', '타사소개', '인터넷검색', '유튜브'].map((option) => (
                                        <label key={option} className="flex items-center gap-2 pointer-events-none">
                                            <div className={`w-4 h-4 rounded-full border border-black ${selectedInquiry.path === option ? 'bg-black' : 'bg-white'}`} />
                                            <span className="text-sm">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 상담 내용 */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold block">상담 내용</label>
                                <textarea
                                    readOnly
                                    value={selectedInquiry.fullContent}
                                    className="w-full border border-black rounded p-4 h-48 resize-none bg-white leading-relaxed font-medium"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
