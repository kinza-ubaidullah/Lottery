import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRecoverPassword?: () => void;
    initialTab?: "login" | "register";
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onRecoverPassword, initialTab = "register" }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* 
                Main Content Container:
                - Transparent background to show 'Child Cards' separation
                - Responsive Max width: Tighter margins on mobile (calc(100%-16px))
                - Scrolling enabled for small screens
            */}
            <DialogContent className="max-w-[calc(100%-16px)] sm:max-w-[620px] p-0 bg-transparent border-none overflow-y-auto custom-scrollbar max-h-[85vh] focus:outline-none shadow-none block">

                <div className="flex flex-col gap-3 w-full pb-6">

                    {/* 
                        Child Card 1: Banner Section
                        - Height optimized for mobile (140px) vs tablet/desktop (250px)
                    */}
                    <div className="relative w-full h-[140px] sm:h-[250px] overflow-hidden rounded-[24px] shrink-0"
                        style={{ background: "linear-gradient(135deg, #A4D41C 0%, #8FB818 100%)" }}>

                        {/* High-fidelity pattern overlay */}
                        <div className="absolute inset-0 opacity-[0.15] z-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40c0-22.09 17.91-40 40-40S40 17.91 40 40 22.09 0 0 0s17.91 17.91 17.91 40-17.91 40-40 40 40-17.91 40-40-17.91 40-40 40' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            backgroundSize: '110px 110px'
                        }} />

                        {/* Top Edge Soft Gradient */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

                        {/* Floating Assets - Scaled for mobile */}
                        <img src="/figmaAssets/money1.png" className="absolute left-[5%] top-[5%] w-12 sm:w-24 opacity-40 rotate-[15deg] blur-[0.2px]" alt="" />
                        <img src="/figmaAssets/money1.png" className="absolute left-[2%] bottom-[5%] w-16 sm:w-36 opacity-30 rotate-[-10deg]" alt="" />
                        <img src="/figmaAssets/image-193-1.png" className="absolute right-[5%] top-[10%] w-10 sm:w-20 opacity-80 rotate-12 drop-shadow-xl" alt="" />

                        {/* Main Banner Graphic */}
                        <div className="absolute right-[-4%] top-[20%] sm:top-[30%] h-[110%] sm:h-[115%] w-auto z-20 pointer-events-none">
                            <img
                                src="/figmaAssets/banner.png"
                                className="h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                                alt="Fox Avatar"
                            />
                        </div>

                        {/* Banner Typography - Adjusted padding/size for mobile */}
                        <div className="relative z-30 px-5 sm:px-10 h-full flex flex-col justify-center items-start">
                            <div className="bg-[#4D611D]/85 backdrop-blur-md px-3 py-1 sm:px-5 sm:py-1.5 rounded-full mb-2 sm:mb-4 border border-white/10 shadow-lg">
                                <span className="text-white text-[9px] sm:text-[12px] font-black uppercase tracking-[0.18em] font-['Outfit']">Get Started</span>
                            </div>

                            <div className="flex flex-col space-y-0">
                                <h2 className="text-white text-[24px] sm:text-[46px] font-[950] font-['Montserrat'] leading-[0.82] uppercase tracking-[-0.04em] drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                                    In Seconds
                                </h2>
                                <h2 className="text-white text-[24px] sm:text-[46px] font-[950] font-['Montserrat'] leading-[0.82] uppercase tracking-[-0.04em] drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                                    SignUp &
                                </h2>
                                <h2 className="text-white text-[24px] sm:text-[46px] font-[950] font-['Montserrat'] leading-[0.82] uppercase tracking-[-0.04em] drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                                    Play Fast
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* 
                        Child Card 2: Form Section
                    */}
                    <div className="w-full bg-[#0F1419] rounded-[24px] overflow-hidden shadow-xl border border-white/5">
                        <div className="px-5 py-6 sm:px-12 sm:py-8 flex flex-col gap-5 sm:gap-6">

                            {/* Form Header */}
                            <div className="flex items-center justify-between">
                                <DialogTitle className="text-white text-[24px] sm:text-[36px] font-bold font-['Montserrat'] tracking-tight">
                                    Sign up
                                </DialogTitle>
                            </div>

                            {/* Tabs - Height adjusted for mobile */}
                            <Tabs defaultValue={initialTab} className="w-full" key={initialTab}>
                                <TabsList className="bg-transparent w-full p-0 h-[45px] sm:h-[60px] border-b border-white/5 grid grid-cols-2 gap-0">
                                    <TabsTrigger
                                        value="login"
                                        className="relative flex items-center justify-center h-full rounded-none font-semibold font-['Outfit'] text-[13px] sm:text-[18px] transition-all bg-transparent data-[state=active]:bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.4)_100%)] data-[state=active]:text-white text-[#525D68] border-none overflow-visible"
                                    >
                                        <span>I have account</span>
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BDFF25] opacity-0 data-[state=active]:opacity-100 transition-opacity z-10" />
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="register"
                                        className="relative flex items-center justify-center h-full rounded-none font-semibold font-['Outfit'] text-[13px] sm:text-[18px] transition-all bg-transparent data-[state=active]:bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.4)_100%)] data-[state=active]:text-white text-[#525D68] border-none overflow-visible"
                                    >
                                        <span>Register account</span>
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BDFF25] opacity-0 data-[state=active]:opacity-100 transition-opacity z-10" />
                                    </TabsTrigger>
                                </TabsList>


                                <TabsContent value="register" className="mt-0">
                                    <div className="flex flex-col gap-4 sm:gap-6 pt-2">
                                        <div className="space-y-2">
                                            <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">E-mail</label>
                                            <Input
                                                placeholder="Enter e-mail"
                                                className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">First name</label>
                                                <Input
                                                    placeholder="Enter name"
                                                    className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">Last name</label>
                                                <Input
                                                    placeholder="Enter name"
                                                    className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">Password</label>
                                            <Input
                                                type="password"
                                                placeholder="Enter here"
                                                className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">Repeat password</label>
                                            <Input
                                                type="password"
                                                placeholder="Enter here"
                                                className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                            />
                                        </div>

                                        {/* Verification Code */}
                                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4 sm:gap-6 items-end pt-2">
                                            <div className="bg-[#1A2128] rounded-[12px] h-12 sm:h-16 flex items-center justify-center shadow-inner border border-white/5 overflow-hidden">
                                                <span className="text-white font-bold text-lg sm:text-2xl select-none tracking-[0.2em] italic opacity-60" style={{ fontFamily: 'monospace' }}>cant</span>
                                            </div>
                                            <Input
                                                placeholder="Enter code"
                                                className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                            />
                                        </div>

                                        <Button
                                            className="w-full h-14 sm:h-20 bg-[linear-gradient(180deg,#FF6F3F_0%,#FF4B0F_100%)] text-white font-black text-lg sm:text-2xl rounded-[16px] shadow-[0_10px_25px_rgba(255,111,63,0.4)] transition-all active:scale-[0.98] font-['Outfit'] uppercase tracking-tight mt-4 sm:mt-6"
                                        >
                                            Register account
                                        </Button>
                                    </div>
                                </TabsContent>

                                <TabsContent value="login" className="mt-0">
                                    <div className="flex flex-col gap-4 sm:gap-6 pt-2">
                                        <div className="space-y-2">
                                            <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">E-mail</label>
                                            <Input
                                                placeholder="Enter e-mail"
                                                className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[#6C7682] text-[13px] sm:text-[16px] font-medium font-['Outfit'] ml-1">Password</label>
                                            <Input
                                                type="password"
                                                placeholder="Enter here"
                                                className="bg-[#151B22] border-none h-12 sm:h-16 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#A4D41C]/30 transition-all text-[15px] sm:text-base px-5 sm:px-6 shadow-inner"
                                            />
                                        </div>

                                        <Button
                                            className="w-full h-14 sm:h-20 bg-[linear-gradient(180deg,#FF6F3F_0%,#FF4B0F_100%)] text-white font-black text-lg sm:text-2xl rounded-[16px] shadow-[0_10px_25px_rgba(255,111,63,0.4)] transition-all active:scale-[0.98] font-['Outfit'] uppercase tracking-tight mt-4 sm:mt-6"
                                        >
                                            Register
                                        </Button>

                                        <div className="flex flex-col items-center justify-center gap-1 mt-2">
                                            <span className="text-[#6C7682] text-[14px] font-medium font-['Outfit']">Can&apos;t login?</span>
                                            <span
                                                className="text-[#BDFF25] text-[14px] font-bold font-['Outfit'] cursor-pointer hover:underline"
                                                onClick={onRecoverPassword}
                                            >
                                                Recover password
                                            </span>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
