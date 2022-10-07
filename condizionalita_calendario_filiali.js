
var selectProgetto;
var selectTarget;
var selectFormat;
var selectMeseEF;
var selectContenuto;
var selectFiliale;
var selectRegione;
var codice;
var gruppoEventi;
var inCollabConAltraFiliale;
var altraFiliale;
var tipoLuogo;
var iniziativaLocale;
var iniziativaStandard;
var optionsProgetto_Target;
var optionsProgetto_Contenuto;
var optionsContenutoPerMeseEF;
var filialeRegione;
// var visualizzazioneCalendario;

var FORM_TYPE;

function setFormTypeFromURL() {
	var url = document.location.href;
	
	if ((/NewForm/).test(url)) {
		FORM_TYPE = 'NEW';
	}
	else if ((/EditForm/).test(url)) {
		FORM_TYPE = 'EDIT';	
	}
	else if ((/DispForm/).test(url)) {
		FORM_TYPE = 'DISPLAY';	
	}
	
	console.log("FORM TYPE: "+FORM_TYPE);
}

function setOptions() {
 	optionsProgetto_Target = {
	 	"Progetto Scuola": [
			"---seleziona---",
			"Scuola - docenti primaria",
			"Scuola - docenti secondaria I",
			"Scuola - docenti secondaria II",
			"Scuola - docenti primaria e secondaria I",
			"Scuola - studenti",
			"Scuola - altro"
	    	],
	    	"Progetto CPIA": [
			"---seleziona---",
			"CPIA - docenti",
			"CPIA - docenti e studenti"
	   	 ],
			"Progetto PCTO": [
			"---seleziona---",
			"PCTO - promozione",
			"PCTO - formatori",
			"PCTO - follow-up studenti"
	    	],
		"Nessun progetto di riferimento": [
			"---seleziona---",
			"Studenti scuola",
			"Studenti universita",
			"Donne",
			"Imprese",
			"Adulti"
		]
	};
	
	optionsProgetto_Contenuto = {
		
		"Global Money Week" : [ // Devono farci avere la lista aggiornata
			"---seleziona---",
			"L'Amico immaginario",
			"Kahoot",
			"Altro (specificare nelle annotazioni)"	
		],
		"Progetto Universita" : [
			"---seleziona---",
			"Scienze della formazione",
			"Moneta e pagamenti"
		]
	}
	
	optionsContenutoPerMeseEF = {
		"2022": [
			"---seleziona---",
			"L'Amico immaginario",
			"Costruisci il tuo futuro! - I grado",
			"Costruisci il tuo futuro! - II grado",
			"CPIA",
			"Tutela dei clienti bancari",
			"Centrale dei rischi",
			"Progetto Donne - Soroptimist",
			"Progetto Donne - Notariato",
			"Seminario formativo docenti",
			"Altro (specificare nelle annotazioni)"
		]
	};
  }

function setFilialeRegione() {
	filialeRegione = {
		"---seleziona---" : "---seleziona---",
		"Agrigento": "Sicilia",
		"Ancona" : "Marche",
		"Aosta" : "Valle d'Aosta",
		"Arezzo" : "Toscana",
		"Bari" : "Puglia",
		"Bergamo" : "Lombardia",
		"Bologna" : "Emilia Romagna",
		"Bolzano" : "Provincia Autonoma di Bolzano",
		"Brescia" : "Lombardia",
		"Cagliari" : "Sardegna",
		"Campobasso" : "Molise",
		"Catania" : "Sicilia",
		"Catanzaro" : "Calabria",
		"Firenze" : "Toscana",
		"Foggia" : "Puglia",
		"Forlì" : "Emilia Romagna",
		"Genova" : "Liguria",
		"L'Aquila" : "Abruzzo",
		"Lecce" : "Puglia",
		"Livorno" : "Toscana",
		"Milano" : "Lombardia",
		"Napoli" : "Campania",
		"Padova" : "Veneto",
		"Palermo" : "Sicilia",
		"Perugia" : "Umbria",
		"Pescara" : "Abruzzo",
		"Piacenza" : "Emilia Romagna",
		"Potenza" : "Basilicata",
		"Reggio Calabria" : "Calabria",
		"Roma Sede" : "Lazio",
		"Roma CDM" : "Lazio",
		"Salerno" : "Campania",
		"Sassari" : "Sardegna",
		"Torino" : "Piemonte",
		"Trento" : "Provincia Autonoma di Trento",
		"Trieste" : "Friuli Venezia Giulia",
		"Venezia" : "Veneto",
		"Verona" : "Veneto"
	}
}
	
  
function setVars() {
	setOptions();
	setFilialeRegione();

	if (FORM_TYPE == "NEW" || FORM_TYPE == "EDIT") {
		selectFiliale			= $('select[title=Filiale]')[0];
		selectProgetto 			= $('select[title=Progetto]')[0];
		codice 				= $('input[title=Codice]')[0];
		selectTarget 			= $('select[title=Target]')[0];
		inCollabConAltraFiliale 	= $('select[title="In collab. con altra filiale"]')[0];
		altraFiliale 			= $('select[title="Altra filiale"]')[0];
		tipoLuogo 			= $('select[title="Tipo luogo"]')[0];
		iniziativaLocale	   	= $('select[title="Iniziativa Locale"]')[0];
		selectFormat 			= $('select[title=Format]')[0];
		iniziativaStandard		= $('select[title="Iniziativa standard"]')[0];
		selectMeseEF 			= $('select[title="Mese EF"]')[0];
		selectContenuto 		= $('select[title=Contenuto]')[0];
		gruppoEventi 			= $('input[title="Gruppo eventi"]')[0];
		selectRegione			= $('select[title="Regione"]')[0];
		// visualizzazioneCalendario	= $('input[title=VisualizzazioneCalendario]')[0];
		
	}
	else if (FORM_TYPE == "DISPLAY") {
		inCollabConAltraFiliale		= $('table.ms-formtable > tbody > tr:contains(In collab. con altra filiale) > td').last();
		selectProgetto			= $('table.ms-formtable > tbody > tr:contains(Progetto) > td').last();
		selectFormat			= $('table.ms-formtable > tbody > tr:contains(Format) > td').last();
		selectMeseEF			= $('table.ms-formtable > tbody > tr:contains(Mese EF) > td').last();
		selectRegione			= $('table.ms-formtable > tbody > tr:contains(Regione) > td').last();
		
		// visualizzazioneCalendario	= $('table.ms-formtable > tbody > tr:contains(VisualizzazioneCalendario) > td').last();
	}
	else {	
		// errore
	}
}

// Ridefinisco la funzione per la validazione
/*
function PreSaveItem() {
	if (selectProgetto.value == "---seleziona---") {
		alert("Selezionare il valore per Progetto");
		return false;
	}
	// Regione
	// Filiale
	return true;
}
*/

function setShowHideAndDefaultSelection() {

	$('nobr:contains(Giornata intera)').closest("tr").hide();
	$('nobr:contains(Ricorrenza)').closest("tr").hide();
	$('nobr:contains(Regione)').closest('tr').hide();
	// $('nobr:contains(VisualizzazioneCalendario)').closest("tr").hide();
	
	
	if (FORM_TYPE == "NEW") {
		$('nobr:contains(Tipo luogo)').closest("tr").hide();
		$('nobr:contains(Altra filiale)').closest("tr").hide();		
		$('nobr:contains(Target)').closest("tr").hide();
		$('nobr:contains(Codice)').closest("tr").hide();
		$('nobr:contains(Iniziativa standard)').closest("tr").hide();
		$('nobr:contains(Contenuto)').closest('tr').hide();
		$('nobr:contains(Gruppo eventi)').closest('tr').hide();
	}
	else if (FORM_TYPE == "DISPLAY") {
		$('table.ms-formtable > tbody > tr:contains("Giornata intera")').hide();
		$('table.ms-formtable > tbody > tr:contains("Ricorrenza")').hide();
		// $('table.ms-formtable > tbody > tr:contains("VisualizzazioneCalendario")').hide();
		
		if (inCollabConAltraFiliale.text().trim() != "SI") {
			$('table.ms-formtable > tbody > tr:contains(Altra filiale)').hide(); // Altra con A maiuscola!
		}
		
		if (selectProgetto.text().trim() != "Progetto CPIA") {
			$('table.ms-formtable > tbody > tr:contains(Tipo luogo)').hide();
		}
		
		if (selectProgetto.text().trim() != "Nessun progetto di riferimento" &&  selectProgetto.text().trim() != "Progetto CPIA" && selectProgetto.text().trim() != "Progetto Scuola" && selectProgetto.text().trim() != "Progetto PCTO") {
			$('table.ms-formtable > tbody > tr:contains(Target)').hide();		
		}
		
		if (selectProgetto.text().trim() != "Progetto PCTO") {
			$('table.ms-formtable > tbody > tr:contains(Codice)').hide();
		}
		
		if (selectFormat.text().trim() != "Seminario o incontro - piu giornate") {
			$('table.ms-formtable > tbody > tr:contains(Gruppo eventi)').hide();
		}
		
		if (selectProgetto.text().trim() != "Global Money Week" && selectProgetto.text().trim() != "Progetto Universita" && selectMeseEF.text().trim() != "SI") {
			$('table.ms-formtable > tbody > tr:contains(Contenuto)').hide();
		}
	}
	else if (FORM_TYPE == "EDIT" ) {
		if(inCollabConAltraFiliale.value != "SI") {
			$('nobr:contains(Altra filiale)').closest("tr").hide();	
		}
		
		if (selectProgetto.value == "Progetto PCTO") {
			$('nobr:contains(Format)').closest("tr").hide();
			selectFormat.options[0].selected = true;
			updateInterfaceFromFormat();
		}
		
		if (selectProgetto.value != "Progetto CPIA") {
			$('nobr:contains(Tipo luogo)').closest("tr").hide();	
		}
		
		if (selectProgetto.value != "Nessun progetto di riferimento" && selectProgetto.value != "Progetto CPIA" && selectProgetto.value != "Progetto Scuola" && selectProgetto.value != "Progetto PCTO") {
			$('nobr:contains(Target)').closest("tr").hide();		
		}
		else {
			hideOptionFromSelectBut(selectTarget, optionsProgetto_Target[selectProgetto.value], false);
		}
		
		if (selectFormat.value != "Seminario o incontro - piu giornate") {
			$('nobr:contains(Gruppo eventi)').closest("tr").hide();
		}
		
		if (selectProgetto.value != "Progetto PCTO") {
			$('nobr:contains(Codice)').closest("tr").hide();
		}
		
		if (selectProgetto.value != "Global Money Week" && selectProgetto.value != "Progetto Universita" && selectMeseEF.value != "SI") {
			$('nobr:contains(Contenuto)').closest('tr').hide();
		}
		
		if (iniziativaLocale.value != "SI") {
			$('nobr:contains(Iniziativa standard)').closest("tr").hide();
		}
	}
	else {
		console.log("FORM_TYPE not expected: "+FORM_TYPE);
	}
}

function initialSettings() {
	setFormTypeFromURL();
	setVars();
	setShowHideAndDefaultSelection();
}

function updateInterfaceFromProgetto() {
	var progettoValue = selectProgetto.value;
	
	$('nobr:contains(Tipo luogo)').closest("tr").hide();
	$('nobr:contains(Target)').closest("tr").hide();
	$('nobr:contains(Codice)').closest("tr").hide();
	$('nobr:contains(Format)').closest("tr").show();
	
	if (FORM_TYPE == "NEW" || FORM_TYPE == "EDIT") { 
		selectTarget.options[0].selected = true;
	}
	
	if (progettoValue != "Global Money Week") {
		if (selectMeseEF.value != "SI") {
			$('nobr:contains(Contenuto)').closest('tr').hide();
		}
		else {
			hideOptionFromSelectBut(selectContenuto, optionsContenutoPerMeseEF["2022"], true);			
		}
	}
		
	if (progettoValue == "Progetto PCTO") {
		$('nobr:contains(Target)').closest("tr").show();
		$('nobr:contains(Codice)').closest("tr").show();
		$('nobr:contains(Format)').closest("tr").hide();
		selectFormat.options[0].selected = true;
		updateInterfaceFromFormat();
		
		hideOptionFromSelectBut(selectTarget, optionsProgetto_Target[progettoValue], false);
	}
	else if (progettoValue == "Progetto Scuola") {
		$('nobr:contains(Target)').closest("tr").show();
		hideOptionFromSelectBut(selectTarget, optionsProgetto_Target[progettoValue], false);
	}
	else if (progettoValue == "Progetto CPIA") {
		$('nobr:contains(Tipo luogo)').closest("tr").show();
		$('nobr:contains(Target)').closest("tr").show();
		hideOptionFromSelectBut(selectTarget, optionsProgetto_Target[progettoValue], false);
	}
	else if (progettoValue == "Global Money Week") {
		$('nobr:contains(Contenuto)').closest('tr').show();
		hideOptionFromSelectBut(selectContenuto, optionsProgetto_Contenuto[progettoValue], true);
	}
	else if (progettoValue == "Progetto Universita") {
		$('nobr:contains(Contenuto)').closest('tr').show();
		hideOptionFromSelectBut(selectContenuto, optionsProgetto_Contenuto[progettoValue], true);	
	}
	else if (progettoValue ==  "Nessun progetto di riferimento") {
	 	$('nobr:contains(Target)').closest("tr").show();
		hideOptionFromSelectBut(selectTarget, optionsProgetto_Target[progettoValue], false);
	}
	else {
		///
	}
}

function updateInterfaceFromMeseEF() {
	if (selectMeseEF.value == "SI") {
		$('nobr:contains(Contenuto)').closest('tr').show();
		hideOptionFromSelectBut(selectContenuto, optionsContenutoPerMeseEF["2022"], true);	
	}
	else if (selectProgetto.value != "Global Money Week") {
		$('nobr:contains(Contenuto)').closest('tr').hide();
		selectContenuto.options[0].selected = true;
	}
}

function updateInterfaceFromIniziativaLocale() {
	if (iniziativaLocale.value == "SI") {
		$('nobr:contains(Iniziativa standard)').closest("tr").show();
	}
	else {
		$('nobr:contains(Iniziativa standard)').closest("tr").hide();
	}
}

function updateInterfaceFromInCollaborazioneConAltraFiliale() {
	altraFiliale.options[0].selected = true;
	$('nobr:contains("Altra filiale")').closest("tr").hide();

	if (inCollabConAltraFiliale.value == "SI") {
		$('nobr:contains(Altra filiale)').closest("tr").show();
	}	
}

function updateInterfaceFromFormat() {
	if (selectFormat.value == "Seminario o incontro - piu giornate") {
		$('nobr:contains(Gruppo eventi)').closest("tr").show();
	}
	else {
		$('nobr:contains(Gruppo eventi)').closest("tr").hide();
	}
}

function updateInterfaceFromFiliale() {
	if(FORM_TYPE != "DISPLAY") {
		selectRegione.value = filialeRegione[selectFiliale.value];		
	}
}

function handleAllChanges() {
	selectProgetto.onchange 	 = updateInterfaceFromProgetto;
	iniziativaLocale.onchange 	 = updateInterfaceFromIniziativaLocale;
	inCollabConAltraFiliale.onchange = updateInterfaceFromInCollaborazioneConAltraFiliale;
	selectFormat.onchange 		 = updateInterfaceFromFormat;
	selectMeseEF.onchange 		 = updateInterfaceFromMeseEF;
	selectFiliale.onchange		 = updateInterfaceFromFiliale;
}

$(document).ready(function () {
	console.log("Document is loaded.");

	initialSettings();

	if(FORM_TYPE != "DISPLAY") {
		handleAllChanges();
	}
});
