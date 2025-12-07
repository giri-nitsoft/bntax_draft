import React from 'react';
import { Users, TrendingUp, RefreshCw, Star } from 'lucide-react';

export default function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                        믿을 수 있는 파트너<br />B&TAX
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        고객의 사업을 이해하는 서비스
                    </p>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        이런 고민 있으신가요?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-4">쇼핑몰</h3>
                            <p className="text-gray-600 leading-relaxed">
                                "매출이 늘어날 때마다 세금 신고·정산이 복잡해져요."
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-4">학원</h3>
                            <p className="text-gray-600 leading-relaxed">
                                "학생 관리와 회계 처리를 동시에 챙기기 어렵네요."
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-4">개인사업자</h3>
                            <p className="text-gray-600 leading-relaxed">
                                "세무 지식이 부족해 항상 불안해요."
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
                            <div className="text-4xl font-bold text-black mb-2">9,999+</div>
                            <div className="text-gray-600">누적 고객수</div>
                        </div>
                        <div className="p-6">
                            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">999만원</div>
                            <div className="text-gray-600">평균 절세혜택</div>
                        </div>
                        <div className="p-6">
                            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">9,999+</div>
                            <div className="text-gray-600">재이용 고객수</div>
                        </div>
                        <div className="p-6">
                            <Star className="w-12 h-12 mx-auto mb-4 text-black" />
                            <div className="text-4xl font-bold text-black mb-2">95점</div>
                            <div className="text-gray-600">고객 만족도</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        고객 후기
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "매출 급증으로 걱정했는데 꼼꼼하게 챙겨주셔서 안심."
                            </p>
                            <div className="text-sm font-semibold text-black">A쇼핑몰 대표</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "기한 걱정 없이 수업에만 집중할 수 있습니다."
                            </p>
                            <div className="text-sm font-semibold text-black">M학원 대표</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "신고 대리를 맡기고 나니 불안함이 사라졌습니다."
                            </p>
                            <div className="text-sm font-semibold text-black">K개인사업자</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
