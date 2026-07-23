import type { Project, BlogPost, Testimonial, Service } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "NephroDesk — Diyaliz Klinik Yönetim Platformu",
    slug: "nephrodesk-klinik-yonetim",
    description:
      "Diyaliz merkezleri için uçtan uca klinik operasyon platformu. Hasta kaydından seans yönetimine, SGK faturalama entegrasyonundan laboratuvar takibine kadar tüm klinik süreçleri tek sistemde.",
    longDescription:
      "NephroDesk; diyaliz merkezlerinin tüm operasyonel ve klinik süreçlerini dijitalleştiren kapsamlı bir platform. Hasta yönetimi, tedavi seans takibi, laboratuvar entegrasyonu, SGK faturalama, su analizi ve personel yönetimi modüllerini içerir. Türkiye'deki özel ve zincir diyaliz merkezlerinde aktif olarak kullanılmaktadır.",
    category: "hasta-takip",
    tags: ["Dialysis", "Clinical Management", "SGK", "LIS", "Faturalama"],
    image: "/images/projects/dialinelog-cover.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "Apache", "REST API", "SOAP/XML"],
    challenge:
      "Diyaliz merkezlerinin karmaşık klinik iş akışları; SGK faturalama entegrasyonu, su kalitesi yönetimi ve çoklu kullanıcı rolleri (doktor, hemşire, teknisyen, yönetici) gibi katmanlı gereksinimlerin tek, tutarlı bir platformda karşılanması.",
    solution:
      "Modül bazlı mimari ile her klinik birimin kendi ekranına sahip olduğu, rol bazlı erişim kontrolü (RBAC), SGK web servis entegrasyonu ve offline çalışabilme kapasitesine sahip web platformu geliştirildi.",
    result:
      "30+ diyaliz merkezinde aktif kullanım. %85 kağıt azalması, SGK faturalama hatalarında %95 düşüş, seans tamamlanma sürelerinde %30 iyileşme.",
    featured: true,
    year: 2022,
    client: "Özel Diyaliz Merkezleri — Türkiye",
    country: ["🇹🇷 Türkiye"],
    mockup: "/mockups/dashboard.html",
  },
  {
    id: "2",
    title: "NephroGlobal",
    slug: "dsys-patient-care-global",
    description:
      "Türkiye, Katar ve Makedonya'da 30+ merkezde aktif olan çok ülkeli diyaliz hasta takip ve klinik yönetim platformu. Makedonya'da yerel LIS sistemiyle tam entegre, Kiril alfabesi destekli arayüz.",
    longDescription:
      "NephroGlobal; farklı ülkelerin sağlık mevzuatlarına, dillerine ve sigorta sistemlerine uyum sağlayan multi-tenant klinik platform. Makedonya'da yerel HIS/LIS sistemiyle entegrasyon kurularak hastaların laboratuvar sonuçları (hemoglobin, kreatinin, kalium, fosfor, üre vb.) otomatik olarak HIS'ten çekilmekte, tek tıkla hasta dosyasına aktarılmakta ve klinik referans aralıklarına göre uyarı üretilmektedir. Makedonce (Kiril) ve İngilizce çift dil destekli arayüz ile çalışır. Her ülke kendi konfigürasyonunu barındırırken merkezi raporlama altyapısı tüm lokasyonları tek noktadan izlemeye olanak tanır.",
    category: "hasta-takip",
    tags: ["Global", "Multi-tenant", "Patient Management", "Dialysis", "Multilingual"],
    image: "/images/projects/dsys-cover.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "REST API", "JSON", "XML"],
    challenge:
      "Türkiye (SGK), Katar (MOH) ve Makedonya yerel sağlık otoritelerinin farklı uyumluluk gereksinimlerini, dil yapılarını (TR/EN/AR/MK) ve para birimlerini tek kod tabanında yönetmek.",
    solution:
      "Ülke bazlı konfigürasyon katmanı, dinamik dil sistemi (i18n), yerel API adaptörleri ve merkezi tenant yönetim paneli ile esnek global altyapı kuruldu. Katar için RTL/Arapça desteği ayrıca geliştirildi.",
    result:
      "3 ülke, 30+ merkez, 5000+ aktif hasta. Tüm lokasyonlarda yerel uyumluluk sağlandı, merkezi kalite raporlaması hayata geçirildi.",
    featured: true,
    year: 2023,
    client: "Fresenius Medical Care — TR / QA / MK",
    country: ["🇹🇷 Türkiye", "🇶🇦 Katar", "🇲🇰 Makedonya"],
    mockup: "/mockups/dsys-dashboard.html",
    mockups: [
      { label: "Dashboard", src: "/mockups/dsys-dashboard.html" },
      { label: "Daily Treatment", src: "/mockups/dsys-treatment.html" },
      { label: "LIS Integration", src: "/mockups/dsys-lis.html" },
      { label: "LIS — Makedonya", src: "/mockups/dsys-lis-mk.html" },
      { label: "Monthly Lab", src: "/mockups/dsys-monthly-lab.html" },
      { label: "Session Plan", src: "/mockups/dsys-session-plan.html" },
    ],
  },
  {
    id: "9",
    title: "ClinicDesk — Özel Klinik Hasta & Yönetim Sistemi",
    slug: "clinicdesk-ozel-klinik-yonetim",
    description:
      "Özel poliklinikler için hasta kaydından muayeneye, randevu takviminden laboratuar tetkik istemine kadar tüm klinik süreçleri yöneten tam kapsamlı hasta & klinik yönetim platformu.",
    longDescription:
      "ClinicDesk; özel poliklinik ve muayenehanelerin tüm klinik iş akışlarını tek platformda toplayan, Türkçe arayüzlü bir hasta ve klinik yönetim sistemi. Hasta kaydı, SGK/sigorta bilgisi, randevu takvimi, muayene formu (şikayet, anamnez, sistem sorgulaması, özgeçmiş, soygeçmiş), ICD-10 tanı kodlama, laboratuvar tetkik istemi, ilaç reçetesi ve hasta doküman yönetimi modüllerini kapsar. Çok doktorlu klinikler için rol bazlı erişim ve kişisel randevu takvimleriyle çalışır.",
    category: "klinik-yonetim",
    tags: ["Poliklinik", "Hasta Yönetimi", "Randevu", "Muayene", "ICD-10", "SGK", "Özel Klinik"],
    image: "/images/projects/clinicdesk-cover.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "Apache", "REST API", "ICD-10"],
    challenge:
      "Farklı uzmanlık alanlarına sahip çok doktorlu özel kliniklerde; hasta takibi, randevu yönetimi ve muayene belgelerinin tek sistemde yönetilmesi, SGK sigorta bilgileri ile entegrasyon ve KVKK uyumlu veri güvenliği.",
    solution:
      "Rol bazlı erişim kontrolü (doktor / asistan / resepsiyon), kişisel randevu takvimleri, şablonlanabilir muayene formları (sistem sorgulaması, ICD-10), SGK sigorta modülü ve toplu hasta görüntüleme paneli ile kapsamlı poliklinik platformu geliştirildi.",
    result:
      "Klinik kağıt dosya kullanımı %90 azaldı. Randevu çakışması sıfıra indi. Muayene belgelendirme süresi hasta başına %60 kısaldı.",
    featured: true,
    year: 2024,
    client: "🔒 Confidential Client — Türkiye",
    country: ["🇹🇷 Türkiye"],
    mockup: "/mockups/clinic-patients.html",
    mockups: [
      { label: "Hasta Listesi", src: "/mockups/clinic-patients.html" },
      { label: "Randevu Takvimi", src: "/mockups/clinic-calendar.html" },
      { label: "Hasta Kaydı", src: "/mockups/clinic-registration.html" },
      { label: "Muayene", src: "/mockups/clinic-examination.html" },
      { label: "İlaç Tedavisi", src: "/mockups/clinic-medication.html" },
    ],
  },
  {
    id: "4",
    title: "LIS — Laboratuvar Entegrasyon Sistemi & Tahlil Takibi",
    slug: "lis-laboratuvar-entegrasyon",
    description:
      "Makedonya'daki diyaliz merkezinde Laboratuvar Entegrasyon Sistemi (LIS — Lab Integration System) web servisi üzerinden gerçek zamanlı hasta tahlil sonuçlarını çeken, otomatik hasta dosyasına aktaran ve kritik değerlerde klinik uyarı üreten entegrasyon modülü.",
    longDescription:
      "Bu entegrasyon; hastanenin Laboratuvar Entegrasyon Sistemi'nin (LIS — Lab Integration System) sunduğu web servisiyle doğrudan iletişim kurarak diyaliz hastalarına ait tahlil sonuçlarını otomatik çeker. Servis katmanlı PHP mimarisiyle geliştirilen sistem; LabApiService (LIS web servis iletişimi), LabIntegrationService (iş mantığı ve hasta eşleştirme) ve LabMapperService (farklı LIS formatlarını standart veri modeline dönüştürme) bileşenlerinden oluşur. Repository katmanı ile veri erişimi soyutlanmış, geliştirilebilir ve test edilebilir bir yapı kurulmuştur. Kreatinin, hemoglobin, kalium, fosfor, üre, Kt/V gibi 28+ parametrenin tümü referans aralıklarıyla karşılaştırılır; klinik dışı değerlerde otomatik uyarı üretilir ve sonuçlar tek tıkla NephroGlobal hasta aylık kontrol ekranına aktarılır.",
    category: "entegrasyon",
    tags: ["LIS", "Web Service", "PHP", "Repository Pattern", "Lab Integration", "Makedonya"],
    image: "/images/projects/lis-cover.jpg",
    techStack: ["PHP", "LIS Web Service", "REST API", "Repository Pattern", "Service Layer", "MySQL"],
    challenge:
      "Makedonya'daki hastanenin LIS sisteminin farklı veri formatlarını NephroGlobal hasta modeline uyarlamak; kimlik eşleştirme tutarsızlıklarını yönetmek ve tahlil sonuçlarını gerçek zamanlı, hatasız biçimde klinik akışa dahil etmek.",
    solution:
      "Servis katmanlı mimari (LabApiService + LabIntegrationService + LabMapperService) ve Repository pattern ile LIS'e adaptör katmanı kuruldu. Hasta kimlik eşleştirme, format dönüşümü ve hata yönetimi ayrı servislerle izole edilerek sistemin genişletilebilirliği sağlandı.",
    result:
      "Lab sonuçlarına erişim süresi 24 saatten dakikalara indi. Kritik değer gözden kaçırma sıfıra indi. Manuel veri girişi tamamen ortadan kalktı; aylık 28+ parametrelik tahlil paketi otomatik olarak hasta dosyasına işleniyor.",
    featured: true,
    year: 2023,
    country: ["🇲🇰 Makedonya"],
    mockup: "/mockups/dsys-lis-mk.html",
    mockups: [
      { label: "LIS — Makedonya", src: "/mockups/dsys-lis-mk.html" },
      { label: "LIS — Genel", src: "/mockups/dsys-lis.html" },
      { label: "Monthly Lab", src: "/mockups/dsys-monthly-lab.html" },
    ],
  },
  {
    id: "5",
    title: "Yetkinlik Değerlendirme Sistemi",
    slug: "yetkinlik-degerlendirme-sistemi",
    description:
      "Klinik personelin mesleki yetkinliklerini ölçen, gelişim planı oluşturan ve merkezi olarak takip eden değerlendirme platformu.",
    longDescription:
      "Hemşire, teknisyen ve klinik personelin periyodik yetkinlik değerlendirmelerini standart kriterlerle yapan, soru havuzu yönetimi, otomatik skorlama ve kişisel gelişim planı üreten sistem. Türkiye ve Makedonya kliniklerinde kullanılmaktadır.",
    category: "klinik-yonetim",
    tags: ["Competency", "HR", "Assessment", "Training"],
    image: "/images/projects/competency-cover.jpg",
    techStack: ["JavaScript", "PHP", "MySQL", "Chart.js", "PDF Export"],
    challenge:
      "Farklı ülkelerdeki personelin ortak standartlarda değerlendirilmesi, sonuçların şeffaf raporlanması ve bireysel gelişim planlarının takibi.",
    solution:
      "Özelleştirilebilir soru havuzu, çoktan seçmeli ve gözlemsel değerlendirme modülleri, otomatik skor ve gelişim önerileri sistemi.",
    result:
      "Değerlendirme süresi %70 azaldı. Türkiye ve Makedonya genelinde standart klinik eğitim takibi sağlandı.",
    featured: false,
    year: 2024,
    client: "Fresenius Medical Care — TR / MK",
    country: ["🇹🇷 Türkiye", "🇲🇰 Makedonya"],
  },
  {
    id: "6",
    title: "Aylık Klinik Raporlama & Kalite Metrikleri",
    slug: "aylik-klinik-raporlama",
    description:
      "Kt/V, URR, hemoglobin hedef aralığı gibi diyaliz kalite göstergelerini otomatik hesaplayan ve PDF/Excel formatında raporlayan analitik sistem.",
    longDescription:
      "Diyaliz yeterlilik metrikleri (Kt/V, URR), anemi yönetimi (Hb, ferritin, EPO dozu), kemik mineral metabolizması ve vasküler erişim kalitesi gibi parametreleri periyodik olarak hesaplayan, merkezi yönetim raporları üretiyor.",
    category: "raporlama",
    tags: ["Quality Metrics", "Kt/V", "Reporting", "Analytics", "PDF"],
    image: "/images/projects/reports-cover.jpg",
    techStack: ["PHP", "MySQL", "PDF Generation", "Excel Export", "Chart.js"],
    challenge:
      "Yüzlerce hastanın aylık klinik verilerini doğru hesaplamak, ülke bazlı kalite hedefleriyle karşılaştırmak ve yöneticiye anlamlı raporlar sunmak.",
    solution:
      "Parametre bazlı hesaplama motoru, hedef aralık karşılaştırması ve klinik direktör için özet dashboard ile otomatik aylık raporlama.",
    result:
      "Raporlama süresi %85 azaldı. Sıfır hesaplama hatası. 3 ülkede aktif kullanım.",
    featured: false,
    year: 2024,
    country: ["🇹🇷 Türkiye", "🇶🇦 Katar", "🇲🇰 Makedonya"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hemodiyaliz Dijital İş Akışı: Hasta Kayıttan Seans Tamamlamaya Uçtan Uca Süreç",
    slug: "hemodiyaliz-dijital-is-akisi",
    excerpt:
      "Hasta kabulünden SGK faturalamasına kadar diyaliz merkezinde dijitalleşen her adımı ve yazılımın bu süreçlerde nasıl fark yarattığını anlatan kapsamlı bir klinik iş akışı rehberi.",
    content: "",
    coverImage: "/images/blog/workflow.jpg",
    category: "Clinical Workflow",
    tags: ["Diyaliz", "Klinik İş Akışı", "Dijitalleşme", "SGK"],
    publishedAt: "2025-01-10",
    readingTime: "12 dk okuma",
    featured: true,
  },
  {
    id: "3",
    title: "Diyaliz Merkezinde LIS Entegrasyonu: Otomatik Lab Sonuçları ve Klinik Uyarı Sistemi",
    slug: "diyaliz-lis-entegrasyon-lab-sonuclari",
    excerpt:
      "Laboratuvar bilgi sistemi entegrasyonuyla Kt/V, hemoglobin ve ferritin değerlerini otomatik çekerek klinik karar destek mekanizması nasıl kurulur?",
    content: "",
    coverImage: "/images/blog/lis.jpg",
    category: "Teknik",
    tags: ["LIS", "Laboratuvar", "Kt/V", "Klinik Karar Destek"],
    publishedAt: "2025-02-28",
    readingTime: "9 dk okuma",
    featured: false,
  },
  {
    id: "4",
    title: "Su Analizi Yönetimi: Diyaliz Merkezlerinde ISO 23500 Uyumluluğu",
    slug: "su-analizi-iso-23500-diyaliz",
    excerpt:
      "Hemodiyal izasyon suyu kalite takibini yazılımla nasıl yönetiyoruz? ISO 23500 standardına uygun periyodik analiz kayıt ve uyarı sistemi.",
    content: "",
    coverImage: "/images/blog/water.jpg",
    category: "Kalite & Uyumluluk",
    tags: ["Su Analizi", "ISO 23500", "Kalite", "Akreditasyon"],
    publishedAt: "2025-03-15",
    readingTime: "7 dk okuma",
    featured: false,
  },
  {
    id: "5",
    title: "Global Healthcare IT: Türkiye, Katar ve Makedonya'da Aynı Platformu Çalıştırmanın Zorlukları",
    slug: "global-healthcare-it-cok-ulkeli-platform",
    excerpt:
      "Farklı sağlık mevzuatları, diller ve sigorta sistemleriyle çalışan tek bir klinik platform nasıl tasarlanır? Multi-tenant mimariden ülke bazlı uyumluluk stratejisine.",
    content: "",
    coverImage: "/images/blog/global.jpg",
    category: "Healthcare IT",
    tags: ["Global", "Multi-tenant", "Healthcare IT", "Mimari"],
    publishedAt: "2025-04-01",
    readingTime: "11 dk okuma",
    featured: false,
  },
  {
    id: "6",
    title: "Klinik Yazılımlarda Veri Güvenliği: KVKK ve Sağlık Verisi Yönetimi",
    slug: "klinik-yazilim-veri-guvenligi-kvkk",
    excerpt:
      "Hasta verilerinin korunması için uyguladığımız güvenlik katmanları, rol bazlı erişim kontrolü ve KVKK uyumluluk stratejileri.",
    content: "",
    coverImage: "/images/blog/security.jpg",
    category: "Güvenlik & Uyumluluk",
    tags: ["KVKK", "Veri Güvenliği", "RBAC", "Compliance"],
    publishedAt: "2025-04-20",
    readingTime: "8 dk okuma",
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Ahmet Yılmaz",
    role: "Nefroloji Uzmanı",
    company: "Fresenius Medical Care",
    content:
      "Lab sonuçları artık otomatik geliyor, Kt/V hesaplamalarını manuel yapmıyoruz. Klinik karar verme sürecimiz ciddi anlamda hızlandı.",
    rating: 5,
  },
  {
    id: "2",
    name: "Hemşire Selin Demir",
    role: "Sorumlu Hemşire",
    company: "Özel Diyaliz Merkezi",
    content:
      "Seans ekranı çok pratik. Makine ataması, seans başlatma, ilaç kaydı hepsi tek sayfada. Kağıt form dönemi bitti.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mehmet Arslan",
    role: "Klinik Direktörü",
    company: "Zincir Diyaliz Grubu",
    content:
      "SGK faturalama entegrasyonu öncesi hatalarımız çok fazlaydı. Şimdi süreç otomatik, hata neredeyse sıfır. Bu modül tek başına sistemi amorti etti.",
    rating: 5,
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Diyaliz Klinik Yönetim Sistemi",
    description:
      "Hasta kabulünden taburculuğa, seans yönetiminden personel takibine uçtan uca diyaliz merkezi operasyon platformu.",
    icon: "Monitor",
    features: [
      "Hasta kayıt & demografik yönetim",
      "Hemodiyaliz seans planlama & yürütme",
      "Makine atama & teknik takip",
      "Vasküler erişim ve komplikasyon kaydı",
      "Su analizi & teknik kalite modülü",
      "Personel & kullanıcı yönetimi",
    ],
  },
  {
    id: "3",
    title: "Laboratuvar Entegrasyonu",
    description:
      "Harici laboratuvar sistemlerinden otomatik sonuç çekme, klinik parametre trending ve akıllı uyarı mekanizmaları.",
    icon: "FlaskConical",
    features: [
      "LIS'ten otomatik sonuç alma",
      "Kt/V, URR, Hb trend analizi",
      "Kritik değer alarmları",
      "Doktor-hemşire bildirim akışı",
      "Aylık kalite metrik raporu",
      "Referans aralık yönetimi",
    ],
  },
  {
    id: "4",
    title: "Klinik Raporlama & Analitik",
    description:
      "Diyaliz kalite göstergelerini, yönetim metriklerini ve denetim raporlarını otomatik üreten analitik platform.",
    icon: "BarChart3",
    features: [
      "Aylık diyaliz yeterlilik raporu",
      "Anemi, kemik mineral yönetimi",
      "Yönetim dashboard & KPI",
      "PDF/Excel otomatik çıktı",
      "Denetim & akreditasyon raporları",
      "Çok lokasyonlu karşılaştırma",
    ],
  },
  {
    id: "5",
    title: "Global & Çok Dilli Platform",
    description:
      "Farklı ülke mevzuatlarına, dillerine ve sigorta sistemlerine uyum sağlayan multi-tenant klinik yazılım mimarisi.",
    icon: "Globe",
    features: [
      "Multi-tenant mimari",
      "TR / EN / MK dil desteği",
      "Ülke bazlı uyumluluk katmanı",
      "Yerel sigorta API adaptörleri",
      "Merkezi çok lokasyonlu yönetim",
    ],
  },
  {
    id: "6",
    title: "Healthcare IT Danışmanlığı",
    description:
      "Klinik dijital dönüşüm stratejisi, süreç analizi ve sağlık yazılımı seçim danışmanlığı.",
    icon: "Lightbulb",
    features: [
      "Klinik süreç analizi & haritalama",
      "Dijital dönüşüm yol haritası",
      "KVKK / veri güvenliği uyumu",
      "Yazılım seçim & tedarik danışmanlığı",
      "Personel eğitim & onboarding",
      "Sistem geçiş & veri migrasyonu",
    ],
  },
  {
    id: "7",
    title: "Kurumsal Çok Dilli Web Sitesi",
    description:
      "Türkçe, İngilizce ve diğer dillerde tam lokalizasyon destekli, kurumsal kimliğe uygun profesyonel web sitesi geliştirme.",
    icon: "Languages",
    features: [
      "Çok dilli (i18n) içerik yönetimi",
      "Kurumsal kimlik & marka uyumu",
      "SEO optimizasyonu",
      "Mobil uyumlu (responsive) tasarım",
      "CMS entegrasyonu & içerik yönetimi",
      "Hız & performans optimizasyonu",
    ],
  },
  {
    id: "8",
    title: "Özel Web Uygulama Geliştirme",
    description:
      "Şirketinizin iş süreçlerine özel; panel, dashboard, CRM veya operasyon yönetim uygulamaları.",
    icon: "Code2",
    features: [
      "İş sürecine özel yazılım tasarımı",
      "Yönetim paneli & dashboard",
      "Kullanıcı rol & yetki yönetimi",
      "REST API entegrasyonu",
      "Veritabanı tasarımı & optimizasyonu",
      "Bakım & teknik destek",
    ],
  },
  {
    id: "9",
    title: "Landing Page & Tanıtım Sitesi",
    description:
      "Ürün, hizmet veya kampanya için dönüşüm odaklı, hızlı yüklenen profesyonel landing page.",
    icon: "Rocket",
    features: [
      "Dönüşüm odaklı sayfa tasarımı",
      "Hızlı yükleme & Core Web Vitals",
      "Form & lead toplama entegrasyonu",
      "Google Analytics & izleme",
      "A/B test desteği",
      "Mobil öncelikli tasarım",
    ],
  },
];

export const stats = [
  { value: "3", label: "Ülke" },
  { value: "30+", label: "Klinik & Merkez" },
  { value: "5+", label: "Yıl Deneyim" },
  { value: "5000+", label: "Aktif Hasta" },
];

export const countries = [
  {
    code: "TR",
    flag: "🇹🇷",
    name: "Türkiye",
    description: "Diyaliz kliniklerinde kullanılan Medula entegrasyonlu hasta & seans yönetim platformu.",
  },
  {
    code: "QA",
    flag: "🇶🇦",
    name: "Katar",
    description: "Katar Sağlık Bakanlığı uyumlu, İngilizce arayüz platformu.",
  },
  {
    code: "MK",
    flag: "🇲🇰",
    name: "Makedonya",
    description: "Yerel sağlık otoritesi uyumlu hasta kayıt ve seans yönetimi.",
  },
];

export const workflowSteps = [
  {
    id: 1,
    title: "Hasta Kayıt & Kabul",
    description: "Hasta kayıt süreçleri, kimlik doğrulama, sigorta/provizyon kontrolleri ve dijital hasta dosyası yönetimi.",
    icon: "UserPlus",
    color: "#1e3a5f",
  },
  {
    id: 2,
    title: "Tedavi Planlama & Reçete Yönetimi",
    description: "Hemodiyaliz reçeteleri, tedavi parametreleri, seans planlama ve doktor onay süreçlerinin yönetimi.",
    icon: "FileText",
    color: "#2a4f7c",
  },
  {
    id: 3,
    title: "Klinik Operasyon Yönetimi",
    description: "Çoklu klinik yapıları, makine-plan eşleştirmeleri, kaynak yönetimi ve günlük operasyon takibi.",
    icon: "Cpu",
    color: "#1e3a5f",
  },
  {
    id: 4,
    title: "Seans Takibi & Hasta İzleme",
    description: "Vital bulgu takibi, hemşire gözlemleri, komplikasyon kayıtları ve gerçek zamanlı hasta izleme süreçleri.",
    icon: "Activity",
    color: "#2a4f7c",
  },
  {
    id: 5,
    title: "Laboratuvar & Entegrasyon Yönetimi",
    description: "LIS entegrasyonları, otomatik sonuç aktarımı, kritik değer bildirimleri ve sağlık veri entegrasyonları.",
    icon: "FlaskConical",
    color: "#1e3a5f",
  },
  {
    id: 6,
    title: "Raporlama & Karar Destek Sistemleri",
    description: "Klinik raporlar, kalite göstergeleri, performans analizleri, yönetim panelleri ve yapay zeka destekli karar mekanizmaları.",
    icon: "FileCheck",
    color: "#c9a84c",
  },
];
