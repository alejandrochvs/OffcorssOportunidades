$(function () {
    $('.file-cont').click(function (e) {
        if (e.target != $('#inputFile')[0]) {
            $('#inputFile').click();
        }
    })
})
