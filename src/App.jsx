import React, { useRef, useState } from 'react';
import { 
  ChevronDown, Wifi, Sprout, Store, TrendingUp, Zap, Server, Database,
  Factory, ShieldCheck, Calendar, ArrowRight, Users, HardDrive, Truck,
  MonitorSmartphone, ShoppingCart, Lock, Smartphone, PieChart, DollarSign, MapPin, Target,
  Radio, Router, Activity, LineChart, Coins
} from 'lucide-react';

const theme = {
  bg: '#020617',
  cardBg: 'rgba(15, 23, 42, 0.6)',
  border: 'rgba(56, 189, 248, 0.2)',
  textMain: '#f1f5f9',
  textMuted: '#94a3b8',
  accentTech: '#22d3ee',
  accentAgri: '#4ade80',
  accentCom: '#fbbf24',
  accentWarn: '#ef4444',
  shadow: '0 0 20px rgba(34, 211, 238, 0.15)'
};

const App = () => {
  const scrollContainer = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "cover",
      title: "InvestmentConnection",
      subtitle: "MASTERPLAN ECOSYSTEM DIGITAL & SOSIAL 2026",
      ideaAuthor: "Andre",
      ideaEmail: "andre.rusdi@gmail.com",
      designAuthor: "Milzon",
      designEmail: "mohd.milzon@allanraytechsight.co.id",
      content: "Platform orkestrasi futuristik yang menyatukan Jaringan 5G Privasi, Smart Agriculture IoT, dan Digitalisasi Warung Mart untuk menciptakan ekonomi berbagi yang transparan, efisien, dan pro-aktif.",
      color: theme.bg,
      iconColor: theme.accentTech
    },
    {
      id: "network_vis",
      title: "Topologi Jaringan 5G",
      subtitle: "Heterogeneous Network Infrastructure",
      isNetworkVisual: true,
      color: "#030712",
      iconColor: theme.accentTech
    },
    {
      id: "problems",
      title: "Tantangan Utama Industri",
      subtitle: "Kesenjangan Data & Kepercayaan di Lapangan",
      icon: <Lock size={48} />,
      iconColor: theme.accentWarn,
      grid: [
        { label: "Data Integrity & Trust", desc: "Investor sering menerima laporan yang lambat atau manipulatif karena tidak ada sistem pelacakan yang transparan dari lahan panen hingga ke tangan pembeli.", icon: <Database size={24}/> },
        { label: "Tech Adoption Rate", desc: "Resistensi petani dan warung terhadap disiplin digital. Tanpa insentif yang jelas, mereka enggan mencatat stok dan operasional secara rutin di aplikasi.", icon: <Smartphone size={24}/> },
        { label: "High Risk Perception", desc: "Tanpa visibilitas end-to-end (dari bibit hingga uang tunai), risiko investasi dianggap terlalu tinggi oleh pemodal institusional maupun retail.", icon: <PieChart size={24}/> }
      ],
      color: "#110303"
    },
    {
      id: "solutions",
      title: "Solusi Pro-Aktif Platform",
      subtitle: "Inovasi Teknologi Membangun Transparansi Total",
      icon: <ShieldCheck size={48} />,
      iconColor: theme.accentAgri,
      grid: [
        { label: "Live Dashboard 24/7", desc: "Menyediakan telemetri IoT lahan, CCTV stream, & laporan keuangan otomatis. Investor dapat memantau pergerakan uang dan aset mereka secara real-time.", icon: <MonitorSmartphone size={24}/> },
        { label: "Sharing Economy Model", desc: "Mengubah CAPEX (beli traktor mahal) menjadi model sewa Pay-Per-Use untuk petani lokal, menekan biaya operasional panen hingga lebih dari 40%.", icon: <Server size={24}/> },
        { label: "Data-Driven Execution", desc: "Menggunakan analitik Big Data pada proyek percontohan untuk memprediksi hasil panen, merekomendasikan harga, dan menyuplai stok warung secara presisi.", icon: <TrendingUp size={24}/> }
      ],
      color: "#021108"
    },
    {
      id: "boq_summary",
      title: "Estimasi Kebutuhan Dasar (BoQ)",
      subtitle: "Perkiraan Perangkat Utama Pilot Project (1 Unit)",
      icon: <DollarSign size={48} />,
      iconColor: theme.accentTech,
      isBoQ: true,
      color: "#010811"
    },
    {
      id: "flow_agri",
      title: "Alur Investasi Pertanian",
      subtitle: "Agriculture IoT & Farmers Investment Cycle",
      isFlowchart: true,
      flowType: "agri",
      color: "#011110"
    },
    {
      id: "flow_warung",
      title: "Alur Distribusi Warung 'MART'",
      subtitle: "Warung 'Mart' Smart Supply Chain",
      isFlowchart: true,
      flowType: "warung",
      color: "#100111"
    },
    {
      id: "revenue_stream",
      title: "Revenue Stream (ROI)",
      subtitle: "Di Mana Cuan Untuk Investor?",
      icon: <LineChart size={48} />,
      iconColor: theme.accentCom,
      grid: [
        { label: "Profit Sharing Panen", desc: "Investor mendapatkan porsi bagi hasil tetap (misal: 20-30%) dari margin bersih setiap siklus panen yang terjual melalui platform B2B kita.", icon: <Sprout size={24}/> },
        { label: "Platform Transaction Fee", desc: "Passive income harian dari pemotongan fee (1-2%) pada setiap transaksi grosir antara Warung Lokal dan Pabrik/Distributor Utama.", icon: <ShoppingCart size={24}/> },
        { label: "Big Data Monetization", desc: "Data perilaku belanja warga dan tren panen dijual sebagai insight premium bagi perusahaan FMCG dan produsen agrikultur (B2B).", icon: <Database size={24}/> },
        { label: "Micro-Lending (Fintech)", desc: "Margin bunga dari pinjaman modal kerja kepada petani/warung. Risiko gagal bayar sangat rendah karena perputaran kas terkunci di ekosistem kita.", icon: <Coins size={24}/> }
      ],
      color: "#110b01"
    },
    {
      id: "the_ask",
      title: "Kesempatan Kolaborasi",
      subtitle: "Call to Action & Langkah Eksekusi (The Ask)",
      icon: <Target size={48} />,
      iconColor: theme.accentWarn,
      points: [
        "Pendanaan Awal (Seed): Membutuhkan dana estimasi $350k untuk eksekusi Pilot Project.",
        "Alokasi Strategis: 50% Infrastruktur IoT/5G, 30% CAPEX Traktor, 20% Skalabilitas Warung.",
        "Kendalikan Risiko: Akses penuh ke Command Center Dashboard untuk transparansi total dana.",
        "Tindakan Segera: Penandatanganan kesepahaman (MoU) & Kick-off operasional bulan depan."
      ],
      color: "#1a0505"
    }
  ];

  const scrollToNext = (index) => {
    const nextIndex = (index + 1) % slides.length;
    document.getElementById(slides[nextIndex].id).scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    mainContainer: {
      height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory',
      background: theme.bg, color: theme.textMain, fontFamily: "'Rajdhani', sans-serif",
      scrollBehavior: 'smooth', margin: 0
    },
    section: {
      height: '100vh', width: '100%', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', padding: '2vw',
      position: 'relative', scrollSnapAlign: 'start', overflow: 'hidden'
    },
    card: {
      maxWidth: '1100px', width: '95%', background: theme.cardBg,
      padding: 'clamp(20px, 4vw, 50px)', borderRadius: '24px', backdropFilter: 'blur(15px)',
      border: `1px solid ${theme.border}`, boxShadow: theme.shadow,
      position: 'relative', zIndex: 10, transition: 'all 0.3s ease'
    },
    neonTitle: (color) => ({
      fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: '700', textTransform: 'uppercase',
      letterSpacing: '2px', color: color || theme.accentTech, margin: '0 0 10px 0',
      textShadow: `0 0 15px ${color || theme.accentTech}`, lineHeight: '1.1'
    }),
    subtitle: {
      fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: theme.textMuted,
      fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 30px 0'
    },
    divider: (color) => ({
      width: '100px', height: '3px', background: color || theme.accentTech,
      boxShadow: `0 0 10px ${color || theme.accentTech}`, margin: '0 auto 30px auto', border: 'none'
    }),
    gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', width: '100%', marginTop: '20px' },
    gridItem: (color) => ({
      background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '16px',
      border: `1px solid rgba(255,255,255,0.05)`, transition: 'all 0.3s ease',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
      cursor: 'default'
    }),
    flowBox: { background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '150px', border: `1px solid ${theme.border}`, position: 'relative', zIndex: 2 },
    topologyNode: (color) => ({
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
      padding: '15px 20px', background: 'rgba(0,0,0,0.5)',
      border: `2px solid ${color || theme.accentTech}`, borderRadius: '12px',
      color: theme.textMain, textShadow: `0 0 5px ${color || theme.accentTech}`,
      boxShadow: `0 0 15px rgba(34, 211, 238, 0.2)`,
      textAlign: 'center', minWidth: '140px', zIndex: 5,
      backdropFilter: 'blur(5px)'
    })
  };

  const NeonArrow = ({ label }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flex: 1, minWidth: '80px' }}>
      <span style={{ fontSize: '0.8rem', color: theme.accentCom, fontWeight: 'bold', textTransform: 'uppercase' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', color: theme.accentCom }}>
        <div style={{ height: '2px', width: '50px', background: theme.accentCom, boxShadow: `0 0 5px ${theme.accentCom}` }}></div>
        <ArrowRight size={20} style={{ marginLeft: '-5px', animation: 'slideRight 1.5s infinite ease-in-out' }} />
      </div>
    </div>
  );

  return (
    <div style={styles.mainContainer} ref={scrollContainer}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);} }
        @keyframes slideRight { 0% { transform: translateX(-5px); opacity: 0.3; } 50% { transform: translateX(5px); opacity: 1; } 100% { transform: translateX(-5px); opacity: 0.3; } }
        @keyframes pulseGlow { 0% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.2); } 50% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.5); } 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.2); } }
        .neon-icon { animation: pulseGlow 2s infinite; }
        table { width: 100%; border-collapse: collapse; color: ${theme.textMain}; font-size: 0.95rem; }
        th { text-align: left; padding: 12px; color: ${theme.accentCom}; border-bottom: 2px solid ${theme.border}; text-transform: uppercase; letter-spacing: 1px;}
        td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        tr:hover td { background: rgba(255,255,255,0.03); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${theme.bg}; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${theme.border}; }
      `}</style>
      
      <div style={{ position: 'fixed', right: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {slides.map((s, i) => (
          <div key={s.id} onClick={() => document.getElementById(s.id).scrollIntoView({ behavior: 'smooth' })} style={{ 
            width: '14px', height: '14px', borderRadius: '50%', border: `2px solid ${s.iconColor || 'white'}`,
            background: activeSlide === i ? (s.iconColor || 'white') : 'transparent', 
            boxShadow: activeSlide === i ? `0 0 10px ${s.iconColor}` : 'none',
            cursor: 'pointer', transition: 'all 0.3s ease'
          }} title={s.title}/>
        ))}
      </div>

      {slides.map((slide, index) => (
        <section id={slide.id} key={slide.id} style={{ ...styles.section, backgroundColor: slide.color }}>
          <div style={{position:'absolute', inset:0, opacity: 0.03, backgroundImage: `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`, backgroundSize: '50px 50px'}}></div>

          <div style={styles.card}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', zIndex:2}}>
              {slide.icon && (
                <div className="neon-icon" style={{ padding: '15px', borderRadius: '50%', background: 'rgba(0,0,0,0.3)', border: `1px solid ${slide.iconColor}`, color: slide.iconColor, marginBottom: '20px' }}>
                  {slide.icon}
                </div>
              )}
              <h1 style={styles.neonTitle(slide.iconColor)}>{slide.title}</h1>
              <p style={styles.subtitle}>{slide.subtitle}</p>
              <hr style={styles.divider(slide.iconColor)} />
            </div>

            <div style={{position:'relative', zIndex:2, width:'100%'}}>
              
              {/* SLIDE COVER FIX: slide.type diganti menjadi slide.id */}
              {slide.id === 'cover' && (
                <div style={{ textAlign: 'center', display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <p style={{ fontSize: '1.4rem', color: theme.textMain, maxWidth: '800px', lineHeight: '1.6', marginBottom:'40px', fontWeight:'500' }}>{slide.content}</p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px 30px', borderRadius: '12px', border: `1px solid ${theme.accentWarn}`}}>
                      <p style={{ fontSize: '0.8rem', color: theme.accentWarn, textTransform: 'uppercase', margin: '0 0 5px 0', letterSpacing: '1px' }}>Idea by:</p>
                      <strong style={{ fontSize: '1.3rem', color: theme.textMain }}>{slide.ideaAuthor}</strong>
                      <p style={{ color: theme.textMuted, fontSize: '0.9rem', margin: '3px 0 0 0', fontStyle:'italic' }}>{slide.ideaEmail}</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px 30px', borderRadius: '12px', border: `1px solid ${theme.accentTech}`}}>
                      <p style={{ fontSize: '0.8rem', color: theme.accentTech, textTransform: 'uppercase', margin: '0 0 5px 0', letterSpacing: '1px' }}>Project design by:</p>
                      <strong style={{ fontSize: '1.3rem', color: theme.textMain }}>{slide.designAuthor}</strong>
                      <p style={{ color: theme.textMuted, fontSize: '0.9rem', margin: '3px 0 0 0', fontStyle:'italic' }}>{slide.designEmail}</p>
                    </div>
                  </div>
                </div>
              )}

              {slide.isNetworkVisual && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '20px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(10px, 3vw, 40px)', width: '100%', flexWrap: 'wrap' }}>
                    <div style={styles.topologyNode(theme.accentTech)}><Wifi size={32} /><span>Massive MIMO 5G</span></div>
                    <div style={styles.topologyNode(theme.accentTech)}><Radio size={32} /><span>Outdoor Small Cell</span></div>
                    <div style={styles.topologyNode(theme.accentTech)}><Router size={32} /><span>Outdoor DAS</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '80px', opacity: 0.5 }}>
                     <ChevronDown size={30} color={theme.accentTech} />
                     <ChevronDown size={30} color={theme.accentTech} />
                     <ChevronDown size={30} color={theme.accentTech} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', width: '100%', flexWrap: 'wrap' }}>
                    <div style={styles.topologyNode(theme.accentAgri)}><Activity size={32} /><span>Metro Cell</span></div>
                    <div style={{...styles.topologyNode(theme.accentWarn), padding: '20px 40px', transform: 'scale(1.1)', boxShadow: `0 0 30px ${theme.accentWarn}60`, zIndex: 10}}>
                       <Server size={40} />
                       <span style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>METRO CORE NETWORK</span>
                       <span style={{ fontSize: '0.85rem', color: theme.accentCom }}>+ Mobile Backhaul (Fiber)</span>
                    </div>
                    <div style={styles.topologyNode(theme.accentAgri)}><HardDrive size={32} /><span>Indoor DAS</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '80px', opacity: 0.5 }}>
                     <ChevronDown size={30} color={theme.accentCom} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(10px, 3vw, 40px)', width: '100%', flexWrap: 'wrap' }}>
                    <div style={styles.topologyNode(theme.accentCom)}><Sprout size={24} /><span>IoT Agriculture</span></div>
                    <div style={styles.topologyNode(theme.accentCom)}><Truck size={24} /><span>Smart Logistics</span></div>
                    <div style={styles.topologyNode(theme.accentCom)}><Store size={24} /><span>Warung Mart</span></div>
                  </div>
                </div>
              )}

              {slide.isBoQ && (
                <div style={{overflowX: 'auto', background: 'rgba(0,0,0,0.2)', borderRadius:'12px', padding:'10px'}}>
                  <table>
                    <thead>
                      <tr>
                        <th>Deskripsi Perangkat</th>
                        <th>Kategori</th>
                        <th>Estimasi Qty</th>
                        <th>Satuan</th>
                        <th>Urgensi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>5G gNodeB (Small Cell) + Antena</strong></td>
                        <td>Infrastruktur</td>
                        <td>2 - 4</td>
                        <td>Unit</td>
                        <td style={{color: theme.accentWarn, fontWeight:'bold'}}>Kritis</td>
                      </tr>
                      <tr>
                        <td><strong>IoT Gateway & Edge Server Lokal</strong></td>
                        <td>Komputasi</td>
                        <td>1</td>
                        <td>Set</td>
                        <td style={{color: theme.accentWarn, fontWeight:'bold'}}>Kritis</td>
                      </tr>
                      <tr>
                        <td><strong>IoT Sensor Kits (Tanah, Cuaca, Ternak)</strong></td>
                        <td>End Device</td>
                        <td>50 - 100</td>
                        <td>Pcs</td>
                        <td style={{color: theme.accentAgri}}>Tinggi</td>
                      </tr>
                      <tr>
                        <td><strong>CCTV Streamer + Solar Power Kit</strong></td>
                        <td>Surveillance</td>
                        <td>5 - 10</td>
                        <td>Set</td>
                        <td style={{color: theme.accentAgri}}>Tinggi</td>
                      </tr>
                      <tr>
                        <td><strong>Rugged Tablet (Petani) & POS Kit (Warung)</strong></td>
                        <td>User Device</td>
                        <td>15 - 20</td>
                        <td>Unit</td>
                        <td style={{color: theme.accentCom}}>Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {slide.points && (
                <div style={{ display: 'inline-block', textAlign: 'left', maxWidth: '900px' }}>
                  {slide.points.map((p, i) => (
                    <div key={i} style={styles.point}><Zap size={20} color={slide.iconColor} style={{ flexShrink: 0 }} /> {p}</div>
                  ))}
                </div>
              )}

              {slide.grid && (
                <div style={styles.gridContainer}>
                  {slide.grid.map((g, i) => (
                    <div key={i} style={styles.gridItem(slide.iconColor)}>
                      <div style={{ padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', color: slide.iconColor, border: `1px solid ${slide.iconColor}` }}>{g.icon}</div>
                      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px', color: theme.textMain, textAlign: 'center' }}>{g.label}</div>
                      <div style={{ fontSize: '0.95rem', opacity: 0.85, textAlign: 'center', color: theme.textMuted, lineHeight: '1.5' }}>{g.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {slide.isFlowchart && slide.flowType === "agri" && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={styles.flowBox}><Users size={32} color={theme.accentCom} /><strong>Investor</strong></div>
                  <NeonArrow label="Modal" />
                  <div style={styles.flowBox}><MapPin size={32} color={theme.accentTech} /><strong>Platform Hub</strong></div>
                  <NeonArrow label="OPEX / Alat" />
                  <div style={styles.flowBox}><Sprout size={32} color={theme.accentAgri} /><strong>Petani & IoT</strong></div>
                  <NeonArrow label="Hasil Panen" />
                  <div style={styles.flowBox}><ShoppingCart size={32} color={theme.accentCom} /><strong>Buyer</strong></div>
                </div>
              )}

              {slide.isFlowchart && slide.flowType === "warung" && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={styles.flowBox}><Store size={32} color="#f472b6" /><strong>Warung Lokal</strong></div>
                  <NeonArrow label="Order Gabungan" />
                  <div style={styles.flowBox}><MonitorSmartphone size={32} color="#c084fc" /><strong>Platform Mart</strong></div>
                  <NeonArrow label="Volume Beli" />
                  <div style={styles.flowBox}><Factory size={32} color="#94a3b8" /><strong>Distributor</strong></div>
                  <NeonArrow label="Suplai" />
                  <div style={styles.flowBox}><Users size={32} color="#fb923c" /><strong>Warga</strong></div>
                </div>
              )}
            </div>
          </div>

          <div onClick={() => scrollToNext(index)} style={{ position: 'absolute', bottom: '6vh', cursor: 'pointer', animation: 'bounce 2s infinite', color: slide.iconColor || theme.textMuted, zIndex: 10 }}>
            <ChevronDown size={40} />
          </div>

          <div style={{ position: 'absolute', bottom: '10px', left: '0', width: '100%', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', zIndex: 5, letterSpacing:'1px' }}>
            Re-design by milzon • <span style={{fontStyle:'italic'}}>mohd.milzon@allanraytechsight.co.id</span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;