/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  ChefHat, 
  TrendingUp, 
  Award, 
  Users,
  ChevronRight,
  Instagram,
  Facebook,
  UtensilsCrossed
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '브랜드 스토리', href: '#story' },
    { name: '메뉴 안내', href: '#menu' },
    { name: '가맹 안내', href: '#franchise' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <UtensilsCrossed className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
            서원푸드
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-zinc-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#inquiry" className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${isScrolled ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white text-primary hover:bg-zinc-100'}`}>
            가맹 상담하기
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-zinc-900' : 'text-white'} /> : <MenuIcon className={isScrolled ? 'text-zinc-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-zinc-700 py-2 border-b border-zinc-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white py-3 rounded-xl font-bold mt-2">
              가맹 상담하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000" 
          alt="Budaejjigae background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-white text-sm font-bold mb-6 tracking-widest uppercase">
            Since 1995
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
            깊이가 다른<br />
            <span className="italic">전통의 맛,</span> 서원푸드
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            시간이 흘러도 변하지 않는 어머니의 손맛 그대로.<br />
            부대찌개의 정점을 서원푸드가 완성합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all transform hover:scale-105">
              메뉴 보러가기
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all">
              가맹 상담 센터
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
};

const StorySection = () => {
  const timelineData = [
    { year: '1995', title: '서원의 시작', desc: '의정부 작은 골목에서 시작된 진심 어린 부대찌개 한 그릇.' },
    { year: '2005', title: '맛의 완성', desc: '서원푸드만의 72시간 저온 숙성 특제 소스 개발 완료.' },
    { year: '2015', title: '프랜차이즈 확대', desc: '전국 50호점 돌파 및 맛의 표준화 시스템 구축.' },
    { year: 'Today', title: '대한민국 대표 맛', desc: '현재 전국 150여 매장에서 고객 감동을 이어가고 있습니다.' },
  ];

  return (
    <section id="story" className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Brand Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              시간이 지나도 <br />
              <span className="text-primary">변하지 않는 원칙</span>
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              서원푸드는 단순히 배를 채우는 음식이 아닌, 마음을 채우는 따뜻한 한 끼를 전합니다. 
              최고급 햄과 소시지, 신선한 야채, 그리고 서원만의 비법 육수가 만나 완성되는 
              깊고 풍부한 맛의 조화를 경험해보세요.
            </p>
            
            <div className="space-y-8 mt-12">
              {timelineData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-primary font-serif font-bold text-xl">{item.year}</div>
                    <div className="w-px h-full bg-zinc-200 mt-2 group-last:hidden" />
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000" 
                alt="Cooking process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 aspect-square bg-white p-4 rounded-2xl shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500" 
                alt="Ingredients"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <ChefHat className="text-primary w-12 h-12" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuShowcase = () => {
  const menus = [
    { name: '서원 정통 부대찌개', price: '10,000', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800', tag: 'BEST' },
    { name: '프리미엄 우삼겹 부대', price: '13,000', img: 'https://images.unsplash.com/photo-1587635212353-85b302c3495f?auto=format&fit=crop&q=80&w=800', tag: 'SIGNATURE' },
    { name: '치즈 폭탄 부대찌개', price: '11,000', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', tag: 'HIT' },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Our Menu</h2>
        <h3 className="text-4xl md:text-5xl font-serif mb-6">입맛을 사로잡는 시그니처</h3>
        <p className="text-zinc-500 max-w-2xl mx-auto">엄선된 재료와 비법 육수로 탄생한 서원의 다채로운 메뉴를 만나보세요.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {menus.map((menu, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={menu.img} 
                alt={menu.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">{menu.tag}</div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-serif mb-2">{menu.name}</h4>
              <p className="text-zinc-400 mb-6 text-sm">깊고 진한 육수와 풍성한 토핑의 완벽한 조화</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-zinc-900">₩{menu.price} <span className="text-xs font-normal text-zinc-400">/ 1인분</span></span>
                <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all">
          전체 메뉴 보기
        </button>
      </div>
    </section>
  );
};

const FranchiseSection = () => {
  const stats = [
    { icon: <TrendingUp />, value: '15.2%', label: '평균 수익율' },
    { icon: <Users />, value: '85%', label: '초보 창업자 비중' },
    { icon: <Award />, value: '98%', label: '점주 만족도' },
  ];

  return (
    <section id="franchise" className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Franchise</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              성공을 설계하는 <br />
              <span className="text-accent">파트너십</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              서원푸드는 복잡한 조리 과정을 최소화한 원-팩(One-Pack) 시스템을 통해 스페셜리스트가 없어도 
              누구나 변함없는 맛을 구현할 수 있도록 돕습니다. 당신의 성공이 곧 서원의 성공입니다.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-accent mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-accent text-zinc-900 px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              창업 가이드 다운로드
            </button>
          </motion.div>

          <div className="relative">
             <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-3xl absolute -inset-10 opacity-50" 
            />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true }}
                className="pt-12"
              >
                <img src="https://images.unsplash.com/photo-1550966841-3ee7adac1661?auto=format&fit=crop&q=80&w=500" alt="Restaurant interior" className="rounded-2xl shadow-2xl" />
              </motion.div>
              <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true }}
              >
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=500" alt="Plating" className="rounded-2xl shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  return (
    <section id="inquiry" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-zinc-100">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-primary p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif mb-6">가맹 상담 문의</h3>
                <p className="text-white/70 leading-relaxed">
                  서원푸드와 함께 성공의 길을 걷고 싶은 예비 점주님들의 연락을 기다립니다. 
                  전문 상담사가 24시간 내에 답변 드립니다.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-bold uppercase">Quick Call</div>
                    <div className="font-bold">1588-0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-bold uppercase">Working Hours</div>
                    <div className="font-bold">09:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 p-12">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 tracking-wider">성함</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 tracking-wider">연락처</label>
                    <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium" placeholder="010-0000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 tracking-wider">희망 지역</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium" placeholder="서울 강남구" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 tracking-wider">문의 상세 내용</label>
                  <textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary transition-colors font-medium" placeholder="문의하실 내용을 입력해주세요."></textarea>
                </div>
                <button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors">상담 신청하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-md">
                <UtensilsCrossed className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold text-primary">서원푸드</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              전통과 혁신이 만나는 부대찌개의 고품격 브랜드. 서원푸드는 매일 더 나은 맛과 가치를 고민합니다.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-zinc-900 uppercase tracking-widest text-xs">Menu</h5>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#story" className="hover:text-primary transition-colors">브랜드 스토리</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">메뉴 안내</a></li>
              <li><a href="#franchise" className="hover:text-primary transition-colors">가맹 안내</a></li>
              <li><a href="#inquiry" className="hover:text-primary transition-colors">상담 신청</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-zinc-900 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1588-0000</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-zinc-400" /> 서울특별시 강남구 서원빌딩 4F</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-zinc-400" /> 09:00 - 18:00 (주말 휴무)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-zinc-900 uppercase tracking-widest text-xs">Newsletter</h5>
            <p className="text-xs text-zinc-500 mb-4">새로운 소식과 이벤트 정보를 가장 먼저 받아보세요.</p>
            <div className="flex h-12">
              <input type="email" placeholder="Email Address" className="bg-zinc-50 border-y border-l border-zinc-200 rounded-l-xl px-4 flex-grow outline-none focus:bg-white transition-colors" />
              <button className="bg-primary text-white font-bold px-6 rounded-r-xl text-sm italic hover:bg-primary-dark transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-400 uppercase tracking-wide">© 2024 SEOWON FOOD CO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ValueSection = () => {
  const values = [
    { num: '01', title: '정직한 재료', desc: '매일 아침 배송되는 신선한 야채와 엄선된 고기만을 고집합니다.' },
    { num: '02', title: '비법 육수', desc: '10시간 이상 정성으로 우려낸 진한 사골 육수의 깊은 맛.' },
    { num: '03', title: '상생 경영', desc: '점주님의 성공이 곧 우리의 가치, 동반 성장을 제1원칙으로 합니다.' },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-10 rounded-3xl border border-zinc-100 hover:border-primary/20 transition-colors group"
            >
              <div className="text-6xl font-serif font-bold text-zinc-50 mb-6 group-hover:text-primary/10 transition-colors">{v.num}</div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">{v.title}</h4>
              <p className="text-zinc-500 leading-relaxed relative z-10">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="relative selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <main>
        <ValueSection />
        <StorySection />
        <MenuShowcase />
        <FranchiseSection />
        <InquiryForm />
        
        {/* Call to Action Sticky Button (Mobile) */}
        <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
          <a href="#inquiry" className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> 1588-0000 가맹상담
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
