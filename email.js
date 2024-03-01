function sendEmail() {
    let name = document.getElementById("name").value;
    let cellphone = document.getElementById("cellphone").value;
    let mail = document.getElementById("mail").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let body = "Name: " + name + '%0A'
               "Cellphone: " + cellphone + '%0A' +
               "Mail: " + mail + '%0A' +
               "Message: " + message;

    window.open('mailto:joseyx20013@gmail.com?subject='+ subject + '&body=' + body);

}