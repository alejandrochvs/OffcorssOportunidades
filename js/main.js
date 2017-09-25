$(function () {
    $('.file-cont').click(function (e) {
        if (e.target != $('#inputFile')[0]) {
            $('#inputFile').click();
        }
    });
    $('#inputFile').change(function () {
        $('#loadStatus').html('Enviar "' + 
            $(this).val().split('\\').reverse()[0] + '"');
    })
})
