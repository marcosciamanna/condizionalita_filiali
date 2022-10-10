/* Funzioni di utilità */

function sendEmail(from, to, body, subject) {

    var siteurl = _spPageContextInfo.webServerRelativeUrl;
    var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
    $.ajax({
        contentType: 'application/json',
        url: urlTemplate,
        type: "POST",
        data: JSON.stringify({
            'properties': {
                '__metadata': {
                    'type': 'SP.Utilities.EmailProperties'
                },
                'From': from,
                'To': {
                    'results': [to]
                },
                'Body': body,
                'Subject': subject
            }
        }),
        headers: {
            "Accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
        },
        success: function(data) {
            // alert('Email Sent Successfully');
        },
        error: function(err) {
            // alert('Error in sending Email: ' + JSON.stringify(err));
        }
    });
};

window.onerror = function (msg, url, lineNo, columnNo, error) {
	var subject = "Errore calendario sharepoint filiali";
	var body = "Message: "+msg+"<p>URL: "+url+"</p><p>Line: "+lineNo+"</p><p>Column: "+columnNo+"</p><p>Error: "+error+"</p>";
	
	sendEmail("marco.sciamanna2@bancaditalia.it", "marco.sciamanna2@bancaditalia.it", body, subject);
	return false;
}


function hideOptionFromSelectBut(select, options, resetIndex) {
	if(resetIndex) {
		select.options[0].selected = true;
	}
	
	for (var i = 0; i < select.options.length; i++) {
		select.options[i].hidden = select.options.disabled = !options.includes(select.options[i].value);
	}		
}
