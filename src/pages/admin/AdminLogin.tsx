import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export default function AdminLogin() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Auto-redirect if already logged in
    React.useEffect(() => {
        const tokenString = localStorage.getItem('adminToken');
        if (tokenString) {
            try {
                const token = JSON.parse(tokenString);
                if (token.value === 'logged-in' && token.expiry > new Date().getTime()) {
                    navigate('/admin/inquiries');
                }
            } catch (e) {
                // Invalid token, stay on login page
                localStorage.removeItem('adminToken');
            }
        }
    }, [navigate]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock login check based on image hint
        if (id.trim() === 'super_admin' && password === 'b&tax') {
            const tokenData = {
                value: 'logged-in',
                expiry: new Date().getTime() + 60 * 60 * 1000 // 1 hour
            };
            localStorage.setItem('adminToken', JSON.stringify(tokenData));
            alert('로그인되었습니다.');
            navigate('/admin/inquiries');
        } else {
            setError('아이디 또는 비밀번호를 확인해주세요.');
            alert('아이디 또는 비밀번호를 확인해주세요.');
        }
    };

    const clearId = () => setId('');
    const clearPw = () => setPassword('');

    return (
        <div className="min-h-screen bg-[#E5E5E5] flex flex-col items-center justify-center font-sans">


            <div className="bg-white rounded-xl shadow-lg p-12 w-[600px]">
                <form onSubmit={handleLogin} className="space-y-8">
                    {/* ID Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-800">ID</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="아이디를 입력해 주세요"
                                className="w-full border-b-2 border-black py-2 focus:outline-none placeholder-gray-300 text-sm"
                            />
                            {id && (
                                <button type="button" onClick={clearId} className="absolute right-0 top-2 text-gray-400">
                                    <X className="w-4 h-4 bg-gray-200 rounded-full p-0.5 text-white" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* PW Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-800">PASSWORD</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호를 입력해 주세요"
                                className="w-full border-b-2 border-black py-2 focus:outline-none placeholder-gray-300 text-sm"
                            />
                            {password && (
                                <button type="button" onClick={clearPw} className="absolute right-0 top-2 text-gray-400">
                                    <X className="w-4 h-4 bg-gray-200 rounded-full p-0.5 text-white" />
                                </button>
                            )}
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors mt-8"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}
