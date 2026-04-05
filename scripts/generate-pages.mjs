import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { topicCatalog } from '../src/data/topicCatalog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const siteUrl = 'https://kpsstarih.com.tr';
const contactEmail = 'genelkultur46@gmail.com';
const googleAnalyticsId = 'G-S5QR7PD3ES';

const topicStyles = [
  { badge: 'T', color: '#f97316', bg: 'rgba(249, 115, 22, 0.12)' },
  { badge: 'K', color: '#0ea5e9', bg: 'rgba(14, 165, 233, 0.12)' },
  { badge: 'O', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.12)' },
  { badge: 'M', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
  { badge: 'X', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.12)' },
  { badge: 'H', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
  { badge: 'S', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.12)' },
  { badge: 'A', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)' },
  { badge: 'D', color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.12)' },
  { badge: 'C', color: '#a855f7', bg: 'rgba(168, 85, 247, 0.12)' }
];

const intentPages = [
  {
    slug: 'kpss-tarih-soru-coz',
    title: 'KPSS Tarih Soru Çöz',
    description:
      'KPSS Tarih için online soru çöz, konu bazlı testlere başla ve tüm başlıklarda mobil uyumlu soru pratiği yap.',
    headline: 'KPSS Tarih soru çöz deneyimi ile konu tekrarını hızlandır',
    intro:
      'Bu sayfa, doğrudan KPSS Tarih soru çözmek isteyen kullanıcılar için hazırlanmış özel bir giriş noktasıdır. Kategori bazlı testler, karışık soru çöz modu ve hızlı tekrar mantığıyla çalışır.',
    ctaHref: '/test/?topic=all',
    ctaLabel: 'Karışık soru çöz',
    bodySections: [
      {
        title: 'KPSS Tarih soru çöz sayfası ne işe yarar?',
        text: 'KPSS Tarih soru çöz odaklı bu sayfa, doğrudan pratiğe geçmek isteyen kullanıcılar için hazırlanmıştır. Konu seçerek yalnızca ilgili başlığın sorularını çözebilir, karışık mod ile tüm konular arasında genel tekrar yapabilirsin.'
      },
      {
        title: 'Soru çözerek hangi beceriler gelişir?',
        text: 'Tarih dersinde sadece bilgi bilmek yetmez; olay sırasını kurmak, benzer kavramları ayırt etmek ve yorum sorularında dikkatli okumak gerekir. Düzenli soru çözümü bu üç alanı birlikte güçlendirir.'
      }
    ],
    cards: [
      {
        title: 'Konu bazlı test çöz',
        text: 'İstediğin tarih konusunu seçerek sadece o başlığın soru havuzundan rastgele sorular çözebilirsin.'
      },
      {
        title: 'Genel tekrar yap',
        text: 'Karışık soru çöz modu, tüm başlıklardan seçilen sorularla sınav öncesi genel tarama yapmanı sağlar.'
      },
      {
        title: 'Mobil uyumlu çalışma',
        text: 'Telefon ve tablet ekranlarında da hızlı, sade ve odaklı bir soru çöz deneyimi sunulur.'
      }
    ],
    faq: [
      {
        q: 'KPSS Tarih soru çözmek ne zaman daha faydalıdır?',
        a: 'En verimli kullanım, kısa konu tekrarından hemen sonra yapılan soru çözümüdür. Böylece yeni öğrenilen bilgiler kalıcı hale gelir.'
      },
      {
        q: 'Karışık soru çöz modu kimler için uygundur?',
        a: 'Birden fazla konuyu tekrar etmiş ve genel tarama yapmak isteyen adaylar için karışık soru çöz modu oldukça uygundur.'
      }
    ],
    relatedLinks: [
      { label: 'KPSS Tarih konuları', href: '/kpss-tarih-konulari/' },
      { label: 'Atatürk İlkeleri soru çöz', href: '/ataturk-ilkeleri-soru-coz/' }
    ]
  },
  {
    slug: 'kpss-tarih-konulari',
    title: 'KPSS Tarih Konuları',
    description:
      'KPSS Tarih konularını sırayla inceleyin, hangi başlıktan başlanması gerektiğini görün ve kategori bazlı testlere geçin.',
    headline: 'KPSS Tarih konuları için planlı çalışma sırası oluştur',
    intro:
      'KPSS Tarih konuları arasında bir kronoloji ve mantık bağı vardır. Bu sayfa, hangi başlığa önce çalışılması gerektiğini görmek ve ardından ilgili sorulara geçmek isteyen kullanıcılar için hazırlanmıştır.',
    ctaHref: '/konular/',
    ctaLabel: 'Konuları incele',
    bodySections: [
      {
        title: 'KPSS Tarih konuları neden sırayla çalışılmalı?',
        text: 'Konu sırası doğru kurulduğunda yeni öğrenilen bilgiler önceki başlıklarla daha kolay bağlanır. Böylece hem ezber yükü azalır hem de soru çözerken kronolojik hatalar düşer.'
      },
      {
        title: 'Konu çalışması ile soru çözümü nasıl birleştirilmeli?',
        text: 'Her konu için kısa tekrar, ardından kategori bazlı soru çözümü ve son olarak yanlışlara geri dönme düzeni kurulmalıdır. Bu yaklaşım özellikle KPSS Tarih gibi bilgi yoğun derslerde verimi artırır.'
      }
    ],
    cards: [
      {
        title: 'Temel başlıkları sıraya koy',
        text: 'İslamiyet Öncesi Türk Tarihi, İlk Türk-İslam Devletleri ve Osmanlı konularıyla sağlam bir temel kur.'
      },
      {
        title: 'Modern dönem bloklarını bağla',
        text: 'Kurtuluş Savaşı, Atatürk İlkeleri ve dış politika başlıklarını temel bilgiler oturduktan sonra tekrar et.'
      },
      {
        title: 'Her konudan sonra test çöz',
        text: 'Konu tekrarı sonrası soru çözmek, bilgiyi kalıcı hale getirmenin en etkili yollarından biridir.'
      }
    ],
    faq: [
      {
        q: 'KPSS Tarih için hangi konudan başlanmalı?',
        a: 'Genel olarak temel tarih başlıklarıyla başlayıp ardından Osmanlı ve Cumhuriyet dönemine geçmek daha düzenli bir ilerleme sağlar.'
      },
      {
        q: 'Tüm konular bitmeden soru çözülür mü?',
        a: 'Evet. Hatta her konu biter bitmez o başlığın sorularını çözmek öğrenmeyi hızlandırır.'
      }
    ],
    relatedLinks: [
      { label: 'Konu seç sayfası', href: '/konular/' },
      { label: 'KPSS Tarih soru çöz', href: '/kpss-tarih-soru-coz/' }
    ]
  },
  {
    slug: 'ataturk-ilkeleri-soru-coz',
    title: 'Atatürk İlkeleri Soru Çöz',
    description:
      'Atatürk İlke ve İnkılapları konusunda online soru çöz, temel ilkeleri tekrar et ve kategori bazlı testlere başla.',
    headline: 'Atatürk İlke ve İnkılapları için odaklı soru çöz sayfası',
    intro:
      'Cumhuriyetçilik, milliyetçilik, halkçılık, devletçilik, laiklik ve inkılapçılık başlıklarını soru üzerinden tekrar etmek isteyen kullanıcılar için özel bir sayfadır.',
    ctaHref: '/test/?topic=ataturk-ilkel-ve-inkilaplari',
    ctaLabel: 'Atatürk ilkeleri testi çöz',
    bodySections: [
      {
        title: 'Atatürk İlkeleri soruları neden kritik?',
        text: 'KPSS Tarih içinde Atatürk İlke ve İnkılapları, hem doğrudan kavram bilgisi hem de yorum gücü gerektiren sorularla öne çıkar. Bu yüzden sadece metin okumak değil, soru pratiği yapmak da gerekir.'
      },
      {
        title: 'Bu konuda en çok ne karıştırılır?',
        text: 'Cumhuriyetçilik, halkçılık, devletçilik ve laiklik ilkeleri çoğu zaman inkılap örnekleriyle birlikte sorulur. Benzer görünen seçenekleri ayırmanın en iyi yolu düzenli soru çözmektir.'
      }
    ],
    cards: [
      {
        title: 'İlke-kavram ayrımı yap',
        text: 'Sorular, temel ilkelerin anlamlarını ve hangi inkılaplarla ilişkili olduklarını daha net ayırt etmeye yardım eder.'
      },
      {
        title: 'Sık çıkan kalıpları gör',
        text: 'Atatürk ilkeleri sorularında tekrar eden eşleştirme ve yorum kalıplarını pratik ederek hız kazan.'
      },
      {
        title: 'Kategoriye özel havuz kullan',
        text: 'Bu başlıkta çözülen sorular diğer konularla karışmaz; yalnızca ilgili kategori havuzundan gelir.'
      }
    ],
    faq: [
      {
        q: 'Atatürk İlkeleri sorularında nasıl hız kazanılır?',
        a: 'İlke-kavram eşleştirmelerini ve hangi inkılabın hangi ilkeyle ilişkili olduğunu tekrar ederek hız kazanılabilir.'
      },
      {
        q: 'Bu sayfada çözülen sorular diğer konularla karışır mı?',
        a: 'Hayır. Bu sayfadan gidilen quiz ekranı yalnızca Atatürk İlke ve İnkılapları kategorisinin soru havuzunu kullanır.'
      }
    ],
    relatedLinks: [
      { label: 'Atatürk dönemi dış politika', href: '/konular/ataturk-donemi-turk-dis-politikasi/' },
      { label: 'Konu seç ekranı', href: '/konular/' }
    ]
  },
  {
    slug: 'kurtulus-savasi-hazirlik-donemi-test',
    title: 'Kurtuluş Savaşı Hazırlık Dönemi Test',
    description:
      'Kurtuluş Savaşı Hazırlık Dönemi için online test çöz, kongreler ve genelgeler konusunu soru üzerinden tekrar et.',
    headline: 'Kurtuluş Savaşı Hazırlık Dönemi testleri ile kongreler sürecini pekiştir',
    intro:
      'Samsun, Havza, Amasya, Erzurum ve Sivas sürecini soru bazlı tekrar etmek isteyenler için hazırlanmış odaklı bir test sayfasıdır.',
    ctaHref: '/test/?topic=kurtulus-savasi-hazirlik',
    ctaLabel: 'Hazırlık dönemi testi çöz',
    bodySections: [
      {
        title: 'Hazırlık dönemi test çözmek neden önemlidir?',
        text: 'Kurtuluş Savaşı Hazırlık Dönemi; genelgeler, kongreler, temsil heyeti ve milli teşkilatlanma gibi birbiriyle bağlantılı başlıklardan oluşur. Soru çözmek bu bağlantıları daha net görmeyi sağlar.'
      },
      {
        title: 'Kongreler ve genelgeler nasıl tekrar edilmeli?',
        text: 'Önce karar başlıkları kısa notlarla özetlenmeli, ardından aynı gün içinde soru çözülmelidir. Böylece Amasya, Erzurum ve Sivas kararları arasındaki farklar daha iyi yerleşir.'
      }
    ],
    cards: [
      {
        title: 'Genelgeler ve kongreler',
        text: 'Hazırlık döneminin en çok sorulan karar ve belge başlıkları soru pratiğiyle daha hızlı yerleşir.'
      },
      {
        title: 'Kronolojiyi güçlendir',
        text: 'Olay sıralamasını karıştırmamak için soru çözümünde tarih ve süreç ilişkisine odaklan.'
      },
      {
        title: 'Sınav öncesi kısa tekrar',
        text: 'Bu sayfa özellikle sınav öncesinde tek konuya yoğunlaşıp hızlı tekrar yapmak için güçlü bir giriş noktasıdır.'
      }
    ],
    faq: [
      {
        q: 'Hazırlık dönemi ile muharebeler dönemi soruları karışır mı?',
        a: 'Bu sayfadan girilen test yalnızca hazırlık dönemi kategorisine ait soruları getirir; muharebeler dönemi sorularıyla karışmaz.'
      },
      {
        q: 'Bu sayfa en çok hangi tekrar için uygundur?',
        a: 'Sınav öncesi hızlı tekrar, kongre kararlarını ayırt etme ve kronoloji çalışması için oldukça uygundur.'
      }
    ],
    relatedLinks: [
      { label: 'Kurtuluş Savaşı muharebeler dönemi', href: '/konular/kurtulus-savasi-muharebeler-donemi/' },
      { label: 'KPSS Tarih soru çöz', href: '/kpss-tarih-soru-coz/' }
    ]
  }
];

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function writeFile(relativePath, content) {
  const target = path.join(projectRoot, relativePath);
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, content, 'utf8');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function pageLayout({ title, description, canonicalPath, body, structuredData = [] }) {
  const canonical = `${siteUrl}${canonicalPath}`;
  const scripts = structuredData
    .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join('\n');
  const analyticsScript = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}');
    </script>`;

  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="KPSS Tarih" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/seo.css" />
    ${analyticsScript}
    ${scripts}
  </head>
  <body>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/">
          <span class="brand-mark"><img src="/favicon.svg" alt="KPSS Tarih logosu" width="44" height="44" /></span>
          <span>KPSS Tarih</span>
        </a>
        <nav class="top-nav" aria-label="Ana menü">
          <a href="/">Ana Sayfa</a>
          <a href="/konular/">Konular</a>
          <a href="/test/">Soru Çöz</a>
          <a href="/hakkimizda/">Hakkımızda</a>
          <a href="/iletisim/">İletişim</a>
          <a href="/gizlilik/">Gizlilik</a>
        </nav>
      </div>
    </header>
    ${body}
    <footer class="site-footer">
      <div class="container footer-box">
        <div>KPSS Tarih hazırlığında konu tekrarı, soru pratiği ve hızlı erişim için yanınızdayız.</div>
        <div class="footer-links">
          <a href="/konular/">Konular</a>
          <a href="/test/">Soru Çöz</a>
          <a href="/hakkimizda/">Hakkımızda</a>
          <a href="/iletisim/">İletişim</a>
          <a href="/gizlilik/">Gizlilik</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;
}

function renderTopicCard(topic, index) {
  const style = topicStyles[index % topicStyles.length];

  return `
    <article class="topic-card">
      <div class="topic-icon" style="background:${style.bg}; color:${style.color};">${style.badge}</div>
      <h3>${escapeHtml(topic.title)}</h3>
      <div class="card-actions">
        <a class="button" href="/test/?topic=${topic.id}">Hemen Başla</a>
      </div>
    </article>`;
}

function topicFaq(topic) {
  return [
    {
      q: `${topic.shortTitle} çalışırken önce konu mu soru mu çözülmeli?`,
      a: `En verimli yöntem, ${topic.shortTitle} konusunu kısa bir özetle tekrar ettikten sonra aynı başlığın sorularını çözmektir. Bu yaklaşım bilgi-kalıp bağlantısını güçlendirir.`
    },
    {
      q: `${topic.shortTitle} soruları diğer konularla karışır mı?`,
      a: `Hayır. Bu kategori üzerinden başlatılan testler yalnızca ${topic.shortTitle} soru havuzunu kullanır; diğer konularla karışmaz.`
    }
  ];
}

function topicSupportSections(topic) {
  return [
    {
      title: `${topic.shortTitle} için çalışma taktiği`,
      text: `${topic.shortTitle} çalışırken önce temel kavramları, olay sırasını ve sık sorulan ayrımları netleştirmek gerekir. Ardından kısa tekrarlarla birlikte kategori bazlı soru çözmek öğrenmeyi daha kalıcı hale getirir.`
    },
    {
      title: `${topic.shortTitle} sorularında en çok ne zorlar?`,
      text: `Bu başlıkta adaylar çoğunlukla benzer kavramları karıştırma, kronolojiyi kaçırma veya ayrıntı bilgiyi yorum sorusuyla birleştirmekte zorlanır. Düzenli pratik bu hataları azaltır.`
    },
    {
      title: `${topic.shortTitle} testi kimler için uygundur?`,
      text: `Bu kategori sayfası hem konuyu yeni bitiren adaylar hem de sınav öncesi hızlı tekrar yapmak isteyen kullanıcılar için uygundur. Tek havuz mantığı sayesinde odaklı çalışma sağlar.`
    }
  ];
}

function topicRelatedLinks(topic) {
  const topicIndex = topicCatalog.findIndex((item) => item.id === topic.id);
  const previousTopic = topicCatalog[topicIndex - 1];
  const nextTopic = topicCatalog[topicIndex + 1];

  return [
    previousTopic
      ? { label: `${previousTopic.shortTitle} sayfası`, href: `/konular/${previousTopic.slug}/` }
      : { label: 'KPSS Tarih konuları', href: '/kpss-tarih-konulari/' },
    nextTopic
      ? { label: `${nextTopic.shortTitle} sayfası`, href: `/konular/${nextTopic.slug}/` }
      : { label: 'Karışık soru çöz', href: '/kpss-tarih-soru-coz/' }
  ];
}

function generateHomePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'KPSS Tarih',
      url: siteUrl,
      inLanguage: 'tr-TR'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: topicCatalog.map((topic, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: topic.title,
        url: `${siteUrl}/konular/${topic.slug}/`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'KPSS Tarih çalışırken önce konu mu soru mu çözülmeli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Önce kısa konu tekrarı yapmak, ardından aynı başlıkta soru çözmek daha verimli bir çalışma düzeni sağlar.'
          }
        },
        {
          '@type': 'Question',
          name: 'KPSS Tarih için hangi konudan başlanmalı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Genel olarak İslamiyet Öncesi Türk Tarihi, İlk Türk-İslam Devletleri ve Osmanlı başlıklarıyla başlanıp ardından Kurtuluş Savaşı ve Atatürk dönemi konularına geçmek mantıklıdır.'
          }
        },
        {
          '@type': 'Question',
          name: 'KPSS Tarih online soru çözmek faydalı mı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kategori bazlı online soru çözmek, özellikle tekrar sonrası bilgiyi pekiştirmek ve sık çıkan kalıpları görmek açısından oldukça faydalıdır.'
          }
        }
      ]
    }
  ];

  const body = `
    <main>
      <section class="hero-shell">
        <div class="container hero-center">
          <div class="hero-main">
            <div class="hero-kicker">Hızlı tekrar, net pratik</div>
            <div class="icon-box"><img src="/favicon.svg" alt="KPSS Tarih logosu" width="96" height="92" /></div>
            <h1>KPSS Tarih <span class="gradient-text">Soru Çöz</span></h1>
            <p class="lead">Konu konu ilerle, çıkan kalıpları gör ve sınava daha güvenli hazırlan.</p>
            <div class="hero-actions">
              <a class="cta-button" href="/konular/">Teste Başla</a>
              <a class="hero-link" href="#seo-icerik">Rehberi İncele</a>
            </div>
            <p class="hero-note">Konu sırası, çalışma rehberi ve sık sorulanlar hemen aşağıda.</p>
            <div class="stats-grid">
              <article class="stat-card">
                <div class="stat-badge">?</div>
                <span>1.250 Soru</span>
                <strong>Kapsamlı Arşiv</strong>
              </article>
              <article class="stat-card">
                <div class="stat-badge" style="background: rgba(14,165,233,0.12); color:#0b79b8;">24</div>
                <span>24/7 Erişim</span>
                <strong>Her An Yanında</strong>
              </article>
              <article class="stat-card">
                <div class="stat-badge" style="background: rgba(245,158,11,0.14); color:#9b6500;">%</div>
                <span>%98 Başarı</span>
                <strong>Sınav Odaklı</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="seo-icerik">
        <div class="container section-stack">
          <div class="section-intro">
            <div class="eyebrow">KPSS Tarih nasıl çalışılır?</div>
            <h2>KPSS Tarih çalışırken en verimli yol konu tekrarı ile soru pratiğini birlikte yürütmektir</h2>
            <p>KPSS Tarih dersi, yalnızca bilgi ezberlemekle değil; kronoloji kurmak, kavramları ayırt etmek ve soru kalıplarını tanımakla kazanılır. Bu nedenle en doğru yaklaşım, kısa konu tekrarı sonrasında aynı başlıkta soru çözmek ve yanlış yapılan alanları tekrar etmektir.</p>
          </div>
          <div class="two-col">
            <article class="section-card">
              <h3>1. Önce kısa konu özeti çıkar</h3>
              <p>Her başlıkta önce ana kavramları, önemli şahısları, olay sırasını ve sınavda sık sorulan ayrımları not etmek çalışma süresini ciddi biçimde verimli hale getirir.</p>
            </article>
            <article class="section-card">
              <h3>2. Aynı konuda hemen soru çöz</h3>
              <p>Konu tekrarı yapıldıktan hemen sonra aynı kategori içinde soru çözmek, bilginin kalıcılığını artırır ve ezber yerine aktif hatırlama sağlar.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container section-stack">
          <div class="section-intro">
            <div class="eyebrow">KPSS Tarih konuları ve çalışma sırası</div>
            <h2>KPSS Tarih konularını planlı sırayla çalışmak soru çözüm hızını da yükseltir</h2>
            <p>KPSS Tarih konuları arasında doğal bir bilgi akışı vardır. İlk Türk tarihi ve İlk Türk-İslam Devletleri temel oluşturur; Osmanlı başlıkları bu zemini genişletir; Kurtuluş Savaşı ve Atatürk dönemi ise modern süreci tamamlar.</p>
          </div>
          <div class="content-grid">
            <article class="section-card">
              <h3>Temel başlangıç</h3>
              <p>İslamiyet Öncesi Türk Tarihi ve İlk Türk-İslam Devletleri konuları, sonraki başlıklar için güçlü bir tarih altyapısı oluşturur.</p>
            </article>
            <article class="section-card">
              <h3>Orta blok</h3>
              <p>Osmanlı Devleti Siyasi Tarihi ile Osmanlı Kültür ve Medeniyeti birlikte çalışıldığında hem siyasi gelişmeler hem kurum yapısı daha net anlaşılır.</p>
            </article>
            <article class="section-card">
              <h3>Final tekrar</h3>
              <p>Kurtuluş Savaşı, Atatürk İlkeleri ve Dış Politika başlıkları sınava yakın dönemde yoğun tekrar ve bol soru çözümüyle çok daha güçlü oturur.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container section-stack">
          <div class="section-intro">
            <div class="eyebrow">Online KPSS Tarih soru çöz</div>
            <h2>Kategori bazlı online soru çözmek eksik alanları daha hızlı görmeni sağlar</h2>
            <p>Bu platformda her konu kendi soru havuzuna sahiptir. Kullanıcı tek bir kategori seçtiğinde sadece o başlığın sorularını çözer; karışık soru çöz modunda ise tüm başlıklardan rastgele seçilen sorularla genel tekrar yapılabilir.</p>
          </div>
          <div class="two-col">
            <article class="section-card">
              <h3>Konuya özel havuz</h3>
              <p>Her kategori için ayrı soru listesi bulunduğundan, odaklı çalışma yapmak isteyen kullanıcılar tek bir başlığa yoğunlaşabilir.</p>
            </article>
            <article class="section-card">
              <h3>Karışık tekrar modu</h3>
              <p>Tüm konulardan seçilen sorular, sınav öncesi genel deneme mantığında hızlı tarama yapmak isteyenler için güçlü bir tekrar imkanı sunar.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container section-stack">
          <div class="section-intro">
            <div class="eyebrow">Sık sorulan sorular</div>
            <h2>KPSS Tarih hakkında en çok merak edilenler</h2>
          </div>
          <div class="faq-grid">
            <article class="section-card">
              <h3>KPSS Tarih çalışırken önce konu mu soru mu?</h3>
              <p>Önce kısa konu tekrarı yapmak, ardından aynı başlıkta soru çözmek daha doğru sonuç verir. Bu düzen hem bilgiyi pekiştirir hem de yanlış alanları erken gösterir.</p>
            </article>
            <article class="section-card">
              <h3>KPSS Tarih için hangi konudan başlanmalı?</h3>
              <p>Genellikle İslamiyet Öncesi Türk Tarihi, İlk Türk-İslam Devletleri ve Osmanlı başlıklarıyla başlamak daha sistemli bir ilerleme sağlar.</p>
            </article>
            <article class="section-card">
              <h3>Online KPSS Tarih soru çözmek yeterli olur mu?</h3>
              <p>Tek başına yeterli değildir; ancak konu tekrarıyla birlikte kullanıldığında öğrenmeyi hızlandıran çok etkili bir araç haline gelir.</p>
            </article>
            <article class="section-card">
              <h3>Karışık soru çöz modu ne işe yarar?</h3>
              <p>Karışık soru çöz modu, tüm konular arasında genel tekrar yapmayı sağlar ve sınav öncesi hız-kavrama dengesini test etmek için çok kullanışlıdır.</p>
            </article>
          </div>
        </div>
      </section>
    </main>`;

  writeFile(
    'index.html',
    pageLayout({
      title: 'KPSS Tarih Soru Çözümü | Konu Konu KPSS Tarih Çalışma Alanı',
      description:
        'KPSS Tarih için konu bazlı çalışma sayfaları, 10 kategoride soru çöz deneyimi ve mobil uyumlu profesyonel tarih çalışma platformu.',
      canonicalPath: '/',
      body,
      structuredData
    })
  );
}

function generateTopicsPage() {
  const mixedCard = `
    <div class="mix-card">
      <div class="mix-copy">
        <div class="mix-icon">⇄</div>
        <div>
          <h2>Karışık Soru Çöz</h2>
          <p>Tüm konulardan rastgele seçilmiş 20 soru</p>
        </div>
      </div>
      <a class="button-secondary" href="/test/?topic=all">Hemen Başla</a>
    </div>`;

  const body = `
    <main class="page-shell">
      <div class="container page-center">
        ${mixedCard}
        <section class="section">
          <div class="topic-grid">
            ${topicCatalog.map((topic, index) => renderTopicCard(topic, index)).join('')}
          </div>
        </section>
      </div>
    </main>`;

  writeFile(
    'konular/index.html',
    pageLayout({
      title: 'KPSS Tarih Konuları | Konu Seç ve Soru Çöz',
      description:
        'KPSS Tarih konularını seçin, karışık soru çözün veya istediğiniz başlıkta kategori bazlı testlere başlayın.',
      canonicalPath: '/konular/',
      body,
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'KPSS Tarih Konuları',
          url: `${siteUrl}/konular/`
        }
      ]
    })
  );
}

function generateTopicDetailPages() {
  topicCatalog.forEach((topic, index) => {
    const style = topicStyles[index % topicStyles.length];
    const faq = topicFaq(topic);
    const supportSections = topicSupportSections(topic);
    const relatedLinks = topicRelatedLinks(topic);
    const body = `
        <main class="page-shell">
          <div class="container page-center">
          <div class="breadcrumbs">
            <a href="/">Ana Sayfa</a><span>/</span><a href="/konular/">Konular</a><span>/</span><span>${escapeHtml(topic.title)}</span>
          </div>
          <div class="section-card" style="text-align:center;">
            <div class="topic-icon" style="margin-bottom:20px; background:${style.bg}; color:${style.color};">${style.badge}</div>
            <h1>${escapeHtml(topic.title)}</h1>
            <p class="lead">${escapeHtml(topic.intro)}</p>
            <div class="hero-actions">
              <a class="cta-button" href="/test/?topic=${topic.id}">Bu Konuda Soru Çöz</a>
            </div>
          </div>
            <section class="section">
              <div class="content-grid">
                ${topic.studyFocus
                  .map(
                  (item) => `
                    <article class="section-card">
                      <h3>${escapeHtml(item)}</h3>
                      <p>${escapeHtml(topic.shortTitle)} çalışırken bu başlığa odaklanmak soru kalıplarını daha hızlı yakalamaya yardımcı olur.</p>
                    </article>`
                  )
                  .join('')}
              </div>
            </section>
            <section class="section">
              <div class="section-stack">
                <div class="section-intro">
                  <div class="eyebrow">Konu özeti ve çalışma planı</div>
                  <h2>${escapeHtml(topic.shortTitle)} için doğru çalışma akışı</h2>
                </div>
                <div class="content-grid">
                  ${supportSections
                    .map(
                      (item) => `
                      <article class="section-card">
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(item.text)}</p>
                      </article>`
                    )
                    .join('')}
                </div>
              </div>
            </section>
            <section class="section">
              <div class="section-stack">
                <div class="section-intro">
                  <div class="eyebrow">Sık sorulan sorular</div>
                  <h2>${escapeHtml(topic.shortTitle)} hakkında kısa cevaplar</h2>
                </div>
                <div class="faq-grid">
                  ${faq
                    .map(
                      (item) => `
                      <article class="section-card">
                        <h3>${escapeHtml(item.q)}</h3>
                        <p>${escapeHtml(item.a)}</p>
                      </article>`
                    )
                    .join('')}
                </div>
              </div>
            </section>
            <section class="section">
              <div class="section-stack">
                <div class="section-intro">
                  <div class="eyebrow">İlgili geçişler</div>
                  <h2>Çalışmayı destekleyen bağlantılar</h2>
                </div>
                <div class="two-col">
                  ${relatedLinks
                    .map(
                      (link) => `
                      <article class="section-card">
                        <h3>${escapeHtml(link.label)}</h3>
                        <p>${escapeHtml(topic.shortTitle)} sonrası ilgili sayfaya geçerek çalışma akışını daha planlı şekilde sürdürebilirsin.</p>
                        <div class="card-actions">
                          <a class="button" href="${link.href}">Sayfaya git</a>
                        </div>
                      </article>`
                    )
                    .join('')}
                </div>
              </div>
            </section>
          </div>
        </main>`;

      writeFile(
        `konular/${topic.slug}/index.html`,
      pageLayout({
        title: `${topic.title} Soru Çöz | KPSS Tarih`,
        description: topic.metaDescription,
        canonicalPath: `/konular/${topic.slug}/`,
          body,
          structuredData: [
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: topic.title,
              url: `${siteUrl}/konular/${topic.slug}/`
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a
                }
              }))
            }
          ]
        })
    );
  });
}

function renderSimplePage({ pathName, title, description, eyebrow, intro, cards }) {
  const body = `
    <main class="page-shell">
      <div class="container page-center">
        <div class="breadcrumbs"><a href="/">Ana Sayfa</a><span>/</span><span>${escapeHtml(title)}</span></div>
        <div class="hero-main" style="max-width:980px;">
          <div class="icon-box" style="width:132px; height:132px; margin-bottom:28px;"><img src="/favicon.svg" alt="KPSS Tarih logosu" width="88" height="88" /></div>
          <div class="eyebrow">${escapeHtml(eyebrow)}</div>
          <h1>${escapeHtml(title)}</h1>
          <p class="lead">${escapeHtml(intro)}</p>
        </div>
        <section class="section">
          <div class="info-grid">
            ${cards
              .map(
                (card) => `
                  <article class="contact-card">
                    <h3>${escapeHtml(card.title)}</h3>
                    <p>${escapeHtml(card.text)}</p>
                    ${card.html || ''}
                  </article>`
              )
              .join('')}
          </div>
        </section>
      </div>
    </main>`;

  writeFile(
    `${pathName}/index.html`,
    pageLayout({
      title: `${title} | KPSS Tarih`,
      description,
      canonicalPath: `/${pathName}/`,
      body,
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          url: `${siteUrl}/${pathName}/`
        }
      ]
    })
  );
}

function generateAboutPage() {
  renderSimplePage({
    pathName: 'hakkimizda',
    title: 'Hakkımızda',
    description: 'KPSS Tarih sitesinin amacı, yayın yaklaşımı ve öğrenci odaklı çalışma yapısı hakkında bilgi alın.',
    eyebrow: 'Eğitim odaklı yayın yaklaşımı',
    intro:
      'KPSS Tarih, konu bazlı çalışma ve sınav pratiğini aynı görsel deneyim içinde sunmak için hazırlanmış bir çalışma alanıdır.',
    cards: [
      {
        title: 'Neden bu site var?',
        text: 'Amaç, kullanıcıyı tek bir quiz ekranına sıkıştırmak değil; konu bazlı ilerleyebileceği, güven veren ve düzenli çalışan bir tarih çalışma platformu sunmaktır.'
      },
      {
        title: 'Nasıl gelişiyor?',
        text: 'İçerik kalitesi, mobil deneyim, soru akışı ve SEO yapısı düzenli olarak iyileştirilerek daha profesyonel bir yayın standardı oluşturulur.'
      }
    ]
  });
}

function generateContactPage() {
  renderSimplePage({
    pathName: 'iletisim',
    title: 'İletişim',
    description:
      'KPSS Tarih sitesiyle iletişime geçmek, geri bildirim göndermek veya içerik düzeltme talebinde bulunmak için iletişim sayfası.',
    eyebrow: 'İletişim ve geri bildirim',
    intro:
      'İçerik düzeltmeleri, teknik sorunlar, öneriler veya iş birliği talepleri için bizimle iletişime geçebilirsiniz.',
    cards: [
      {
        title: 'E-posta adresi',
        text: 'Genel iletişim, öneri ve içerik düzeltmeleri için doğrudan aşağıdaki e-posta adresini kullanabilirsiniz.',
        html: `<p><a class="button" href="mailto:${contactEmail}">${contactEmail}</a></p>`
      },
      {
        title: 'Geri bildirim kapsamı',
        text: 'Gönderilen mesajlar; içerik güvenilirliği, kullanıcı deneyimi ve yayın kalitesini geliştirmek amacıyla değerlendirilir.'
      }
    ]
  });
}

function generatePrivacyPage() {
  const body = `
    <main class="page-shell">
      <div class="container page-center">
        <div class="breadcrumbs"><a href="/">Ana Sayfa</a><span>/</span><span>Gizlilik Politikası</span></div>
        <div class="hero-main" style="max-width:980px;">
          <div class="icon-box" style="width:132px; height:132px; margin-bottom:28px;"><img src="/favicon.svg" alt="KPSS Tarih logosu" width="88" height="88" /></div>
          <div class="eyebrow">Şeffaflık ve güven</div>
          <h1>Gizlilik Politikası</h1>
          <p class="lead">Bu sayfa, KPSS Tarih sitesini ziyaret eden kullanıcıları temel gizlilik yaklaşımı hakkında açık ve sade biçimde bilgilendirmek için hazırlanmıştır.</p>
        </div>
        <section class="section">
          <article class="legal-card">
            <ol class="legal-list">
              <li>Site, eğitim amaçlı içerik ve soru çöz deneyimi sunar. Ziyaret sırasında temel teknik kayıtlar ve performans verileri oluşabilir.</li>
              <li>Google Analytics, site performansını ve kullanım akışını anlamak amacıyla kullanılabilir. Bu veriler kişisel kimlik tespiti amacıyla değil, hizmet kalitesini iyileştirmek için değerlendirilir.</li>
              <li>İletişim e-postası üzerinden gönderilen mesajlar yalnızca geri dönüş yapmak, önerileri değerlendirmek veya teknik sorunları incelemek amacıyla işlenir.</li>
              <li>İleride reklam veya ek üçüncü taraf servisler kullanıma alınırsa bu politika güncellenerek kullanıcıya açık biçimde duyurulur.</li>
              <li>Gizlilik konusunda soru veya talep iletmek için şu adres kullanılabilir: <a href="mailto:${contactEmail}">${contactEmail}</a>.</li>
            </ol>
          </article>
        </section>
      </div>
    </main>`;

  writeFile(
    'gizlilik/index.html',
    pageLayout({
      title: 'Gizlilik Politikası | KPSS Tarih',
      description: 'KPSS Tarih sitesinin gizlilik politikası ve temel kullanıcı bilgilendirme metni.',
      canonicalPath: '/gizlilik/',
      body
    })
  );
}

function generateIntentPages() {
  intentPages.forEach((page) => {
    const faqStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    };

    const body = `
      <main class="page-shell">
        <div class="container page-center">
          <div class="breadcrumbs"><a href="/">Ana Sayfa</a><span>/</span><span>${escapeHtml(page.title)}</span></div>
            <div class="hero-main" style="max-width:980px;">
              <div class="icon-box" style="width:132px; height:132px; margin-bottom:28px;"><img src="/favicon.svg" alt="KPSS Tarih logosu" width="88" height="88" /></div>
            <div class="eyebrow">Arama niyeti odaklı sayfa</div>
            <h1>${escapeHtml(page.headline)}</h1>
            <p class="lead">${escapeHtml(page.intro)}</p>
            <div class="hero-actions">
              <a class="cta-button" href="${page.ctaHref}">${escapeHtml(page.ctaLabel)}</a>
            </div>
          </div>
          <section class="section">
            <div class="content-grid">
              ${page.cards
                .map(
                  (card) => `
                    <article class="section-card">
                      <h3>${escapeHtml(card.title)}</h3>
                      <p>${escapeHtml(card.text)}</p>
                    </article>`
                )
                .join('')}
            </div>
          </section>
          <section class="section">
            <div class="section-stack">
              ${page.bodySections
                .map(
                  (section) => `
                    <article class="section-card">
                      <h2>${escapeHtml(section.title)}</h2>
                      <p>${escapeHtml(section.text)}</p>
                    </article>`
                )
                .join('')}
            </div>
          </section>
          <section class="section">
            <div class="section-stack">
              <div class="section-intro">
                <div class="eyebrow">Sık sorulan sorular</div>
                <h2>${escapeHtml(page.title)} hakkında kısa cevaplar</h2>
              </div>
              <div class="faq-grid">
                ${page.faq
                  .map(
                    (item) => `
                      <article class="section-card">
                        <h3>${escapeHtml(item.q)}</h3>
                        <p>${escapeHtml(item.a)}</p>
                      </article>`
                  )
                  .join('')}
              </div>
            </div>
          </section>
          <section class="section">
            <div class="section-stack">
              <div class="section-intro">
                <div class="eyebrow">İlgili sayfalar</div>
                <h2>Bir sonraki adım için ilgili bağlantılar</h2>
              </div>
              <div class="two-col">
                ${page.relatedLinks
                  .map(
                    (link) => `
                      <article class="section-card">
                        <h3>${escapeHtml(link.label)}</h3>
                        <p>Bu başlıktan ilgili kategoriye veya destekleyici sayfaya geçerek çalışma akışını derinleştirebilirsin.</p>
                        <div class="card-actions">
                          <a class="button" href="${link.href}">Sayfaya git</a>
                        </div>
                      </article>`
                  )
                  .join('')}
              </div>
            </div>
          </section>
        </div>
      </main>`;

    writeFile(
      `${page.slug}/index.html`,
      pageLayout({
        title: `${page.title} | KPSS Tarih`,
        description: page.description,
        canonicalPath: `/${page.slug}/`,
        body,
        structuredData: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: page.title,
            url: `${siteUrl}/${page.slug}/`
          },
          faqStructuredData
        ]
      })
    );
  });
}

function generateQuizEntry() {
  writeFile(
    'test/index.html',
    `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KPSS Tarih Test Çöz | Konu Bazlı Quiz</title>
    <meta name="description" content="KPSS Tarih konularında kategori bazlı rastgele sorular çözün. Mobil uyumlu quiz ekranı ile hızlı tekrar yapın." />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${siteUrl}/test/" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                "primary-container": "#b28cff",
                "inverse-surface": "#060e20",
                "surface-bright": "#f6f6ff",
                "secondary-dim": "#00557b",
                "error": "#b41340",
                "primary-fixed-dim": "#a67aff",
                "surface-container-lowest": "#ffffff",
                "on-background": "#272e42",
                "on-primary-container": "#2e006c",
                "primary": "#702ae1",
                "tertiary": "#815100",
                "secondary-fixed": "#a4d8ff",
                "primary-fixed": "#b28cff",
                "surface-container-highest": "#d1dcff",
                "on-primary-fixed-variant": "#390083",
                "on-error": "#ffefef",
                "on-tertiary": "#fff0e3",
                "background": "#f6f6ff",
                "surface-container": "#e2e7ff",
                "on-surface-variant": "#535b71",
                "tertiary-dim": "#714600",
                "on-tertiary-fixed": "#2a1700",
                "surface": "#f6f6ff",
                "on-secondary-container": "#004c6f",
                "secondary-container": "#a4d8ff",
                "tertiary-fixed": "#f8a010",
                "on-primary": "#f8f0ff",
                "tertiary-container": "#f8a010",
                "on-tertiary-fixed-variant": "#563400",
                "on-surface": "#272e42",
                "tertiary-fixed-dim": "#e79400",
                "on-primary-fixed": "#000000",
                "on-secondary": "#e9f4ff",
                "error-container": "#f74b6d",
                "on-error-container": "#510017",
                "outline-variant": "#a5adc6",
                "surface-container-high": "#d9e2ff",
                "inverse-on-surface": "#959cb5",
                "on-secondary-fixed-variant": "#00567c",
                "secondary": "#00628c",
                "primary-dim": "#6411d5",
                "secondary-fixed-dim": "#81ccff",
                "surface-variant": "#d1dcff",
                "on-tertiary-container": "#4a2c00",
                "surface-container-low": "#eef0ff",
                "error-dim": "#a70138",
                "surface-tint": "#702ae1",
                "inverse-primary": "#a476ff",
                "outline": "#6f768e",
                "surface-dim": "#c7d4fa",
                "on-secondary-fixed": "#003853"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "fontFamily": {
                "headline": ["Manrope"],
                "body": ["Manrope"],
                "label": ["Plus Jakarta Sans"]
            }
          }
        }
      }
    </script>
  </head>
  <body class="bg-surface font-body text-on-surface min-h-screen relative overflow-x-hidden">
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div class="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-tertiary-fixed/20 blur-[120px] rounded-full mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-secondary-fixed/20 blur-[150px] rounded-full mix-blend-multiply animate-[pulse_12s_ease-in-out_infinite]"></div>
      <div class="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
    </div>
    <div id="root" class="relative z-10 flex flex-col min-h-screen"></div>
    <script type="module" src="/src/quiz-main.jsx"></script>
  </body>
</html>`
  );
}

function generateSitemapAndRobots() {
  const urls = [
    '/',
    '/konular/',
    '/test/',
    '/hakkimizda/',
    '/iletisim/',
    '/gizlilik/',
    ...intentPages.map((page) => `/${page.slug}/`),
    ...topicCatalog.map((topic) => `/konular/${topic.slug}/`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url}</loc>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  writeFile('public/sitemap.xml', sitemap);
  writeFile('public/robots.txt', robots);
}

generateHomePage();
generateTopicsPage();
generateTopicDetailPages();
generateAboutPage();
generateContactPage();
generatePrivacyPage();
generateIntentPages();
generateQuizEntry();
generateSitemapAndRobots();
