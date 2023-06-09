import React, { useRef, useEffect, useMemo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";

export default function MapTracker() {
  const { height, width } = useWindowDimensions();
  const mapRef = useRef(null);

  const coordsA = {
    latitude: -33.9821,
    longitude: 25.6572,
  };
  const coordsB = {
    latitude: -33.9873,
    longitude: 25.6143,
  };

  const memoizedValue = useMemo(() => {
    const calculateInitialRegion = () => {
      if (coordsA && coordsB) {
        const coordinates = [coordsA, coordsB];
        const latitudes = coordinates.map((coordinate) => coordinate.latitude);
        const longitudes = coordinates.map(
          (coordinate) => coordinate.longitude
        );
        const minLat = Math.min(...latitudes);
        const maxLat = Math.max(...latitudes);
        const minLng = Math.min(...longitudes);
        const maxLng = Math.max(...longitudes);
        const padding = 0.1; // Adjust the padding as needed

        return {
          latitude: (minLat + maxLat) / 2,
          longitude: (minLng + maxLng) / 2,
          latitudeDelta: maxLat - minLat + padding,
          longitudeDelta: maxLng - minLng + padding,
        };
      }
      return null;
    };
    return calculateInitialRegion();
    // Return the result to be memoized
  }, [coordsA.latitude, coordsA.longitude]);

  useEffect(() => {
    if (mapRef.current) {
      // Zoom in to a specific location
      mapRef.current.animateToRegion({
        latitude: coordsA.latitude,
        longitude: coordsA.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    }
  }, [coordsA.latitude, coordsA.longitude]);

  return (
    <MapView
      ref={mapRef}
      style={{ width, height }}
      initialRegion={memoizedValue}
    >
      <Marker
        coordinate={{
          latitude: coordsA.latitude,
          longitude: coordsA.longitude,
        }}
        title="Source"
        description="This is your current location"
      />
      <Marker
        coordinate={{
          latitude: coordsB.latitude,
          longitude: coordsB.longitude,
        }}
        title="Destination"
        description="This is your current location"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({});
