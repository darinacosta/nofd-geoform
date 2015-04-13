var testTrigger = function() {

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
   var formFields = ['LOT_VACANT', 'BLIGHTED_DANGEROUS', 'HOME_VACANT','COMMERCIAL','ANYONE_HOME','SMOKE_ALARM','ALARM_WORKS','CAN_WE_INSTALL']
   var hideQuestionsBelow = function(id){
    $('.panel-body').click(function() {
      if($('#' + id + 'Yes').is(':checked')) { 
        console.log('HEY')
        $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).nextAll().css( "display", "none" )
      } else if($('#' + id + 'No').is(':checked')) { 
        $( ".geoFormQuestionare" ).has( '[id^="' + id + '"]' ).nextAll().css( "display", "block" )
      }
    });
   }


  /*$('.panel-body').click(function() {
      console.log("panel body clicked")
      if($('#LOT_VACANTYes').is(':checked')) { 
        console.log('HEY')
        $( ".geoFormQuestionare" ).has( '[id^="LOT_VACANT"]' ).nextAll().css( "display", "none" )
      } else if($('#LOT_VACANTNo').is(':checked')) { 
        $( ".geoFormQuestionare" ).has( "[id^=LOT_VACANT]" ).nextAll().css( "display", "block" )
      }
    });*/
   $.each(formFields, function(i, v){
      hideQuestionsBelow(v);
   })
}

 var clickInterval = setInterval(function() {
    testTrigger();
    questionDisplayControl();
        clearInterval(clickInterval);
    }, 3000)