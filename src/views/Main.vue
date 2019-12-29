<template>
  <v-row class="mx-auto justify-center">
    <v-col cols="11">
      <v-card>
				<v-card-title class="headline">진수 유치원</v-card-title>
				<GmapMap 
					:center="center" 
					:zoom="12" 
					style="width: 100%; height: 500px" 
					ref="map">

					<GmapMarker
						:icon="icon"
						:position="curPosition" 
						:clickable="true" 
						@click="center=curPosition"/>

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
        </v-card-subtitle>

				<v-card-subtitle class="d-flex justify-space-around">
					<div><v-icon>mdi-phone-forward</v-icon> 유치원에 연락하기 </div>
					<div><v-icon>mdi-bell-ring-outline</v-icon> 알림받기</div>
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

<script>
export default {
	name: "main",
	data () {
		return {
			center: {
				lat: 10.0,
				lng: 10.0
			},
			curPosition: {lat: 10.0, lng: 10.0},
			path: [
				{p: [{ lat: 10.000, lng: 10.000 },{ lat: 10.001, lng: 10.001}], c:"#42A5F5"},
				{p: [{ lat: 10.001, lng: 10.001},{ lat: 10.002, lng: 10.002}], c:"#64B5F6"}, 
				{p:[{ lat: 10.002, lng: 10.002}, { lat: 10.002, lng: 10.003}], c:"#90CAF9"},
				{p: [{ lat: 10.002, lng: 10.003}, { lat: 10.002, lng: 10.004}], c:"#BBDEFB"},
			],
			icon: {
				url: require('./../assets/bus.png'),
				size: {width: 50, height: 50, f: 'px', b: 'px'},
				scaledSize: {width: 50, height: 50, f: 'px', b: 'px'}
			}
		}
	},
	computed: {
	},
	methods: {
	}
};
</script>