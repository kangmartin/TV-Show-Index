<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  font-family: 'Arial', sans-serif;
  background-color: #181818;
  color: #f5f5f1;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-decoration: underline;
}
p {
  margin-bottom: 1rem;
}

strong {
  font-weight: bold;
}
</style>
