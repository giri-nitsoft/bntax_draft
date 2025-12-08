import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone1: '',
        phone2: '',
        phone3: '',
        customerType: '개인사업자',
        message: '',
        agreePrivacy: false
    });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone1 || !formData.phone2 || !formData.phone3) {
            alert('이름, 이메일, 연락처는 필수 입력 항목입니다.');
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

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* 이름 */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                이름 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                required
                            />
                        </div>

                        {/* 이메일 */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                이메일 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                required
                            />
                        </div>

                        {/* 연락처 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                연락처 <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="tel"
                                    name="phone1"
                                    value={formData.phone1}
                                    onChange={handleChange}
                                    maxLength={3}
                                    className="w-20 px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors text-center"
                                    placeholder="010"
                                    required
                                />
                                <span className="text-gray-500">-</span>
                                <input
                                    type="tel"
                                    name="phone2"
                                    value={formData.phone2}
                                    onChange={handleChange}
                                    maxLength={4}
                                    className="w-24 px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors text-center"
                                    placeholder="0000"
                                    required
                                />
                                <span className="text-gray-500">-</span>
                                <input
                                    type="tel"
                                    name="phone3"
                                    value={formData.phone3}
                                    onChange={handleChange}
                                    maxLength={4}
                                    className="w-24 px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors text-center"
                                    placeholder="0000"
                                    required
                                />
                            </div>
                        </div>

                        {/* 고객유형 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                고객유형
                            </label>
                            <div className="flex items-center gap-6">
                                {['개인사업자', '법인사업자', '비사업자'].map((type) => (
                                    <label key={type} className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="customerType"
                                            value={type}
                                            checked={formData.customerType === type}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-black focus:ring-black border-gray-300"
                                        />
                                        <span className="ml-2 text-gray-700">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 상담받고 싶은 내용 */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                상담받고 싶은 내용
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                                placeholder=""
                            />
                        </div>

                        {/* 개인정보 동의 */}
                        <div className="pt-4">
                            <label className="flex items-start cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreePrivacy"
                                    checked={formData.agreePrivacy}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-black focus:ring-black mt-1 flex-shrink-0 border-gray-300"
                                    required
                                />
                                <span className="ml-3 text-sm text-gray-600 leading-relaxed">
                                    개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                                    <br />
                                    <span className="text-xs text-gray-400 mt-1 block">
                                        수집항목: 이름, 이메일, 연락처, 고객유형, 상담내용 | 이용목적: 상담 응대 | 보유기간: 상담 완료 후 1년
                                    </span>
                                </span>
                            </label>
                        </div>

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-4 font-semibold text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-8"
                        >
                            <Send className="w-5 h-5" />
                            상담 신청하기
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
                                        email: '',
                                        phone1: '',
                                        phone2: '',
                                        phone3: '',
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
