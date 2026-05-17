/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Users,
  Smartphone,
  Bot
} from "lucide-react";

// --- Components ---

const Header = () => (
  <div className="relative z-50 flex justify-between items-center mb-10 w-full max-w-7xl mx-auto py-6">
    <div className="flex items-center gap-6 overflow-hidden">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mb-1">Web Design Premium</span>
        <span className="text-xl font-bold tracking-tight">DIEGO ARCANJO <span className="text-cyan-500 underline underline-offset-4 decoration-2">WEB STUDIO</span></span>
      </div>
      <div className="h-8 w-px bg-slate-700 mx-2 hidden sm:block"></div>
      <div className="flex flex-col hidden sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-1">Intelligence Agency</span>
        <span className="text-xl font-bold tracking-tight italic">FalaMais<span className="text-blue-500">.AI</span></span>
      </div>
    </div>
    <div className="px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-md hidden md:block">
      <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Apresentação Oficial 2026</span>
    </div>
  </div>
);

const MarketStatFloat = () => (
  <div className="mt-12 p-5 border border-slate-800 rounded-2xl bg-slate-900/40 backdrop-blur-sm flex items-center gap-6 max-w-sm">
    <div className="text-4xl font-black text-cyan-400 italic">78%</div>
    <div className="text-xs text-slate-400 leading-tight uppercase tracking-wider text-left">
      Dos clientes compram da empresa que responde <span className="text-white font-bold">primeiro</span>.
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="w-full aspect-[4/3] bg-slate-900/60 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl p-6 relative overflow-hidden group">
    {/* Glass Mockup UI Controls */}
    <div className="absolute top-4 left-6 flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
    </div>
    
    <div className="mt-8 flex flex-col gap-4">
      <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-[10px]">IA</div>
          <div className="text-xs font-medium text-slate-300">Analisando Lead via WhatsApp...</div>
        </div>
        <div className="text-[10px] text-cyan-400 animate-pulse">ATIVO</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-cyan-500/10 rounded-xl border border-cyan-500/20 p-4">
          <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-widest mb-2">Presença Digital</div>
          <div className="text-xl font-bold truncate">Sites Premium</div>
          <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[95%] h-full bg-cyan-500"></div>
          </div>
          <div className="mt-2 text-[10px] text-slate-500">Conversão 95%</div>
        </div>
        <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-4">
          <div className="text-[10px] text-blue-400 uppercase font-bold tracking-widest mb-2">Automação</div>
          <div className="text-xl font-bold truncate">FalaMais.AI</div>
          <div className="mt-2 flex gap-1">
            <div className="w-4 h-4 bg-blue-500/30 rounded-sm"></div>
            <div className="w-4 h-4 bg-blue-500/60 rounded-sm"></div>
            <div className="w-4 h-4 bg-blue-500/90 rounded-sm"></div>
          </div>
          <div className="mt-2 text-[10px] text-slate-500">24/7 Ativo</div>
        </div>
      </div>

      {/* Flow Visualization */}
      <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">🌐</div>
            <span className="text-[8px] uppercase tracking-tighter">Site</span>
          </div>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-cyan-900 border border-cyan-400 flex items-center justify-center text-xs">💬</div>
            <span className="text-[8px] uppercase tracking-tighter shrink-0">Whats IA</span>
          </div>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-2"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">💰</div>
            <span className="text-[8px] uppercase tracking-tighter">Venda</span>
          </div>
        </div>
      </div>
    </div>

    {/* Tech Pattern Overlay */}
    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none p-4">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
        ))}
      </div>
    </div>

    {/* Floating Badge */}
    <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex flex-col items-center justify-center border-4 border-[#020617] shadow-xl text-center group-hover:scale-110 transition-transform">
      <span className="text-[8px] font-bold tracking-tighter uppercase">Ecossistema</span>
      <span className="text-xl font-black italic">24/7</span>
      <span className="text-[7px] font-bold uppercase">Automatizado</span>
    </div>
  </div>
);

const BottomPillars = () => (
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 border-t border-slate-800 pt-10">
    {[
      { num: "01", category: "Presença", desc: "Design Millonaire Web Experience" },
      { num: "02", category: "Escala", desc: "Atendimento Inteligente via WhatsApp" },
      { num: "03", category: "Autoridade", desc: "Posicionamento Digital de Elite" },
      { num: "04", category: "Resultados", desc: "Conversão Automática de Leads" }
    ].map((pillar, i) => (
      <div key={i} className="flex flex-col">
        <span className="text-cyan-500 text-xs font-bold uppercase mb-1 tracking-widest italic">{pillar.num}. {pillar.category}</span>
        <span className="text-sm text-slate-400">{pillar.desc}</span>
      </div>
    ))}
  </div>
);

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string; key?: React.Key }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-24 overflow-hidden relative ${className}`}>
    {children}
  </section>
);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 uppercase tracking-widest font-display">
    {children}
  </div>
);

// --- Sections ---

const App = () => {
  return (
    <div className="bg-[#020617] selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-glow-cyan -top-24 -left-24 opacity-30"></div>
        <div className="bg-glow-blue top-1/2 -right-48 opacity-20"></div>
        <div className="bg-glow-cyan bottom-4 left-1/3 opacity-10"></div>
      </div>

      {/* 1. HERO - CAPA */}
      <Section className="relative z-10">
        <Header />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[1.05] mb-6 tracking-tighter">
                Transformando <span className="text-gradient">Atendimento</span> e Presença Digital com <span className="text-gradient-alt italic">IA</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mb-10 leading-relaxed">
                Não basta apenas existir. É preciso converter. Unimos design de alta performance com a automação mais avançada do mercado para escalar seu faturamento.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#demo" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 flex items-center gap-3 transition-all">
                  SOLICITAR APRESENTAÇÃO GRATUITA <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <MarketStatFloat />
            </Reveal>
          </div>
          
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <Reveal delay={0.2}>
              <DashboardMockup />
            </Reveal>
          </div>
        </div>
        <BottomPillars />
      </Section>

      {/* 2. O PROBLEMA DO MERCADO */}
      <Section className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Reveal>
            <Badge>O Desafio</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">O problema de ser <span className="text-gradient">invisível</span> no digital</h2>
            <p className="text-slate-400 text-lg">Muitas empresas perdem grandes oportunidades todos os dias por falhas simples.</p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Clock, 
              title: "Demora no Atendimento", 
              desc: "Leads que esperam mais de 5 minutos têm 80% menos chance de conversão.",
              color: "text-cyan-400"
            },
            { 
              icon: TrendingUp, 
              title: "Perda de Autoridade", 
              desc: "Não ter um site profissional transmite amadorismo e falta de confiança.",
              color: "text-blue-500"
            },
            { 
              icon: Smartphone, 
              title: "Dependência de Algoritmos", 
              desc: "Ficar refém apenas do Instagram é construir sua casa em terreno alugado.",
              color: "text-cyan-300"
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-dark p-8 rounded-3xl h-full border-white/5 hover:border-cyan-500/20 transition-all group">
                <item.icon className={`w-12 h-12 mb-6 ${item.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-24 text-center">
            <p className="text-3xl md:text-5xl font-display italic font-medium leading-tight max-w-4xl mx-auto">
              “Responder rápido pode ser a diferença entre <span className="text-gradient-alt">vender</span> ou perder um cliente.”
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. QUEM SOMOS */}
      <Section id="quem-somos" className="relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <Badge>Especialistas em Design</Badge>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter uppercase italic">Diego Arcanjo <span className="text-cyan-500">Studio</span></h3>
            <ul className="space-y-4 mb-10 text-slate-300">
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5 shrink-0" /> Sites profissionais e de alta performance</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5 shrink-0" /> Landing pages focadas em conversão</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5 shrink-0" /> Design moderno e experiência premium</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5 shrink-0" /> Foco total em autoridade digital</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/Diego%20Arcanjo%20Web%20Studio%201.png" alt="Studio 1" className="rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all" referrerPolicy="no-referrer" />
              <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/Diego%20Arcanjo%20Web%20Studio%202.png" alt="Studio 2" className="rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all" referrerPolicy="no-referrer" />
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <Badge>Pioneiros em IA</Badge>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter uppercase italic text-right">FalaMais<span className="text-blue-500">.AI</span></h3>
            <ul className="space-y-4 mb-10 text-slate-300 text-right flex flex-col items-end">
              <li className="flex items-center gap-3 font-medium">Atendimento Inteligente no WhatsApp <Bot className="text-blue-500 w-5 h-5 shrink-0" /></li>
              <li className="flex items-center gap-3 font-medium">Qualificação automática de leads 24/7 <Bot className="text-blue-500 w-5 h-5 shrink-0" /></li>
              <li className="flex items-center gap-3 font-medium">Integração nativa com CRMs <Bot className="text-blue-500 w-5 h-5 shrink-0" /></li>
              <li className="flex items-center gap-3 font-medium">Automação comercial avançada <Bot className="text-blue-500 w-5 h-5 shrink-0" /></li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/FalaMais.Ai%201.png" alt="FalaMais 1" className="rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all" referrerPolicy="no-referrer" />
              <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/FalaMais.Ai%202.png" alt="FalaMais 2" className="rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all" referrerPolicy="no-referrer" />
            </div>
          </Reveal>
        </div>
      </Section>


      {/* 4. A PARCERIA */}
      <Section className="relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="text-center mb-16">
              <Badge>Sincronia Total</Badge>
              <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">A Integração que <span className="text-gradient">Gera Lucro</span></h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Conectamos sua presença online com nossa inteligência artificial para criar uma máquina de vendas imparável.</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <Reveal>
              <div className="space-y-8">
                {[
                  { step: "01", category: "Atração", desc: "Visitante chega ao seu site premium desenhado para autoridade." },
                  { step: "02", category: "Interação", desc: "A IA da FalaMais.AI inicia o atendimento em milissegundos." },
                  { step: "03", category: "Qualificação", desc: "Filtramos os curiosos e entregamos leads prontos para comprar." },
                  { step: "04", category: "Resultado", desc: "Fechamento automático ou agendamento direto no sistema." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <span className="font-display font-black text-4xl text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors shrink-0">{item.step}</span>
                    <div className="pt-2">
                      <h4 className="text-2xl font-bold mb-2 tracking-tight uppercase italic text-cyan-400">{item.category}</h4>
                      <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl opacity-30"></div>
                <img 
                  src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/Diego%20%2B%20Fala%20Ai%202.png" 
                  alt="Fluxo de Parceria" 
                  className="relative rounded-3xl border border-white/10 shadow-2xl scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl neon-border animate-bounce-slow">
                  <p className="text-cyan-400 font-bold flex items-center gap-3 tracking-widest text-xs uppercase">
                    <Zap className="w-5 h-5 fill-current" /> Ecossistema 24h
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 5. COMO FUNCIONA */}
      <Section className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Reveal>
              <Badge>Workflow</Badge>
              <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter">Fluxo de Experiência do <span className="text-gradient">Cliente</span></h2>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl mb-16 group">
              <img 
                src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/Diego%20%2B%20Fala%20Ai%203.png" 
                alt="Workflow" 
                className="w-full object-cover aspect-[21/9] group-hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent flex flex-col justify-end p-16">
                <p className="text-3xl md:text-4xl font-extrabold max-w-2xl leading-tight tracking-tight">Uma estrutura comercial digital completa e automatizada para o seu negócio local.</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Briefing", desc: "Entendemos seu modelo de negócio e tom de voz." },
              { title: "Criação", desc: "Desenvolvemos o site e treinamos sua IA." },
              { title: "Deploy", desc: "Lançamento da sua nova estrutura digital." },
              { title: "Escala", desc: "Otimização contínua para aumentar conversões." }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 border-t-2 border-cyan-500/20 glass-dark rounded-b-3xl">
                  <h5 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-cyan-400">{step.title}</h5>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. BENEFÍCIOS */}
      <Section className="relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-24 items-end">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter">Por que escolher esta solução <span className="text-gradient">completa</span>?</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-lg">
                Não oferecemos apenas ferramentas, entregamos <span className="text-white font-medium">resultados tangíveis</span>. Menos trabalho manual, mais tempo para seu negócio.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: "Atendimento imediato", icon: Zap },
              { title: "Mais autoridade", icon: ShieldCheck },
              { title: "Vendas 24/7", icon: Clock },
              { title: "Menos perda de leads", icon: TrendingUp },
              { title: "Organização Total", icon: BarChart3 },
              { title: "Escalabilidade", icon: Users },
              { title: "Design Premium", icon: Globe },
              { title: "IA Treinada", icon: Bot }
            ].map((benefit, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass-dark p-8 rounded-3xl flex flex-col gap-6 hover:bg-white/5 transition-all border-white/5 group">
                  <benefit.icon className="w-10 h-10 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-lg uppercase tracking-tight italic">{benefit.title}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/FalaMais.Ai%203.png" alt="Benefit 1" className="rounded-[2.5rem] border border-white/10 w-full object-cover aspect-video hover:scale-[1.02] transition-transform duration-700" referrerPolicy="no-referrer" />
            </Reveal>
            <Reveal delay={0.2}>
              <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/FalaMais.Ai%204.png" alt="Benefit 2" className="rounded-[2.5rem] border border-white/10 w-full object-cover aspect-video hover:scale-[1.02] transition-transform duration-700" referrerPolicy="no-referrer" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 7. PARA QUEM É */}
      <Section className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Reveal>
              <Badge>Segmentos</Badge>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter">Ideal para empresas de <span className="text-gradient">Elite</span></h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12">
               <Reveal>
                <div className="flex flex-wrap justify-center gap-10">
                  {[
                    "Arquitetos", "Clínicas", "Dentistas", "Estéticas", 
                    "Restaurantes", "Imobiliárias", "Escritórios", "Escolas", "Negócios Locais"
                  ].map((niche, i) => (
                    <div key={i} className="flex items-center gap-4 text-2xl font-display font-bold italic text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest cursor-default">
                      <div className="w-2 h-2 rounded-full bg-cyan-900" />
                      {niche}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="lg:col-span-12 mt-16">
              <Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/Diego%20Arcanjo%20Web%20Studio%203.png" alt="Niche 1" className="rounded-[3rem] border border-white/10 w-full overflow-hidden" referrerPolicy="no-referrer" />
                  <img src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/FalaMais.Ai%205.png" alt="Niche 2" className="rounded-[3rem] border border-white/10 w-full overflow-hidden" referrerPolicy="no-referrer" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. DIFERENCIAL */}
      <Section className="relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h2 className="text-6xl md:text-9xl font-display font-black mb-12 tracking-tighter italic leading-none uppercase">Não criamos apenas <span className="text-gradient">sites</span>.</h2>
            <p className="text-2xl md:text-3xl text-slate-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto">
              Entregamos uma <span className="text-white font-medium italic">estrutura digital de combate</span>, pensada para captar, qualificar e converter. Nossa parceira é o seu braço direito tecnológico.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="relative group">
              <div className="absolute -inset-10 bg-cyan-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
              <img 
                src="https://raw.githubusercontent.com/diegoarcanjo35/FalaMais.Ai-DA-Web-Studio/main/Diego%20Arcanjo%20Web%20Studio%204.png" 
                alt="Differential" 
                className="relative rounded-[3rem] border border-white/20 shadow-4xl aspect-[21/9] object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 9. DEMONSTRAÇÃO VISUAL */}
      <Section id="demo" className="relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <Reveal>
            <Badge>Visual Agency</Badge>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">A Experiência do <span className="text-gradient">Amanhã</span></h2>
            <p className="text-slate-400 text-lg">Modelos desenhados para posicionar sua marca no topo.</p>
          </Reveal>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { tag: "Layout Responsive", title: "Site Dinâmico de Elite", icon: Smartphone },
            { tag: "Chat IA", title: "Automação via WhatsApp", icon: MessageSquare },
            { tag: "Intelligence", title: "Dashboard Personalizado", icon: BarChart3 }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group glass-dark rounded-[2.5rem] overflow-hidden hover:translate-y--2 transition-all duration-500 border-white/5 hover:border-cyan-500/30">
                <div className="h-64 bg-slate-950 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 weight via-transparent to-blue-500/10"></div>
                  <item.icon className="w-20 h-20 text-white/5 group-hover:text-cyan-400/20 transition-colors" />
                </div>
                <div className="p-10">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-cyan-500 font-bold block mb-4 italic">{item.tag}</span>
                  <h4 className="text-2xl font-black italic uppercase tracking-tight">{item.title}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10. CHAMADA FINAL */}
      <Section className="relative z-10">
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="glass-dark p-16 md:p-32 rounded-[4rem] border-cyan-500/10 text-center relative overflow-hidden">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[1] tracking-tighter max-w-5xl mx-auto italic uppercase">
                Seu próximo cliente pode estar tentando falar agora.
              </h2>
              <p className="text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-light">
                Esteja preparado para responder da forma certa. <span className="text-white">Profissionalize hoje</span> seu futuro digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-cyan-500/30 flex items-center gap-4 hover:scale-105 hover:shadow-cyan-400/40 transition-all cursor-pointer">
                  SOLICITAR APRESENTAÇÃO GRATUITA <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-32 pt-16 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">PROPRIEDADE INTELECTUAL © 2026</span>
                    <span className="text-lg font-bold">DIEGO ARCANJO <span className="text-cyan-500">+</span> FALAMAIS.AI</span>
                  </div>
                </div>
                
                <div className="flex gap-10 uppercase tracking-widest text-[10px] font-black italic">
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Instagram</a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">WhatsApp</a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="mt-12 text-center text-[10px] uppercase tracking-[1em] text-cyan-900/50 font-black">
            Seu negócio funcionando 24 horas por dia.
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
