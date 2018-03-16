function sendMessage(conv_num, mess_num, input_num){

    let conversation = document.getElementById(conv_num);
    let input_value = document.getElementById(mess_num).value;
    if (!input_value){
        return;
    }
    let input_elem = document.getElementById(input_num);

    let messagewrapper = document.createElement('div');
    messagewrapper.classList.add("message-wrapper");

    let datewrapper = document.createElement('div');
    datewrapper.classList.add("date-wrapper");

    let message = document.createElement('div');
    message.classList.add("sent");
    message.innerHTML = input_value;

    let date = document.createElement('div');
    date.classList.add('sent-date');

    const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let d = new Date()
    let mon = MONTH_NAMES[d.getMonth()];
    let day = d.getDate();
    date.innerHTML = mon + " " + day;
    
    messagewrapper.appendChild(message);
    datewrapper.appendChild(date);

    conversation.insertBefore(datewrapper, input_elem);
    conversation.insertBefore(messagewrapper, input_elem.previousSibling);
}