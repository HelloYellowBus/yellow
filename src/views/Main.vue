<template>
  <v-row class="mx-auto justify-center">
    <v-col cols="11">
      <v-card>
				
				<GmapMap 
					:center="center" 
					:zoom="12" 
					style="width: 100%; height: 500px" 
					ref="map">

					<GmapMarker
						v-for="m in markers" 
						:key="m.id"
						:icon="icon"
						:position="m" 
						:clickable="true" 
						@click="center=m"/>

					<GmapPolyline
						:options="{'strokeColor': '#808080'}" 
						:path="markers"/>

				</GmapMap>

        <v-card-title class="pb-0">Number 10</v-card-title>

        <v-card-text class="text--primary">
          <div>
						<v-icon>mdi-account-multiple</v-icon>
						<v-icon>mdi-temperature-celsius</v-icon>
						<v-icon>mdi-water-percent</v-icon>
						<v-icon>mdi-phone-forward</v-icon>
					</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Share</v-btn>

          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
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
			markers: [{ lat: 10.0, lng: 10.0 },{ lat: 10.1, lng: 10.1}],
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