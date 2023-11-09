<template>
  <div class="tv-shows-container">
    <h1>TV Shows Index</h1>
    <div class="shows-grid">
      <div v-for="show in shows" :key="show.id" class="show-card">
        <router-link :to="{ name: 'single-show', params: { id: show.id } }" class="show-link">
          <img :src="show.image.medium" alt="show.name" class="show-image"/>
          <div class="show-name">{{ show.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: []
    }
  },
  mounted() {
    fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => {
          this.shows = data;
        });
  }
}
</script>

<style scoped>
.tv-shows-container {
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  box-sizing: border-box;
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.show-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.show-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.show-card .show-image {
  width: 100%;
  border-radius: 8px;
}

.show-link {
  color: #f5f5f1;
  text-decoration: none;
}

.show-link:visited {
  color: #f5f5f1;
}

.show-name {
  padding: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
