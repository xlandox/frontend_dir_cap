import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: () => import('../views/Cursos.vue')
  },
  {
    path: '/curso',
    name: 'Curso',
    component: () => import('../views/Curso.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import('../views/Noticias.vue')
  },
  {
    path: '/noticia',
    name: 'Noticia',
    component: () => import('../views/Noticia.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, routes
})

export default router
