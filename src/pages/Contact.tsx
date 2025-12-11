import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        companyName: '',
        ceoName: '',
        phone1: '',
        phone2: '',
        phone3: '',
        path: '지인추천',
        message: '',
        agreePrivacy: false
    });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.companyName || !formData.ceoName || !formData.phone1 || !formData.phone2 || !formData.phone3) {
            alert('필수 입력 항목을 모두 확인해주세요.');
            return;
        }

        if (!formData.agreePrivacy) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

        // Create new inquiry object
        const newInquiry = {
            id: Date.now(), // timestamp as unique id
            company: formData.companyName,
            ceo: formData.ceoName,
            contact: `${formData.phone1}-${formData.phone2}-${formData.phone3}`,
            path: formData.path,
            content: formData.message.length > 50 ? formData.message.substring(0, 50) + '...' : formData.message,
            fullContent: formData.message,
            date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
        };

        // Save to localStorage
        const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        localStorage.setItem('inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

        // Notify other components (like Admin InquiryList) of the update
        window.dispatchEvent(new Event('local-storage-update'));

        setShowModal(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    return (
        <div className="bg-white font-sans">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            상담신청
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            상담 문의를 남겨주시면, 담당자가 친절히 안내드리며<br />
                            남겨주신 내용은 비밀이 보장됩니다.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50/50 p-8 md:p-12 rounded-lg">
                        {/* 회사명 */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-bold text-black mb-2">
                                회사명*
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="이름을 입력해 주세요."
                                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-black transition-colors bg-white placeholder-gray-300"
                                required
                            />
                        </div>

                        {/* 대표자명 */}
                        <div>
                            <label htmlFor="ceoName" className="block text-sm font-bold text-black mb-2">
                                대표자명*
                            </label>
                            <input
                                type="text"
                                id="ceoName"
                                name="ceoName"
                                value={formData.ceoName}
                                onChange={handleChange}
                                placeholder="이름을 입력해 주세요."
                                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-black transition-colors bg-white placeholder-gray-300"
                                required
                            />
                        </div>

                        {/* 연락처 */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">
                                연락처*
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="tel"
                                    name="phone1"
                                    value={formData.phone1}
                                    onChange={handleChange}
                                    maxLength={3}
                                    className="flex-1 px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-black transition-colors text-center bg-white placeholder-gray-300"
                                    placeholder="010"
                                    required
                                />
                                <span className="text-black">-</span>
                                <input
                                    type="tel"
                                    name="phone2"
                                    value={formData.phone2}
                                    onChange={handleChange}
                                    maxLength={4}
                                    className="flex-1 px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-black transition-colors text-center bg-white placeholder-gray-300"
                                    placeholder="0000"
                                    required
                                />
                                <span className="text-black">-</span>
                                <input
                                    type="tel"
                                    name="phone3"
                                    value={formData.phone3}
                                    onChange={handleChange}
                                    maxLength={4}
                                    className="flex-1 px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-black transition-colors text-center bg-white placeholder-gray-300"
                                    placeholder="0000"
                                    required
                                />
                            </div>
                        </div>

                        {/* 알게된 경로 */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-3">
                                알게된 경로
                            </label>
                            <div className="flex flex-wrap gap-6">
                                {['지인추천', '타사소개', '인터넷 검색', '유튜브'].map((type) => (
                                    <label key={type} className="flex items-center cursor-pointer group">
                                        <div className={`w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mr-2 group-hover:border-black ${formData.path === type ? 'border-black' : ''}`}>
                                            {formData.path === type && <div className="w-3 h-3 rounded-full bg-black" />}
                                        </div>
                                        <input
                                            type="radio"
                                            name="path"
                                            value={type}
                                            checked={formData.path === type}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="text-sm text-gray-700">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 상담 내용 */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                                상담 내용
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-black transition-colors resize-none bg-white placeholder-gray-300"
                                placeholder="상담받고 싶은 내용을 입력해 주세요."
                            />
                        </div>

                        {/* 개인정보 동의 */}
                        <div className="pt-2">
                            <label className="flex items-start cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreePrivacy"
                                    checked={formData.agreePrivacy}
                                    onChange={handleChange}
                                    className="w-5 h-5 border-gray-400 rounded sm:mt-0.5 text-black focus:ring-black"
                                    required
                                />
                                <span className="ml-3">
                                    <span className="text-sm font-bold text-black block mb-1">
                                        개인정보수집에 동의합니다.
                                    </span>
                                    <span className="text-xs text-gray-500 block leading-normal">
                                        수집항목: 회사명, 대표자명, 연락처, 알게된 경로, 상담내용 | 이용목적: 상담 응대 | 보유기간: 상담 완료 후 1년
                                    </span>
                                </span>
                            </label>
                        </div>

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            className="w-full bg-[#525252] text-white py-4 rounded-md font-bold text-base hover:bg-black transition-colors mt-8"
                        >
                            상담 신청
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send className="w-7 h-7 text-white ml-1" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                상담 신청 완료
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                담당자가 내용을 확인 후<br />
                                빠른 시일 내에 연락드리겠습니다.
                            </p>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setFormData({
                                        companyName: '',
                                        ceoName: '',
                                        phone1: '',
                                        phone2: '',
                                        phone3: '',
                                        path: '지인추천',
                                        message: '',
                                        agreePrivacy: false
                                    });
                                }}
                                className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
