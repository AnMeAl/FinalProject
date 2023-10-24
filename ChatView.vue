<template>
    <div v-if='username'>
        <div class='containerChat'>
            <h2>Чат</h2>
            <div v-for='message in messages' :key='message.id'>
                {{ message.user }}: {{ message.text }}
            </div>
            <div v-if='emptyMsg'>Нет сообщений</div>
        </div>
        <div>
            <input v-model='newMsg' placeholder='Введите сообщение' v-on:keyup.enter='sendMsg'>
            <button v-on:click='sendMsg' class='buttonSend'>Отправить</button>
            <button v-show='delBtn' v-on:click='delMsg' class='buttonDel'>Удалить переписку</button>
        </div>
    </div>
    <div v-else class='wrapperChat'>
        Для регистрации перейдите по <router-link :to="{name: 'home'}">ссылке</router-link>
    </div>
</template>

<script>
export default {
    name: 'ChatView',
    data() {
        return {
            messages: [],
            newMsg: '',
            delBtn: false,
            emptyMsg: true,
            username: localStorage.getItem('username')
        }
    },
    computed() {
        localStorage.setItem('username', this.$route.query.username)
    },
    methods: {
        sendMsg() {
            if (!this.user){
                this.user = 'Аноним'
            }
            if (this.newMsg !== ''){
                this.emptyMsg = false
                this.messages.push(
                    {
                        id: new Date().getTime(),
                        text: this.newMsg,
                        user: this.username
                    }
                )
                this.saveChatRecords()
                this.newMsg = ''
                this.delBtn = true
            }else {
                alert('Пожалуйста, введите сообщение')
            }
        },
        delMsg() {
            this.messages = []
            // localStorage.removeItem(`messages_${this.user}`, JSON.stringify(this.message))
            localStorage.removeItem('messages.text', JSON.stringify(this.message))
            this.emptyMsg = true
            this.delBtn = false
        },
        saveChatRecords() {
            const records = this.messages
            console.log(records)
            // localStorage.setItem(`messages_${this.user}`, JSON.stringify(records))
            localStorage.setItem('messages.text', JSON.stringify(this.messages))
        },
        loadChatRecords() {
            // const records = JSON.parse(localStorage.getItem(`messages_${this.user}`))
            const records = JSON.parse(localStorage.getItem('messages.text'))
            if (records){
                this.messages = records
                this.emptyMsg = false
                this.delBtn = true
            }
        }
    },
    created() {
        this.loadChatRecords()
    }
}
</script>

<style>
.containerChat{
    width: 30vw;
    height: 70vh;
    border: 8px solid rgb(135, 150, 220);
    color: black;
    font-weight: 20px;
    margin: 5vh auto 20px;
}

.buttonSend{
    width: 100px;
    height: 30px;
    font-size: 15px;
    background-color: rgb(200, 235, 195);
    margin-left: 10px;
}

.buttonSend:hover{
    transform: translate3d(-3px, -3px, 3px);
    transition-duration: 500ms;
    box-shadow: 8px 10px 5px 2px rgba(0, 0, 0, .2);
}


.buttonDel{
    width: 150px;
    height: 30px;
    font-size: 15px;
    background-color: rgb(200, 235, 195);
    margin-left: 10px;
}

.buttonDel:hover{
    transform: translate3d(-3px, -3px, 3px);
    transition-duration: 500ms;
    box-shadow: 8px 10px 5px 2px rgba(0, 0, 0, .2);
}

.containerChat > h2 {
    text-decoration: underline;
}

.wrapperChat{
    font-size: 30px;
    width: 350px;
    height: 50px;
    margin: 0 auto;
    padding-top: 40vh;
    padding-bottom: 40vh;
}
</style>