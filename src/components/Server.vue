<template>
    <v-app>
        <v-toolbar dark color="primary" class="white--text">
            <a href="/main" icon>
                <v-icon medium>arrow_back</v-icon>
            </a>
            <v-toolbar-title>Cámara</v-toolbar-title>
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
            <video src="" id="video" style="width:700px; " autoplay="true"></video>
            <canvas style="display:none;" id="preview"></canvas> 
        </div>
    </v-app>
</template>

<script>
    import io from 'socket.io-client';
    import $ from 'jquery';
    export default {
        data() {
            return {
                snackbar: false,
                y: 'bottom',
                x: null,
                mode: '',
                timeout: 4000,
                text: ''
            }
        },
        methods: {
            loadCamera(stream){
                this.text='Cámara activada.';
                this.snackbar=true;
                video.srcObject =stream;
            },
            loadFail(){
                this.text='Error al activar la cámara';
                this.snackbar=true;
            }
        },
        mounted() {
            var canvas = document.getElementById("preview");
            var context = canvas.getContext('2d');
            var video = document.getElementById("video");
            var socket = io('localhost:3001')
            canvas.width = 800;
            canvas.height = 600;
            context.width = canvas.width;
            context.height = canvas.height;
            navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia );
    
            if(navigator.getUserMedia){
                navigator.getUserMedia({video: true, audio: false},this.loadCamera,this.loadFail);
            }
            setInterval(function(){
                context.drawImage(video,0,0,context.width,context.height);
                socket.emit('stream',canvas.toDataURL('image/jpeg'));
            },1);
            
            
        }
    }
</script>

<style scoped>

</style>