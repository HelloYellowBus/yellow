<template>
  <v-row class="mx-auto justify-center">
    <v-col cols="11">
      <v-card>
				<v-card-title class="headline">진수 유치원</v-card-title>
				<GmapMap 
					:center="center" 
					:zoom="17" 
					style="width: 100%; height: 350px" 
					ref="map">

					<GmapMarker
						:icon="icon"
						:position="curPosition" 
						:clickable="true" 
						@click="center=curPosition"/>
					
					<GmapMarker
						:position="userloca" 
						:clickable="true" 
						@click="center=userloca"/>

					<GmapPolyline
						v-for="pa in path"
						:key="pa.id"
						:options="{'strokeColor': pa.c}" 
						:path="pa.p"/>

				</GmapMap>

        <v-card-subtitle class="d-flex justify-space-around text--primary">
					<div>12 <v-icon>mdi-account-multiple</v-icon></div>
					<div>25 <v-icon>mdi-temperature-celsius</v-icon></div>
					<div>57 <v-icon>mdi-water-percent</v-icon></div>
					<div></div>
        </v-card-subtitle>

				<v-card-subtitle class="d-flex justify-space-around">
					<div><v-icon>mdi-phone-forward</v-icon> 유치원에 연락하기 </div>
					<div @click="alarm()"><v-icon>mdi-bell-ring-outline</v-icon> 알림</div>
					<button @click="getloca">getmyloca</button>
				</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
	#map {
		height: 300px;
	}
</style>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios'
export default {
	name: "main",
	data () {
		return {
			alarmstate:true,
			userloca: {lat:37.40, lng:126.80},
			center: {
				lat: 37.50,
				lng: 126.80
			},
			curPosition: {lat: 37.50, lng: 126.80},
			path: [
				{p: [{ lat: 37.5000, lng: 126.8000 },{ lat: 37.5001, lng: 126.8001}], c:"#42A5F5"},
				{p: [{ lat: 37.5001, lng: 126.8001},{ lat: 37.5002, lng: 126.8002}], c:"#64B5F6"}, 
				{p:[{ lat: 37.5002, lng: 126.8002}, { lat: 37.5002, lng: 126.8003}], c:"#90CAF9"},
				{p: [{ lat: 37.5002, lng: 126.8003}, { lat: 37.5002, lng: 126.8004}], c:"#BBDEFB"},
			],
			icon: {
				url: require('./../assets/bus.png'),
				size: {width: 50, height: 50, f: 'px', b: 'px'},
				scaledSize: {width: 50, height: 50, f: 'px', b: 'px'}
			}
		}
	},
	methods: {
		alarm(){
			this.alarmstate = !this.alarmstate
			console.log(this.alarmstate)
		},
		success(pos) {
				const crd = pos.coords
				const lat = crd.latitude
				const lng = crd.longitude
				this.userloca.lat = lat
				this.userloca.lng = lng
		},
		getloca() {
			const options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge:0
			}
			function error(err) {
				console.warn(`ERROR(${err.code}): ${err.message}`)
			}
			navigator.geolocation.getCurrentPosition(this.success, error, options)
		},
		startVibrate(duration) {
				navigator.vibrate(duration);
		},
		stopVibrate() {
			if(vibrateInterval) clearInterval(vibrateInterval);
			navigator.vibrate(0);
		},
		startPersistentVibrate(duration, interval) {
			console.log('vibrating')
			vibrateInterval = setInterval(function() {
					this.startVibrate(duration);
			}, interval);
		},
		divi() {
			if (this.alarmstate) {
				this.startPersistentVibrate(200, 100)
				if (confirm("100m 근처에 셔틀버스가 있습니다! 확인 버튼을 누르면 진동이 멈춥니다.")) {
					this.stopVibrate()
				} else {
					this.stopVibrate()
				}
			}
		},
		distance() {
			if ((this.userloca.lat == this.curPosition.lat) && (this.userloca.lng == this.curPosition.lng)) {
				this.divi();
			}
			else {
				let radlat1 = Math.PI * (this.userloca.lat)/180;
				let radlat2 = Math.PI * (this.curPosition.lat)/180;
				let theta = this.userloca.lng-this.curPosition.lng;
				let radtheta = Math.PI * theta/180;
				let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
				if (dist > 1) {
					dist = 1;
				}
				dist = Math.acos(dist);
				dist = dist * 180/Math.PI;
				dist = dist * 60 * 1.1515;
				dist = dist * 1.609344 
				if (dist < 0.2){
					this.divi()
				}
			}
		},
	},
	beforeUpdate: function () {
		this.distance()
	}
};
</script>