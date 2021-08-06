$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        console.log($('#searchText').val());
        let searchText = $('#searchText').val();
        getCats(searchText);
        e.preventDefault();
    });

});

function getCats(searchText) {
    fetch('https://www.api.thecatapi.com/v1/breeds/search?q=' + searchText, {
            headers: { 'x-api-key': '7edc2872-57d0-404a-a4cf-1d41809650f0' },
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
}