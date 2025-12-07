import React from 'react';
import { MapPin, Car, Train, Bus } from 'lucide-react';

export default function Location() {
    return (
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
                        찾아오시는 길
                    </h1>

                    {/* Address */}
                    <div className="bg-gray-50 rounded-lg p-10 mb-12 text-center">
                        <MapPin className="w-12 h-12 mx-auto text-black mb-4" />
                        <h2 className="text-2xl font-bold text-black mb-4">주소</h2>
                        <p className="text-xl text-gray-700">
                            서울 성동구 광나루로 176<br />
                            밤부성수 8층
                        </p>
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

                        <div className="border border-gray-200 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <Train className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">지하철</h3>
                                    <ul className="text-gray-600 space-y-2 leading-relaxed">
                                        <li>• 2호선 뚝섬역 도보 12분</li>
                                        <li>• 수인분당선 서울숲역 도보 20분</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <Bus className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">버스</h3>
                                    <ul className="text-gray-600 space-y-2 leading-relaxed">
                                        <li>• 간선: 302</li>
                                        <li>• 지선: 2012, 2222</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 text-center bg-black text-white rounded-lg p-8">
                        <h3 className="text-xl font-bold mb-4">문의</h3>
                        <p className="text-lg">
                            Tel: 02-595-3680<br />
                            Fax: 02-6499-3799
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
