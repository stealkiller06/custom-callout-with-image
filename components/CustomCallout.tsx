import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Marker {
  photo?: string;
  name: string;
}

const CustomCallout = ({ marker }: { marker: Marker }) => {
  console.log("URL de la foto:", marker?.photo);
  return (
    <View style={styles.calloutContainer}>
      {/* Imagen superior */}
      <Text>
        <Image
          style={styles.calloutImage}
          source={{ uri: "https://picsum.photos/200" }}
          resizeMode="cover"
        />
      </Text>
      {/* Contenedor de texto (nombre, etc.) */}
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{marker.name}</Text>
      </View>

      {/* Flecha que apunta al marcador */}
      <View style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  calloutContainer: {
    width: 200,
    height: 200,
    // Ajusta la altura según tu diseño (suma la altura de la imagen + sección de texto)
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    alignItems: "center",
    overflow: "hidden", // para recortar bordes redondeados
  },
  calloutImage: {
    width: 510,
    height: 100,
    //resizeMode: 'contain',
    backgroundColor: "#D34FF2", // color de fondo mientras carga la imagen
  },
  textContainer: {
    width: "100%",
    paddingVertical: 6,
    backgroundColor: "#00000077", // un semitransparente si deseas efecto
    alignItems: "center",
  },
  nameText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
  triangle: {
    position: "absolute",
    bottom: -10,
    left: "50%",
    transform: [{ translateX: -6 }], // para centrar la flecha
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    // Usa el mismo color de fondo que el callout
    borderBottomColor: "#1c1c1c",
  },
  nottext: {
    padding: 0,
    margin: 0,
    backgroundColor: "none",
  },
});

export default CustomCallout;
