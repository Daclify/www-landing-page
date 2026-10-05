# Platforma DAO, konta i warianty wdrożenia | Daclify

> Sprawdź, jak Daclify V2 łączy konta wewnętrzne, portfele natywne, własne kontrakty DAO i Hub odkrywania w modułowej platformie zarządzania.

https://daclify.com/pl/platforma/

Daclify V2 jest w rozwoju. Publiczne uruchomienie wymaga weryfikacji kontraktów i przeglądu wydania.

Różne społeczności potrzebują różnych zasad. V2 powstaje wokół stabilnego rdzenia tożsamości, uprawnień i skarbca oraz modułów wspierających sposób pracy danej organizacji.

## Najpierw ludzie. Konta dopasowane do potrzeb.

Tożsamość wewnętrzna znajduje się w kontrakcie i nie wymaga własnego konta natywnego. Członkostwo i role należą do DAO; połączenie kolejnego poświadczenia nie może tworzyć dodatkowego głosu.

### Konta pod kontrolą użytkownika — W rozwoju

Użytkownik kontroluje oddzielne klucze podpisu i szyfrowania. Przepływy obejmują zaszyfrowany lokalny sejf i poświadczenia odzyskiwania. Samo logowanie społecznościowe nie odtwarza kluczy.

### Zarządzane odzyskiwanie — Planowane

Planowany tryb umożliwia odzyskanie z pomocą usługi i ujawnia uprawnienia operatora. Oceniane jest otwarte oprogramowanie do zarządzania kluczami; produkcyjne odzyskiwanie nie jest jeszcze zweryfikowane.

### Więcej sposobów udziału — Planowane

Planowane są konta natywne Telos, logowanie społecznościowe, Telegram i tożsamości Telos EVM zgodnie ze zweryfikowanymi możliwościami. Muszą zachować to samo członkostwo i uprawnienia.


## Wspólne kontrakty albo własne wdrożenie.

Wspólne środowisko przechowuje stan poszczególnych DAO w tych samych kontraktach. Niezależne wdrożenie używa tych samych interfejsów publicznych z własną polityką aktualizacji i skarbca.

### Wdrożenie współdzielone — W rozwoju

Implementacja obsługuje tworzenie DAO, role, kredyty i zapisy skarbca we wspólnym środowisku. Pełna izolacja i weryfikacja natywnych kontraktów pozostają warunkami wydania.

### Wdrożenie niezależne — Planowane

Własne kontrakty, połączenia bezpośrednie i obsługa wielu środowisk są planowane. DAO musi działać także wtedy, gdy Hub lub usługi hostowane są niedostępne.


## Hub łączy. Nie zarządza.

Hub ma prezentować DAO, wskazywać ich wdrożenia i obsługiwane możliwości. Wpis w katalogu nie może dawać platformie kontroli nad głosami, skarbcem ani aktualizacjami kontraktów.

- Uprawnienia wynikają z jawnych ról i polityk DAO.
- Uprawnienia modułów są ograniczone i możliwe do sprawdzenia.
- Interfejsy publiczne, wersje i dokumentacja tworzą spójną całość.

## Fundament odpowiedzialnego zarządzania.

Rdzeń używa kontraktów Antelope C++. Aplikacja i usługi korzystają ze ścisłego TypeScriptu oraz interfejsu Vue. Wiążące decyzje i zapisy finansowe należą do kontraktów; sam widok w przeglądarce nie autoryzuje płatności.

- Kredyty zarządzania DAO są oddzielone od pieniędzy.
- Głosowanie tokenami natywnymi wymaga obsługiwanej polityki depozytu lub wagi.
- Kolejne sieci wymagają ograniczonych i osobno zweryfikowanych adapterów.

## Telegram

Tworzysz społeczność, spółdzielnię lub sieć współpracowników? Pomóż nadać kierunek Daclify. Zobacz plan rozwoju i porozmawiaj z nami na Telegramie.

https://t.me/daclify
