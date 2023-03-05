let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id  : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("servie")
}