"use strict"

 dawaAutocomplete.dawaAutocomplete(document.getElementById("adresse"), {
    select: function(selected) {
    document.getElementById("valgtadresse").innerHTML= selected.tekst;
      console.log('Selected address:');
      console.dir(selected);
    }
  });

  dawaAutocomplete.dawaAutocomplete(document.getElementById("kbhadresse"), {
    params: {
      kommunekode: 101
    },
    select: function(selected) {
    	document.getElementById("valgtkbhadresse").innerHTML= selected.tekst;
      console.log('Selected address:');
      console.dir(selected);
    }
  }); 

  dawaAutocomplete.dawaAutocomplete(document.getElementById("sbadresse"), {
    params: {
      postnr: 5700
    },
    select: function(selected) {
    	document.getElementById("valgtsbadresse").innerHTML= selected.tekst;
      console.log('Selected address:');
      console.dir(selected);
    }
  });

  dawaAutocomplete.dawaAutocomplete(document.getElementById("adgangsadresse"), {
    adgangsadresserOnly: true,
    select: function(selected) {
    	document.getElementById("valgtadgangsadresse").innerHTML= selected.tekst;
      console.log('Selected address:');
      console.dir(selected);
    }
  });

  dawaAutocomplete.dawaAutocomplete(document.getElementById("mladresse"), {
    multiline: true,
    select: function(selected) {
      document.getElementById("valgtmladresse").innerHTML= selected.tekst;
      console.log('Selected address:');
      console.dir(selected);
    }
  });

  dawaAutocomplete.dawaAutocomplete(document.getElementById("initialiseretadresse"), {
    id: "95697f98-a3d8-44c4-a16f-cddc8d29a3a1",
    select: function(selected) {
      document.getElementById("valgtinitialiseretadresse").innerHTML= selected.tekst;
      console.log('Selected address:');
      console.dir(selected);
    }
  });