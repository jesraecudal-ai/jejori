import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';


export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#0B0B0B]">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-[#D4AF37]/30" style={{fontFamily: "'Cormorant Garamond', serif"}}>404</h1>
                        <div className="h-0.5 w-16 bg-[#D4AF37]/20 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-[#F2F2F2]" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                            Lost in the Night
                        </h2>
                        <p className="text-[#F2F2F2]/50 leading-relaxed text-sm">
                            This page seems to have slipped into the shadows.
                        </p>
                    </div>
                    
                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="mt-8 p-4 bg-[#1a1a1a] rounded-lg border border-[#D4AF37]/15">
                            <p className="text-sm text-[#F2F2F2]/50">
                                Admin: This page hasn't been implemented yet.
                            </p>
                        </div>
                    )}
                    
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold tracking-widest uppercase text-[#0B0B0B] bg-[#D4AF37] rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}