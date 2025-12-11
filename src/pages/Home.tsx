import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/bntax.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" />
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="max-w-3xl">
                    <h2 className="text-white text-2xl md:text-3xl mb-4 font-medium tracking-wide">
                        믿을 수 있는 파트너
                    </h2>
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 tracking-tight">
                        가현 세무법인 성수점
                    </h1>

                    <p className="text-white text-lg md:text-xl mb-16 leading-relaxed opacity-90">
                        고객의 상황을 이해하는 맞춤형 세무 서비스<br />
                        B&TAX에서 시작하세요.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-8 py-4 border border-white text-white text-lg font-medium rounded hover:bg-white/10 transition-colors"
                        >
                            상담 신청하기
                        </Link>
                        <a
                            href="https://www.youtube.com/@%EC%84%B8%EA%B8%88%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%EC%9E%AC%EC%9A%B0%ED%98%95"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-8 py-4 border border-white text-white text-lg font-medium rounded hover:bg-white/10 transition-colors"
                        >
                            유튜브 보러가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
