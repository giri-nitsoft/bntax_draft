import React from 'react';
import { Users, TrendingUp, RefreshCw, Star } from 'lucide-react';

export default function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                        이커머스 특화<br />세무 서비스 B&TAX
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        온라인 판매의 복잡한 세무, 전문가에게 맡기세요
                    </p>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        쇼핑몰·이커머스 사업자의 고민
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-4">자사몰 운영</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                카페24, 고도몰 매출과 PG 정산을 어떻게 정리해야 할지 막막해요.
                            </p>
                            <p className="text-black font-semibold leading-relaxed">
                                "플랫폼별 정산 내역을 자동으로 통합 정리해드립니다"
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-4">쿠팡·네이버 입점</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                플랫폼별 정산 내역이 달라서 매출 파악이 어려워요.
                            </p>
                            <p className="text-black font-semibold leading-relaxed">
                                "여러 플랫폼 매출을 한눈에 볼 수 있게 정리해드립니다"
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-4">해외 판매·직구</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                관세와 부가세 처리가 복잡해서 헷갈려요.
                            </p>
                            <p className="text-black font-semibold leading-relaxed">
                                "해외 거래 세무 처리를 명확하게 설명하고 대행해드립니다"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Stats */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <Users className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">500+</div>
                            <div className="text-gray-600">이커머스 고객사</div>
                        </div>
                        <div className="p-6">
                            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">1,200만원</div>
                            <div className="text-gray-600">평균 절세혜택</div>
                        </div>
                        <div className="p-6">
                            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">98%</div>
                            <div className="text-gray-600">재계약률</div>
                        </div>
                        <div className="p-6">
                            <Star className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">4.9/5.0</div>
                            <div className="text-gray-600">고객 만족도</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        쇼핑몰·이커머스 사업자 후기
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "카페24 자사몰과 PG 정산을 깔끔하게 정리해주셔서 세금 신고가 수월해졌어요."
                            </p>
                            <div className="text-sm font-semibold text-black">자사몰 운영 P대표</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "쿠팡, 네이버 스마트스토어 정산을 한 번에 처리해주셔서 너무 편해요."
                            </p>
                            <div className="text-sm font-semibold text-black">쿠팡 셀러 K대표</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "해외 직구 세금 처리가 복잡했는데, 명확하게 설명해주시고 처리해주셨어요."
                            </p>
                            <div className="text-sm font-semibold text-black">직구몰 운영 L대표</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-600">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        B&TAX가 운영하는 유튜브
                    </h2>
                    <p className="text-gray-200 mb-6 text-lg">
                        쇼핑몰·이커머스 세무 노하우와 절세 팁을 무료로 확인하세요
                    </p>
                    <a
                        href="https://www.youtube.com/@%EC%84%B8%EA%B8%88%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%EC%9E%AC%EC%9A%B0%ED%98%95"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        유튜브 보러가기
                    </a>
                </div>
            </section>
        </div>
    );
}
