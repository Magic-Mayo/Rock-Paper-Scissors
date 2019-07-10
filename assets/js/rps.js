$(document).on('click', '.collapsible-chat', function(){
    console.log('hi')
    if ($('.chat-box').css('right') == '-375px'){
        $('.chat-box').css('animation', 'uncollapse-chat .6s ease-in 1');
        setTimeout(function(){
            $('.chat-box').css('animation', '').css('right', '0');
            $('.collapse-caret').html('>');
        }, 600)
    }

    else {
        $('.chat-box').css('animation', 'collapse-chat .6s ease-in 1');
        setTimeout(function(){
            $('.chat-box').css('animation', '').css('right', '-375px');
            $('.collapse-caret').html('<');
        }, 600)
    }
})

$(document).on('click', '.users-tab', function(){
    if ($('.chat-tab-content').attr('chat-active')){
        $('.chat-tab-content').attr('chat-active', false).css('display', 'none');
        $('.users-tab-content').attr('users-active', true).css('display', 'block');
    }
})

$(document).on('click', '.chat-tab', function(){
    if ($('.users-tab-content').attr('users-active')){
        $('.users-tab-content').attr('users-active', false).css('display', 'none');
        $('.chat-tab-content').attr('chat-active', true).css('display', 'block');
        // $('.form').css('visibility', 'hidden');
    }

})