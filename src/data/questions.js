import islamiyetOncesiText from '../../soru/islamiyetöncesi.txt?raw';
import ilkTurkIslamText from '../../soru/türkislamdevletleriveyerleşmeleri.txt?raw';
import osmanliSiyasiTarihText from '../../soru/osmanlıdevletisiyahitarihi.txt?raw';
import osmanliKulturMedeniyetiText from '../../soru/osmanlıkültürmedeniyeti.txt?raw';
import yirminciYuzyilOsmanliText from '../../soru/XXyüzyıldaosmanlıdevleti.txt?raw';
import kurtulusSavasiHazirlikText from '../../soru/kurtuluşsavaşıhazırlıkdönemi.txt?raw';
import kurtulusSavasiMuharebelerText from '../../soru/kurtuluşsavasımuharebelerdönemi.txt?raw';
import ataturkIlkeVeInkilaplariText from '../../soru/atatürkilkeveinkılapları.txt?raw';
import ataturkDonemiDisPolitikaText from '../../soru/atatürkdönemitürkdışpolitikası.txt?raw';
import cagdasTurkVeDunyaTarihiText from '../../soru/çağdaştürkvedünyatarihi.txt?raw';
import { parseQuestionsFromText } from './parseQuestions.js';

// Bu dosyada konularınızı ve soruları tutuyoruz.
// id: kodlama tarafında kullanılan benzersiz isim (boşluksuz, türkçe karaktersiz)
// title: ekranda görünecek konu başlığı
// questions: o konuya ait soruların listesi.

export const kpssData = [
  {
    id: "islamiyet-oncesi-turk-tarihi",
    title: "İslamiyet Öncesi Türk Tarihi",
    questions: parseQuestionsFromText(islamiyetOncesiText)
  },
  {
    id: "ilk-turk-islam-devletleri",
    title: "İlk Türk-İslam Devletleri ve Yerleşmeleri",
    questions: parseQuestionsFromText(ilkTurkIslamText)
  },
  {
    id: "osmanli-siyasi-tarihi",
    title: "Osmanlı Devleti Siyasi Tarihi",
    questions: parseQuestionsFromText(osmanliSiyasiTarihText)
  },
  {
    id: "osmanli-kultur-medeniyeti",
    title: "Osmanlı Kültür ve Medeniyeti",
    questions: parseQuestionsFromText(osmanliKulturMedeniyetiText)
  },
  {
    id: "xx-yuzyilda-osmanli",
    title: "XX. Yüzyılda Osmanlı Devleti",
    questions: parseQuestionsFromText(yirminciYuzyilOsmanliText)
  },
  {
    id: "kurtulus-savasi-hazirlik",
    title: "Kurtuluş Savaşı Hazırlık Dönemi",
    questions: parseQuestionsFromText(kurtulusSavasiHazirlikText)
  },
  {
    id: "kurtulus-savasi-muharebeler",
    title: "Kurtuluş Savaşı Muharebeler Dönemi",
    questions: parseQuestionsFromText(kurtulusSavasiMuharebelerText)
  },
  {
    id: "ataturk-ilkel-ve-inkilaplari",
    title: "Atatürk İlke ve İnkılapları",
    questions: parseQuestionsFromText(ataturkIlkeVeInkilaplariText)
  },
  {
    id: "ataturk-donemi-dis-politika",
    title: "Atatürk Dönemi Türk Dış Politikası",
    questions: parseQuestionsFromText(ataturkDonemiDisPolitikaText)
  },
  {
    id: "cagdas-turk-ve-dunya",
    title: "Çağdaş Türk ve Dünya Tarihi",
    questions: parseQuestionsFromText(cagdasTurkVeDunyaTarihiText)
  }
];
