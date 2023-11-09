<template>
  <div v-if="show" class="single-show-container">
    <router-link to="/" class="back-link">⟵ Back to All Shows</router-link>
    <h1>{{ show.name }}</h1>
    <div class="show-details">
      <img :src="show.image.original" alt="show.name" class="show-image"/>
      <div class="show-info">
        <p><strong>Language:</strong> {{ show.language }}</p>
        <p><strong>Genres:</strong> {{ show.genres.join(', ') }}</p>
        <p><strong>Average Runtime:</strong> {{ show.averageRuntime }} minutes</p>
        <p v-if="show.summary" v-html="show.summary"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: null
    };
  },
  mounted() {
    fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => {
          this.show = data;
        });
  }
}
</script>

<style scoped>
.single-show-container {
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}

.back-link {
  color: #f5f5f1;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.show-details {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.show-image {
  width: 80%;
  max-width: 320px;
  border-radius: 8px;
}

.show-info {
  flex: 1;
}


</style>
