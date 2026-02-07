import React from 'react';

export const OnlineChatCard: React.FC = () => {
    return (
        <div
            className="relative overflow-hidden rounded-[24px] shadow-2xl cursor-pointer group hover:brightness-110 transition-all duration-300"
            style={{
                width: '320px',
                height: '161px',
                background: '#7700FF',
            }}
        >
            {/* Background Image: Hall/City */}
            <img
                src="/figmaAssets/hall1.png"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                alt=""
            />

            {/* Dark Top-Left Gradient Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex items-start gap-4">
                    {/* 3D Chat Icon */}
                    <img
                        src="/figmaAssets/image-183.png"
                        className="w-16 h-16 object-contain drop-shadow-xl"
                        alt="Chat Icon"
                    />

                    {/* Title */}
                    <div className="flex flex-col mt-2">
                        <h2 className="text-white font-[900] text-[28px] leading-[0.9] uppercase tracking-tighter select-none">
                            ONLINE<br />CHAT
                        </h2>
                    </div>
                </div>

                {/* Users Online Badge */}
                <div className="bg-black/30 backdrop-blur-md border border-white/5 rounded-2xl w-fit px-4 py-2.5 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#A6D947" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#A6D947" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2524 22.1614 16.5523C21.6184 15.8522 20.8581 15.3516 20 15.13" stroke="#A6D947" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#A6D947" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white font-[900] text-xl tracking-tighter">544</span>
                </div>
            </div>

            {/* Fox Mascot (mob.png) */}
            <img
                src="/figmaAssets/mob.png"
                className="absolute object-contain z-20 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                style={{
                    width: '265px',
                    height: '161px',
                    top: '10px',
                    left: '76px',
                    opacity: 1,
                    transform: 'rotate(0deg)'
                }}
                alt="Mascot"
            />
        </div>
    );
};
