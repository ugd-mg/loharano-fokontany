$(function () {

    var status = function (cell, formatterParams) {
        var value = cell.getValue();

        switch (value) {
            case 1: return "Actif"; break;
            case 0: return "Suspendu"; break;
        }
    };

    var carnets = new Tabulator("#carnets", {
        layout: "fitColumns",
        initialSort: [
            { column: "medal", dir: "asc" }
        ],
        columns: [ //Define Table Columns
            { title: "Numéro carnet", field: "numero_carnet", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Adresse Actuelle", field: "adresse_actuelle", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Ancienne Adresse", field: "ancienne_adresse", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Date Arrivée", field: "date_arrivee", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Observations", field: "observations", headerFilterPlaceholder: "...", headerFilter: "input" }
        ],
        rowClick: function (e, row) {
            citizens.setData('les_membres_menage', { numero_carnet: row.getData().numero_carnet });
            /*
            $.get("membres_menage",function(data, status){
            });
            */
        },
    });

    //****************************Membres d'une ménage***************************** */
    var citizens = new Tabulator("#citizens", {
        layout: "fitColumns",
        initialSort: [
            { column: "medal", dir: "asc" }
        ],
        columns: [ //Define Table Columns
            { title: "Numéro cin", field: "cin_personne", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Nom", field: "nom", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Prénoms", field: "prenoms", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Date de Naissance", field: "date_de_naissance", headerFilterPlaceholder: "...", headerFilter: "input" },
            { title: "Lieu de Naissance", field: "lieu_de_naissance", headerFilterPlaceholder: "...", headerFilter: "input" }
        ],
        rowClick: function (e, row) {
            window.location.replace("gerener_certificat" + "?personne=" + row.getData().id_personne);
        },
    });
    //****************************Membres d'une ménage***************************** */

    $(document).ready(function (e) {
        var fokontany_id = $('#fokontany').val() || 0;

        carnets.setData('menages_fokontany', { fokontany_id: fokontany_id });
    });
});
