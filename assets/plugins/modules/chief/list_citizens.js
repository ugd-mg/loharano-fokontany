$(function () {
	var citizens = new Tabulator("#citizens", {
        layout:"fitColumns",
		ajaxURL: "citoyens_liste",
        ajaxParams:{fokontany_id:$('#fokontany').val()}, //ajax parameters
		ajaxConfig: "GET",
		initialSort:[
			{column:"nom", dir:"asc"}
		],
        columns:[ //Define Table Columns 
            {title:"Numéro carnet", field:"numero_carnet", headerFilterPlaceholder:"..." , headerFilter:"input"},
            {title:"Adresse", field:"adresse_actuelle", headerFilterPlaceholder:"..." , headerFilter:"input"},
            {title:"Nom", field:"nom",headerFilterPlaceholder:"..." , headerFilter:"input"},
            {title:"Prénoms", field:"prenoms",headerFilterPlaceholder:"..." , headerFilter:"input"},
            {title:"Numéro cin", field:"cin_personne", headerFilterPlaceholder:"..." , headerFilter:"input"},
            {title:"Date de Naissance", field:"date_de_naissance", headerFilterPlaceholder:"..." , headerFilter:"input"},
            {title:"Lieu de Naissance", field:"lieu_de_naissance", headerFilterPlaceholder:"..." , headerFilter:"input"}         
        ],
        rowClick:function(e, row){
        },
        pagination:"local",
        paginationSize:15,
        paginationSizeSelector:[25, 50, 100, 200],
        langs:{
            "fr-fr":{ //French language definition
                "columns":{
                    "name":"Nom",
                    "progress":"Progression",
                    "gender":"Genre",
                    "rating":"Évaluation",
                    "col":"Couleur",
                    "dob":"Date de Naissance",
                },
                "pagination":{
                    "first":"Premier",
                    "first_title":"Première Page",
                    "last":"Dernier",
                    "last_title":"Dernière Page",
                    "prev":"Précédent",
                    "prev_title":"Page Précédente",
                    "next":"Suivant",
                    "next_title":"Page Suivante",
                },
            }
        },
    });


    $('#fokontany').change(function(e){
        citizens.setData('citoyens_liste', {fokontany_id:$(this).val()});
    });
});