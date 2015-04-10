﻿define(
   ({
    map: {
      error: "Nie można utworzyć mapy"
    },
    onlineStatus: {
      offline: "Aktualnie pracujesz w trybie offline. Formularze zgłoszeniowe będą zapisywane lokalnie do momentu, gdy nawiązane zostanie połączenie z serwerem.",
      reconnecting: "Ponowne łączenie&hellip;",
      pending: "Po ponownym nawiązaniu połączenia sieciowego zostanie zgłoszone ${total} oczekujących zmian."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Moja instytucja",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Moje zasoby",
          favoritesLabel: "Moje ulubione"
        },
        title: "Wybierz mapę internetową",
        searchTitle: "Wyszukaj",
        ok: "OK",
        cancel: "Anuluj",
        placeholder: "Wprowadź wyszukiwane wyrażenie"
      },
      groupdlg: {
        items: {
          organizationLabel: "Moja instytucja",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Moje zasoby",
          favoritesLabel: "Moje ulubione"
        },
        title: "Wybierz grupę",
        searchTitle: "Wyszukaj",
        ok: "OK",
        cancel: "Anuluj",
        placeholder: "Wprowadź wyszukiwane wyrażenie"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Oto łącze formularza geograficznego"
      }
    },
    user: {
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Współrzędne północne",
      utm_easting: "Współrzędne wschodnie",
      utm_zone_number: "Numer strefy",
      selectLayerTabText: "${formSection} Wybierz formularz",
      geoFormGeneralTabText: "${formSection} Wprowadź informację",
      locationInformationText: "${formSection} Wybierz lokalizację",
      submitInformationText: "${formSection} Wypełnij formularz",
      submitInstructions: "Dodaj te informacje do mapy.",
      myLocationText: "Bieżąca lokalizacja",
      locationDescriptionForMoreThanOneOption: "Podaj lokalizację dla tego obiektu poprzez kliknięcie/dotknięcie mapy lub za pomocą jednej z następujących opcji.",
      locationDescriptionForOneOption: "Podaj lokalizację dla tego obiektu poprzez kliknięcie/dotknięcie mapy lub za pomocą następującej opcji.",
      locationDescriptionForNoOption: "Podaj lokalizację dla tego obiektu poprzez kliknięcie/dotknięcie mapy.",
      addressText: "Wyszukaj",
      geographic: "Szer./dł. geog.",
      locationTabText: "Lokalizacja",
      locationPopupTitle: "Lokalizacja",
      submitButtonText: "Prześlij wpis",
      submitButtonTextLoading: "Wysyłanie&hellip;",
      formValidationMessageAlertText: "Następujące pola są wymagane:",
      selectLocation: "Wybierz lokalizację do wysłania.",
      emptylatitudeAlertMessage: "Wprowadź współrzędną ${openLink}szerokości geograficznej${closeLink}.",
      emptylongitudeAlertMessage: "Wprowadź współrzędną ${openLink}długości geograficznej${closeLink}.",
      shareUserTitleMessage: "Dziękujemy za udostępnienie informacji!",
      entrySubmitted: "Twój wpis został przesłany na mapę.",
      shareThisForm: "Udostępnij ten formularz",
      shareUserTextMessage: "Zachęć innych do udziału, korzystając z poniższych opcji.",
      addAttachmentFailedMessage: "Nie udało się dodać załącznika do warstwy",
      addFeatureFailedMessage: "Nie udało się dodać obiektu do warstwy",
      noLayerConfiguredMessage: "Wystąpił błąd wczytywania lub wyszukiwania edytowalnej warstwy obiektów. Aby wyświetlić formularz i rozpocząć zbieranie zgłoszeń, należy dodać edytowalną warstwę obiektów do mapy internetowej.",
      placeholderLatitude: "Szerokość geograficzna (Y)",
      placeholderLongitude: "Długość geograficzna (X)",
      latitude: "Szerokość geograficzna",
      longitude: "Długość geograficzna",
      findMyLocation: "Zlokalizuj mnie",
      finding: "Lokalizowanie&hellip;",
      backToTop: "Powrót na górę",
      addressSearchText: "W tym miejscu pojawi się zgłoszenie. Aby poprawić lokalizację, można przeciągnąć pinezkę.",
      shareModalFormText: "Łącze do formularza",
      close: "Zamknij",
      locationNotFound: "Nie można odnaleźć lokalizacji.",
      setLocation: "Skonfiguruj lokalizację",
      find: "Znajdź adres lub miejsce",
      attachment: "Załącznik",
      toggleDropdown: "Przełącz listę rozwijaną",
      invalidString: "Podaj właściwą wartość.",
      invalidSmallNumber: "Podaj poprawną ${openStrong}liczbę całkowitą${closeStrong} pomiędzy -32768 a 32767.",
      invalidNumber: "Podaj poprawną ${openStrong}liczbę całkowitą${closeStrong} pomiędzy -2147483648 a 2147483647.",
      invalidFloat: "Podaj poprawną wartość ${openStrong}zmiennoprzecinkową${closeStrong}.",
      invalidDouble: "Podaj poprawną wartość ${openStrong}o podwójnej precyzji${closeStrong}.",
      invalidLatLong: "Wprowadź poprawne współrzędne szerokości i długości geograficznej.",
      invalidUTM: "Wprowadź poprawne współrzędne UTM.",
      invalidUSNG: "Wprowadź poprawne współrzędne USNG.",
      invalidMGRS: "Wprowadź poprawne współrzędne MGRS.",
      geoformTitleText: "Formularz geograficzny (Geo Form)",
      domainDefaultText: "Wybierz&hellip;",
      applyEditsFailedMessage: "Przepraszamy, wpisu nie można było wysłać. Spróbuj ponownie.",
      requiredFields: "Wykryto kilka błędów. Dokonaj poprawek poniżej.",
      requiredField: "(wymagane)",
      error: "Błąd",
      textRangeHintMessage: "${openStrong}Wskazówka:${closeStrong} Wartość minimalna ${minValue} i Wartość maksymalna ${maxValue}",
      dateRangeHintMessage: "${openStrong}Wskazówka:${closeStrong} Data minimalna ${minValue} i Data maksymalna ${maxValue}",
      remainingCharactersHintMessage: "pozostały(-o) ${value} znaki(-ów)",
      mapFullScreen: "Pełny ekran",
      mapRestore: "Restore",
      filterSelectEmptyText: "Wybierz",
      invalidLayerMessage: "Warstwa formularza nie istnieje. Skonfiguruj aplikację i ustaw warstwę.",
      selectedLayerText: "WSZYSTKIE",
      fileUploadStatus: "Status przesyłania pliku",
      uploadingBadge: "&nbsp;Przesyłanie&hellip;",
      successBadge: "&nbsp;Przesłano",
      retryBadge: "Ponów próbę",
      errorBadge: "Błąd podczas przesyłania&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Plik jest za duży, aby go załączyć",
      exceededFileCountError: "Przekroczono maksymalną liczbę dozwolonych załączników",
      selectFileTitle: "Wybierz plik",
      btnViewSubmissions: "Wyświetl zgłoszenia",
      dateFormat: "MM/DD/YYYY g:mm a"
    },
    builder: {
      invalidUser: "Przepraszamy, nie masz uprawnień do wyświetlania tego elementu",
      invalidWebmapSelectionAlert: "Wybrana mapa internetowa nie obejmuje prawidłowej warstwy, z której można by skorzystać. Aby móc przejść dalej, należy do mapy internetowej dodać edytowalną warstwę wektorową (FeatureLayer).",
      invalidWebmapSelectionAlert2: "Aby móc zapoznać się z dodatkowymi informacjami, należy przejść do tematu ${openLink}Czym jest usługa obiektowa?${closeLink}",
      selectFieldsText: "Wybierz pola formularza",
      selectThemeText: "Wybierz motyw formularza",
      webmapText: "Mapa internetowa",
      layerText: "Warstwa",
      detailsText: "Szczegóły",
      fieldsText: "Pola",
      styleText: "Nadaj styl",
      optionText: "Opcje",
      previewText: "Zobacz podgląd",
      publishText: "Publikuj",
      optionsApplicationText: "Opcje",
      titleText: "Kreator",
      descriptionText: "Formularz geograficzny (GeoForm) to konfigurowalny szablon umożliwiający edytowanie danych ${link1}usługi obiektowej${closeLink} w formularzu. Aplikacja ta umożliwia użytkownikom wprowadzanie danych za pośrednictwem formularza bez konieczności korzystania z okna podręcznego mapy, z jednoczesnym wykorzystaniem potencjału ${link2}mapy internetowej${closeLink} i edytowalnych usług obiektowych. W celu spersonalizowania i utworzenia formularza GeoForm należy wykonać czynności przedstawione w poniższych etapach.",
      btnPreviousText: "Powrót",
      btnNextText: "Dalej",
      webmapTabTitleText: "Wybierz mapę internetową",
      viewWebmap: "Wyświetl mapę internetową",
      webmapDetailsText: "Wybrana mapa internetowa to ${webMapTitleLink}${webMapTitle}${closeLink}. Aby wybrać inną mapę internetową, kliknij przycisk Wybierz mapę internetową",
      btnSelectWebmapText: "Wybierz mapę internetową",
      btnSelectWebmapTextLoading: "Wczytywanie&hellip;",
      layerTabTitleText: "Wybierz warstwę edytowalną",
      selectLayerLabelText: "Warstwa",
      selectLayerDefaultOptionText: "Wybierz warstwę",
      defaultBasemap: "Przełączanie mapy bazowej",
      secondaryBasemap: "Domyślna mapa bazowa",
      detailsTabTitleText: "Szczegóły formularza",
      detailTitleLabelText: "Tytuł",
      detailLogoLabelText: "Obraz logo",
      descriptionLabelText: "Instrukcje i szczegóły formularza",
      fieldDescriptionLabelText: "Tekst pomocy (opcjonalny)",
      fieldTabFieldHeaderText: "Pole",
      fieldTabLabelHeaderText: "Etykieta",
      fieldTabDisplayTypeHeaderText: "Wyświetl jako",
      fieldTabOrderColumnText: "Kolejność",
      fieldTabVisibleColumnText: "Włączone",
      displayFieldText: "Wyświetl pole:",
      selectMenuOption: "Wybierz menu",
      selectRadioOption: "Przycisk radiowy",
      selectTextOption: "Tekst",
      selectDateOption: "Wybór daty",
      selectRangeOption: "Pokrętło dotykowe",
      selectCheckboxOption: "Pole wyboru",
      selectMailOption: "Email",
      selectUrlOption: "URL",
      selectTextAreaOption: "Obszar tekstu",
      previewApplicationText: "Zobacz podgląd aplikacji",
      saveApplicationText: "Zapisz aplikację",
      saveText: "Zapisz",
      toggleNavigationText: "Przełącz nawigację",
      formPlaceholderText: "Mój formularz",
      shareBuilderInProgressTitleMessage: "Publikowanie formularza geograficznego (GeoForm)",
      shareBuilderProgressBarMessage: "Proszę czekać&hellip;",
      shareBuilderTitleMessage: "Udało się! Element został zapisany",
      shareBuilderTextMessage: "Można zacząć zbierać informacje, udostępniając je innym osobom",
      shareModalFormText: "Łącze do formularza",
      shareBuilderSuccess: "Formularz geograficzny (GeoForm) został zaktualizowany i opublikowany!",
      geoformTitleText: "Formularz geograficzny (Geo Form)",
      layerTabText: "Jest to warstwa, na podstawie której będzie tworzony formularz geograficzny. Warstwa musi być usługą obiektową, dla której włączone są opcje edycji wraz z uprawnieniami do publikowania, dostosowaną do odbiorców.",
      detailsTabText: "Za pomocą poniższych pól Szczegółów formularza należy podać własny Tytuł, dodać własne logo oraz podać krótki opis dla odbiorców formularza geograficznego (GeoForm). W opisie można zawrzeć łącza do innych zasobów, informacje kontaktowe, a nawet odniesienia do aplikacji tworzenia map internetowych zawierającej wszystkie dane zebrane za pomocą tego formularza geograficznego.",
      fieldsTabText: "W tym miejscu można wybrać pola, które będą widoczne dla odbiorców formularza geograficznego, przeprowadzić edycję Etykiet, które będą widzieli, a także dodać krótki Opis ułatwiający wprowadzanie danych.",
      styleTabText: "Za pomocą poniższych motywów dla formularza geograficznego może być nadany wybrany styl.",
      publishTabText: "Po zakończeniu personalizowania formularza geograficznego (GeoForm) należy zapisać tę aplikację i zacząć udostępniać ją odbiorcom. Można zawsze powrócić do tego kreatora i dalej ją personalizować w oparciu o uzyskane opinie.",
      headerSizeLabel: "Rozmiar nagłówka",
      smallHeader: "Użyj małego nagłówka",
      bigHeader: "Użyj dużego nagłówka",
      pushpinText: "Pinezka",
      doneButtonText: "Zapisz i zamknij",
      fieldTabPlaceHolderHeaderText: "Wskazówka (opcjonalna)",
      enableAttachmentLabelText: "${openStrong}Włącz załączniki${closeStrong}",
      enableAttachmentLabelHint: "Tu możesz włączyć/wyłączyć załączniki",
      attachmentIsRequiredLabelText: "${openStrong}Załącznik wymagany${closeStrong}",
      attachmentIsRequiredLabelHint: "W razie konieczności od użytkowników można wymagać dodania załącznika.",
      attachmentLabelText: "Etykieta przycisku załącznika",
      attachmentLabelHint: "Ten tekst pojawi się obok przycisku załącznika. Możesz wykorzystać to miejsce do opisania, jakich załączników oczekujesz od odbiorców (zdjęcie, film, dokument itd.) i w jakim formacie (.jpeg, .png, .docx, .pdf itd.), a także do zamieszczenia wszelkich dodatkowych instrukcji",
      attachmentDescription: "Opis załącznika",
      attachmentHint: "W razie potrzeby możesz w tym miejscu przekazać dodatkowe instrukcje dotyczące załącznika.",
      jumbotronDescription: "Użyj dużego lub małego nagłówka formularza. Duży nagłówek może pomóc zdefiniować cel Twojej aplikacji, ale zajmuje więcej miejsca na ekranie",
      shareGeoformText: "Udostępnij formularz geograficzny (GeoForm)",
      shareDescription: "Panel udostępniania pozwala odbiorcom łatwo udostępnić formularz geograficzny (GeoForm) innym współtpracownikom po złożeniu przez nich wniosku. Funkcję tę można w dowolnej chwili wyłączyć.",
      defaultMapExtent: "Domyślny zasięg mapy",
      defaultMapExtentDescription: "Po przesłaniu zgłoszenia zasięg mapy internetowej powróci do ustawienia domyślnego. Funkcję tę można w dowolnej chwili wyłączyć.",
      pushpinOptionsDescription: "Kolor pinezki używanej na mapie można zmieniać. Powinien on być inny niż w przypadku pozostałych symboli mapy tak, aby ułatwić użytkownikom umieszczanie zgłoszeń na mapie.",
      selectLocationText: "Wybierz lokalizację według",
      myLocationText: "Moja lokalizacja",
      searchText: "Wyszukaj",
      coordinatesText: "Współrzędne szerokości i długości geograficznej",
      usng: "Współrzędne USNG",
      mgrs: "Współrzędne MGRS",
      utm: "Współrzędne UTM",
      selectLocationSDescription: "Zezwalaj użytkownikom na wybór lokalizacji za pomocą tych metod.",
      dragTooltipText: "Przeciągnij pole do miejsca, w którym ma być wyświetlane",
      showHideLayerText: "Pokaż warstwę",
      showHideLayerHelpText: "Można skonfigurować formularz geograficzny (GeoForm), żeby pokazywał/ukrywał warstwę. Ta opcja dotyczy wyłącznie konfiguracji warstw pojedynczych.",
      labelHelpMessage: "Etykieta",
      placeHolderHintMessage: "Tekst wskazówki",
      placeHolderHelpMessage: "Tekst pomocy",
      selectTextOptionValue: "Wybór filtra",
      disableLogo: "Wyłącz logo",
      disableLogoDescription: "Można skonfigurować formularz geograficzny, żeby pokazywał/ukrywał logo w nagłówku formularza",
      locateOnLoadText: "Zlokalizuj podczas wczytywania",
      locateOnLoadDescription: "Można skonfigurować formularz geograficzny, żeby używał bieżącej lokalizacji podczas wczytania strony",
      selectLayerFieldTabText: "Wybierz warstwę",
      allLayerSelectOptionText: "WSZYSTKIE",
      disableViewer: "Wyłącz przeglądarkę",
      disableViewerDescription: "Można skonfigurować formularz geograficzny, żeby wyłączał/włączał przeglądarkę",
      displayFieldHintText: "Wybrane pole wyświetlania zostanie pokazane w trybie przeglądania jako pole tytułu"
    },
    viewer: {
      geocoderCancelText: "Anuluj",
      viewReportsTabText: "Zgłoszenia",
      viewLegendTabText: "Legenda",
      viewAboutusTabText: "Informacje o",
      viewMapTabText: "Mapa",
      sortHeaderText: "Sortuj według:",
      btnSubmitReportText: "Prześlij raport",
      geocoderPlaceholderText: "Kod pocztowy, miasto itd.",
      noSearchResult: "Nie znaleziono wyników",
      recordsTabTooltip: "Wyświetl zgłoszenia",
      legendTabTooltip: "Legenda",
      aboutUsTabTooltip: "AboutUs",
      mapTabTooltip: "Mapa",
      appLoadingFailedMessage: "Tryb przeglądania (ViewerMode) jest niedostępny",
      btnDescendingText: "Malej",
      btnAscendingText: "Rosn",
      geometryUnavailableErrorMessage: "Nie można znaleźć geometrii obiektu",
      infoPopupOffErrorMessage: "Podręczne okno informacyjne (InfoPopup) jest wyłączone",
      btnLoadMoreText: "Wczytaj więcej",
      unavailableTitleText: "Bez tytułu",
      unavailableConfigMessage: "Nie można wczytać konfiguracji"
    }
  })
);