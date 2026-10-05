import type { SiteCopy } from '../types.ts';
export const pl: SiteCopy = {
  nav: {
    home: 'Start',
    platform: 'Platforma',
    modules: 'Moduły',
    privacy: 'Prywatność',
    roadmap: 'Plan rozwoju',
  },
  skip: 'Przejdź do treści',
  menu: 'Menu',
  language: 'Wybierz język',
  status: { development: 'W rozwoju', planned: 'Planowane', principle: 'Założenie projektu' },
  statusNote:
    'Daclify V2 jest w rozwoju. Publiczne uruchomienie wymaga weryfikacji kontraktów i przeglądu wydania.',
  explore: 'Poznaj platformę',
  community: 'Dołącz do rozmowy',
  more: 'Poznaj',
  back: 'Wróć na stronę główną',
  footer: 'Narzędzia dla społeczności, które decydują razem.',
  footerNote:
    'Nowy rozdział Daclify. Ludzie, wspólne decyzje i praca z jasno określoną odpowiedzialnością.',
  ctaTitle: 'Kolejny rozdział zaczyna się od rozmowy.',
  ctaText:
    'Tworzysz społeczność, spółdzielnię lub sieć współpracowników? Pomóż nadać kierunek Daclify. Zobacz plan rozwoju i porozmawiaj z nami na Telegramie.',
  questions: 'Dobre pytania. Konkretne odpowiedzi.',
  faq: [
    {
      question: 'Czym jest Daclify?',
      answer:
        'Daclify to przebudowywana modułowa platforma DAO do zarządzania członkostwem, podejmowania decyzji, finansowania pracy i przechowywania wspólnych dokumentów. DAO to organizacja, której ustalone zasady i decyzje mogą być zapisywane i wykonywane przez smart kontrakty.',
    },
    {
      question: 'Czy każdy członek potrzebuje konta blockchain?',
      answer:
        'Projekt V2 zakłada wewnętrzne tożsamości w kontrakcie, więc udział nie wymaga własnego konta natywnego. Łączenie portfela, logowanie społecznościowe i Telegram to dodatkowe planowane ścieżki; ich kompletne wersje produkcyjne nie są jeszcze gotowe.',
    },
    {
      question: 'Czy kredyty zarządzania są pieniędzmi?',
      answer:
        'Nie. Wewnętrzne kredyty określają siłę głosu zgodnie z polityką DAO. Są oddzielone od aktywów skarbca i nie można wypłacić ich jako pieniędzy. Głosowanie tokenami natywnymi wymaga jawnej, obsługiwanej polityki depozytu lub wyznaczania wagi.',
    },
    {
      question: 'Czy DAO może zachować prywatność informacji?',
      answer:
        'Chronione dokumenty można szyfrować przed publikacją, a klucze udostępniać uprawnionym członkom. Szyfrowanie chroni treść, nie publiczne metadane blockchaina. Członek może zachować wcześniej otrzymane informacje, a zarządzane odzyskiwanie daje odpowiedniej usłudze dostęp do kluczy.',
    },
    {
      question: 'Czy Daclify będzie bezpłatne?',
      answer:
        'Plan zakłada użyteczne, bezpłatne podstawy zarządzania z określonymi limitami zasobów. Hostowana automatyzacja, powiadomienia i dodatkowe usługi mogą być płatne. Ceny i limity nie są ustalone. Wygaśnięcie subskrypcji nie może przejmować kontroli nad środkami DAO ani zaakceptowanymi zobowiązaniami.',
    },
    {
      question: 'Czy można już używać V2 z prawdziwymi środkami?',
      answer:
        'V2 to implementacja rozwojowa, a nie zweryfikowane wydanie produkcyjne. Potrzebne są dalsze kontrole kontraktów, integracje kont, niezależne wdrożenia i procedury operacyjne. Plan rozwoju odróżnia zaimplementowane lokalne przepływy od funkcji gotowych do uruchomienia.',
    },
  ],
  preview: {
    label: 'Przykładowy obszar pracy',
    name: 'Wspólnota Sąsiedzka',
    caption: 'Wspólny cel. Miejsce do działania.',
    tabs: ['Decyzje', 'Praca', 'Dokumenty'],
    rows: ['Wniosek o ogród społeczny', 'Etap warsztatów', 'Wspólny podręcznik projektu'],
    tags: ['Głosowanie', 'Ocena', 'Członkowie'],
    flow: ['Zaproponuj', 'Zdecyduj', 'Zrealizuj'],
    note: 'Jedna społeczność. Połączone narzędzia. Jasna odpowiedzialność.',
  },
  pages: {
    home: {
      title: 'Daclify — Modułowa platforma DAO dla społeczności',
      description:
        'Poznaj Daclify V2: modułową platformę DAO do wspólnych decyzji, finansowania pracy i szyfrowanych dokumentów. Sprawdź wizję i plan rozwoju.',
      eyebrow: 'Nowy rozdział wspólnego zarządzania',
      heading: 'Wasza społeczność.\nWasze decyzje.\nWasza przyszłość.',
      lead: 'Połącz ludzi, decyzje i pracę, która ma znaczenie. Daclify tworzy modułową platformę DAO, na której społeczności wybierają własne zasady, narzędzia i kierunek.',
      sections: [
        {
          title: 'Więcej niż głosowanie. Sposób na wspólną pracę.',
          text: 'Społeczność potrzebuje czegoś więcej niż czatu i adresu skarbca. Potrzebuje drogi od pomysłu do wspólnej decyzji, sfinansowanego wkładu i trwałego zapisu.',
          cards: [
            {
              title: 'Miejsce dla ludzi',
              text: 'Członkostwo i role określają zasady udziału. Wewnętrzne tożsamości mają ułatwić dołączenie bez własnego natywnego konta blockchain.',
              link: 'platform',
            },
            {
              title: 'Decyzje z realnym znaczeniem',
              text: 'Wybierz politykę głosowania, zapisz wynik i połącz zatwierdzone decyzje z ograniczonymi uprawnieniami do działania. Zarządzanie powinno być zrozumiałe dla uczestników.',
              link: 'modules',
            },
            {
              title: 'Od zgody do działania',
              text: 'Finansuj etapy, oceniaj rezultaty i śledź zatwierdzone płatności. Zachowaj widoczną odpowiedzialność i postęp zamiast gubić je w rozmowach.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Zacznij od celu. Wybierz narzędzia.',
          text: 'Implementacja V2 łączy wspólny rdzeń z wyspecjalizowanymi modułami. Celem są użyteczne ustawienia, jasna konfiguracja i miejsce na rozwój społeczności.',
          cards: [
            {
              title: 'Decide',
              text: 'Wnioski, głosowania i trwałe wyniki. Przepływy rozwojowe obejmują tworzenie głosowań, oddawanie głosów i finalizację rezultatów.',
              status: 'development',
              link: 'modules',
            },
            {
              title: 'Works',
              text: 'Finansowanie etapów z przekazaniem pracy, oceną, poprawkami i akceptacją. Zatwierdzenie tworzy zapisane zobowiązanie, a nie obietnicę bez rozliczenia.',
              status: 'development',
              link: 'modules',
            },
            {
              title: 'Payroll',
              text: 'Sfinansowane harmonogramy i zatwierdzone zobowiązania płatnicze. Obecne przepływy zachowują zaakceptowane płatności po usunięciu modułu.',
              status: 'development',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Jedna wizja. Dwie drogi do własnego DAO.',
          text: 'Korzystaj ze wspólnego wdrożenia lub uruchom własne kontrakty. Oba warianty należą do projektu V2; kompletna obsługa niezależnego wdrożenia nadal powstaje.',
          cards: [
            {
              title: 'Wspólna przestrzeń',
              text: 'Wiele DAO może korzystać z tych samych kontraktów rdzenia, zachowując oddzielne członkostwo, konfigurację i zapisy skarbca.',
              status: 'development',
              link: 'platform',
            },
            {
              title: 'Własny fundament',
              text: 'Niezależne DAO kontroluje wdrożenie i łączy się z Hubem dla widoczności. Musi też móc działać bezpośrednio bez Huba.',
              status: 'planned',
              link: 'platform',
            },
          ],
        },
        {
          title: 'Wspólna wiedza. Przemyślana prywatność.',
          text: 'Małe zapisy opisowe przechowuj jako ograniczony JSON, większe dokumenty przez odwołania IPFS. Szyfruj chronioną treść przed publikacją i jawnie określ, kto posiada klucze.',
          bullets: [
            'Klucze pod kontrolą użytkownika i zarządzane odzyskiwanie to oddzielne, jasno opisane tryby.',
            'Prywatna treść nie ukrywa członkostwa, głosów ani przelewów na publicznej sieci.',
            'Usunięcie członka może ograniczyć przyszły dostęp, ale nie wymazuje już otrzymanych informacji.',
          ],
        },
      ],
    },
    platform: {
      title: 'Platforma DAO, konta i warianty wdrożenia | Daclify',
      description:
        'Sprawdź, jak Daclify V2 łączy konta wewnętrzne, portfele natywne, własne kontrakty DAO i Hub odkrywania w modułowej platformie zarządzania.',
      eyebrow: 'Platforma',
      heading: 'Organizacja, której nadajecie kształt.',
      lead: 'Różne społeczności potrzebują różnych zasad. V2 powstaje wokół stabilnego rdzenia tożsamości, uprawnień i skarbca oraz modułów wspierających sposób pracy danej organizacji.',
      sections: [
        {
          title: 'Najpierw ludzie. Konta dopasowane do potrzeb.',
          text: 'Tożsamość wewnętrzna znajduje się w kontrakcie i nie wymaga własnego konta natywnego. Członkostwo i role należą do DAO; połączenie kolejnego poświadczenia nie może tworzyć dodatkowego głosu.',
          cards: [
            {
              title: 'Konta pod kontrolą użytkownika',
              text: 'Użytkownik kontroluje oddzielne klucze podpisu i szyfrowania. Przepływy obejmują zaszyfrowany lokalny sejf i poświadczenia odzyskiwania. Samo logowanie społecznościowe nie odtwarza kluczy.',
              status: 'development',
            },
            {
              title: 'Zarządzane odzyskiwanie',
              text: 'Planowany tryb umożliwia odzyskanie z pomocą usługi i ujawnia uprawnienia operatora. Oceniane jest otwarte oprogramowanie do zarządzania kluczami; produkcyjne odzyskiwanie nie jest jeszcze zweryfikowane.',
              status: 'planned',
            },
            {
              title: 'Więcej sposobów udziału',
              text: 'Planowane są konta natywne Telos, logowanie społecznościowe, Telegram i tożsamości Telos EVM zgodnie ze zweryfikowanymi możliwościami. Muszą zachować to samo członkostwo i uprawnienia.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Wspólne kontrakty albo własne wdrożenie.',
          text: 'Wspólne środowisko przechowuje stan poszczególnych DAO w tych samych kontraktach. Niezależne wdrożenie używa tych samych interfejsów publicznych z własną polityką aktualizacji i skarbca.',
          cards: [
            {
              title: 'Wdrożenie współdzielone',
              text: 'Implementacja obsługuje tworzenie DAO, role, kredyty i zapisy skarbca we wspólnym środowisku. Pełna izolacja i weryfikacja natywnych kontraktów pozostają warunkami wydania.',
              status: 'development',
            },
            {
              title: 'Wdrożenie niezależne',
              text: 'Własne kontrakty, połączenia bezpośrednie i obsługa wielu środowisk są planowane. DAO musi działać także wtedy, gdy Hub lub usługi hostowane są niedostępne.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Hub łączy. Nie zarządza.',
          text: 'Hub ma prezentować DAO, wskazywać ich wdrożenia i obsługiwane możliwości. Wpis w katalogu nie może dawać platformie kontroli nad głosami, skarbcem ani aktualizacjami kontraktów.',
          bullets: [
            'Uprawnienia wynikają z jawnych ról i polityk DAO.',
            'Uprawnienia modułów są ograniczone i możliwe do sprawdzenia.',
            'Interfejsy publiczne, wersje i dokumentacja tworzą spójną całość.',
          ],
        },
        {
          title: 'Fundament odpowiedzialnego zarządzania.',
          text: 'Rdzeń używa kontraktów Antelope C++. Aplikacja i usługi korzystają ze ścisłego TypeScriptu oraz interfejsu Vue. Wiążące decyzje i zapisy finansowe należą do kontraktów; sam widok w przeglądarce nie autoryzuje płatności.',
          bullets: [
            'Kredyty zarządzania DAO są oddzielone od pieniędzy.',
            'Głosowanie tokenami natywnymi wymaga obsługiwanej polityki depozytu lub wagi.',
            'Kolejne sieci wymagają ograniczonych i osobno zweryfikowanych adapterów.',
          ],
        },
      ],
    },
    modules: {
      title: 'Moduły DAO Decide, Works i wypłat | Daclify',
      description:
        'Poznaj moduły Daclify: głosowania Decide, finansowanie etapów Works, wypłaty, wspólne dokumenty i planowane hostowane usługi Operations.',
      eyebrow: 'Moduły',
      heading: 'Mniej formalności. Więcej wspólnego postępu.',
      lead: 'Wybierz możliwości dopasowane do organizacji. Każdy moduł ma określone zadanie, czytelną konfigurację i jawne uprawnienia. Obecne moduły są implementacjami rozwojowymi, nie gotowymi usługami produkcyjnymi.',
      sections: [
        {
          title: 'Decide — jasna droga do wspólnej decyzji.',
          text: 'Decide adaptuje użyteczne wzorce zarządzania Telos do wewnętrznych tożsamości Daclify. Przepływy obejmują głosowania i finalizację; rozbudowane wybory, komitety i wykonanie wniosków nadal wymagają pracy.',
          bullets: [
            'Określ uczestników i sposób wyliczania siły głosu.',
            'Czytelnie zdefiniuj kworum, próg akceptacji i terminy.',
            'Zachowaj trwały wynik; finalizacja i wykonanie to różne zadania.',
          ],
        },
        {
          title: 'Works — finansuj rezultaty, nie ogólne obietnice.',
          text: 'Works łączy finansowanie z raportami etapów i uprawnioną oceną. Obecne przepływy obejmują propozycje, rezerwacje, przekazanie pracy, poprawki, akceptację i anulowanie. Trwałe własne polityki oraz kompletne zasady sporów i terminów są niedokończone.',
          bullets: [
            'Utrwal zaakceptowane kwoty i zobowiązania do treści dokumentów.',
            'Sam raport nie uprawnia do wypłaty.',
            'Zaakceptowane niezapłacone zobowiązania pozostają po usunięciu modułu.',
          ],
        },
        {
          title: 'Payroll — przewidywalne zobowiązania.',
          text: 'Moduł wypłat obsługuje sfinansowane harmonogramy o ustalonym okresie i zapisane zobowiązania. Wypłaty muszą być idempotentne, z jawnymi zasadami opóźnień, nadrabiania okresów, anulowania i braku środków.',
          bullets: [
            'Oddziel przyszły harmonogram od zaakceptowanych zobowiązań.',
            'Ponowienie nie może powodować podwójnej wypłaty.',
            'Zachowaj ręczne wykonanie przy niedostępnej automatyzacji.',
          ],
        },
        {
          title: 'Wiedza i Operations.',
          text: 'Wersjonowany JSON i pliki publiczne lub prywatne łączą zapisy z decyzjami i pracą. Planowane Operations dodaje ograniczoną automatyzację, powiadomienia i wybrane integracje bez nadawania władzy nad DAO.',
          cards: [
            {
              title: 'Dokumenty',
              text: 'Przepływy obejmują wersje, szyfrowanie po stronie klienta oraz weryfikację wysyłania i pobierania. Dostępność Pinata i zasady przechowywania wymagają rzeczywistej walidacji.',
              status: 'development',
              link: 'privacy',
            },
            {
              title: 'Hostowane Operations',
              text: 'Planowane są harmonogramy wykonania, powiadomienia Telegram, webhooki i limity zasobów w opcjonalnym płatnym pakiecie. Ostateczna cena nie została wybrana.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
        {
          title: 'Użyteczne bezpłatne podstawy. Opcjonalne usługi.',
          text: 'Kierunek biznesowy to bezpłatny fundament z ustalonymi limitami oraz płatna wygoda i zasoby operacyjne. Zakup nie daje głosów; wygaśnięcie nie może zatrzymywać kluczy, blokować bezpiecznych wypłat ani usuwać zaakceptowanej pracy.',
          bullets: [
            'Wybieraj moduły z czytelnymi ustawieniami.',
            'Sprawdź żądane uprawnienia przed włączeniem modułu.',
            'Zachowaj zgodne opcje niezależnego wdrożenia i własnego hostingu.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Szyfrowane dokumenty DAO i kontrola nad kluczami | Daclify',
      description:
        'Poznaj prywatność Daclify: szyfrowane dokumenty DAO, dostęp przez klucze, własne lub zarządzane odzyskiwanie i ograniczenia publicznego blockchaina.',
      eyebrow: 'Prywatność przez świadomy wybór',
      heading: 'Wspólna wiedza we właściwych rękach.',
      lead: 'DAO może potrzebować publicznego skarbca i prywatnych dokumentów roboczych. Daclify zakłada szyfrowanie chronionej treści przed publikacją i jawną decyzję o własności kluczy.',
      sections: [
        {
          title: 'Szyfruj przed publikacją.',
          text: 'Małe zapisy opisowe mogą używać ograniczonego JSON, większe treści identyfikatorów CID w IPFS. Chronione tytuły, nazwy plików i treść muszą być szyfrowane na urządzeniu przed wysłaniem do dostawcy lub publicznej sieci. Ograniczone linki dostawcy nie zastępują szyfrowania dla członków.',
          bullets: [
            'Klucze podpisu i szyfrowania mają różne funkcje.',
            'Wersjonowane formaty i zobowiązania do treści umożliwiają kontrolę integralności.',
            'Przydziały dla członków i epoki kluczy określają dostęp.',
          ],
        },
        {
          title: 'Wybierz, kto odzyskuje klucze.',
          text: 'Odzyskiwanie konta i poufność dokumentów to powiązane, lecz różne sprawy. Zasady przyjmowania członków muszą odpowiadać dozwolonej kontroli nad kluczami. Pełne odzyskiwanie zarządzane i integracja cyklu członkostwa są jeszcze planowane.',
          cards: [
            {
              title: 'Klucze treści użytkownika',
              text: 'Użytkownik przechowuje klucze deszyfrowania i poświadczenie odzyskiwania. Samo logowanie społecznościowe nie odtwarza sejfu. DAO może wymagać tego trybu, by usługa nie przechowywała jego kluczy.',
              status: 'principle',
            },
            {
              title: 'Dozwolone zarządzane odzyskiwanie',
              text: 'Pomoc usługi oznacza, że operator może mieć dostęp do odzyskiwalnych kluczy. To zaufanie wymaga jawnego opisu oraz sprawdzonej polityki odzyskiwania i wyjścia, a nie obietnicy wykluczenia operatora.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Zmiana członków wymaga zasad dostępu.',
          text: 'DAO wybiera, czy nowi członkowie widzą historię, czy tylko przyszłe dokumenty. Usunięcie członka wymaga rotacji przyszłego dostępu i obsługi już przydzielonych kluczy. Kompletne ścieżki przyjęcia, rotacji i zmiany trybu kluczy są niedokończone.',
          bullets: [
            'Uprawniony posiadacz klucza musi nadać chroniony dostęp.',
            'Serwer bez kluczy nie może tworzyć kluczy deszyfrowania, których nie ma.',
            'Byli członkowie mogą zachować historyczne klucze i otrzymaną treść.',
          ],
        },
        {
          title: 'Czego szyfrowanie nie ukrywa.',
          text: 'Odwołania do członkostwa, transakcje, zapisy głosów i kwoty mogą pozostać publiczne. Zaszyfrowany dokument nie czyni DAO anonimowym i nie zmienia publicznego wykonania kontraktu w tajne głosowanie.',
          bullets: [
            'Członek może kopiować lub udostępniać informacje, które wolno mu czytać.',
            'Przejęte urządzenie lub złośliwa aktualizacja klienta może ujawnić odblokowane klucze.',
            'Usunięcie przypięcia nie kasuje historii blockchaina ani wszystkich cudzych kopii.',
          ],
        },
        {
          title: 'Trwałe zapisy i jasno określona dostępność.',
          text: 'Obecne przepływy sprawdzają szyfrowane wysyłanie, integralność, odzyskiwanie po utraconej odpowiedzi i historię wersji z oznaczonym lokalnym dostawcą. Rzeczywiste Pinata, eksport, ponowne przypinanie, retencja i pełne odzyskiwanie wymagają weryfikacji przed uruchomieniem.',
          bullets: [
            'Integralność i dostępność są oddzielnymi wymaganiami.',
            'Prywatne wyszukiwanie i powiadomienia muszą respektować tę samą politykę.',
            'Eksport i wyjście z zarządzanej kontroli kluczy należą do wizji produktu.',
          ],
        },
      ],
    },
    roadmap: {
      title: 'Plan rozwoju i status Daclify V2',
      description:
        'Sprawdź, co działa w Daclify V2 i co pozostało: weryfikacja kontraktów, konta, niezależne wdrożenia, Pinata, EVM i hostowane Operations.',
      eyebrow: 'Plan rozwoju',
      heading: 'Budujmy uważnie. Pokazujmy postęp.',
      lead: 'V2 to aktywna implementacja rozwojowa. Działające lokalne przepływy są ważnym dowodem, ale nie wydaniem produkcyjnym. Plan oddziela gotowe fragmenty od pracy potrzebnej do odpowiedzialnego uruchomienia.',
      sections: [
        {
          title: '01 / Fundament nabiera kształtu.',
          text: 'Wersja rozwojowa obejmuje kontrakty rdzenia i Huba w Antelope C++, konta wewnętrzne z własnymi kluczami, API TypeScript, tworzenie współdzielonych DAO, kredyty, skarbiec i generowaną dokumentację.',
          cards: [
            {
              title: 'Połączone zarządzanie',
              text: 'Głosowanie i finalizacja Decide, przekazanie pracy i ocena Works oraz sfinansowane wypłaty są sprawdzane lokalnie.',
              status: 'development',
            },
            {
              title: 'Zapisy i prywatność',
              text: 'Wersjonowany JSON i pliki publiczne lub prywatne mają kontrole integralności oraz uzgadnianie wysyłek.',
              status: 'development',
            },
            {
              title: 'Użyteczny interfejs',
              text: 'Aplikacja Vue/TypeScript zawiera odzyskiwanie, zarządzanie, dokumenty, skarbiec i pomoc kontekstową.',
              status: 'development',
            },
          ],
        },
        {
          title: '02 / Zweryfikować rdzeń przed uruchomieniem.',
          text: 'Potwierdzony błąd autoryzacji natywnej i niepełna kontrola kodu modułów blokują wydanie. Nadal potrzebne są pełne testy natywne, weryfikacja wdrożeń, limity zasobów, narzędzia wydań i niezależny przegląd. V2 nie należy jeszcze traktować jako zweryfikowanego produktu dla prawdziwych środków.',
          bullets: [
            'Naprawić i sprawdzić uprawnienia na rzeczywistym środowisku natywnym.',
            'Powiązać sprawdzony kod, interfejsy i dokumentację ze zweryfikowanymi wydaniami.',
            'Dokończyć zgodność wdrożeń wspólnych i niezależnych.',
          ],
        },
        {
          title: '03 / Dokończyć konta i dokumenty.',
          text: 'Przyjmowanie członków, łączenie kont natywnych, zarządzane odzyskiwanie, logowanie społecznościowe i Telegram oraz cykl kluczy wymagają dalszej pracy. Nieskończone są też Pinata, retencja, eksport i testy rzeczywistych klientów.',
          bullets: [
            'Oba tryby kluczy wymagają kompletnych ścieżek utraty, odzyskania i wyjścia.',
            'Polityka prywatności musi obowiązywać przy zmianie członkostwa.',
            'Dowody z rzeczywistych dostawców są oddzielone od lokalnych symulacji.',
          ],
        },
        {
          title: '04 / Rozszerzyć możliwości społeczności.',
          text: 'Planowane są komitety, wykonanie wniosków, pełniejsze polityki Works i wypłat, zweryfikowane możliwości Telos EVM, Operations i mierzone limity usług. Adaptery innych sieci odpowiadają na konkretne potrzeby, z jawną weryfikacją i finalnością.',
          bullets: [
            'Tożsamość EVM i płatności to różne możliwości.',
            'Sam hash transakcji nie potwierdza rozliczenia.',
            'Wygaśnięcie usług musi zachować podstawowe prawa i zatwierdzone zobowiązania.',
          ],
        },
        {
          title: 'Wydanie to zobowiązanie, nie odliczanie.',
          text: 'Kod wymaga narzędzi wdrożenia i migracji, kopii zapasowych, procedur oraz przeglądu bezpieczeństwa. Stare dokumenty i zobowiązania potrzebują rzeczywistej inwentaryzacji; brakujących danych nie wolno wymyślać. Strona nie ogłasza daty uruchomienia ani ostatecznych cen.',
          bullets: [
            'Obserwuj rozwój i dziel się opinią w społeczności.',
            'Użyteczne podstawy mają pozostać bezpłatne w określonych limitach.',
            'Uruchomienie na testnecie i produkcji wymaga osobnego przeglądu.',
          ],
        },
      ],
    },
  },
};
