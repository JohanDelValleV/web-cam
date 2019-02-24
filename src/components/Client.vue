<template>
    <v-app>
        <v-toolbar dark color="primary" class="white--text">
            <v-btn icon to="/main">
                <v-icon medium>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>Visualización</v-toolbar-title>
        </v-toolbar>
        <img id="play">
        <div id="logger"></div>
    </v-app>
</template>

<script>
    import io from 'socket.io-client';
    import $ from 'jquery';
    export default {
        data() {
            return {
                socket : io('localhost:3001')
            }
        },
        mounted(){
            this.socket.on('stream', (image) => {
               $('#play').attr('src',image);
            });
        }
    }
</script>

<style scoped>

</style>