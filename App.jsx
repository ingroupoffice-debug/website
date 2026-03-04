import React, { useState } from 'react';
import { Menu, X, ChevronLeft, Briefcase, TrendingUp, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // צבעי המותג: כחול כהה וזהב
  const colors = {
    darkBlue: '#0A192F',
    lightBlue: '#112240',
    gold: '#D4AF37',
    goldHover: '#F3D568',
  };

  return (
    <div dir="rtl" className="min-h-screen font-sans text-gray-800" style={{ backgroundColor: '#F9FAFB' }}>
      
      {/* תפריט ניווט */}
      <nav style={{ backgroundColor: colors.darkBlue }} className="sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* לוגו */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <div style={{ color: colors.gold }} className="text-2xl font-bold tracking-wider">
                שם<span className="text-white">המותג</span>
              </div>
            </div>

            {/* תפריט למחשב */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-300 hover:text-white transition px-3 py-2 text-sm font-medium">ראשי</a>
              <a href="#services" className="text-gray-300 hover:text-white transition px-3 py-2 text-sm font-medium">שירותים</a>
              <a href="#about" className="text-gray-300 hover:text-white transition px-3 py-2 text-sm font-medium">אודות</a>
              <a href="#contact" style={{ backgroundColor: colors.gold, color: colors.darkBlue }} className="hover:opacity-90 transition px-6 py-2 rounded-md text-sm font-bold shadow-md">
                צור קשר
              </a>
            </div>

            {/* כפתור תפריט לנייד */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* תפריט נייד נפתח */}
        {isMobileMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: colors.lightBlue }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ראשי</a>
              <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">שירותים</a>
              <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">אודות</a>
              <a href="#contact" style={{ color: colors.gold }} className="block px-3 py-2 rounded-md text-base font-bold">צור קשר</a>
            </div>
          </div>
        )}
      </nav>

      {/* אזור ראשי (Hero) */}
      <section id="home" className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="רקע בניין עסקים יוקרתי" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.85)' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            הצעד הבא של העסק שלך <br />
            <span style={{ color: colors.gold }}>מתחיל כאן.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            אנו מספקים פתרונות אסטרטגיים ומתקדמים בהתאמה אישית, כדי לעזור לך להשיג את המטרות העסקיות שלך ולבלוט מעל המתחרים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" style={{ backgroundColor: colors.gold, color: colors.darkBlue }} className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              בואו נדבר
              <ChevronLeft className="mr-2" size={20} />
            </a>
            <a href="#services" className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white border-2 hover:bg-white/10 transition duration-300" style={{ borderColor: colors.gold }}>
              גלה עוד
            </a>
          </div>
        </div>
      </section>

      {/* אזור שירותים */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ color: colors.darkBlue }} className="text-3xl md:text-4xl font-bold mb-4">השירותים שלנו</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.gold }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              מעטפת מלאה של שירותים מקצועיים שיקחו את העסק שלך לרמה הבאה.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* שירות 1 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300" style={{ backgroundColor: colors.lightBlue }}>
                <TrendingUp style={{ color: colors.gold }} size={32} />
              </div>
              <h3 style={{ color: colors.darkBlue }} className="text-xl font-bold mb-3">ייעוץ אסטרטגי</h3>
              <p className="text-gray-600 leading-relaxed">
                בניית תוכנית עבודה מסודרת המותאמת למידותיך, זיהוי קהלי יעד והגדלת אפיקי הרווח של העסק.
              </p>
            </div>

            {/* שירות 2 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300" style={{ backgroundColor: colors.lightBlue }}>
                <Briefcase style={{ color: colors.gold }} size={32} />
              </div>
              <h3 style={{ color: colors.darkBlue }} className="text-xl font-bold mb-3">פיתוח עסקי</h3>
              <p className="text-gray-600 leading-relaxed">
                יצירת שיתופי פעולה, פתיחת שווקים חדשים ושיפור תהליכי המכירה והשירות בארגון.
              </p>
            </div>

            {/* שירות 3 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300" style={{ backgroundColor: colors.lightBlue }}>
                <Users style={{ color: colors.gold }} size={32} />
              </div>
              <h3 style={{ color: colors.darkBlue }} className="text-xl font-bold mb-3">ליווי אישי</h3>
              <p className="text-gray-600 leading-relaxed">
                הדרכה אישית של מנהלים וצוותים, הקניית כלים ניהוליים מתקדמים ושיפור הפרודוקטיביות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* אודות */}
      <section id="about" className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="צוות המשרד בפגישה" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 style={{ color: colors.darkBlue }} className="text-3xl md:text-4xl font-bold mb-4">הסיפור שלנו</h2>
              <div className="w-20 h-1 mb-6" style={{ backgroundColor: colors.gold }}></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                אנו חברת בוטיק המתמחה במתן שירותים לעסקים מכל הגדלים. עם מעל עשור של ניסיון בשטח, צברנו את הידע והכלים הדרושים כדי לקחת כל עסק ולהפוך אותו לסיפור הצלחה.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'צוות מומחים עם ניסיון מוכח',
                  'שירות אישי וזמינות גבוהה',
                  'פתרונות יצירתיים המותאמים אישית',
                  'תוצאות מדידות בשטח'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 font-medium">
                    <CheckCircle style={{ color: colors.gold }} className="ml-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{ backgroundColor: colors.darkBlue, color: colors.gold }} className="inline-block px-8 py-3 rounded-lg font-bold hover:opacity-90 transition duration-300 shadow-md">
                הצטרף להצלחה
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* צור קשר */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ color: colors.darkBlue }} className="text-3xl md:text-4xl font-bold mb-4">צור קשר</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.gold }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              נשמח לשמוע ממך. השאר פרטים ונחזור אליך בהקדם האפשרי לפגישת ייעוץ ראשונית ללא עלות.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
            {/* מידע ליצירת קשר */}
            <div style={{ backgroundColor: colors.darkBlue }} className="lg:w-1/3 rounded-2xl p-8 text-white shadow-xl">
              <h3 style={{ color: colors.gold }} className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone style={{ color: colors.gold }} className="ml-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-300">טלפון</h4>
                    <p className="text-lg mt-1" dir="ltr">050-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail style={{ color: colors.gold }} className="ml-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-300">דוא"ל</h4>
                    <p className="text-lg mt-1">info@yourbrand.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin style={{ color: colors.gold }} className="ml-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-300">כתובת</h4>
                    <p className="text-lg mt-1">רחוב העסקים 10, תל אביב</p>
                  </div>
                </div>
              </div>
            </div>

            {/* טופס יצירת קשר */}
            <div className="lg:w-2/3 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">שם מלא</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition" placeholder="ישראל ישראלי" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">טלפון</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition" placeholder="050-0000000" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">דוא"ל</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition" placeholder="example@mail.com" />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">הודעה</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition" placeholder="ספר לנו קצת על העסק שלך ואיך נוכל לעזור..."></textarea>
                </div>
                
                <button type="button" style={{ backgroundColor: colors.gold, color: colors.darkBlue }} className="w-full py-4 rounded-lg font-bold text-lg hover:opacity-90 transition duration-300 shadow-md">
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* כותרת תחתונה */}
      <footer style={{ backgroundColor: colors.darkBlue }} className="pt-12 pb-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <div style={{ color: colors.gold }} className="text-2xl font-bold tracking-wider mb-2">
                שם<span className="text-white">המותג</span>
              </div>
              <p className="text-gray-400 text-sm">השותפים שלך להצלחה עסקית.</p>
            </div>
            
            <div className="flex space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition">פייסבוק</a>
              <a href="#" className="text-gray-400 hover:text-white transition">לינקדאין</a>
              <a href="#" className="text-gray-400 hover:text-white transition">אינסטגרם</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} כל הזכויות שמורות לשם המותג.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
