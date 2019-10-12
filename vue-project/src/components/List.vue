<template>
  <ul>
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
    items: ['Banane', 'Pomme', 'Orange', 'Tomate']
    }
  }
}
</script>