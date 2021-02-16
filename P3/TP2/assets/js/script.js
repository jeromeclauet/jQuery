jQuery(document).ready(function() {
    $('#valid').click(function() {
        var note1 = $('#note1').val();
        var note2 = $('#note2').val();
        var note3 = $('#note3').val();
        var note4 = $('#note4').val();
        var note5 = $('#note5').val();
        var result = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4) + parseFloat(note5)) / 5;
        if ((result >= 0) && (result < 10)) {
            alert('En dessous de la moyenne !');
        } else if ((result >= 10) && (result < 13)) {
            alert('Moyen');
        } else if ((result >= 13) && (result < 16)) {
            alert('Bien');
        } else if ((result >= 16) && (result < 20)) {
            alert('Très bien');
        } else {
            alert('Excellent');
        }
    })
})