
import React from 'react';
import BokehBackground from './components/BokehBackground';
import Snowfall from './components/Snowfall';
import Section from './components/Section';
import { ILLUMINATION_PALETTE } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-white">
      <BokehBackground />
      <Snowfall />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm bg-black/10">
        <div className="font-elegant text-2xl tracking-widest text-white/90">
          CHRISTMAS EVE
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-[0.2em] font-light text-white/60">
          <a href="#story" className="hover:text-white transition-colors">STORY</a>
          <a href="#colors" className="hover:text-white transition-colors">COLORS</a>
          <a href="#reserve" className="hover:text-white transition-colors">RESERVATION</a>
        </div>
      </nav>

      <main className="relative z-20">
        {/* Hero Section */}
        <Section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <div className="mb-4">
            <span className="font-elegant text-sm md:text-base tracking-[0.5em] text-white/40 uppercase">
              December 24th
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light mb-8 leading-tight tracking-wider">
            光が、夜を祝う。
            <br />
            <span className="font-elegant italic block mt-4 text-3xl md:text-5xl opacity-80">
              Christmas Eve — Colors of Light
            </span>
          </h1>
          <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
        </Section>

        {/* Story Section */}
        <Section id="story" className="py-32 px-8 max-w-4xl mx-auto text-center">
          <h2 className="font-elegant text-4xl mb-12 tracking-widest uppercase text-white/80">The Silent Night</h2>
          <div className="space-y-8 text-lg leading-loose font-light text-white/70">
            <p>一年で最も静かで、最もあたたかい夜。</p>
            <p>
              都会の喧騒が薄れ、冷たい空気の中に<br />
              宝石のような光が浮かび上がる瞬間。
            </p>
            <p>
              表参道のけやき並木や、丸の内のガス灯が<br />
              今日という特別な一日を、優しく照らし出します。
            </p>
          </div>
        </Section>

        {/* Colors Section */}
        <Section id="colors" className="py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-elegant text-3xl mb-16 text-center tracking-widest uppercase opacity-60">Palette of Celebration</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {ILLUMINATION_PALETTE.map((color, idx) => (
                <div 
                  key={color.name} 
                  className="group flex flex-col items-center text-center p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                >
                  <div 
                    className="w-16 h-16 rounded-full mb-6 blur-[8px] animate-breath"
                    style={{ backgroundColor: color.hex, boxShadow: `0 0 20px ${color.hex}` }}
                  ></div>
                  <h3 className="font-elegant text-xl mb-2 tracking-wide text-white/90">{color.name}</h3>
                  <p className="text-sm font-light text-white/50 tracking-widest">{color.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Features / Visual Section */}
        <Section className="py-32 px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-sapphire-700/20 to-emerald-500/20 blur-3xl rounded-full"></div>
                    <img 
                        src="https://picsum.photos/id/401/800/1000" 
                        alt="Night Illumination" 
                        className="relative w-full aspect-[4/5] object-cover rounded-sm grayscale-[0.3] brightness-[0.7] border border-white/10"
                    />
                </div>
                <div className="flex-1 space-y-8">
                    <h3 className="text-3xl font-light tracking-widest">静寂と、煌めきの調和。</h3>
                    <p className="text-white/60 leading-loose font-light">
                        派手な装飾ではなく、心に届く光を。
                        深いミッドナイトブルーの背景に、繊細なゴールドとシャンパンピンクが混ざり合う。
                        大人のための、洗練されたクリスマスイブをお愉しみください。
                    </p>
                    <div className="pt-4">
                        <button className="px-10 py-4 border border-white/20 font-elegant tracking-widest hover:bg-white hover:text-black transition-all duration-500 uppercase text-sm">
                            View Collection
                        </button>
                    </div>
                </div>
            </div>
        </Section>

        {/* CTA Section */}
        <Section id="reserve" className="py-48 px-8 text-center bg-black/40">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest">特別な夜の、ご予約を。</h2>
            <p className="text-white/60 font-light">
              12月24日、大切な人と過ごすかけがえのない時間。
              光の演出とともに、あなたの訪れをお待ちしております。
            </p>
            <div className="flex justify-center">
              <button className="group relative px-12 py-5 overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/40 via-[#f1dada]/40 to-[#d4af37]/40 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-px bg-slate-950 flex items-center justify-center">
                   <span className="relative font-elegant tracking-[0.3em] text-white/90 group-hover:text-white transition-colors">
                     BOOK YOUR NIGHT
                   </span>
                </div>
              </button>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-16 px-8 text-center border-t border-white/5">
            <div className="mb-8 font-elegant text-xl tracking-[0.5em] text-white/30">
                CHRISTMAS EVE 2024
            </div>
            <p className="text-[10px] tracking-[0.2em] text-white/20 uppercase">
                &copy; 2024 Colors of Light. All rights reserved.
            </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
