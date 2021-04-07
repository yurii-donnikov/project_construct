//- манипулирование кнопками меню
const [menu_home, menu_services, menu_work, menu_contact] = ['menu_home', 'menu_services', 'menu_work', 'menu_contact']
.map((id) => document.getElementById(id));

// window.onload = function() {
 
        menu_home.onclick = function() {
            menu_home.style = 'color: #00A4E5';
            menu_services.style = 'color: #000'
            menu_work.style = 'color: #000'
            menu_contact.style = 'color: #000'

            document.querySelector('.main_home').style = 'display: block';

            document.querySelector('.main_services').style = 'display: none';

            document.querySelector('.main_work').style = 'display: none';

            document.querySelector('.main_contact').style = 'display: none';

        }
        menu_services.onclick = function() {
            menu_home.style = 'color: #000';
            menu_services.style = 'color: #00A4E5'
            menu_work.style = 'color: #000'
            menu_contact.style = 'color: #000'

            document.querySelector('.main_home').style = 'display: none';

            document.querySelector('.main_services').style = 'display: block';

            document.querySelector('.main_work').style = 'display: none';

            document.querySelector('.main_contact').style = 'display: none';


        };
        menu_work.onclick = function() {
            menu_home.style = 'color: #000';
            menu_services.style = 'color: #000'
            menu_work.style = 'color: #00A4E5'
            menu_contact.style = 'color: #000'

            document.querySelector('.main_home').style = 'display: none';

            document.querySelector('.main_services').style = 'display: none';

            document.querySelector('.main_work').style = 'display: block';

            document.querySelector('.main_contact').style = 'display: none';


        };
        menu_contact.onclick = function() {
            menu_home.style = 'color: #000';
            menu_services.style = 'color: #000'
            menu_work.style = 'color: #000'
            menu_contact.style = 'color: #00A4E5'

            document.querySelector('.main_home').style = 'display: none';

            document.querySelector('.main_services').style = 'display: none';

            document.querySelector('.main_work').style = 'display: none';

            document.querySelector('.main_contact').style = 'display: block';


        };

// }

const [menu_home_mobile, menu_services_mobile, menu_work_mobile, menu_contact_mobile] = ['menu_home_mobile', 'menu_services_mobile', 'menu_work_mobile', 'menu_contact_mobile']
.map((id) => document.getElementById(id));

        menu_home_mobile.onclick = function() {
            menu_home_mobile.style = 'color: #00A4E5';
            menu_services_mobile.style = 'color: #000'
            menu_work_mobile.style = 'color: #000'
            menu_contact_mobile.style = 'color: #000'

            document.querySelector('.main_home').style = 'display: block';

            document.querySelector('.main_services').style = 'display: none';

            document.querySelector('.main_work').style = 'display: none';

            document.querySelector('.main_contact').style = 'display: none';

        }
                menu_services_mobile.onclick = function() {
            menu_home_mobile.style = 'color: #000';
            menu_services_mobile.style = 'color: #00A4E5'
            menu_work_mobile.style = 'color: #000'
            menu_contact_mobile.style = 'color: #000'

            document.querySelector('.main_home').style = 'display: none';

            document.querySelector('.main_services').style = 'display: block';

            document.querySelector('.main_work').style = 'display: none';

            document.querySelector('.main_contact').style = 'display: none';


        };
                menu_work_mobile.onclick = function() {
            menu_home_mobile.style = 'color: #000';
            menu_services_mobile.style = 'color: #000'
            menu_work_mobile.style = 'color: #00A4E5'
            menu_contact_mobile.style = 'color: #000'

            document.querySelector('.main_home').style = 'display: none';

            document.querySelector('.main_services').style = 'display: none';

            document.querySelector('.main_work').style = 'display: block';

            document.querySelector('.main_contact').style = 'display: none';


        };
                menu_contact_mobile.onclick = function() {
            menu_home_mobile.style = 'color: #000';
            menu_services_mobile.style = 'color: #000'
            menu_work_mobile.style = 'color: #000'
            menu_contact_mobile.style = 'color: #00A4E5'

            document.querySelector('.main_home').style = 'display: none';

            document.querySelector('.main_services').style = 'display: none';

            document.querySelector('.main_work').style = 'display: none';

            document.querySelector('.main_contact').style = 'display: block';


        };


































//- открытие (по клику) модального окна 
const registration = document.getElementById('registration');
const registration_content = document.getElementById('registration_content');
const body = document.getElementsByTagName('body')[0];


    document.getElementById('main_bottom_registr').onclick = function() {
        registration.style = 'display: block';
        registration_content.style = 'display: block';
        body.style = 'overflow: hidden';
    }



    registration.onclick = function() {
        registration.style = 'display: none';
        registration_content.style = 'display: none';
        body.style = 'overflow: visible';
    }




// - отправка форм имени и номера на сервер
const [main_contact_button, main_contact_tell, main_contact_txt, text] = ['main_contact_button', 'main_contact_tell', 'main_contact_txt', , 'text'].map((id) => document.getElementById(id))


    main_contact_button.onclick = function(event) {
    if (main_contact_tell.value.length > 4) {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: main_contact_txt.value,
                numberTel: main_contact_tell.value
            })
        }).then((response) => console.log(response.status))
        main_contact_txt.value = '';
        main_contact_tell.value = '+2';

        registration.style = 'display: none';
        registration_content.style = 'display: none';
        body.style = 'overflow: visible';

    }
};

//- отправка форм эл. почты sfdhdefhdeh
document.getElementById('button').onclick = function () {
        if (document.getElementById('text').value.length > 4) {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail: document.getElementById('text').value,
            })
        }).then((response) => console.log(response.status))
       document.getElementById('text').value = '';

    }
}

