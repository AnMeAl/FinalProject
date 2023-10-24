<template>
    <main>
        <h1 class='textApi'>Пользователи</h1>
        <div v-if='isLoad'>
            <h4>Загрузка данных ...</h4>
        </div>
        <div v-else class='wrapperApi'>
            <div v-for="(el, i) in usersData" :key="el.id" class='containerApi'>
                {{ i + 1 }}.{{ el.last_name }}{{ el.first_name }}
                <img src="https://avatars.mds.yandex.net/i?id=e51c0bb71789882fb6fc9e3608f8c47904342b10-7593510-images-thumbs&n=13&exp=1" style='width: 15px; height: 15px;' v-on:click='removeTeam(el.id)'/>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'ApiComp',
    data() {
        return {
            usersData: [],
            isLoad: true
        }
    }, 
    methods: {
        removeTeam(id) {
            this.usersData = this.usersData.filter((el) => el.id !== id)
        }
    },
    mounted() {
        const url = 'https://reqres.in/api/users'
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            this.usersData = res.data
            this.isLoad = false
        })
        // const getData = async () => {
        //     const response = await fetch('https://reqres.in/api/users')
        //     const objServer = await response.json()
        // }
        // getData()
        // this.usersData = objServer
        // this.isLoad = false
  }
}
</script>

<!-- const getData = async () => {
    console.log('--------')
    console.log('Пункт №1')
    console.log('--------')
    const response = await fetch('https://reqres.in/api/users')
    const objServer = await response.json()
    console.log(objServer)
    console.log('--------')
    console.log('Пункт №2')
    console.log('--------')
    objServer.data.forEach(el => {
        console.log(el.last_name);
    })
    console.log('--------')
    console.log('Пункт №3')
    console.log('--------')
    objServer.data.forEach(el => {
        surname = el.last_name.split('')
        if (surname.includes('F')){
            console.log(el);
        }
    })
    console.log('--------')
    console.log('Пункт №4')
    console.log('--------')
    let str = 'Наша база содержит данные следующих пользователей:'
    let n = 0
    objServer.data.forEach(el => {
        n += 1
        surname = el.last_name
        name = el.first_name
        str += ' ' + name + ' ' + surname
        if (n < objServer.data.length){
            str += ',';
        } else{
            str += '.'
        }
    })
    console.log(str);
    console.log('--------')
    console.log('Пункт №5')
    console.log('--------')
    console.log(Object.keys(objServer.data[0]));
}
getData(); -->