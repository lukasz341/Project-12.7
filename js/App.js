
//ZMIENNE DO KOMUNIKACJI Z SERWERM
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2327',
  'X-Auth-Token': '6c90f3e40776ddda5a4955c0d8f88f12'
};

//DODANIE NAGŁÓWKÓW
$.ajaxSetup({
	headers: myHeaders
});

//FUNKCJA ODPYTUJĄCA SERWER O ZASÓB TABLICY
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});
//TWORZENIE KOLUMN I KART
function setupColumns(columns) {
    columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}