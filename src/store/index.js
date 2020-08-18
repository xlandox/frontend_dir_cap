import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'

// Decodificar JWT
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    usuarioDB: ''
  },
  mutations: {
    obtenerUsuario(state, payload) {
      state.token = payload;
      if(payload === ''){
        state.usuarioDB = ''
      }else{
        state.usuarioDB = decode(payload);
        switch(state.usuarioDB.data.rol){
          case 'Usuario':
            router.push({name: 'Home'});
            break;
          case 'Exponente':
            router.push({name: 'Home'});
            break;
          case 'Administrador':
            router.push({name: 'Admin'});
            break;
        }
      }
    }
  },
  actions: {
    guardarUsuario({commit}, payload) {
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload);
    },
    cerrarSesion({commit}) {
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({name: 'Login'});
    }
  },
  getters: {
    sesionIniciada: state => !!state.token
  }
})
