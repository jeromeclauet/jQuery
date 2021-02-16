//On est prêt à interpréter du jquery
var randomNumber = Math.floor(Math.random() * Math.floor(100));
console.log(randomNumber);
var attempt = 0;

$('#validate').click(function() {


    let random = $('#number').val();

    if (random < randomNumber) {
        alert('Non, c\'est plus grand, enculé !');
        attempt++;
    } else if (random > randomNumber) {
        alert('Non, c\'est plus petit, fdp !');
        attempt++;
    } else if (random == randomNumber) {
        alert('Bravo ! tu as trouvé la bonne réponse. Tu as trouvé au bout de ' + attempt + ' tentatives. Maintenant, dégage de mon site !');
        attempt++;
    }
});