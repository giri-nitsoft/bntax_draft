import React from 'react';
import { MapPin, Car } from 'lucide-react';

export default function Location() {
    return (
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                        찾아오시는 길
                    </h1>

                    {/* Split Layout: Image/Address + Map */}
                    <div className="flex flex-col md:flex-row h-[500px] rounded-lg overflow-hidden shadow-sm mb-12">
                        {/* Left: Building Image & Address */}
                        <div className="md:w-1/3 relative group">
                            <img
                                src="/images/bambu_building.png"
                                alt="밤부성수 건물 전경"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-0 left-0 w-full bg-black p-6 text-left">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg text-white leading-snug">
                                            서울 성동구 광나루로 176,<br />
                                            밤부성수 8층
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div className="md:w-2/3 bg-gray-100 relative">
                            <iframe
                                title="가현 세무법인 성수점 위치"
                                src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EA%B4%91%EB%82%98%EB%A3%A8%EB%A1%9C%20176&t=m&z=17&output=embed&iwloc=near"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>
                    </div>

                    {/* Transport Info */}
                    <div className="space-y-6">
                        <div className="border border-gray-200 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <Car className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">주차 안내</h3>
                                    <ul className="text-gray-600 space-y-2 leading-relaxed">
                                        <li>• 지상주차: 5대 (무료)</li>
                                        <li>• 기계식 주차: 11대 (무료)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
