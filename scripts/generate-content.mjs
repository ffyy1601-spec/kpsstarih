/**
 * generate-content.mjs
 * 
 * Gemini API kullanarak otomatik KPSS Tarih makalesi ve quiz soruları üretir.
 * GitHub Actions tarafından her 6 saatte bir çalıştırılır.
 * 
 * Gerekli env: GEMINI_API_KEY
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const ARTICLES_DIR = path.join(projectRoot, 'src', 'data', 'articles');
const MANIFEST_PATH = path.join(ARTICLES_DIR, 'manifest.json');

/* ------------------------------------------------------------------ */
/*  Konu Havuzu – topicCatalog'daki her konunun alt başlıklarından     */
/*  oluşan geniş bir havuz                                            */
/* ------------------------------------------------------------------ */

const subTopics = [
  // İslamiyet Öncesi Türk Tarihi
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'İlk Türk devletlerinde Kut anlayışı ve hükümranlık meşruiyeti' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Göktürk Devleti ve Orhun Yazıtlarının tarihî önemi' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Uygurların yerleşik hayata geçişi ve kültürel mirası' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Hun İmparatorluğu ve Mete Han dönemi' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Türklerde töre kavramı ve devlet yönetim anlayışı' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Bozkır kültürü ve konar-göçer yaşam tarzının devlet yapısına etkisi' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Kurultay geleneği ve ikili teşkilat yapısı' },
  { topicId: 'islamiyet-oncesi-turk-tarihi', subject: 'Kavimler Göçü ve Avrupa Hun Devleti' },

  // İlk Türk-İslam Devletleri
  { topicId: 'ilk-turk-islam-devletleri', subject: 'Karahanlılar ve Türkçe yazılmış ilk eserler' },
  { topicId: 'ilk-turk-islam-devletleri', subject: 'Gazneliler ve Sultan Mahmut dönemi' },
  { topicId: 'ilk-turk-islam-devletleri', subject: 'Büyük Selçuklu Devletinin yönetim yapısı ve Nizamiye medreseleri' },
  { topicId: 'ilk-turk-islam-devletleri', subject: 'Malazgirt Muharebesi ve Anadolunun Türkleşmesi' },
  { topicId: 'ilk-turk-islam-devletleri', subject: 'Türk-İslam medeniyetinde ilim ve sanat hayatı' },
  { topicId: 'ilk-turk-islam-devletleri', subject: 'Anadolu Selçuklu Devletinin kuruluşu ve kültürel mirası' },
  { topicId: 'ilk-turk-islam-devletleri', subject: 'İlk Türk-İslam devletlerinde toprak ve askeri teşkilat' },

  // Osmanlı Siyasi Tarihi
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Osmanlı Devletinin kuruluş süreci ve ilk fetihler' },
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Fatih Sultan Mehmet dönemi ve İstanbulun fethi' },
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Kanuni Sultan Süleyman dönemi ve Osmanlının en geniş sınırları' },
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Osmanlı Devletinde duraklama dönemi ve iç isyanlar' },
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Lale Devri ve batılılaşma hareketleri' },
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Tanzimat ve Islahat Fermanları' },
  { topicId: 'osmanli-siyasi-tarihi', subject: 'Osmanlı Devletinde gerileme dönemi antlaşmaları' },

  // Osmanlı Kültür ve Medeniyeti
  { topicId: 'osmanli-kultur-medeniyeti', subject: 'Divan-ı Hümayun ve Osmanlı merkez teşkilatı' },
  { topicId: 'osmanli-kultur-medeniyeti', subject: 'Osmanlıda tımar sistemi ve toprak yönetimi' },
  { topicId: 'osmanli-kultur-medeniyeti', subject: 'Enderun mektebi ve devşirme sistemi' },
  { topicId: 'osmanli-kultur-medeniyeti', subject: 'Osmanlı hukuk sistemi: Şeri ve Örfi hukuk' },
  { topicId: 'osmanli-kultur-medeniyeti', subject: 'Osmanlıda vakıf sistemi ve sosyal hayat' },
  { topicId: 'osmanli-kultur-medeniyeti', subject: 'Osmanlıda eğitim: medreseler ve sıbyan mektepleri' },

  // XX. Yüzyılda Osmanlı
  { topicId: 'xx-yuzyilda-osmanli', subject: 'II. Meşrutiyet dönemi ve İttihat ve Terakki Cemiyeti' },
  { topicId: 'xx-yuzyilda-osmanli', subject: 'Trablusgarp Savaşı ve Osmanlının Kuzey Afrika topraklarını kaybetmesi' },
  { topicId: 'xx-yuzyilda-osmanli', subject: 'Balkan Savaşları ve sonuçları' },
  { topicId: 'xx-yuzyilda-osmanli', subject: 'I. Dünya Savaşı ve Osmanlının savaş cepheleri' },
  { topicId: 'xx-yuzyilda-osmanli', subject: 'Mondros Ateşkesi ve işgallerin başlaması' },
  { topicId: 'xx-yuzyilda-osmanli', subject: 'Osmanlının son dönem fikir akımları: Osmanlıcılık, İslamcılık, Türkçülük' },

  // Kurtuluş Savaşı Hazırlık Dönemi
  { topicId: 'kurtulus-savasi-hazirlik', subject: 'Mustafa Kemalin Samsuna çıkışı ve milli mücadelenin başlangıcı' },
  { topicId: 'kurtulus-savasi-hazirlik', subject: 'Amasya Genelgesi ve milli egemenlik fikrinin doğuşu' },
  { topicId: 'kurtulus-savasi-hazirlik', subject: 'Erzurum Kongresi kararları ve bölgesel temsil' },
  { topicId: 'kurtulus-savasi-hazirlik', subject: 'Sivas Kongresi ve ulusal birliğin sağlanması' },
  { topicId: 'kurtulus-savasi-hazirlik', subject: 'Kuva-yi Milliye hareketi ve yerel direniş örgütlenmeleri' },
  { topicId: 'kurtulus-savasi-hazirlik', subject: 'Son Osmanlı Mebusan Meclisi ve Misak-ı Milli' },

  // Kurtuluş Savaşı Muharebeler Dönemi
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'TBMM nin açılışı ve yeni Türk devletinin temelleri' },
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'Doğu Cephesi ve Ermenistan ile mücadele' },
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'Güney Cephesi: Antep, Maraş ve Urfa savunmaları' },
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'I. ve II. İnönü Muharebeleri' },
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'Sakarya Meydan Muharebesi ve stratejik önemi' },
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'Büyük Taarruz ve Başkomutanlık Meydan Muharebesi' },
  { topicId: 'kurtulus-savasi-muharebeler', subject: 'Mudanya Ateşkes Antlaşması ve barış süreci' },

  // Atatürk İlke ve İnkılapları
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Cumhuriyetin ilanı ve saltanatın kaldırılması' },
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Halifeliğin kaldırılması ve laiklik ilkesi' },
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Harf inkılabı ve eğitim alanındaki devrimler' },
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Atatürk ilkelerinin temel felsefesi ve birbirleriyle ilişkisi' },
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Hukuk alanındaki inkılaplar ve medeni kanun' },
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Ekonomi alanında yapılan inkılaplar ve devletçilik politikası' },
  { topicId: 'ataturk-ilkel-ve-inkilaplari', subject: 'Toplumsal hayatta yapılan değişiklikler: kıyafet, takvim, ölçü birimleri' },

  // Atatürk Dönemi Dış Politika
  { topicId: 'ataturk-donemi-dis-politika', subject: 'Lozan Barış Antlaşması ve Türkiye Cumhuriyetinin uluslararası tanınması' },
  { topicId: 'ataturk-donemi-dis-politika', subject: 'Musul meselesi ve Türkiye-Irak sınır sorunu' },
  { topicId: 'ataturk-donemi-dis-politika', subject: 'Hatay meselesi ve Hatayın anavatana katılması' },
  { topicId: 'ataturk-donemi-dis-politika', subject: 'Montrö Boğazlar Sözleşmesi ve boğazlar rejimi' },
  { topicId: 'ataturk-donemi-dis-politika', subject: 'Balkan Antantı ve Sadabat Paktı' },
  { topicId: 'ataturk-donemi-dis-politika', subject: 'Türkiyenin Milletler Cemiyetine girişi' },

  // Çağdaş Türk ve Dünya Tarihi
  { topicId: 'cagdas-turk-ve-dunya', subject: 'II. Dünya Savaşı ve Türkiyenin savaş dışı kalma politikası' },
  { topicId: 'cagdas-turk-ve-dunya', subject: 'Soğuk Savaş dönemi ve iki kutuplu dünya düzeni' },
  { topicId: 'cagdas-turk-ve-dunya', subject: 'NATOnun kuruluşu ve Türkiyenin üyeliği' },
  { topicId: 'cagdas-turk-ve-dunya', subject: 'Kore Savaşı ve Türkiyenin katılımı' },
  { topicId: 'cagdas-turk-ve-dunya', subject: 'Kıbrıs meselesi ve 1974 Barış Harekatı' },
  { topicId: 'cagdas-turk-ve-dunya', subject: 'Sovyetler Birliğinin dağılması ve Soğuk Savaşın sona ermesi' },
  { topicId: 'cagdas-turk-ve-dunya', subject: 'Küreselleşme ve 21. yüzyılda uluslararası ilişkiler' }
];

/* ------------------------------------------------------------------ */
/*  Yardımcı fonksiyonlar                                              */
/* ------------------------------------------------------------------ */

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function loadManifest() {
  ensureDir(ARTICLES_DIR);
  if (!fs.existsSync(MANIFEST_PATH)) {
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify({ articles: [] }, null, 2), 'utf8');
  }
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/Ğ/g, 'g').replace(/Ü/g, 'u').replace(/Ş/g, 's')
    .replace(/İ/g, 'i').replace(/Ö/g, 'o').replace(/Ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function pickUnusedSubject(manifest) {
  const usedSubjects = new Set(manifest.articles.map(a => a.subject));
  const available = subTopics.filter(st => !usedSubjects.has(st.subject));

  if (available.length === 0) {
    // Tüm konular kullanıldıysa en eski konuyu sil ve yeniden başla
    console.log('Tüm konular kullanıldı, havuz sıfırlanıyor...');
    return subTopics[Math.floor(Math.random() * subTopics.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

/* ------------------------------------------------------------------ */
/*  Gemini API çağrısı                                                 */
/* ------------------------------------------------------------------ */

async function callGeminiAPI(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'GEMINI_API_KEY environment variable eksik!\n' +
      'Lokal test: GEMINI_API_KEY=your-key node scripts/generate-content.mjs\n' +
      'GitHub: Settings > Secrets > GEMINI_API_KEY ekleyin.'
    );
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 8192,
      responseMimeType: 'application/json'
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API hatası (${response.status}): ${errorText}`);
  }

  const data = await response.json();

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Gemini API boş yanıt döndürdü.');
  }

  // JSON parse
  try {
    return JSON.parse(text);
  } catch {
    // Bazen markdown code fence ile sarılabiliyor
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  }
}

/* ------------------------------------------------------------------ */
/*  Makale üretme prompt'u                                             */
/* ------------------------------------------------------------------ */

function buildPrompt(subTopic) {
  return `Sen bir KPSS Tarih uzmanı ve eğitim içerik yazarısın. Aşağıdaki konu hakkında SEO uyumlu, eğitici ve KPSS sınavına hazırlık odaklı bir makale yaz.

KONU: "${subTopic.subject}"

KURALLAR:
1. Makale 1500-2000 kelime arasında olmalı.
2. İçerik, KPSS sınavında bu konudan çıkabilecek bilgilere odaklanmalı.
3. Türkçe yaz, anlaşılır ve akıcı bir dil kullan.
4. HTML formatında yaz (p, h2, h3, ul, li, strong, em tag'leri kullan). Dış h1 ekleme.
5. Makalenin sonuna KPSS ipuçları veya dikkat edilmesi gereken noktalar bölümü ekle.
6. Ayrıca bu konuyla ilgili 10 adet KPSS tarzı çoktan seçmeli soru hazırla.
7. Her soru 4 şıklı (A, B, C, D) olmalı ve doğru cevap belirtilmeli.
8. Sorular makale içeriğini kapsayan, analitik düşünmeyi gerektiren sorular olsun.

YANIT FORMATI (kesinlikle JSON):
{
  "title": "Makalenin SEO uyumlu başlığı",
  "summary": "150-200 karakter arası makale özeti (meta description için)",
  "keywords": ["anahtar", "kelime", "listesi"],
  "content": "<h2>...</h2><p>...</p>...",
  "questions": [
    {
      "question": "Soru metni?",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "answer": "A"
    }
  ]
}

Yalnızca geçerli JSON döndür, başka bir şey ekleme.`;
}

/* ------------------------------------------------------------------ */
/*  Ana akış                                                           */
/* ------------------------------------------------------------------ */

async function main() {
  console.log('📝 İçerik üretimi başlıyor...\n');

  // 1. Manifest yükle
  const manifest = loadManifest();
  console.log(`📊 Mevcut makale sayısı: ${manifest.articles.length}`);

  // 2. Kullanılmamış bir alt konu seç
  const subTopic = pickUnusedSubject(manifest);
  console.log(`🎯 Seçilen konu: "${subTopic.subject}" (${subTopic.topicId})`);

  // 3. Gemini API ile içerik üret
  console.log('🤖 Gemini API çağrılıyor...');
  const result = await callGeminiAPI(buildPrompt(subTopic));

  // 4. Doğrulama
  if (!result.title || !result.content || !result.questions || result.questions.length < 5) {
    throw new Error('Gemini API geçersiz/eksik içerik üretti.');
  }

  console.log(`✅ Makale üretildi: "${result.title}"`);
  console.log(`   📄 ${result.questions.length} quiz sorusu ile birlikte`);

  // 5. Dosya oluştur
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const slug = slugify(result.title);
  const articleId = `${today}-${slug}`;
  const fileName = `${articleId}.json`;

  const articleData = {
    id: articleId,
    topicId: subTopic.topicId,
    subject: subTopic.subject,
    title: result.title,
    slug: slug,
    summary: result.summary || '',
    keywords: result.keywords || [],
    content: result.content,
    questions: result.questions,
    createdAt: new Date().toISOString()
  };

  const filePath = path.join(ARTICLES_DIR, fileName);
  fs.writeFileSync(filePath, JSON.stringify(articleData, null, 2), 'utf8');
  console.log(`💾 Dosya kaydedildi: src/data/articles/${fileName}`);

  // 6. Manifest güncelle
  manifest.articles.unshift({
    id: articleId,
    topicId: subTopic.topicId,
    subject: subTopic.subject,
    title: result.title,
    slug: slug,
    summary: result.summary || '',
    createdAt: articleData.createdAt,
    questionCount: result.questions.length
  });

  saveManifest(manifest);
  console.log('📋 Manifest güncellendi.');

  console.log('\n🎉 İçerik üretimi tamamlandı!');
}

main().catch((err) => {
  console.error('❌ Hata:', err.message);
  process.exit(1);
});
