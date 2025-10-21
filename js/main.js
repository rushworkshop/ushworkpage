// ----------------- header -----------------
// $(document).ready(function () {
//     $(window).on('scroll', function () {
//         if ($(window).scrollTop() > 80) {
//             $('#navigation').removeClass('header-before col-12')
//             $('#navigation').addClass('header-after col-11')
//             $('.nav-link').removeClass('text-light Tshadow')
//         } else {
//             $('#navigation').removeClass('header-after col-11')
//             $('#navigation').addClass('header-before col-12')
//             $('.nav-link').addClass('text-light Tshadow')

//         }
//     })
// })

// ----------------- carousel -----------------
$('#carousel').on('slide.bs.carousel', function (x) {
    let id = x.relatedTarget.id
    // $("#T4").html(title[id - 1])
    // $('#T4').removeClass('enter')
    // $('#T4')[0].offsetWidth
    // $('#T4').addClass('enter')
})

// ----------------- news -----------------
function changeImg(id) {
    $('#newsBigImg').css('background-image', ' url(./ALLimages/process_' + id + '.jpg)')
}
function heart(id) {
    $('#heart' + id).toggleClass('fa-solid')
} function share(id) {
    $('#share' + id).toggleClass('fa-solid')
} function star(id1, id2) {
    for (let i = 1; i <= 5; i++) {
        $('#star' + id1 + i).removeClass('fa-solid')
    }
    for (let i = 1; i <= id2; i++) {
        $('#star' + id1 + i).addClass('fa-solid')
    }
}

// ----------------- product -----------------
function leftBtn() {
    let x = $('#product_div')
    let y = x.scrollLeft()

    if (y <= 0) {
        x.animate({
            scrollLeft: x[0].scrollWidth
        }, 500)
    } else {
        x.animate({
            scrollLeft: '-=415px'
        }, 500)
    }
}

function rightBtn() {
    let x = $('#product_div')
    let y = x.scrollLeft()
    let max = x[0].scrollWidth - x.outerWidth() - 1

    if (y >= max) {
        x.animate({
            scrollLeft: 0
        }, 500)
    } else {
        x.animate({
            scrollLeft: '+=415px'
        }, 500)
    }
}

// ----------------- cart -----------------
// function addInCart(id) {
//     cart_list[id - 1].number += 1;

//     console.log("add" + id)
//     console.log(cart_list[id - 1].number)
//     new bootstrap.Toast($('#liveToast')[0]).show();

//     updata()
// }
// function deleteCart(id) {
//     cart_list[id - 1].number = 0

//     updata()
// }
// function clearAll() {
//     for (let i = 0; i < 6; i++) {
//         cart_list[i].number = 0
//     }
//     updata()
// }


// function updata() {
//     let cart_total = 0;
//     let cart_item = 0;
//     for (let i = 0; i < 6; i++) {
//         let id = i + 1
//         // console.log("updata"+id)
//         $('#cart_number' + id).html(cart_list[i].number)
//         $('#cart_price' + id).html(cart_list[i].number * cart_list[i].price)
//         cart_total += cart_list[i].number * cart_list[i].price
//         cart_item += cart_list[i].number
//         console.log(cart_total)
//         console.log(cart_item)
//         if (cart_list[i].number == 0) {
//             $('#tr' + id).addClass('d-none')
//         } else {
//             $('#tr' + id).removeClass('d-none')
//         }
//         $('#cart_total').html(cart_total);
//         $('#cart_item').html(cart_item)

//         if (cart_list.every(item => item.number == 0)) {
//             $('#cart_link').removeClass('d-none')
//         } else {
//             $('#cart_link').addClass('d-none')
//         }
//     }

// }

// ----------------- contact -----------------
let c_total = 1;
function submitForm() {
    let name = $("#c_name").val().trim()
    let email = $("#c_email").val().trim()
    let message = $("#c_message").val().trim()

    if (name && email && message) {
        let newsMessage = '<div><div class="c_data"><div class="c_name">' + name + '</div><div class="c_email">' + email + '</div></div>'
        newsMessage += '<div class="c_message my-2">' + message + '</div><hr class="my-2"></div>'

        $('#c_room2').append(newsMessage);
        c_total += 1;
        $('#c_total').html(c_total)
        $("#c_name").val('')
        $("#c_email").val('')
        $("#c_message").val('')
    }
}

// ----------------- chatBot -----------------
function sendChat() {
    let message = $('#chat_input').val().trim()
    if (message) {
        let news_uc = '<div class="uc"><p>' + message + '</p></div>'
        let news_bc = '<div class="bc"><i class="fa-solid fa-robot m-2"></i><p>已收到您的回覆，稍等專人為您服務</p></div>'

        $('#chat_body').append(news_uc)
        $('#chat_input').val('')
        chat_body.scrollTop = chat_body.scrollHeight
        setTimeout(() => {
            $('#chat_body').append(news_bc)
            chat_body.scrollTop = chat_body.scrollHeight
        }, 500);
    }
}

// ----------------- other -----------------
function toggleBtn() {
    $('.chatbot').toggleClass('d-none')
}


// ----------------- logIn -----------------
function logIn(x) {
    if (x == 2) {
        alert('您已登入成功')
    } else {
        alert('您已登出')
    }
    $('#user').attr('data-bs-target', '#user_modal' + x)
}

// ----------------- animation -----------------
$(document).ready(function () {

    $('[data-aos="fade-up"]').each(function () {

        $(this).css({
            opacity: 0,
            transform: 'translateY(100px)',
            transition: `all ${$(this).data('aos-duration') || 1000}ms ease-out`
        });
    });

    function move() {
        $('[data-aos="fade-up"]').each(function () {
            const x = $(this).offset().top;
            const y = x + $(this).outerHeight();
            const z = $(window).scrollTop();
            const s = z + $(window).height();

            if (y > z && x < s) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            } else {
                $(this).css({
                    opacity: 0,
                    transform: 'translateY(100px)'
                });
            }
        });
    }

    $(window).on('scroll', move);
    move();
});

// ----------------- list -----------------
let cart_list = [{
    "name": "兩用水壺袋（大）",
    id: 1,
    number: 0,
    price: 250
}, {
    "name": "兩用水壺袋（小）",
    id: 2,
    number: 0,
    price: 200
}, {
    "name": "飲料提袋",
    id: 3,
    number: 0,
    price: 150
}, {
    "name": "三角立方體",
    id: 4,
    number: 0,
    price: 150
}, {
    "name": "吊飾-貓頭鷹",
    id: 5,
    number: 0,
    price: 150
}, {
    "name": "吊飾-魚",
    id: 6,
    number: 0,
    price: 150
},{
    "name": "吊飾-台灣",
    id: 7,
    number: 0,
    price: 150
}, {
    "name": "耳機包",
    id: 8,
    number: 0,
    price: 300
}, {
    "name": "貝殼零錢包",
    id: 9,
    number: 0,
    price: 300
}, {
    "name": "編織書籤",
    id: 10,
    number: 0,
    price: 150
}, {
    "name": "編織吊飾",
    id: 11,
    number: 0,
    price: 100
}, {
    "name": "悠遊卡套",
    id: 12,
    number: 0,
    price: 300
}, {
    "name": "草鹿彩繪風鈴",
    id: 13,
    number: 0,
    price: 200
}]

let title = [
    "食安品質我們把關，我們Hoder住",
    "永續循環是我們的宗旨",
    "讓台灣農業可以不間斷的永續發展"
]


