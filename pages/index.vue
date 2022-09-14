<template lang="pug">
  section
    .tab-bar
      input(type="search" placeholder="Поиск" v-model="search")
      .switch-wrapper
        p Плитка/список
        input(type="checkbox" id="switch" v-model="checked")
        label(for="switch") Плитка/Список
    .card-wrapper
      PlayerCard(v-if="!checked" class="card" v-for="player of players" :key="player.id" :playerData="player")
      PlayerCardMin(v-else class="card" v-for="player of players" :key="player.id" :playerData="player")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      players: [],
      search: '',
      checked: false
    }
  },
  async fetch ({ store }) {
    await store.dispatch('nbaPlayers/getAllPlayers')
  },
  watch: {
    search (value) {
      // this.players = this.$store.getters['nbaPlayers/nbaPlayers'].filter((el: { first_name: any; last_name: any; division: any, team: any }) => el.first_name === value || el.last_name === value || el.division === value || el.team.name === value)
      this.players = this.$store.getters['nbaPlayers/nbaPlayers'].filter((el) => el.first_name.toLowerCase().includes(value.toLowerCase()) || el.last_name.toLowerCase().includes(value.toLowerCase()))
      if (value === '') { this.players = this.$store.getters['nbaPlayers/nbaPlayers'] }
    }
  },
  mounted () {
    this.players = this.$store.getters['nbaPlayers/nbaPlayers']
  }
})
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
  width: calc(1/3*100% - (1 - 1/3)*15px);
  margin: 10px 0 10px;
  }
}

.tab-bar {
  display: flex;
  width: 93vw;
  justify-content: space-between;
  align-items: center;
  .switch-wrapper {
    display: flex;
    align-items: center;
    p {
      font-weight: bold;
    }
  }
  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  input[type=search] {
    height: 30px;
    width: 300px;
    border-radius: 10px;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 70px;
    height: 40px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130px;
}
}

@media screen and (max-width: 768px) {
  section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: calc(1/2*100% - (1 - 1/2)*15px);
  margin: 10px 0 10px;
}
}

@media screen and (max-width: 720px) {
  section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: 100%;
  margin: 10px 0 10px;
  }
}
</style>
