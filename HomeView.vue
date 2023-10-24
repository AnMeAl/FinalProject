<template>
    <div class='container'>
        <div v-if="isAuthenticated" class='containerIf'>
            <h3>Здравствуйте, {{ username }}!</h3>
            <button v-on:click='logout' class='buttonHome'>Выйти из аккаунта</button>
        </div>
        <div v-else class='containerElse'>
            <h4>Введите ваше имя</h4>
            <input v-model='username' v-on:keyup.enter='login' class='inputHome'/>
            <button v-on:click='login' class='buttonHome'>Зарегистрироваться</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            isAuthenticated: false,
            username: ''
        }
    },
    methods: {
        logout() {
            this.isAuthenticated = false
            this.username = ''
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('username')
        },
        login() {
            if (this.username !== ''){
                this.isAuthenticated = true
                localStorage.setItem('isAuthenticated', true)
                localStorage.setItem('username', this.username)
                this.$router.push({
                    name: 'chat',
                    query: {username: this.username}
                })
            }
        }
    },
    created() {
        if (localStorage.getItem('isAuthenticated')){
            this.isAuthenticated = true
            this.username = localStorage.getItem('username')
        }
    }
}
</script>

<style>
h1 {
    margin: 0;
    padding: 15px;
}

h4 {
    margin: 0;
    padding: 15px;
}

.buttonHome {
    width: 200px;
    height: 50px;
    font-size: 15px;
    background-color: rgb(200, 235, 195);
    margin: 15px auto 0;
}

.buttonHome:hover{
    transform: translate3d(-5px, -5px, 5px);
    transition-duration: 500ms;
    /* box-shadow: 8px 10px 5px 2px rgba(45, 75, 55, .2); */
    box-shadow: 8px 10px 5px 2px rgba(0, 0, 0, .2);
}

.containerElse{
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 30vh;
    padding-bottom: 30vh;
}

.containerIf{
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 30vh;
    padding-bottom: 30vh;
}

.inputHome {
    text-align: center;
    margin: 0 auto;
}
</style>