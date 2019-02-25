<template>
    <v-app>
        <v-toolbar dark color="primary" class="white--text">
            <v-btn icon to="/main">
                <v-icon medium>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>Visualización</v-toolbar-title>
        </v-toolbar>
        <v-snackbar
            v-model="snackbar"
            :bottom="y === 'bottom'"
            :left="x === 'left'"
            :multi-line="mode === 'multi-line'"
            :right="x === 'right'"
            :timeout="timeout"
            :top="y === 'top'"
            :vertical="mode === 'vertical'"
            >
            {{ text }}
            <v-btn
                color="secondary"
                flat
                @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
        <div style="max-width: 700px; margin: auto;">
            <img id="play" width="700px">
            <div id="logger"></div>
        </div>
    </v-app>
</template>

<script>
    import io from 'socket.io-client';
    import $ from 'jquery';
    export default {
        data() {
            return {
                socket : io('localhost:3001'),
                snackbar: false,
                y: 'bottom',
                x: null,
                mode: '',
                timeout: 4000,
                text: ''
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