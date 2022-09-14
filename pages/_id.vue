<template lang="pug">
  .wrapper
    .left-block
      h1 {{ nbaPlayer.first_name }} {{ nbaPlayer.last_name }}
      h2 Позиция: {{ nbaPlayer.position }}
    .right-block
      h1 Команда: {{nbaPlayer.team.full_name}}
      h2 Город: {{nbaPlayer.team.city}}
      h2 Дивизион: {{nbaPlayer.team.division}}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData ({ $axios, params }): Promise<Object> {
    const nbaPlayer: any = await $axios.request(
      {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/players/' + params.id,
        params: { page: '0', per_page: '25' },
        headers: {
          'X-RapidAPI-Key': '7d92383c25mshe24afcaacbbeb82p126888jsne1dd85120ef9',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      }
    )
    return { nbaPlayer: nbaPlayer.data }
  }
})
</script>

<style lang="scss" scoped>
$accent: #ff6b6c;
$otherAccent: #ffc145;

.wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  .left-block, .right-block  {
    flex-grow: 1;
    flex-basis: 20px;
  }
  h1 {
    font-family: 'Sriracha', arial, sans-serif;
    text-align: center;
    margin-bottom: 20px;
    color: $accent;
  }
   h2 {
    font-family: 'Sriracha', arial, sans-serif;
    text-align: center;
    margin-bottom: 20px;
    color: $otherAccent;
  }
}
</style>
