var companies = ["E01A", "E01B","E01C","E04A","E04B","E04C","E06A","E06B","E06C","E08A","E08B","E08C","E09A","E09B","E09C","E10A","E10B","E10C","E12A","E12B","E12C","E13A","E13B","E13C","E14A","E14B","E14C","E15A","E15B","E15C","E16A","E16B","E16C","E17A","E17B","E17C","E18A","E18B","E18C","E20A","E20B","E20C","E21A","E21B","E21C","E24A","E24B","E24C","E25A","E25B","E25C","E26A","E26B","E26C","E27A","E27B","E27C","E29A","E29B","E29C","E31A","E31B","E31C","E33A","E33B","E33C","E35A","E35B","E35C","E36A","E36B","E36C","E37A","E37B","E37C","E38A","E38B","E38C","E39A","E39B","E39C","E40A","E40B","E40C","E45A","E45B","E45C","E46A","E46B","E46C","L06A","L06B","L06C","L07A","L07B","L07C","L08A","L08B","L08C","L09A","L09B","L09C","L11A","L11B","L11C","L13A","L13B","L13C","S02A","S02B","S02C","S07A","S07B","S07C","R02A","R02B","R02C","R07A","R07B","R07C","HMA","HMB","HMC"],
    personnel = ["ABRON, DAVID I.","ACHORD, STEVEN D.","ACKERMANN, KENNETH P.","ACKERMANN, KENNETH P.","ADAMS, MICHAEL A.","ADAMS, TYRONE M.","AFFOLDER, JASON R.","AIRHART, GLEN J.","AITKEN, GERARD P.","AKEN, JASON C.","ALBERT, DARRELL K.","ALBERT, GEORGE H.","ALONZO, JUSTIN C.","ANDERSON, RICHARD L.","ANGELO, JORDAN S.","ANSARDI, JEFFREY P.","ANTOINE, MICHAEL M.","ARMANT, CRAIG","ARMELIN, DONALD G.","ARNOLD, LEONCE L.","ARNONE, CHRIS J.","ARRIOLA, ROY A.","ASCANI, GINO M.","ASHBURN, DAVID H.","AUDLER, SCOTT S.","AVERY, RUSSELL A.","BACCHUS, KIRK A.","BAGERT, GLEN A.","BAILEY, RYAN","BAILEY, SHANE M.","BALLARD, WILLIAM N.","BALLI, JOHNNY A.","BALSER, DOUGLAS P.","BANKSTON, JASON","BARBAZON, KEITH J.","BARBE, DAVID B.","BARRIOS, WADE H.","BAUDY, JARED D.","BAUDY, JEROME A.","BAULDEN, PERCY M.","BEAULIEU, MARK","BEAULIEU, RONALD M.","BEAULIEU, STERLING","BEBA, HENRY L.","BECKHAM, HENRY G.","BENNETTE, JOSEPH","BERGGREN, JAMES","BERTRAM, BROOKS G.","BIALAS, JON C.","BLACKWELL, JOHN M.","BLAKE, DARRELL T.","BLOOD, JOHN-AVERY R.","BLOUIN, BYRON J.","BLOUIN, HAROLD H.","BLOUNT, RINEY K.","BOISDORE, ALAN A.","BOLDEN, PATRICK X.","BOLLMEYER, JOSHUA A.","BONDS, ROBERT B.","BONNEE, PHILLIP M.","BOUDREAUX, JON S.","BOURDAIS, ARMAND M.","BOURG, CRAIG C.","BOURGEOIS, ERIC S.","BOURGEOIS, MICHAEL D.","BOX, ANDRE M.","BRADLEY, BENJAMIN S.","BREVELLE, BRADLEY J.","BROUSSARD, ADRIEN J.","BROWN, HADEN","BROWN, MILTON X.","BRUNO, ALEC M.","BUFORD, DEVIN E.","BURAS, RHETT J.","BURLETT, DAMIAN J.","BURLETT, ELLIOTT C.","BURLETT, RYAN J.","BURSE, HARVEY L.","BUTLER, KENNETH","CALAMARI, MICHAEL J.","CAMERON, SCOTT R.","CAMPBELL, ADAM C.","CAMPBELL, DARREN C.","CAMPBELL, DUANE A.","CARDINALE, DOUGLAS C.","CARDINALE, JOHN M.","CARRIER, LOUIS A.","CARROLL, BOBBY G.","CARTER, JARED A.","CARUSO, BARRY J.","CASE, GORDON S.","CASEY, BRETT D.","CASEY, BYRON J.","CASEY, RAY M.","CASEY, SEAN H.","CASIMIRE, CHAD W.","CASTAGNETTA, PETER N.","CASTLE, DAVID S.","CATCHOT, RANDY J.","CERRONE, DANIEL","CHAPPUIS, SCOTT A.","CHARLOT, ALFRED M.","CHESTER, MATTHEW A.","CHOINA, RUSSELL L.","CIPRIANO, SCOTT A.","CLAIR, COREY A.","CLARK, JEFFREY L.","CLAWSON, MICHAEL B.","COLIN, SHAWN M.","COLIN, TIMOTHY C.","COLLIGNON, CRAIG L.","COLLINS, ARNOLD C.","COLLINS, DAVID O.","COLLONGUES, CHRISTOPHER M.","COLLONGUES, CRAIG J.","COLLONGUES, WAYNE E.","CONDON, DAVID V.","CONDON, RICHARD D.","CONDON, STEVEN T.","CONNER, JEFFREY B.","CONNERS, RICHARD C.","COOGAN, THOMAS D.","COOKMEYER, RANDY J.","COSTANTINI, MATTHEW J.","COURTADE, DONALD J.","CRUSTO, ALVIN R.","CRUTCHFIELD, DAMON","CRUTHIRDS, ALLEN D.","DAIGLE, LEONARD R.","DALFERES, CHARLES","DANFLOUS, DANIEL J.","DANIELS, DUAINE P.","DAVIS, GREGORY P.","DAVIS, ISRAEL J.","DAVIS, LIONEL","DAY, TROY M.","DEHON, PATRICK M.","DEIST, CHRISTOPHER M.","DELAHOUSSAYE, LLOYD","DELAO, JOHN D.","DELERY, CARL J.","DELPIDIO, GEORGE W.","DEROCHE, MICHAEL S.","DESDUNES, LYNELL J.","DESROCHE, GARY T.","DIGGS, JOHNATHAN C.","DINGEMAN, EDWARD J.","DISALVO, DEAN J.","DIXON, DAVID A.","DOMILISE, ZACHARY D.","DOMIO, ROLAND A.","DONALDSON, MICHAEL","DUCKWORTH, LAWRENCE X.","DUFRENE, JASON W.","DUFRENE, JOEY W.","DUGAN, AARON A.","DUGAS, NEIL T.","DUPLANTIS, PAUL A.","DWELLE, WILLIAM D.","DYER, VARRICK F.","EBBS, MICHAEL A.","EDWARDS, RANDOLPH B.","EISERLOH, ROBERT M.","ELLIS, MANUEL J.","ELWOOD, GERALD A.","ESCHETE, ERIC J.","EVERETT, PETER A.","FACIANE, ALBERT J.","FANDAL, JONATHAN D.","FARRAE, ERIC J.","FAVALORA, ALAN A.","FAVAZA, JOSEPH N.","FAVAZA, JOSEPH N.","FAVAZA, TIMOTHY R.","FELTON, NICHOLAS G.","FERGUSON, PATRICK V.","FERNANDEZ, ALVIN H.","FIELDING, JAY C.","FIORELLO, RONALD G.","FLATTMANN, JAMES G.","FLETCHER, RICKY A.","FLETCHER, TORRY R.","FLOT, MICHAEL A.","FORE, BRAXTON J.","FORSTER, GERALD L.","FORTIN, TRINO D.","FRANCIS, JOSEPH A.","FRANKLIN, HERMAN J.","FREDERICK, ERIC J.","FREDERICKS, KEITH A.","GALES, RAHSAAN P.","GALLAGHER, JOHN J.","GANT, RASHAD J.","GAUTREAUX, ROBERT N.","GERHOLD, ARCHIE J.","GILMORE, BERT E.","GLASSMAN, JARED M.","GNUSE, JOHN R.","GODFREY, BRENTON M.","GOETTER, CHRISTOPHER D.","GRANT, MARCUS J.","GRAVES, CEDRIC J.","GRAY, MARQUIES J.","GRAYER, ANTONIUS J.","GREEN, DESHAWN R.","GREEN, NICHOLAS D.","GREEN, REGINALD A.","GREMILLION, ZACHARY P.","GRIESHABER, PEARCE L.","GRIFFIN, MICHAEL","GRILLIER, PAUL M.","GRUNBERG, MARK J.","GUERRERO, LENIN X.","GUIDRY, GEORGE A.","GUSMAN, BRYAN C.","HADDICAN, ANDREW M.","HADLEY, ROXANNE H.","HAHN, COLBY C.","HARDOUIN, JULIUS E.","HARDY, ANTHONY","HARDY, TERRY","HARELL, MARK S.","HARGIS, GARY S.","HARPER, BRANDON J.","HARRIS, GEORGE","HARRIS, JIMMIE D.","HARRISON, RODDRICK C.","HART, DONNIE R.","HATCH, CAMERON W.","HAYDEL, CRAIG M.","HAYDEL, GARY S.","HEBERT, DAVID J.","HEBERT, GARRETT T.","HELLMERS, PAUL D.","HENDERSON, ROBERT A.","HENDERSON, WADE E.","HENNESSEY, MARK L.","HENNESSEY, ROSS A.","HENRY, BLAKE M.","HILL, NATHANIEL","HO, STANLEY","HOLMES, EDWIN X.","HOPKINS, BRETT D.","HOUSER, JAMES S.","HOUSTON, DON F.","HOWARD, GREGORY J.","HOWELL, JASON E.","HOWLEY, CHARLES R.","HOWLEY, THOMAS D.","HUGHES, KENYON R.","HUGHES, RONALD C.","HUGHES, TIMOTHY T.","HUNTER, AVERY A.","HURLEY, BRUCE V.","HYDE, MARLAN C.","HYDE, THOMAS","IMBRAGUGLIO, DARREN M.","INOA, MARC A.","IVERSON, MARCO J.","JACKSON, DWAYNE J.","JACOBS, BRYAN A.","JACOBS, WILLAIM J.","JAHNCKE, KATHERINE B.","JEFFERSON, KIRK A.","JENKINS, ANDRE R.","JENNINGS, JOSEPH E.","JENSEN, RICHARD A.","JOHNSON, STEVEN B.","JONAU, CHARLES N.","JONES, DARREN M.","JONES, DARRICK","JONES, ERNEST T.","JONES, GENORD L.","JONES, GREGORY","JONES, KENDERICK A.","JONES, NUMA L.","JONES, TOMMIE L.","JORDAN, GLENN D.","JUNO, ALFRED J.","JUPITER, EDWARD","JURISICH, JOSEPH J.","KAHLER, ZACHARY G.","KEENE, DARYL J.","KELLER, CHRISTOPHER D.","KEMP, ROBERT A.","KENNY, JOSEPH J.","KING, GABRIEL I.","KING, PAUL J.","KINLER, KENNETH D.","KIRSCH, GREGORY D.","KIRSCH, KENNETH G.","KLUMPP, DARRYL P.","KLUMPP, JOHN C.","KLUMPP, JUSTIN P.","KNECHT, FREDERICK","KOENIG, CHRISTIAN","KOENIG, JUSTIN P.","KOENIG, KALVIN","KREGER, ROBERT E.","KREGER, THEODORE A.","KRSAK, BRANDON S.","KURUDA, JOSHUA A.","LABARRIERE, KEITH A.","LABORDE, LOGAN B.","LABRANCH, WINSTON","LABROSSE, TIMOTHY M.","LACAVA, RICK J.","LACAVA, VICTOR J.","LAIN, ANDREW D.","LAMBERT, STEVEN D.","LAMPARD, JAIME S.","LANDRY, WADE B.","LASSALLE, PIERRE J.","LAUGHLIN, KEVIN G.","LAUGHLIN, NICHOLAS J.","LAVENE, NICHOLAS C.","LAZZARI, DENNIS A.","LEWIS, JARED J.","LICCIARDI, JOSEPH P.","LINDBLOM, PETER E.","LOCICERO, PHIL S.","LOMBARD, ALDEN J.","LOMBARD, EDWARD M.","LOMBARDINO, BRADLEY M.","LONON, ANTHONY C.","LUCIDO, MICHAEL D.","LUNZ, ROSS C.","MAGEE, JERRY M.","MAGEE, JESSIE C.","MAGGIO, MARK J.","MAHL, COREY J.","MAHLER, DUSTIN J.","MAJORIE, STEPHEN S.","MAJOUE, NATHAN L.","MANALE, PETER J.","MARCELLO, MICHAEL J.","MARGIN, JOSEPH J.","MARPHIS, CARLO B.","MARTIN, BRANDON P.","MARTIN, JASON J.","MARTIN, STEVEN C.","MARTINEZ, DAVID K.","MARTORY, PAUL F.","MARTORY, ROBERT J.","MARULLO, DEAN F.","MASON, PHILLP C.","MASSA, EMANUEL D.","MATHERNE, BRAD J.","MATHIEU, KYLE X.","MATTHEWS, KENNETH J.","MATUSOFF, GREGORY L.","MAURIN, SHANE P.","MAUTHE, STEPHEN W.","MAYS, KEITH A.","MCCONNELL, TIMOTHY A.","MCCORKLE, KEVIN","MCCOY, LIONEL","MCCOY, ROBERT P.","MCGINNIS, KENDRICK R.","MCGRATH, CHARLES E.","MCKEAN, BRIAN S.","MCWILLIAMS, MILTON M.","MEAGHER, THOMAS F.","MELANCON, PAUL J.","MENDELSON, BRIAN D.","MENDEZ, JAMES J.","MERCIER, BYRON L.","MEREDITH, CORNELL D.","MEYERS, DENNIS S.","MEYERS, LARRY A.","MEYERS, MATTHEW W.","MICKAL, CHRIS E.","MILLER, BYRON K.","MILLIET, ROBBIE J.","MISCHLER, AARON J.","MITCHELL, ANTHONY J.","MONTEVERDE, ANDREW S.","MOORE, CLIFTON J.","MOORE, NIGEL L.","MOORE, TROY D.","MORGAN, NATHEL","MORONEY, JAMES L.","MORRIS, ERNEST","MORRIS, TERENCE N.","MORRIS, TERENCE N.","MORRIS, WINFRED W.","MUNCH, EARL J.","MURPHY, MICHAEL P.","MURRAY, GAVIN M.","MWENDO, UKALI","NAPOLITANO, DARRIN J.","NEELY, ROY E.","NEELY, RYAN G.","NELSON, DEREK M.","NELSON, ROMAN J.","NETHERY, BRUCE J.","NICK, DAVID F.","NOYA, KEITH T.","NUNEZ, SIDNEY","NURTON, NICOLE A.","O'DONNELL, DANIEL M.","O'KEEFE, REICE I.","O'KEEFE, ROSS M.","ORGERON, DAVID M.","ORGERON, ROLAND P.","OUSTALET, JOHN T.","OWENS, ADAM E.","OWENS, ERNEST A.","PAGART, STEPHEN C.","PAILET, LINDA M.","PALACIOS, PABLO","PANQUERNE, PETER M.","PARKER, GEORGE A.","PARKER, JAMES W.","PARKER, JESSE D.","PARKS, WILLIAM H.","PARLIPIANO, JOSEPH A.","PARNELL, PAUL T.","PASOS, JUAN C.","PATTERSON, DANIEL J.","PELTIER, JEFFREY R.","PENNY, DANIEL M.","PERCLE, RYAN","PERDUE, KENNETH N.","PERRY, JERMAINE R.","PETERS, LUCIEN J.","PETTIGREW, ZACHARY K.","PICHON, TERRENCE A.","PICONE, JONATHAN D.","PIERRE, YA'RON J.","PITRE, ARMAND R.","PITRE, ROBERT J.","PITRE, ROBERT J.","PLAISANCE, AUTREY J.","PLAISANCE, ERIC J.","POCHE', RAYMEL D.","POLLOCK, ERNEST W.","POOLE, EDWARD E.","PORCHE, KELLY J.","PORCHE, MARK D.","POWELL, DENNARD A.","POWER, TIMOTHY L.","PRATS, WILLIAM L.","PREVOST, KENNETH G.","PRICE, CLYDE B.","QUILLENS, BELFORD J.","RAGUSA, VINCENT J.","RANDALL, NORMAN","RANDOLPH, KEVIN A.","REAUX, DARROW W.","REED, STANLEY W.","REUTHER, ROBERT D.","REZNIK, CHRISTOPHER M.","RICHARD, ANDREW M.","RICHARD, ROSS P.","RICHARDS, BRIAN A.","RICHARDSON, EUGENE","RICKE, JUSTIN R.","RICKOLL, GEORGE J.","ROBERT, DEANY A.","ROBINSON, JOHN C.","ROBINSON, RODERICK L.","ROBINSON, WILLIAM E.","RODRIGUE, JOSEPH M.","ROGAN, KEVIN M.","ROUSSET, ROY R.","ROY, STEPHEN M.","SALVADORE, MARK A.","SALVAGGIO, MICHAEL L.","SANTA CRUZ, WALTER J.","SANTALUCITO, TONY L.","SAVELLE, GARY M.","SCHLOEGEL, ALFRED J.","SCHMIDT, SCOTT H.","SCHMIDT, STEFAN C.","SCHMITT, STEPHEN","SCHORR, DENNIS H.","SCHORR, HENRY J.","SCHUELKE, JUSTIN J.","SCHULTZ, WADE S.","SCHWANKHART, RONALD J.","SCIORTINO, MICHAEL A.","SCOTT, WILLIAM P.","SEGRETTO, JOSEPH D.","SENNETT, BRIAN K.","SHAHEED, ABDUL M.","SHAHEER, LATEEF J.","SHANAHAN, DOUGLAS A.","SHANKS, BILLY E.","SHELBY, DARRICK J.","SHUBERT, MARK A.","SIGNORELLI, DOMINIC S.","SIMMONS, ROY L.","SIMMS, VERNON W.","SIMON, DANNY J.","SINCERE, BRIAN R.","SMITH, ANTHONY P.","SMITH, GEORGE T.","SMITH, GREGORY J.","SMITH, HANSON J.","SMITH, JEFFREY P.","SMITH, LOUIS J.","SMITH, MICHAEL P.","SMITH, MILTON","SMITH, SCOTT J.","SMITH, SHEDRICK K.","SNEED, MARKELL A.","SNELL, WAYNE M.","SOETEN, JAN","SONGY, DARRIN M.","SPEARS, JAMES L.","SPEARS, QUINTEN C.","SPEARS, TERRANCE T.","SPECTOR, MATTHEW M.","SPENCER, WESLEY C.","SPIERS, WILLIAM R.","SPROLES, DANNY J.","ST. JULIEN, PAUL","ST. JULIEN, VAUGHN P.","STEELE, PAUL A.","STRICKLAND, DANIEL R.","STUKES, RICKEY R.","STUTSON, TRAVIS J.","STYRON, JOHN R.","SYLVE, DAMIAN C.","TABOR, BRIAN T.","TAYLOR, JAMES W.","TEMPLET, PAUL A.","TERVALON, BRANNON A.","THIBERVILLE, RICHARD J.","THIBODEAUX, WESLEY J.","THIRIOT, JOSEPH P.","THOMAS, ELBERT R.","THOMPSON, OLIVER R.","TORANTO, RODOLPHE","TOURRES, ROBERT G.","TRAN, DZUNG Q.","TREMBLAY, MARC A.","ULI, PETER S.","ULRICH, KYLE J.","USSIN, THOMAS T.","VALOIS, EARL P.","VANCE, JAMES F.","VANDERBROOK, HENRY J.","VAZQUEZ, GLYNN R.","VEAZEY, RICHARD","VONHOVEN, JOHN J.","WAGNER, LANCE V.","WALLACE, GLEN D.","WASHINGTON, ELMER J.","WASHINGTON, JASON R.","WASHINGTON, JOSEPH G.","WATKINS, DAVID L.","WATKINS, JAMES X.","WATSON, SEAN R.","WEHLEN, ERNEST J.","WEINMANN, JOHN S.","WHEELER, JOSEPH K.","WHITE, CHRISTOPHE","WHITE, CLARENCE","WHITE, HENRY J.","WHITE, LARRY","WILLIAMS, ANTHONY G.","WILLIAMS, BARRETT","WILLIAMS, COREY D.","WILLIAMS, DAVES","WILLIAMS, DONALD R.","WILLIAMS, FRANCIS A.","WILLIAMS, KEVIN R.","WILLIAMS, LEROY N.","WILLIAMS, MICHAEL","WILLIAMS, TROY K.","WILLIAMSON, RYAN M.","WILTON, ROBERT L.","WILTZ, LARRY J.","WINDSAY, MICHAEL T.","WINSTON, DELANEY J.","WOLFE, ASHLEY L.","WOODRUFF, ADAM R.","WOODS, DEREK A.","WOODS, RYAN D.","WREN, CHRISTOPHER D.","YOUNG, DARIUS T.","YSAGUIRE, GUSTAVE S.","ZEAGLER, MARK A."],

    testTrigger = function() {

        console.log('test trigger')
        
        // Add styles
        //$("head").append("<link id='autogeo-style' href='../css/autogeo.css' type='text/css' rel='stylesheet' />");
        
        // Target Address/Location input field
        var addressInput = $('input[id="searchInput"]');
        
        // Add wait icon
        addressInput.after('<span id="geo-loader" style="display: none;"><img src="images/select2-spinner.gif"></span>');
        
        // Auto geocoder for Address/Location input field
        addressInput.autocomplete({
            source: function(request,response) {
                var IsAddress = false;
                var xdr = false;
                var inputWidth = addressInput.width();
                
                // Show spinner icon
                $("#geo-loader").show();
                
                // Store input text
                var addressQuery = request.term;
                
                function crossDomainAjax (url, successCallback) {
                    
                    // IE8 & 9 only Cross domain JSON GET request
                    if ('XDomainRequest' in window && window.XDomainRequest !== null) {

                        if(xdr){
                            xdr.abort();
                        }
                        
                        var xdr = new XDomainRequest(); // Use Microsoft XDR
                        xdr.open('get', url);
                        xdr.onload = function () {
                            var dom  = new ActiveXObject('Microsoft.XMLDOM'),
                                JSON = $.parseJSON(xdr.responseText);

                            dom.async = false;

                            if (JSON == null || typeof (JSON) == 'undefined') {
                                JSON = $.parseJSON(data.firstChild.textContent);
                            }

                            successCallback(JSON); // internal function
                        };

                        xdr.onerror = function() {
                            _result = false;  
                        };

                        xdr.send();
                    }
                    // Do normal jQuery AJAX for everything else          
                    else {
                        if(GeoRequest){
                            GeoRequest.abort();
                        }
                        
                        var GeoRequest = $.ajax({
                            url: url,
                            cache: false,
                            dataType: 'json',
                            type: 'GET',
                            async: true, // must be set to false
                            success: function (data) {
                                successCallback(data);
                            }
                        });
                    }
                }
                
                function ucaseWords(s){
                    var arr = s.toLowerCase().split(' ');
                    var result = "";
                    for (var x=0; x<arr.length; x++)
                        result+=arr[x].substring(0,1).toUpperCase()+arr[x].substring(1)+' ';
                    return result.substring(0, result.length-1);            
                }
                
                // Set url to send geocoder request
                //var geocodeUrl = "../edts/mapper/geocode.aspx?address=";
                var geocodeUrl = "http://gis.nola.gov:6080/arcgis/rest/services/AddPtLoc/GeocodeServer/findAddressCandidates?Single Line Input=";

                // Check if first character is a number
                var firstChar = addressQuery.charAt(0);                 
                if (/[0-9]/.test(firstChar)) {
                    
                    // Check for 'New Orleans'
                    var querywords = [
                        "New Orleans"
                    ];
                    
                    // If Address/Location doesn't have at least 'New' at the end, add 'New Orleans LA'
                    $.each(querywords, function(){
                        var regex = new RegExp( '(?=.*\\b' + this.split(' ').join('\\b)(?=.*\\b') + '\\b)', 'i' );

                        if(!regex.test(addressQuery)){
                            lastIndex = addressQuery.lastIndexOf("New");
                            if(lastIndex > 0){
                                addressQuery = $.trim(addressQuery.substring(0, lastIndex));
                            }
                            addressQuery = escape(addressQuery.trim().replace(/ /g, '+')) + '&City=' + this.trim().replace(/ /g, '+') + '&Single+Line+Input=&outFields=&outSR=&searchExtent=&f=pjson';
                        }
                    })
                    
                    IsAddress = true;
                    console.log('this is an address');
                }
                
                AutoGeoCode();

                
                function AutoGeoCode(){
                    var i = 0;
                    var j = 0;
                    var item_count = 0;
                    var geoResults = [];
                    
                    console.log('parse geocode response');
                    
                    // Make secondary geocoder request
                    $.support.cors = true;
                    
                    if(IsAddress){
                        var GeoLink = geocodeUrl + addressQuery;
                    }else{
                        var GeoLink = "http://gis.nola.gov:6080/arcgis/rest/services/Staging/Placenames/GeocodeServer/findAddressCandidates?Single Line Input=" + escape(addressQuery.trim().replace(/ /g, '+')) + "&SingleLinePlaceName=&outFields=&outSR=&searchExtent=&f=pjson";
                    }

                    // Send request to secondary geocoder
                    crossDomainAjax(GeoLink, function (result) {
                        console.log(result);
                        
                        // Parse geocoder JSON response into object
                        var GeoResponse = result;
                        
                        // Format response to autocomplete
                        if(GeoResponse.candidates.length > 0){
                            $(GeoResponse.candidates).each(function(index,item){
                                geoResults[j] = {
                                    'address' : ucaseWords(item.address),
                                    'lat' : item.location.y,
                                    'lng' : item.location.x
                                }
                                j++;
                                i++;
                            });
                            j = 0;
                        }
                        
                        // Display response in drop-down
                        response($.map(geoResults, function(listItem) {
                            $("#geo-loader").hide();
                            return {
                                label: listItem.address,        // appears in dropdown box
                                value: listItem.address + ", New Orleans LA",        // inserted into input element when selected
                                geocode: listItem               // all geocode data: used in select callback event
                            }
                        }));
                    });
                }
            },

            // When Address/Location in auto-complete drop-down is selected
            select: function(event,ui){
                
                // Close drop-down
                addressInput.autocomplete("close");
                
                // Update Address/Location field
                addressInput.val(ui.item.value);
                
                // Update Lat/Long fields
                $('input[name="latitude"]').val(ui.item.geocode.lat);
                $('input[name="longitude"]').val(ui.item.geocode.lng);                      
            }
        });
    };




var questionDisplayControl = function(){
   var affirmativeFormFields = ['LOT_VACANT', 'HOME_VACANT', 'SMOKE_ALARM','ALARM_WORKS', 'COMMERCIAL'],
       neggativeFormFields = ['ANYONE_HOME', 'CAN_WE_INSTALL'],
       occupantFields = ['OCC_NAME','OCC_PHONE','OCC_NUM'],

   affirmativeHideQuestionsBelow = function(id){
     $.each(affirmativeFormFields, function(i, v){
      if($('#' + id + 'Yes, [id="' + id +'Yes (commercial only)"]').is(':checked')) { 
        console.log('HEY')
        $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).nextAll().css( "display", "none" )
      } else if($('#' + id + 'No, [id="' + id +'Yes (commercial/residential, more than 3 units)"]').is(':checked')) { 
        $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).nextAll().css( "display", "block" )
      }
    });
   },

   neggativeHideQuestionsBelow = function(id){
    $.each(neggativeFormFields, function(i, v){
      if($('#' + id + 'No').is(':checked')) { 
        console.log('HEY')
        $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).nextAll().css( "display", "none" )
      } else if($('#' + id + 'Yes').is(':checked')) { 
        $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).nextAll().css( "display", "block" )
      }
    });
   },

   displayOccupantInformation = function(id){
        if ($("#CAN_WE_INSTALLYes").is(':checked')){
          $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).css( "display", "block" );  
        }else{
          $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).css( "display", "none" );   
        }
   }

   
   init = (function(){
        $( ".geoFormQuestionare" ).has( '[id^="OCC_"]' ).css( "display", "none" );  

        $('#submitButton').click(function(){
          $( ".geoFormQuestionare" ).css('display', 'block')
        })
        
        $('.panel-body').click(function(){
           $.each(affirmativeFormFields, function(i, v){
              affirmativeHideQuestionsBelow(v);
           })

           $.each(neggativeFormFields, function(i, v){
              neggativeHideQuestionsBelow(v);
           })

           $.each(occupantFields, function(i, v){
              displayOccupantInformation(v);
           })

        })
   })();
},

addressPopulator = function(){
  $('#searchSubmit').on('click', function(){
    var addressValue = $( "input#searchInput" ).val()
    $('#Address').val(addressValue);
  })
},

clickInterval = setInterval(function() {
    if($('#COMPANY').length > 0){
        $( "#MEMBER" ).autocomplete({
           source: personnel
        });
        $( "#COMPANY" ).autocomplete({
           source: companies
        });
      testTrigger();
      questionDisplayControl();
      addressPopulator();
      clearInterval(clickInterval);
      } 
    }, 1000)