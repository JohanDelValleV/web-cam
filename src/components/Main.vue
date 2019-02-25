<template>
  <v-app>
    <v-container>
      <div style="max-width: 800px; margin: auto; margin-top: 80px;">
        <v-card color="#DD2C00" style="padding: 15%;">
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
      
    }),
    mounted(){
      navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia );    
        if(navigator.getUserMedia){
          navigator.getUserMedia({video: false, audio: false});
        }
    }
  }
</script>

<style>
  h3{
    color: white;
  }

</style>
