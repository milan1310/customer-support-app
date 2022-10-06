const socket = io();

const $messageForm = document.querySelector('#chat-form')
const $message_input = document.querySelector('#message')
const $message_container = document.querySelector("#messages")


// Options
const { userID, id } = Qs.parse(location.search, { ignoreQueryPrefix: true })
console.log(userID);

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const $message_input_flag = document.querySelector('input[name="flage"]:checked');
    socket.emit('reply', {
        message: $message_input.value,
        by: 'reply',
        userID,
        id,
        flag:$message_input_flag.value
    }, (error) => console.log(error));
})

socket.on('messageToClient', (msg) => {
    console.log(msg);
    const html = `
        <h4 style="display:inline;">${msg.by === "reply" ? "Admin" : "Customer"} </h4>
        <p> ${msg.message} <span><b>FLage:- ${msg.flag}</b></span> </p> 
    `
    $message_container.insertAdjacentHTML('beforeend', html)
})

async function fertchMessages() {
    const messages = await fetch(`http://localhost:3000/allmessages/${userID}`)
    return await messages.json();
}

function renderMessages() {
    const messages = fertchMessages();
    messages.then(result => {
        const msg = result.messages
        msg.forEach(element => {
            const html = `
        <h4 style="display:inline;">${element.by === "reply" ? "Admin" : "Customer"} </h4>
        <p> ${element.message} <span><b>FLage:- ${element.flag}</b></span> </p>
    `
            $message_container.insertAdjacentHTML('beforeend', html)
        });
    })
}
renderMessages();

socket.emit('join',userID,(e)=>console.log(e));






// socket.on('message',(message)=>{
//     console.log(message);
// })

// socket.emit('sendtoserver',{msg:"this can be stored"})

