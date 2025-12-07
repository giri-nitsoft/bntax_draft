import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        customerType: '개인사업자',
        message: '',
        agreePrivacy: false
    });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone) {
            alert('이름과 연락처는 필수 입력 항목입니다.');
            return;
        }

        if (!formData.agreePrivacy) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

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
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
                        상담 신청
                    </h1>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        궁금하신 점을 남겨주시면<br />
                        영업일 기준 당일~다음 날 연락드리겠습니다
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* 이름 */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                                이름 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                placeholder="이름을 입력해주세요"
                                required
                            />
                        </div>

                        {/* 연락처 */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                                연락처 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                placeholder="010-0000-0000"
                                required
                            />
                        </div>

                        {/* 고객유형 */}
                        <div>
                            <label className="block text-sm font-semibold text-black mb-3">
                                고객유형
                            </label>
                            <div className="flex flex-wrap gap-4">
                                {['개인사업자', '법인사업자', '비사업자'].map((type) => (
                                    <label key={type} className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="customerType"
                                            value={type}
                                            checked={formData.customerType === type}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-black focus:ring-black"
                                        />
                                        <span className="ml-2 text-gray-700">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 상담 내용 */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                                상담 내용
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                                placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요"
                            />
                        </div>

                        {/* 개인정보 동의 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <label className="flex items-start cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreePrivacy"
                                    checked={formData.agreePrivacy}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-black focus:ring-black mt-0.5 flex-shrink-0"
                                    required
                                />
                                <span className="ml-3 text-sm text-gray-700 leading-relaxed">
                                    개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                                    <br />
                                    <span className="text-xs text-gray-500">
                                        수집항목: 이름, 연락처, 고객유형, 상담내용 | 이용목적: 상담 응대 | 보유기간: 상담 완료 후 1년
                                    </span>
                                </span>
                            </label>
                        </div>

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            상담 신청
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                감사합니다
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                영업일 기준 당일~다음 날<br />
                                연락드리겠습니다.
                            </p>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setFormData({
                                        name: '',
                                        phone: '',
                                        customerType: '개인사업자',
                                        message: '',
                                        agreePrivacy: false
                                    });
                                }}
                                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
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
