<template>
  <v-row class="mx-auto justify-center">
    <v-col cols="11">
      <v-card>
				
				<gmap-map :center="center" :zoom="12" style="width: 100%; height: 500px" ref="map">
					<gmap-polyline v-if="path.length > 0" :path="path" :editable="true" @path_changed="updateEdited($event)"
							@rightclick="handleClickForDelete"
							ref="polyline">
					</gmap-polyline>
				</gmap-map>

        <v-card-title class="pb-0">Number 10</v-card-title>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.0/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js"></script>
<script>

function closeLoop (path) {
	return path.concat(path.slice(0, 1))
}

export default {
	name: "main",
	data () {
		return {
			center: {lat: 1.38, lng: 103.8},
			edited: null,
			path: [
				{lat: 1.33, lng: 103.75},
				{lat: 1.43, lng: 103.85},
			],
			mvcPath: null,
			errorMessage: null,
			polylineGeojson: '',
		}
	},
	computed: {
		polylinePath: function () {
			if (!this.mvcPath) return null
			let path = [];
			for (let j=0; j<this.mvcPath.getLength(); j++) {
				let point = this.mvcPath.getAt(j);
				path.push({lat: point.lat(), lng: point.lng()});
			}
			return path
		}
	},
	methods: {
		updateCenter: function (place) {
			this.center = {
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			}
		},
		updateEdited: function (mvcPath) {
			this.mvcPath = mvcPath
		},
		handleClickForDelete($event) {
			if ($event.vertex) {
				this.$refs.polyline.$polylineObject.getPaths()
					.getAt($event.path)
					.removeAt($event.vertex)
			}
		},
		readGeojson: function ($event) {
			try {
				this.polylineGeojson = $event.target.value
				var v = JSON.parse($event.target.value);
				this.path = v.coordinates
					.map(([lng, lat]) => ({lat, lng}))
				this.errorMessage = null
			} catch (err) {
				this.errorMessage = err.message
			}
		}
	}
};
</script>