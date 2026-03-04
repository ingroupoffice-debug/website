import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronLeft, ChevronRight, Building2, Globe, 
  BarChart3, Phone, Mail, MapPin, Accessibility, 
  Award, Users2, Info, Instagram, Facebook, MessageCircle, ExternalLink
} from 'lucide-react';

export default function App() {
  // --- States ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentView, setCurrentView] = useState('home');
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showAccessMenu, setShowAccessMenu] = useState(false);
  
  // --- Accessibility States ---
  const [accFontSize, setAccFontSize] = useState(100);
  const [accContrast, setAccContrast] = useState(false);
  const [accGrayscale, setAccGrayscale] = useState(false);
  const [accReadableFont, setAccReadableFont] = useState(false);

  // --- Business Data ---
  const businessDetails = {
    name: "אינגרופ השקעות בע״מ",
    ceoName: "נווה נתן",
    ceoTitle: "מנכ״ל ובעלים",
    phone: "050-442-3424",
    email: "office@in-group.co.il",
    address: "תוצרת הארץ 3, פתח תקווה. מתחם בסר סיטי",
    whatsappCommunity: "https://chat.whatsapp.com/LNhYAcCcTknBIqV6WPme0X",
    whatsappDirect: "https://wa.me/504423424?text=היי,+הגעתי+מהאתר+ואשמח+לשוחח",
    instagram: "https://www.instagram.com/nevenatan?igsh=MWpzeXB6cWdxcHc2dw%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1H7vJsvEg3/?mibextid=wwXIfr",
    bio: "בן 30 נשוי ואב ל-2. יזם ומשקיע נדל״ן עם ניסיון של יותר מ-10 שנים בענף. שירת כקצין לוחם במשמר הגבול, שירות שהקנה לו תכונות מנהיגות, משמעת ואחריות שבאות לידי ביטוי בעשייתו הנדלנ״ית. במקביל לשירותו הצבאי, נווה ביצע עסקאות יזמיות מורכבות בתחום הבניה והקרקעות והיום מוביל חברות נדל״ן שמתמחות בהשקעות מתוחכמות בעולם הנדל״ן, ליווי משקיעים שמשלבות ניסיון מעשי בשטח, חשיבה אסטרטגית יוצאת דופן ומחויבות בלתי מתפשרת להצלחת הלקוחות שלו. הוא ידוע ביכולת לזיהוי הזדמנויות וניהול מו״מ, תוך יצירת ערך מקסימלי עבור קהילת המשקיעים שלו.",
    testimonials: [
      { id: 1, name: "משקיע בקהילה", role: "עסקת יד שניה", text: "הליווי של נווה נתן לנו שקט נפשי וביטחון בכל שלב בדרך.", videoId: "dQw4w9WgXcQ" },
      { id: 2, name: "שותף אסטרטגי", role: "השקעת קרקע", text: "יכולת זיהוי ההזדמנויות של אינגרופ היא פשוט יוצאת דופן.", videoId: "dQw4w9WgXcQ" }
    ]
  };

  const colors = {
    darkBlue: '#0A192F',
    lightBlue: '#112240',
    gold: '#D4AF37',
    goldHover: '#F3D568',
  };

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % businessDetails.testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + businessDetails.testimonials.length) % businessDetails.testimonials.length);

  return (
    <div 
      dir="rtl" 
      className={`min-h-screen transition-all duration-300 ${accContrast ? 'bg-black text-yellow-400' : 'bg-white text-gray-800'} ${accGrayscale ? 'grayscale' : ''}`}
      style={{ 
        fontFamily: accReadableFont ? 'Arial, sans-serif' : "'Rubik', sans-serif",
        fontSize: `${accFontSize}%`
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
          html { scroll-behavior: smooth; }
          .gold-gradient { background: linear-gradient(135deg, #D4AF37 0%, #F3D568 100%); }
          .text-gold { color: #D4AF37; }
          
          /* אנימציית כניסה חלקה לטקסט */
          .fade-up {
            animation: fadeUp 1s ease-out forwards;
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Navigation */}
      <nav style={{ backgroundColor: accContrast ? 'black' : colors.darkBlue }} className="sticky top-0 z-50 shadow-2xl border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo on the Right (RTL) */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <img src="Asset 34-8.png" alt="לוגו אינגרופ" className="h-12 md:h-14 object-contain" />
            </div>

            {/* Nav links in center/left */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#about" className="text-gray-300 hover:text-gold transition font-bold">אודות</a>
              <a href="#blog" className="text-gray-300 hover:text-gold transition font-bold">מאמרים</a>
              <a href="#testimonials" className="text-gray-300 hover:text-gold transition font-bold">עדויות</a>
              <a href={businessDetails.whatsappDirect} target="_blank" className="gold-gradient text-blue-900 px-6 py-2 rounded-full font-black shadow-lg hover:scale-105 transition">
                צור קשר
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gold">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* רקע וידאו מונפש - רחפן לילה */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-night-11030-large.mp4" type="video/mp4" />
          </video>
          {/* Overlay כהה לניגודיות טקסט */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl fade-up">
          <div className="inline-block px-4 py-1 border border-gold text-gold text-xs font-bold uppercase tracking-widest mb-6 rounded">IN GROUP REAL ESTATE</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            להשקיע <span className="text-gold">חכם</span><br />
            להרוויח <span className="text-gold">בטוח</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            מובילים את שוק השקעות הנדל"ן המתוחכמות בארץ ובעולם.<br />
            חשיבה אסטרטגית, ניסיון מעשי ומחויבות בלתי מתפשרת.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={businessDetails.whatsappCommunity} target="_blank" className="gold-gradient px-10 py-4 rounded-full text-blue-900 font-bold text-lg shadow-2xl flex items-center justify-center gap-2 hover:brightness-110 hover:scale-105 transition duration-300">
              <MessageCircle size={20} />
              קהילת עסקאות מתחת לרדאר
            </a>
          </div>
        </div>
      </section>

      {/* CEO Section - נווה נתן */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/5">
              <div className="relative group">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold rounded-2xl z-0 transition-all group-hover:top-0 group-hover:right-0"></div>
                <img 
                  src="תמונת פרופיל עדכנית דצמבר 25.jpg" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full object-cover" 
                  alt={businessDetails.ceoName}
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-gold text-sm font-bold tracking-[0.2em] mb-4 uppercase">Leadership & Vision</h2>
              <h3 className="text-4xl font-black mb-2" style={{ color: colors.darkBlue }}>{businessDetails.ceoName}</h3>
              <p className="text-xl font-bold mb-6 text-gold">{businessDetails.ceoTitle}</p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8 text-justify">
                {businessDetails.bio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-r-4 border-gold">
                  <Award className="text-gold" size={32} />
                  <span className="font-bold text-gray-700 uppercase text-sm">10+ שנות ניסיון מעשי</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-r-4 border-gold">
                  <Users2 className="text-gold" size={32} />
                  <span className="font-bold text-gray-700 uppercase text-sm">ניהול קהילת משקיעים</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4">עדויות מהשטח</h2>
          <p className="text-gray-500 mb-16">המשקיעים שלנו מספרים על הדרך המשותפת</p>
          <div className="relative">
            <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative mb-10">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${businessDetails.testimonials[activeTestimonial].videoId}`}
                title="עדויות לקוחות"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center items-center gap-8">
              <button onClick={prevTestimonial} className="p-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition"><ChevronRight /></button>
              <div className="min-w-[200px]">
                <h4 className="font-bold text-xl">{businessDetails.testimonials[activeTestimonial].name}</h4>
                <p className="text-gold font-medium">{businessDetails.testimonials[activeTestimonial].role}</p>
              </div>
              <button onClick={nextTestimonial} className="p-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition"><ChevronLeft /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 bg-white shadow-2xl border border-gray-100 rounded-2xl p-6 z-[100]">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gold/10 rounded-lg text-gold"><Info size={24} /></div>
            <div>
              <h4 className="font-bold text-lg mb-2">פרטיות ושימוש בעוגיות</h4>
              <p className="text-sm text-gray-500 mb-4">אנו משתמשים בעוגיות כדי להעניק לך את חווית הגלישה הטובה ביותר באתר.</p>
              <div className="flex gap-3">
                <button onClick={() => setShowCookieBanner(false)} className="flex-1 bg-blue-900 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-800 transition">אישור והמשך</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Button & Menu */}
      <button 
        onClick={() => setShowAccessMenu(!showAccessMenu)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-blue-900 text-gold rounded-full shadow-2xl z-[101] flex items-center justify-center hover:scale-110 transition"
      >
        <Accessibility size={30} />
      </button>

      {showAccessMenu && (
        <div className="fixed bottom-24 left-6 w-72 bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden border border-gray-100">
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <h4 className="font-bold">תפריט נגישות</h4>
            <button onClick={() => setShowAccessMenu(false)}><X size={20}/></button>
          </div>
          <div className="p-4 space-y-3">
            <button onClick={() => setAccFontSize(f => Math.min(f + 10, 150))} className="w-full text-right p-3 rounded-lg hover:bg-gold/10 flex items-center justify-between border"><span>הגדלת גופן</span><span className="text-xs">A+</span></button>
            <button onClick={() => setAccContrast(!accContrast)} className={`w-full text-right p-3 rounded-lg flex items-center justify-between border ${accContrast ? 'bg-gold/20' : ''}`}><span>ניגודיות גבוהה</span><div className="w-4 h-4 bg-black rounded-full border"></div></button>
            <button onClick={() => setAccReadableFont(!accReadableFont)} className={`w-full text-right p-3 rounded-lg flex items-center justify-between border ${accReadableFont ? 'bg-gold/20' : ''}`}><span>גופן קריא</span><span className="font-serif">Aa</span></button>
            <button onClick={() => { setAccFontSize(100); setAccContrast(false); setAccGrayscale(false); setAccReadableFont(false); }} className="w-full text-center p-3 text-red-600 font-bold border-t mt-2">איפוס הגדרות</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: colors.darkBlue }} className="pt-24 pb-12 text-white border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <img src="Asset 34-8.png" alt="לוגו אינגרופ" className="h-12 mb-6" />
              <p className="text-gray-400 leading-relaxed">מובילים להשקעות נדל"ן מבוססות נתונים, אסטרטגיה וביטחון הון מלא.</p>
              <div className="flex gap-4 mt-8">
                <a href={businessDetails.instagram} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-blue-900 transition"><Instagram size={20} /></a>
                <a href={businessDetails.facebook} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-blue-900 transition"><Facebook size={20} /></a>
                <a href={businessDetails.whatsappDirect} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-blue-900 transition"><MessageCircle size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gold text-lg">יצירת קשר</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3"><Phone size={18} className="text-gold" /> {businessDetails.phone}</div>
                <div className="flex items-center gap-3"><Mail size={18} className="text-gold" /> {businessDetails.email}</div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-gold" /> {businessDetails.address}</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gold text-lg">ניווט</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">דף הבית</a></li>
                <li><a href="#about" className="hover:text-white transition">אודות המנכ"ל</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">עדויות</a></li>
                <li><a href={businessDetails.whatsappCommunity} className="hover:text-white transition font-bold">קהילת הווטסאפ</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-xs border-t border-white/5 pt-12">
            © {new Date().getFullYear()} {businessDetails.name} | כל הזכויות שמורות לנווה נתן.
          </div>
        </div>
      </footer>
    </div>
  );
}
