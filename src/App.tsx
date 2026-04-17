import { useState, useEffect, type FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Clock, 
  Users, 
  Award,
  UtensilsCrossed,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ContactBar = () => (
  <div className="bg-brand-gold py-1.5 text-black text-[11px] font-bold text-center uppercase tracking-widest z-[60] relative">
    Now Booking for Wedding Season 2024-2025 • Call +91 98765 43210
  </div>
);

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
    { name: 'Home', href: '#' },
    { name: 'Our Story', href: '#story' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-bg/95 backdrop-blur-md py-4 shadow-xl border-brand-border' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className={`text-2xl font-serif font-bold tracking-tight leading-none ${isScrolled ? 'text-brand-gold' : 'text-white'}`}>
            SHAKIR
          </span>
          <span className={`text-[10px] tracking-[0.2em] font-sans font-medium ${isScrolled ? 'text-white/70' : 'text-white/80'}`}>
            CATERERS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-brand-gold ${
                isScrolled ? 'text-white/90' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+919876543210" 
            className="bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon className={isScrolled ? 'text-white' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-t border-brand-border py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 text-sm uppercase tracking-widest hover:text-brand-gold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+919876543210"
              className="bg-brand-gold text-brand-charcoal text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              Inquire Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.8)_0%,rgba(12,12,12,1)_100%)]">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Catering"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/40 to-brand-charcoal/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-brand-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 block">
            Crafting Culinary Memories Since 1995
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 leading-[1.1] text-balance">
            Exquisite Taste. <br />
            <span className="italic text-brand-gold">Perfect Service.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12 leading-relaxed">
            Mumbra's most trusted premium caterers for weddings, ceremonies, and royal feasts. Authentic Mughlai flavors delivered with modern elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#menu" className="bg-brand-gold text-brand-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-gold-dark transition-all transform hover:-translate-y-1 shadow-2xl">
              Explore Our Menu
            </a>
            <a href="#contact" className="border border-white/30 text-white backdrop-blur-sm px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all">
              Book Your Event
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

const SpecialtyCard = ({ title, description, image, index }: { title: string; description: string; image: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="group relative h-[500px] overflow-hidden rounded-2xl shadow-xl flex flex-col justify-end p-8"
  >
    <img 
      src={image} 
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent"></div>
    <div className="relative z-10">
      <h3 className="text-3xl text-white font-serif mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 italic">
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 font-sans">
        {description}
      </p>
      <div className="w-8 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-700"></div>
    </div>
  </motion.div>
);

const OurStory = () => {
  return (
    <section id="story" className="py-32 bg-brand-bg overflow-hidden border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-border">
              <img 
                src="https://images.unsplash.com/photo-1547928576-a4a33237abb3?q=80&w=1964" 
                alt="Traditional Cooking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-10 -right-10 bg-brand-card p-10 rounded-2xl hidden md:block border border-brand-border shadow-2xl">
              <span className="text-4xl font-serif text-brand-gold block mb-2 font-light italic">25+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Years of Authentic Flavors</span>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase block">Established 1995</span>
            <h2 className="text-5xl md:text-6xl text-white leading-tight">The Legacy of <br /> <span className="italic font-normal accent">Authentic Taste</span></h2>
            <p className="text-white/60 text-lg leading-relaxed font-sans">
              Founded by Shakir Sheikh, our journey began with a single handi of aromatic biryani in the heart of Mumbra. Today, we are synonymous with culinary excellence, blending time-honored family recipes with world-class hospitality.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-sans">
              We believe that food is not just about sustenance; it's about the celebration of life. Whether it's a grand wedding or an intimate nikkah, we pour our heart into every spice blend and every slow-cooked feast.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-4 border-l-4 border-brand-gold pl-6 py-2">
                <span className="text-sm italic text-white/80 font-medium font-serif">"Our spices are ground fresh daily, our meats are farm-to-table, and our passion is unmatched."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070",
    "https://images.unsplash.com/photo-1617692855693-3563c021be42?q=80&w=2070",
    "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1974",
    "https://images.unsplash.com/photo-1512485600893-b08ec1d59f1c?q=80&w=2070",
    "https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=2070",
    "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1927"
  ];

  return (
    <section className="py-32 bg-brand-bg border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Visual Feast</span>
          <h2 className="text-5xl font-serif text-white uppercase italic font-light tracking-tight">Catering <span className="underline decoration-brand-gold/30 underline-offset-8">Gallery</span></h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-brand-border"
            >
              <img src={img} alt="Catering Gallery" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Award />, title: "Premium Quality", desc: "Sourcing only the finest ingredients for every dish." },
    { icon: <Users />, title: "Expert Team", desc: "Professional staff trained to handle massive events with grace." },
    { icon: <Clock />, title: "On-Time Service", desc: "Punctuality is the cornerstone of our serving ethics." },
    { icon: <UtensilsCrossed />, title: "Custom Menus", desc: "Tailored culinary experiences for your unique needs." },
  ];

  return (
    <section className="py-24 bg-brand-card text-white border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-6 group hover:bg-brand-gold hover:text-black transition-all duration-300">
                {f.icon}
              </div>
              <h4 className="text-[11px] font-bold mb-3 uppercase tracking-[0.2em]">{f.title}</h4>
              <p className="text-white/40 text-[13px] leading-relaxed font-sans">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuHighlight = () => {
  const highlights = [
    { name: "Shahi Chicken Biryani", price: "₹280", desc: "Slow-cooked aromatic basmati rice with marinated succulents chicken.", category: "Mughlai" },
    { name: "Lucknowi Seekh Kabab", price: "₹350", desc: "Melt-in-mouth minced meat kababs charred to perfection.", category: "Starters" },
    { name: "Creamy Malai Kofta", price: "₹240", desc: "Hand-rolled paneer dumplings in a rich cashew-nut gravy.", category: "Vegetarian" },
    { name: "Royal Firni", price: "₹120", desc: "Traditional milk pudding set in clay pots with saffron and nuts.", category: "Desserts" },
    { name: "Kashmiri Pulao", price: "₹180", desc: "Fruity and nutty mild rice with premium saffron.", category: "Mughlai" },
    { name: "Golden Crispy Prawns", price: "₹450", desc: "Fresh catch marinated in our secret blend of spices.", category: "Seafood" },
  ];

  return (
    <section id="menu" className="py-32 bg-brand-bg relative overflow-hidden border-b border-brand-border">
      {/* Decorative text */}
      <h2 className="absolute top-0 right-0 text-[15vw] font-serif font-black text-brand-gold/[0.03] leading-none select-none pointer-events-none -translate-y-1/4 translate-x-1/4">
        FLAVORS
      </h2>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Culinary Masterpieces</span>
          <h2 className="text-5xl md:text-6xl text-white mb-8">Selected Menu <span className="italic font-normal accent">Highlights</span></h2>
          <p className="text-white/60 text-lg leading-relaxed font-sans">
            While our full menu covers over 200 items across multiple cuisines, these seasonal favorites represent our commitment to heritage and taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="flex justify-between items-end border-b border-brand-border pb-4 mb-3">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-tighter text-brand-gold font-bold mb-1 opacity-100 transition-opacity">
                    {item.category}
                  </span>
                  <h4 className="text-xl font-medium font-serif">{item.name}</h4>
                </div>
                <span className="text-lg font-bold text-brand-gold">{item.price}</span>
              </div>
              <p className="text-white/40 text-sm italic font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-gold transition-colors">
            Download Full Menu (PDF)
            <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-32 bg-brand-card flex items-center justify-center overflow-hidden border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 bg-brand-bg p-12 rounded-3xl text-white border border-brand-border shadow-2xl">
              <Quote className="text-brand-gold w-16 h-16 mb-8 opacity-20" />
              <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed text-white/90">
                "Shakir Caterers transformed my brother's wedding into a royal affair. The Biryani was exactly like the one we used to have at old Mumbra feasts—rich, fragrant, and unforgettable. Their service staff were professional until the very end."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center font-bold text-black text-sm">
                  ZK
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[11px] text-white">Zaid Khan</h5>
                  <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Wedding Event, 2024</p>
                </div>
              </div>
            </div>
            
            {/* Justdial Badge floating */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -right-6 lg:-right-10 z-20 bg-brand-card shadow-2xl p-6 rounded-2xl flex flex-col items-center border border-brand-border"
            >
              <div className="flex items-center gap-1 text-brand-gold mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <span className="text-2xl font-black text-white leading-none">4.8/5</span>
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Justdial Rating</span>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Proven Trust</span>
              <h2 className="text-5xl font-serif text-white mb-6 leading-tight">Join Thousands of <br /> <span className="italic font-normal accent">Happy Guests</span></h2>
              <p className="text-white/50 leading-relaxed max-w-lg mb-8 font-sans">
                Operating for nearly 30 years, our reputation is built on one simple rule: never compromise on taste. From intimate family dinners to 5000+ guest weddings, we bring the same passion to every plate.
              </p>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-serif text-white">12k+</span>
                  <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Plates Served</span>
                </div>
                <div className="w-px h-8 bg-brand-border"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-serif text-white">25+</span>
                  <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Years Experience</span>
                </div>
                <div className="w-px h-8 bg-brand-border"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-serif text-white">60+</span>
                  <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">5-Star Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-brand-bg text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Available Now</span>
            <h2 className="text-5xl font-serif mb-12">Start Your Culinary <span className="italic font-normal accent">Journey</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <h6 className="uppercase font-bold tracking-widest text-[10px] text-white/40 mb-1">Location</h6>
                  <p className="text-lg leading-relaxed text-white/80 font-sans">
                    Anand Koliwada, Mumbra, Thane <br />
                    Near Nafees Baug Ceremony Hall, Maharashtra 400612
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center shrink-0">
                  <Phone className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <h6 className="uppercase font-bold tracking-widest text-[10px] text-white/40 mb-1">WhatsApp & Call</h6>
                  <p className="text-lg leading-relaxed text-white/80 font-sans">
                    +91 91375 55555 <br />
                    +91 22 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center shrink-0">
                  <Mail className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <h6 className="uppercase font-bold tracking-widest text-[10px] text-white/40 mb-1">Email</h6>
                  <p className="text-lg leading-relaxed text-white/80 font-sans">info@shakircaterers.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a href="https://www.instagram.com/shakir_caterers" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-gold transition-colors group">
                <Instagram className="group-hover:text-black" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-gold transition-colors group">
                <Users className="group-hover:text-black" />
              </a>
            </div>
          </div>

          <div className="bg-brand-card p-12 rounded-3xl border border-brand-border relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40 block mb-2">Name</label>
                      <input required type="text" className="w-full bg-brand-bg border border-brand-border rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-white font-sans" placeholder="Sajid Sheikh" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40 block mb-2">Event Date</label>
                      <input required type="date" className="w-full bg-brand-bg border border-brand-border rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-white appearance-none font-sans" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-black tracking-widest text-white/40 block mb-2">Message & Guest Count</label>
                    <textarea required rows={4} className="w-full bg-brand-bg border border-brand-border rounded-xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-white font-sans" placeholder="Tell us about your event..."></textarea>
                  </div>
                  <button type="submit" className="w-full border border-brand-gold text-brand-gold py-5 rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-black transition-all shadow-xl active:scale-[0.98]">
                    Submit Inquiry
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                    <Award className="text-black w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4 text-white uppercase italic font-light">Inquiry Received</h3>
                  <p className="text-white/60 leading-relaxed mb-8 font-sans">
                    Thank you for reaching out to Shakir Caterers. Our event specialist will contact you within 24 hours to discuss your masterpiece.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-gold text-[10px] font-bold uppercase tracking-widest hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="min-h-screen relative bg-brand-bg text-white selection:bg-brand-gold selection:text-black">
      <ContactBar />
      <Navbar />
      <Hero />
      <OurStory />
      
      <section id="specialties" className="py-32 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Culinary Expertise</span>
              <h2 className="text-5xl md:text-6xl text-white">Our Grand <br /> <span className="italic font-normal accent">Specialties</span></h2>
            </div>
            <p className="text-white/40 text-lg md:text-right max-w-sm font-sans">
              Each dish is a result of decades of refined recipes and traditional techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <SpecialtyCard 
              index={0}
              title="Signature Biryani"
              description="Our crown jewel. Aromatic long-grain basmati rice layered with hormone-free succulents and 14 secret spices."
              image="https://images.unsplash.com/photo-1589302168068-1c48152b4ee5?q=80&w=2070"
            />
            <SpecialtyCard 
              index={1}
              title="Royal Mughlai"
              description="Rich, creamy gravies including Nihari, Korma, and Haleem that redefine indulgence."
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070"
            />
            <SpecialtyCard 
              index={2}
              title="Modern Fusion"
              description="Sophisticated Chinese and Continental offerings tailored for modern appetites."
              image="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2071"
            />
          </div>
        </div>
      </section>

      <Features />
      <MenuHighlight />
      <Gallery />
      <Reviews />
      <Contact />

      <footer className="py-20 bg-brand-footer text-white/30 border-t border-brand-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start tracking-tighter">
            <span className="text-xl font-serif font-black text-white/80">SHAKIR CATERERS</span>
            <span className="text-[8px] uppercase tracking-widest font-black">Mumbra, Thane</span>
          </div>
          <div className="text-[10px] uppercase font-bold tracking-[0.3em]">
            &copy; 2024 Shakir Caterers. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
