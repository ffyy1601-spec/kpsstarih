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
import { topicCatalog } from './topicCatalog.js';

const rawQuestionTextById = {
  'islamiyet-oncesi-turk-tarihi': islamiyetOncesiText,
  'ilk-turk-islam-devletleri': ilkTurkIslamText,
  'osmanli-siyasi-tarihi': osmanliSiyasiTarihText,
  'osmanli-kultur-medeniyeti': osmanliKulturMedeniyetiText,
  'xx-yuzyilda-osmanli': yirminciYuzyilOsmanliText,
  'kurtulus-savasi-hazirlik': kurtulusSavasiHazirlikText,
  'kurtulus-savasi-muharebeler': kurtulusSavasiMuharebelerText,
  'ataturk-ilkel-ve-inkilaplari': ataturkIlkeVeInkilaplariText,
  'ataturk-donemi-dis-politika': ataturkDonemiDisPolitikaText,
  'cagdas-turk-ve-dunya': cagdasTurkVeDunyaTarihiText
};

export const kpssData = topicCatalog.map((topic) => ({
  id: topic.id,
  title: topic.title,
  slug: topic.slug,
  intro: topic.intro,
  studyFocus: topic.studyFocus,
  questions: parseQuestionsFromText(rawQuestionTextById[topic.id])
}));
