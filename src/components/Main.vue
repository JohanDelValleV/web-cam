<template>
  <v-app>
    <v-container>
      <div style="max-width: 400px; margin: auto;">
        <v-card color="#DD2C00">
          <v-card-title primary-title>
            <h3 class="headline">Menú principal</h3>
          </v-card-title>
          <v-card-actions>
            <v-btn to="/server">Start Video Stream</v-btn>
            <v-btn to="/client">Visualize Video Stream</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style>
  h3{
    color: white;
  }

</style>
