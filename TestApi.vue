<template>
    <main>
        <div v-if='isLoad'>
            <h1 class='textApi'>Команды</h1>
            <h4>Загрузка данных ...</h4>
        </div>
        <div v-else class='wrapperApi'>
            <h1 class='textApi'>Команды</h1>
            <div v-for="(el, i) in teamData" :key="el.id" class='containerApi'>
                {{ i + 1 }}.{{ el.abbreviation }}{{ el.city }}
                <img src="https://avatars.mds.yandex.net/i?id=e51c0bb71789882fb6fc9e3608f8c47904342b10-7593510-images-thumbs&n=13&exp=1" style='width: 15px; height: 15px;' v-on:click='removeTeam(el.id)'/>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'TestApi',
    data() {
        return {
            teamData: [],
            isLoad: true
        }
    }, 
    methods: {
        removeTeam(id) {
            this.teamData = this.teamData.filter((el) => el.id !== id)
        }
    },
    mounted() {
        const url = "https://free-nba.p.rapidapi.com/teams?page=0"
        const options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
            "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
            }
        }
        fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            this.teamData = res.data
            this.isLoad = false
        })
    }
  }
</script>

<style>
.containerApi{
    margin: 5px 0;
}

.textApi{
    text-decoration: underline;
}

.wrapperApi{
    /* background-image: linear-gradient(to bottom right, rgb(245, 195, 130), rgb(250, 250, 250), rgb(225, 125, 125), rgb(125, 220, 225), rgb(225, 140, 225)); */
    width: 100%;
    height: 100%;
}
</style>