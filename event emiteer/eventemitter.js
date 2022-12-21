//event:애플리케이션안에서 발생한 응답 가능한 사건
// 특정 이벤트에 리스너 함수를 달아서, 이벤트가 발생했을 때 이를 캐치할 수 있도록 만들어진 api
const EventEmitter = require("events")
const customEmitter = new EventEmitter() //to invoke

customEmitter.on('response', (name, id)=> {
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here`)
})

customEmitter.emit(`response`, "sean", 7)

