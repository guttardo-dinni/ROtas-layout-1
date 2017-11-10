<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="lHr LpR lFf" :right-breakpoint="1100">
  <!-- Header -->
  <q-toolbar class="f-toolbar" color="cyan-8" slot="header">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
  </q-toolbar>
  <!-- Left Side Panel -->
  <div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>MENU</q-list-header>
      <q-side-link item to="/">
        <q-item-side icon="home" />
        <q-item-main label="Home" sublabel="Página Inicial" />
      </q-side-link>

      <q-side-link item to="/rotas">
        <q-item-side icon="map" />
        <q-item-main label="Rotas" sublabel="Visualização da Rota" />
      </q-side-link>
    </q-list>
  </div>
  <!-- sub-routes get injected here: -->
  <router-view />
  <!-- Footer -->
  <q-toolbar color="cyan-8" slot="footer">
    <q-toolbar-title>
      All rights reserved
    </q-toolbar-title>
  </q-toolbar>
</q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QTabs,
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QListHeader,
  QToolbarTitle,
  QRouteTab,
  QBtn,
  QIcon,
  QSideLink,
  QCollapsible
} from 'quasar'

export default {
  name: 'layout',
  components: {
    QLayout,
    QToolbar,
    QTabs,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QListHeader,
    QToolbarTitle,
    QRouteTab,
    QBtn,
    QIcon,
    QSideLink,
    QCollapsible
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
