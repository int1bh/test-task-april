import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  nbaPlayers: [] as Array<Object>
})

export type NbaPlayersModuleState = ReturnType<typeof state>

export const mutations: MutationTree<NbaPlayersModuleState> = {
  setPlayers (state, nbaPlayers: any) {
    state.nbaPlayers = nbaPlayers
  }
}

export const actions: ActionTree<NbaPlayersModuleState, NbaPlayersModuleState> = {
  async getAllPlayers ({ commit }): Promise<any> {
    const nbaPlayers = await this.$axios.request(
      {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/players',
        params: { page: '0', per_page: '25' },
        headers: {
          'X-RapidAPI-Key': '7d92383c25mshe24afcaacbbeb82p126888jsne1dd85120ef9',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      }
    )
    commit('setPlayers', nbaPlayers.data.data)
  }
}

export const getters: GetterTree<NbaPlayersModuleState, NbaPlayersModuleState> = {
  nbaPlayers: state => state.nbaPlayers
}
