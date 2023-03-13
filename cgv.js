$('.tabmenu li').click(function(e){
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
    })
