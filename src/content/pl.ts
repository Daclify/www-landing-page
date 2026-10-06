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
  status: { planned: 'W planie rozwoju' },
  productNote: 'Wasze zasady. Wasi członkowie. Wspólne miejsce do działania.',
  app: 'Otwórz aplikację',
  docs: 'Czytaj dokumentację',
  docsNav: 'Dokumentacja',
  benefits: ['CZŁONKOWIE', 'GŁOSOWANIA', 'PROJEKTY', 'SKARBIEC', 'DOKUMENTY'],
  community: 'Dołącz do społeczności',
  communityIq: {
    title: 'Zarządzanie DAO dla CommunityIQ',
    text: 'CommunityIQ łączy ludzi, pomysły i wspólną wiedzę. Będzie korzystać z Daclify jako głównego oprogramowania do zarządzania DAO, aby pomagać swoim społecznościom organizować członkostwo, podejmować decyzje i zarządzać wspólnymi zasobami.',
    linkLabel: 'Poznaj CommunityIQ',
  },
  more: 'Dowiedz się więcej',
  footer: 'Narzędzia dla społeczności, które decydują razem.',
  footerNote:
    'Członkowie, decyzje, finansowanie pracy i wspólna wiedza. Wszystko w jednym miejscu.',
  ctaTitle: 'Daj swojej społeczności miejsce do działania.',
  ctaText:
    'Poznaj DAO w aplikacji, znajdź narzędzia potrzebne Twojej społeczności i sprawdź w podręczniku, jak z nich korzystać.',
  questions: 'Dobre pytania. Jasne odpowiedzi.',
  faq: [
    {
      question: 'Czym jest Daclify?',
      answer:
        'Daclify to platforma do prowadzenia DAO: społeczności, która zarządza swoimi członkami, decyzjami i wspólnymi funduszami. Łączy głosowania, finansowanie projektów, płatności dla współpracowników i dokumenty w jednym miejscu. Uzgodnione zasady są zapisane w smart kontraktach.',
    },
    {
      question: 'Dla kogo jest Daclify?',
      answer:
        'Dla projektów społecznych, kooperatyw, grup współpracowników i organizacji, które podejmują decyzje razem. Daclify pozwala dać członkom głos, uporządkować wspólny budżet i śledzić pracę, którą ten budżet finansuje.',
    },
    {
      question: 'Czy każdy członek potrzebuje konta na blockchainie?',
      answer:
        'Nie. Konta Daclify pozwalają uczestniczyć bez zakładania własnego konta na natywnym blockchainie. DAO nadal używa smart kontraktów do zapisywania zasad i działań. Dodatkowe opcje logowania przez portfel, serwisy społecznościowe i Telegram są w planie rozwoju.',
    },
    {
      question: 'Czym są punkty głosowania?',
      answer:
        'To jednostki głosu ustalane przez DAO. Pomagają określić siłę głosu danego członka. Są oddzielone od środków w skarbcu i nie można wypłacić ich jako pieniędzy.',
    },
    {
      question: 'Czy dokumenty mogą być prywatne?',
      answer:
        'Chronione dokumenty są szyfrowane przed zapisaniem. Uprawnieni członkowie potrzebują odpowiednich kluczy, aby je przeczytać. Aktywność na blockchainie może pozostać publiczna, a członek może zachować informacje, które już odczytał. Przewodnik po prywatności wyjaśnia te ograniczenia.',
    },
    {
      question: 'Ile kosztuje Daclify?',
      answer:
        'Celem jest użyteczna, bezpłatna podstawa zarządzania DAO oraz opcjonalne płatne moduły i usługi hostowane. Ceny i limity zasobów zostaną opublikowane przed udostępnieniem tych usług. Plan rozwoju opisuje przewidywane opcje.',
    },
    {
      question: 'Od czego zacząć?',
      answer:
        'Otwórz aplikację i poznaj Hub DAO. W podręczniku znajdziesz informacje o kontach, tworzeniu DAO, głosowaniach, finansowaniu pracy i dokumentach. Dokumentacja w aplikacji opisuje dostępne funkcje i instrukcje właściwe dla danego wdrożenia.',
    },
  ],
  preview: {
    label: 'Przykładowa społeczność',
    name: 'Nasze Sąsiedztwo',
    caption: 'Wspólny cel. Miejsce do działania.',
    tabs: ['Decyzje', 'Praca', 'Dokumenty'],
    rows: ['Propozycja ogrodu społecznego', 'Etap warsztatów', 'Podręcznik projektu'],
    tags: ['Głosowanie', 'Do oceny', 'Członkowie'],
    flow: ['Zaproponuj', 'Zdecyduj', 'Zrealizuj'],
    note: 'Jedna społeczność. Połączone narzędzia. Jasne obowiązki.',
  },
  pages: {
    home: {
      title: 'Daclify — Narzędzia DAO dla społeczności, które decydują razem',
      description:
        'Zarządzaj członkami DAO, głosuj nad propozycjami, finansuj projekty i porządkuj dokumenty z Daclify. Poznaj aplikację i dowiedz się więcej w podręczniku.',
      eyebrow: 'Wspólne miejsce do pracy dla Twojego DAO',
      heading: 'Twoja społeczność.\nWasze decyzje.\nWasza przyszłość.',
      lead: 'Prowadź swoją społeczność w jednym miejscu. Zarządzaj członkami, głosuj nad propozycjami, finansuj projekty i porządkuj dokumenty — według zasad, które każdy może poznać i zrozumieć.',
      sections: [
        {
          title: 'Od dobrego pomysłu do wspólnego działania.',
          text: 'Daj społeczności jasny sposób podejmowania i realizowania decyzji. Połącz propozycję, budżet i pracę, aby każdy wiedział, jaki jest następny krok.',
          cards: [
            {
              title: 'Połącz ludzi',
              text: 'Zapewnij członkom konta, określ ich role i ułatw udział. Mogą dołączyć bez zakładania własnego konta na natywnym blockchainie.',
              link: 'platform',
            },
            {
              title: 'Decydujcie razem',
              text: 'Poddawajcie pomysły pod głosowanie. Ustalcie zasady, sprawdźcie wyniki i zachowajcie wspólny zapis decyzji społeczności.',
              link: 'modules',
            },
            {
              title: 'Finansuj potrzebną pracę',
              text: 'Powiąż budżet z projektami i etapami realizacji. Oceniaj rezultaty pracy współpracowników i śledź płatności zatwierdzone przez DAO.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Wybierz narzędzia potrzebne społeczności.',
          text: 'Zacznij od modułów do podejmowania decyzji, finansowania projektów i regularnych płatności. Każdy ma określone zadanie, aby wspólne miejsce do pracy służyło społeczności także wtedy, gdy rośnie.',
          cards: [
            {
              title: 'Decide',
              text: 'Twórz głosowania, pozwalaj uprawnionym członkom oddawać głosy i zapisuj końcowe wyniki. Ułatw śledzenie decyzji społeczności.',
              link: 'modules',
            },
            {
              title: 'Works',
              text: 'Zaproponuj projekt, uzgodnij etapy i oceń rezultaty przed zatwierdzeniem płatności. Wspólny proces dla wykonawców i osób oceniających.',
              link: 'modules',
            },
            {
              title: 'Payroll',
              text: 'Organizuj finansowane płatności dla współpracowników na ustalony okres. Trzymaj harmonogram i zatwierdzone zobowiązania obok zapisów skarbca.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Miejsce dla Twojego DAO. Hub dla społeczności.',
          text: 'Znajdź DAO w Hubie i otwórz przestrzeń społeczności, w której chcesz działać. Każde DAO ma własnych członków, zasady i dokumentację działań.',
          cards: [
            {
              title: 'Zacznij od wspólnych kontraktów',
              text: 'Korzystaj ze wspólnej infrastruktury, zachowując oddzielnych członków, ustawienia i zapisy skarbca swojego DAO. Poświęć czas na organizowanie społeczności.',
              link: 'platform',
            },
            {
              title: 'Zarządzaj własnym wdrożeniem',
              text: 'Własne kontrakty DAO i bezpośrednie połączenia są w planie rozwoju dla społeczności, które chcą utrzymywać swoją infrastrukturę i korzystać z tego samego Hubu.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
        {
          title: 'Trzymaj wiedzę blisko pracy.',
          text: 'Przechowuj decyzje, notatki i dokumenty obok działań, których dotyczą. Wybieraj publiczne zapisy, gdy liczy się przejrzystość, i szyfrowane dokumenty, gdy treść powinna trafić do węższego grona.',
          bullets: [
            'Zachowuj historię wersji, aby członkowie mogli śledzić zmiany.',
            'Używaj krótkich zapisów do codziennych informacji i odwołań IPFS do większych plików.',
            'Wiedz, kto może czytać chronioną treść i kto przechowuje klucze odzyskiwania.',
          ],
        },
      ],
    },
    platform: {
      title: 'Członkowie, konta i wspólna przestrzeń DAO | Daclify',
      description:
        'Połącz członków, role, głosowania i wspólne środki w Daclify. Poznaj konta DAO, Hub oraz możliwości wspólnego i niezależnego wdrożenia kontraktów.',
      eyebrow: 'Platforma',
      heading: 'Jasne miejsce do wspólnego działania.',
      lead: 'Daclify daje Twojemu DAO wspólną przestrzeń dla ludzi, decyzji, pieniędzy i wiedzy. Społeczność ustala zasady, a członkowie rozumieją swoją rolę i dostępne działania.',
      sections: [
        {
          title: 'Ułatw udział w społeczności.',
          text: 'Konta Daclify identyfikują członków wewnątrz smart kontraktu. Uczestnik nie potrzebuje oddzielnego konta na natywnym blockchainie. Role określają, kto może głosować, oceniać pracę i zarządzać ustawieniami DAO.',
          cards: [
            {
              title: 'Konto dla każdego członka',
              text: 'Używaj jednej tożsamości w narzędziach DAO. Członkostwo i uprawnienia są przypisane do osoby, bez odtwarzania ich osobno dla głosowań, pracy i dokumentów.',
            },
            {
              title: 'Klucze pod Twoją kontrolą',
              text: 'Konta kontrolowane przez użytkownika korzystają z lokalnego szyfrowanego sejfu i danych odzyskiwania. Zachowaj kopię: logowanie na nowym urządzeniu nie zastąpi utraconych danych odzyskiwania.',
            },
            {
              title: 'Więcej sposobów logowania',
              text: 'Łączenie portfeli natywnych, logowanie społecznościowe, Telegram i wyraźnie oznaczone odzyskiwanie zarządzane są w planie rozwoju. Każda opcja będzie miała określone uprawnienia i obowiązki.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Twoje DAO zachowuje własną tożsamość.',
          text: 'Wspólne kontrakty zapewniają każdemu DAO własnych członków, ustawienia i zapisy skarbca. Hub pozwala odkrywać i otwierać te przestrzenie.',
          cards: [
            {
              title: 'Wspólna infrastruktura',
              text: 'Utwórz DAO we wspólnym wdrożeniu i skonfiguruj potrzebne narzędzia. Zachowaj dokumentację działań organizacji w jednym miejscu.',
            },
            {
              title: 'Niezależna infrastruktura',
              text: 'Plan rozwoju obejmuje własne kontrakty DAO połączone z Hubem. Społeczność wybierająca ten tryb odpowiada także za wdrożenie, aktualizacje i bieżące utrzymanie.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Siła głosu i pieniądze mają różne zadania.',
          text: 'Punkty głosowania pomagają DAO ustalić, kto ma wpływ na decyzje. Środki w skarbcu finansują pracę wspieraną przez społeczność. Ich rozdzielenie ułatwia wyjaśnienie zasad.',
          bullets: [
            'Określ siłę głosu zgodnie z zasadami zarządzania DAO.',
            'Używaj obsługiwanych aktywów blockchain do zasilania skarbca i płatności.',
            'Sprawdź w przewodnikach aplikacji obsługiwane tokeny i zasady głosowania.',
          ],
        },
        {
          title: 'Ucz się tam, gdzie działasz.',
          text: 'Aplikacja zawiera podręcznik z wyszukiwarką: konta, konfiguracja DAO, głosowania, projekty, płatności i dokumenty. Przewodniki pokazują wersję, aby można było sprawdzić zgodność instrukcji z połączonym wdrożeniem.',
          bullets: [
            'Poznaj funkcję w podręczniku przed wykonaniem działania.',
            'Sprawdź uprawnienia modułu przed jego włączeniem.',
            'Przechowuj bezpiecznie dane podpisywania i odzyskiwania dokumentów.',
          ],
        },
      ],
    },
    modules: {
      title: 'Głosowania DAO, finansowanie projektów i płatności | Daclify',
      description:
        'Poznaj moduły Daclify do głosowań DAO, finansowania etapów, płatności i wspólnych dokumentów. Wybierz narzędzia pasujące do pracy Twojej społeczności.',
      eyebrow: 'Moduły',
      heading: 'Narzędzia, które pomagają realizować decyzje.',
      lead: 'Każda społeczność działa inaczej. Wybierz narzędzia do głosowań, finansowania projektów i płatności dla współpracowników — ze wspólnymi kontami i zapisami w całym DAO.',
      sections: [
        {
          title: 'Decide — daj członkom jasny głos.',
          text: 'Zbieraj głosy i zapisuj wynik. Określ, kto jest uprawniony, jak liczy się siłę głosu i kiedy kończy się głosowanie. Członkowie poznają zasady przed udziałem.',
          bullets: [
            'Utwórz głosowanie z jasnym pytaniem i odpowiedziami.',
            'Pozwól uprawnionym członkom głosować w przestrzeni DAO.',
            'Zakończ głosowanie i zachowaj wynik jako wspólny zapis.',
          ],
        },
        {
          title: 'Works — połącz finansowanie z rezultatami.',
          text: 'Zamień propozycję projektu w uzgodnione etapy. Wykonawcy przedstawiają pracę, a uprawnione osoby mogą poprosić o zmiany lub ją przyjąć. Śledź finansowanie i zatwierdzone płatności razem z projektem.',
          bullets: [
            'Uzgodnij zakres, kwotę i etapy realizacji.',
            'Trzymaj zgłoszenia, uwagi i zatwierdzenia w jednym procesie.',
            'Sprawdzaj, które zobowiązania przyjęto, a które są nadal otwarte.',
          ],
        },
        {
          title: 'Payroll — uporządkuj regularną współpracę.',
          text: 'Twórz finansowane harmonogramy na ustalony okres dla osób współpracujących z DAO. Zadbaj, aby zobowiązania płatnicze były zrozumiałe dla organizacji i wykonawców.',
          bullets: [
            'Określ odbiorcę, kwotę i harmonogram płatności.',
            'Śledź należne płatności i zatwierdzone zobowiązania.',
            'Połącz zapisy skarbca z zobowiązaniami wobec współpracowników.',
          ],
        },
        {
          title: 'Dokumenty — pamiętaj, skąd wzięła się decyzja.',
          text: 'Trzymaj propozycje, notatki, ustalenia i pliki blisko decyzji, których dotyczą. Historia wersji pomaga śledzić zmiany, a szyfrowane pliki chronią treść przeznaczoną dla ograniczonego grona.',
          cards: [
            {
              title: 'Wspólne zapisy',
              text: 'Używaj krótkich zapisów JSON do codziennych informacji i odwołań IPFS do większych plików. Zachowuj poprzednie wersje dla pełnego kontekstu.',
            },
            {
              title: 'Chronione dokumenty',
              text: 'Szyfruj prywatną treść przed zapisaniem i zapewniaj klucze uprawnionym członkom. Poznaj zakres ochrony i informacje, które pozostają publiczne.',
              link: 'privacy',
            },
          ],
        },
        {
          title: 'Zacznij od podstaw. Dodaj to, co pomaga.',
          text: 'Celem jest bezpłatna, użyteczna podstawa zarządzania DAO. Opcjonalne płatne moduły i usługi hostowane są planowane dla społeczności potrzebujących większej wydajności lub wygody. Ceny i limity zostaną opublikowane przed ich udostępnieniem.',
          cards: [
            {
              title: 'Wybierz sposób pracy',
              text: 'Włącz narzędzia pasujące do społeczności, sprawdź ich uprawnienia i poznaj konfigurację w podręczniku.',
            },
            {
              title: 'Usługi operacyjne',
              text: 'Automatyzacja, powiadomienia i wybrane integracje są w planie rozwoju jako usługi opcjonalne. Wspierają działania DAO, zachowując jego zasady zarządzania.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
      ],
    },
    privacy: {
      title: 'Prywatne dokumenty DAO i szyfrowane zapisy | Daclify',
      description:
        'Porządkuj dokumenty DAO i chroń prywatną treść szyfrowaniem. Poznaj zasady dostępu członków, odzyskiwania kluczy i ograniczenia publicznego blockchaina.',
      eyebrow: 'Prywatność dzięki jasnym wyborom',
      heading: 'Dziel się wiedzą z właściwymi osobami.',
      lead: 'Niektóre informacje powinny być publiczne. Inne należą do osób wykonujących pracę. Daclify łączy wspólne zapisy i szyfrowane dokumenty z DAO, z jasnymi wyborami dotyczącymi dostępu i odzyskiwania.',
      sections: [
        {
          title: 'Chroń treść przed jej zapisaniem.',
          text: 'Prywatne pliki są szyfrowane na urządzeniu użytkownika przed wysłaniem. Zapisany plik zawiera zaszyfrowaną treść, a uprawniony członek potrzebuje odpowiedniego klucza do odczytu. Sam publiczny link nie odblokowuje dokumentu.',
          bullets: [
            'Oddziel klucze podpisywania od kluczy szyfrowania dokumentów.',
            'Śledź aktualizacje dzięki historii wersji.',
            'Sprawdzaj integralność pobieranego pliku.',
          ],
        },
        {
          title: 'Wiedz, kto przechowuje klucze.',
          text: 'W kontach kontrolowanych przez użytkownika dane odzyskiwania pozostają u członka. Odzyskiwanie zarządzane jest planowaną alternatywą i wymaga innego zaufania: usługa, która potrafi odzyskać klucze odszyfrowania, może też uzyskać do nich dostęp.',
          cards: [
            {
              title: 'Odzyskiwanie pod Twoją kontrolą',
              text: 'Zrób kopię danych odzyskiwania i przechowuj ją bezpiecznie. Bez niej lub innego uprawnionego posiadacza klucza utrata klucza może oznaczać utratę dostępu do chronionej treści.',
            },
            {
              title: 'Odzyskiwanie zarządzane',
              text: 'Planowany tryb wspomagany przez usługę określi, co operator może odzyskać i odczytać. DAO będzie potrzebować jasnej polityki dopuszczającej ten tryb.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Prywatne dokumenty nie ukrywają wszystkich działań.',
          text: 'Szyfrowanie chroni treść dokumentów. Odwołania do członków, zapisy głosów, transfery i inne działania na publicznym blockchainie mogą pozostać widoczne. Daclify nie obiecuje anonimowego członkostwa ani tajnych głosowań.',
          bullets: [
            'Uprawniony członek może skopiować lub udostępnić przeczytane informacje.',
            'Usunięcie członka nie usuwa informacji, które już otrzymał.',
            'Nie można cofnąć publicznej historii ani kopii plików u innych osób.',
          ],
        },
        {
          title: 'Przygotuj się na zmiany członkostwa.',
          text: 'DAO potrzebuje zasad dostępu do starszych dokumentów i zmian przyszłego dostępu przy dołączaniu lub odchodzeniu członków. Plan rozwoju obejmuje pełniejsze procesy dostępu i rotacji kluczy. Podręcznik opisuje obsługiwane zachowanie dla danego wdrożenia.',
          bullets: [
            'Ustal, kto powinien mieć dostęp do wcześniejszych zapisów.',
            'Traktuj rotację kluczy i odejście członka jako powiązane kroki.',
            'Wyjaśnij odpowiedzialność za odzyskiwanie przed udostępnieniem wrażliwej treści.',
          ],
        },
        {
          title: 'Zachowaj użyteczne zapisy na dłużej.',
          text: 'Krótkie informacje mieszczą się w zapisach kontraktu, a większe dokumenty korzystają z odwołań IPFS. Odwołanie pozwala zidentyfikować plik, ale jego dalsze przechowywanie i dostęp zależą od skonfigurowanego dostawcy oraz zachowanych kluczy.',
          bullets: [
            'Zachowuj kopie ważnych danych odzyskiwania.',
            'Poznaj konfigurację przechowywania plików w swoim wdrożeniu.',
            'Sprawdzaj bieżące procedury dokumentów i dostępu w podręczniku.',
          ],
        },
      ],
    },
    roadmap: {
      title: 'Plan rozwoju Daclify — konta, wdrożenia DAO i integracje',
      description:
        'Poznaj plany Daclify: logowanie społecznościowe i Telegram, własne kontrakty DAO, usługi hostowane i przyszłe integracje blockchain. Otwórz aplikację i podręcznik.',
      eyebrow: 'Plan rozwoju',
      heading: 'Więcej możliwości dla Twojego DAO.',
      lead: 'Plan rozwoju rozszerza wspólne miejsce dla członków, głosowań, finansowania pracy i dokumentów. To kolejne możliwości, które chcemy oddać społecznościom. Ich dostępność opisuje podręcznik w aplikacji.',
      sections: [
        {
          title: 'Więcej sposobów dołączenia.',
          text: 'Planowane opcje kont obejmują logowanie społecznościowe, Telegram, łączenie portfeli natywnych i odzyskiwanie zarządzane. Oba tryby kont muszą jasno wyjaśniać, kto kontroluje klucze i jak działa odzyskiwanie.',
          cards: [
            {
              title: 'Logowanie społecznościowe i Telegram',
              text: 'Łatwiejszy dostęp do przestrzeni przy zachowaniu jednej tożsamości członka i istniejących uprawnień DAO.',
              status: 'planned',
            },
            {
              title: 'Odzyskiwanie zarządzane',
              text: 'Wyraźnie oznaczony tryb wspomagany przez usługę obok kluczy kontrolowanych przez użytkownika, z opisanymi obowiązkami odzyskiwania i wyjścia.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Własne kontrakty połączone z Hubem.',
          text: 'Niezależne wdrożenia pozwolą DAO zarządzać własnymi kontraktami i aktualizacjami, korzystając z Hubu do odkrywania społeczności. Wymagają też bezpośrednich połączeń, zgodnych przewodników i jasnych obowiązków operatora.',
          bullets: [
            'Kontrola wdrożenia i aktualizacji po stronie DAO.',
            'Odkrywanie obok społeczności używających wspólnych kontraktów.',
            'Bezpośredni dostęp dla społeczności utrzymujących własną infrastrukturę.',
          ],
        },
        {
          title: 'Więcej wsparcia w codziennych działaniach.',
          text: 'Planowane opcjonalne usługi hostowane obejmują zaplanowane działania, powiadomienia i integracje. Celem jest mniej rutynowej administracji, przejrzyste ceny i zachowanie praw głosu DAO.',
          cards: [
            {
              title: 'Usługi operacyjne',
              text: 'Harmonogramy, powiadomienia Telegram i wybrane webhooki, z jasnymi limitami i uprawnieniami.',
              status: 'planned',
            },
            {
              title: 'Rozbudowane procesy zarządzania',
              text: 'Dodatkowe opcje wyborów, komisji i wykonywania propozycji oraz szersze zasady projektów i płatności.',
              status: 'planned',
            },
            {
              title: 'Narzędzia dostępu do dokumentów',
              text: 'Pełniejsze procesy zarządzania kluczami członków, eksportu, przechowywania i odzyskiwania.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Połączenia poza jednym blockchainem.',
          text: 'Tożsamości Telos EVM i przyszłe połączenia płatnicze są częścią długofalowego kierunku. Płatności między sieciami potrzebują zweryfikowanych dowodów transakcji i jasnych zasad rozliczania, zanim zaczną obsługiwać zobowiązania DAO.',
          bullets: [
            'Łączenie tożsamości i rozliczanie płatności to osobne możliwości.',
            'Integracje powinny odpowiadać konkretnym potrzebom społeczności.',
            'Obsługiwane sieci i wymagania weryfikacji będą opisane w podręczniku.',
          ],
        },
        {
          title: 'Podstawy dostępne dla społeczności.',
          text: 'Dążymy do użytecznej, bezpłatnej podstawy zarządzania oraz opcjonalnych płatnych możliwości. Nie ogłoszono cen ani terminów pozycji z planu rozwoju. Wersjonowana dokumentacja aplikacji jest punktem odniesienia dla obsługiwanych funkcji.',
          bullets: [
            'Wybieraj narzędzia, które pomagają społeczności.',
            'Sprawdzaj dostępne funkcje i wymagania wdrożenia w aplikacji.',
            'Dziel się uwagami i potrzebami ze społecznością Daclify.',
          ],
        },
      ],
    },
  },
};
