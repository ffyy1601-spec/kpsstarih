import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'public', 'images');

// Klasörü oluştur
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Dosya eşleştirmeleri (Kök dizindeki dosya adı -> Soru kütüphanesindeki konu ID'si)
const fileMapping = {
  'İslamiyetÖncesiTürk Tarihi.png': 'islamiyet-oncesi-turk-tarihi.webp',
  'İlk Türk-İslam Devletleri ve Yerleşmeleri.png': 'ilk-turk-islam-devletleri.webp',
  'Osmanlı Devleti Siyasi Tarihi.png': 'osmanli-siyasi-tarihi.webp',
  'Osmanlı Kültür ve Medeniyeti.png': 'osmanli-kultur-medeniyeti.webp',
  'XX. Yüzyılda Osmanlı Devleti.png': 'xx-yuzyilda-osmanli.webp',
  'Kurtuluş Savaşı Hazırlık Dönemi.png': 'kurtulus-savasi-hazirlik.webp',
  'Kurtuluş Savaşı Muharebeler Dönemi.png': 'kurtulus-savasi-muharebeler.webp',
  'Atatürk İlke ve İnkılapları.png': 'ataturk-ilkel-ve-inkilaplari.webp',
  'Atatürk Dönemi Türk Dış Politikası.png': 'ataturk-donemi-dis-politika.webp',
  'Çağdaş Türk ve Dünya Tarihi.png': 'cagdas-turk-ve-dunya.webp',
  'anasayfa.png': 'anasayfa.webp'
};

async function optimizeImages() {
  console.log('Görsel optimizasyonu başlatılıyor...');
  
  for (const [srcName, destName] of Object.entries(fileMapping)) {
    const srcPath = path.join(projectRoot, srcName);
    const destPath = path.join(outputDir, destName);
    
    if (fs.existsSync(srcPath)) {
      try {
        console.log(`Dönüştürülüyor: ${srcName} -> ${destName}`);
        
        let resizeWidth = 600;
        if (srcName === 'anasayfa.png') {
          resizeWidth = 1920;
        }

        // Resmi oku, boyutlandır, webp olarak 75 kalitede kaydet
        await sharp(srcPath)
          .resize({ width: resizeWidth, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(destPath);
          
        const srcStats = fs.statSync(srcPath);
        const destStats = fs.statSync(destPath);
        
        const srcMB = (srcStats.size / (1024 * 1024)).toFixed(2);
        const destKB = (destStats.size / 1024).toFixed(2);
        
        console.log(`✓ Başarılı! Boyut: ${srcMB} MB -> ${destKB} KB`);
      } catch (err) {
        console.error(`❌ Hata (${srcName}):`, err.message);
      }
    } else {
      console.warn(`⚠️ Dosya bulunamadı: ${srcName}`);
    }
  }
  
  console.log('Optimizasyon işlemi tamamlandı.');
}

optimizeImages();
