import { Image, StyleSheet, Platform, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CustomCallout from "@/components/CustomCallout";

const marker = {
  photo: "https://via.placeholder.com/150",
  name: "San Francisco",
  lnglat: {
    latitude: 37.78825,
    longitude: -122.4324,
  },
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        loadingEnabled={false}
      >
        <Marker
          coordinate={marker.lnglat}
          pinColor="blue"
          title="San Francisco"
          description="Custom Marker"
        >
          <Callout tooltip>
            <CustomCallout marker={marker} />
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  calloutContainer: {
    backgroundColor: "white",
    padding: 100,
    height: 100,
    width: 100,
  },
  calloutImage: {
    width: 150,
    height: 100,
    marginBottom: 5,
    borderRadius: 5,
  },
});
