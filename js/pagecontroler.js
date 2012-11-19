$('.deletebtn').live('click', function() {
    var id = $(this).parents('tr').attr('data-key');

    var $deletebox = $('<div class="mask" style="opacity: 0;">\
                        <div class="deletebox pop transparent">\
                            <div class="closebtn"></div>\
                            <h1>Danger Zone</h1>\
                            <p>Delete id \'' + id + '\' record, really?</p>\
                            <div style="text-align:right;">\
                                <button class="okbtn">Ok</button>\
                                <button class="cancelbtn">Cancel</button>\
                            </div>\
                       </div>\
                    </div>');

    $('body').append($deletebox);
    $('.mask').animate({
        'opacity': 1
    }, 200, function() {
        $('.deletebox').removeClass('transparent');
    });

    $('.deletebox > .closebtn').die('click').live('click', function() {
        $('.deletebox').addClass('transparent');
        $('.mask').animate({
            'opacity': 0
        }, 100, function() {
            $(this).remove();
        });
    });
    $('.deletebox .cancelbtn').die('click').live('click', function() {
        $('.deletebox > .closebtn').click();
    });
});
$('.addbtn').live('click', function() {
    var $ths = $('.panel thead th:not(:last):not(:first)');
    var $tds = '';
    var $table =   '<table>\
                        <thead>';
    $ths.each(function(index) {
        var key = $(this).text();
        $table += '<th>' + key + '</th>';
        $tds += '<td><input type="text" id="addinput' + key + '" data-key="' + key + '" val="" placeholder="Please input ' + key + '" /></td>';
    });
    $table +=   '</thead>\
                    <tbody>' + $tds + '</tbody>\
                </table>';

    var $addbox = $('<div class="mask" style="opacity: 0;">\
                        <div class="addbox pop transparent">\
                            <div class="closebtn"></div>\
                            <h1>Add Record</h1>' + 
                            $table +
                           '<div style="text-align:right;">\
                                <button class="savebtn">Save</button>\
                                <button class="cancelbtn">Cancel</button>\
                            </div>\
                       </div>\
                    </div>');

    $('body').append($addbox);
    $('.mask').animate({
        'opacity': 1
    }, 200, function() {
        $('.addbox').removeClass('transparent');
    });

    $('.addbox > .closebtn').die('click').live('click', function() {
        $('.addbox').addClass('transparent');
        $('.mask').animate({
            'opacity': 0
        }, 100, function() {
            $(this).remove();
        });
    });
    $('.addbox .cancelbtn').die('click').live('click', function() {
        $('.addbox > .closebtn').click();
    });
});