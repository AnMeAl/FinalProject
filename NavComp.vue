<template>
    <header>
        <nav>
            <router-link :to="{name: 'chat'}" class='textNav'>Чат</router-link>
            <router-link :to="{name: 'home'}" class='textNav'>На главную страницу</router-link>
            <router-link :to="{name: 'testApi'}" class='textNav'>Команды</router-link>
            <!-- <router-link :to="{name: 'api'}" class='textNav'>Пользователи</router-link> -->
        </nav>
    </header>
</template>

<script>
export default {
  name: 'NavComp'
}
</script>

<style>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(to bottom right, rgb(60, 130, 90), rgb(185, 235, 165), rgb(120, 170, 230), rgb(100, 115, 180));
    height: 100px;
    width: 100%;
    margin: 0;
}

.textNav{
    font-size: 30px;
    color: rgb(5, 70, 45);
    text-decoration: none;
    width: 350px;
}
</style>