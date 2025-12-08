import React from 'react';
import { BookOpen, FileText, Lightbulb, Scale, Users, MessageCircle, Sparkles } from 'lucide-react';

export default function Services() {
    return (
        <div className="bg-white">
            {/* Philosophy Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                        서비스 소개
                    </h1>
                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                현장을 가장 잘 아는<br />세무파트너
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                업종별 특성을 깊이 이해하고<br />
                                실무 경험을 바탕으로<br />
                                최적의 솔루션을 제공합니다
                            </p>
                        </div>
                        <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                무엇이든<br />물어보세요
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                작은 질문도 환영합니다<br />
                                언제든 편하게 문의하시면<br />
                                친절하게 답변드립니다
                            </p>
                        </div>
                        <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">
                                먼저<br />제안해드려요
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                놓치기 쉬운 절세 기회를<br />
                                미리 찾아서 알려드리고<br />
                                최선의 방법을 제시합니다
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        주요 서비스
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-lg p-10 hover:shadow-xl transition-shadow">
                            <BookOpen className="w-12 h-12 text-black mb-6" />
                            <h3 className="text-2xl font-bold text-black mb-4">기장대리</h3>
                            <p className="text-gray-600 leading-relaxed">
                                매출·지출 장부를 전문가가 대신 기록하고 관리합니다.
                                복잡한 회계 업무에서 벗어나 본업에 집중하실 수 있도록 도와드립니다.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-10 hover:shadow-xl transition-shadow">
                            <FileText className="w-12 h-12 text-black mb-6" />
                            <h3 className="text-2xl font-bold text-black mb-4">신고대리</h3>
                            <p className="text-gray-600 leading-relaxed">
                                세금 신고 서류 준비부터 제출까지 대행합니다.
                                정확한 신고로 불이익을 방지하고, 기한 내 완벽하게 처리해드립니다.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-10 hover:shadow-xl transition-shadow">
                            <Scale className="w-12 h-12 text-black mb-6" />
                            <h3 className="text-2xl font-bold text-black mb-4">조세불복</h3>
                            <p className="text-gray-600 leading-relaxed">
                                억울한 세금 고지서에 대한 이의신청 및 심판청구를 대리합니다.
                                정당한 권리를 찾을 수 있도록 전문적으로 지원합니다.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-10 hover:shadow-xl transition-shadow">
                            <Lightbulb className="w-12 h-12 text-black mb-6" />
                            <h3 className="text-2xl font-bold text-black mb-4">세무컨설팅</h3>
                            <p className="text-gray-600 leading-relaxed">
                                사업 현황 분석 및 절세 전략, 맞춤형 재무 관리를 제공합니다.
                                장기적인 관점에서 사업 성장을 함께 설계합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
