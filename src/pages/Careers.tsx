import React from 'react';
import { Check, Clock, Gift, Heart, Book, Award, Plane, Cake, Dog, Bone } from 'lucide-react';

export default function Careers() {
    const benefits = [
        {
            icon: Clock,
            title: '하루 7시간 근무',
            description: '점심 제외, 칼퇴 보장'
        },
        {
            icon: Check,
            title: '연차 25일 넉넉히',
            description: '눈치 보지 않고 자유롭게'
        },
        {
            icon: Dog,
            title: '반려동물과 출근 OK',
            description: '함께 일하는 즐거움'
        },
        {
            icon: Plane,
            title: '가족해외여행비 지원',
            description: '연 20만원'
        },
        {
            icon: Book,
            title: '자기계발비',
            description: '월 5만원'
        },
        {
            icon: Heart,
            title: '도서/문화생활 지원',
            description: '월 5만원'
        },
        {
            icon: Award,
            title: '자격증 취득 매월 수당',
            description: '전문성 향상 지원'
        },
        {
            icon: Plane,
            title: '장기근속 리프레시',
            description: '해외 항공권비 지원'
        },
        {
            icon: Cake,
            title: '생일엔 10만 축하금',
            description: '특별한 날을 기념'
        },
        {
            icon: Gift,
            title: '명절 선물 & 상품권',
            description: '따뜻한 마음 전달'
        },
        {
            icon: Check,
            title: '회식 강요 없음',
            description: '자율적인 문화'
        },
        {
            icon: Bone,
            title: '반려동물 식대지원',
            description: '사랑하는 반려동물도 같이 챙겨드려요!'
        }
    ];

    return (
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            인재채용
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            회계는 비용이 아니라, 함께 성장하는 투자입니다.
                        </p>
                    </div>

                    {/* Welfare Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-black mb-12 text-center">
                            회사 복지
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                                    >
                                        <Icon className="w-10 h-10 text-black mb-4" />
                                        <h3 className="text-lg font-bold text-black mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-lg p-12 text-center">
                        <h3 className="text-2xl font-bold text-black mb-4">
                            B&TAX와 함께 성장하세요
                        </h3>
                        <p className="text-gray-600 mb-8">
                            일과 삶의 균형을 중요하게 생각하는 문화 속에서<br />
                            전문성을 키우고 함께 발전할 수 있습니다
                        </p>
                        <a
                            href="mailto:recruit@bntax.com"
                            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                        >
                            B&TAX 지원하기
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
