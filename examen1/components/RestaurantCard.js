import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantCard = ({ name, address, distance, phone, image, rating }) => {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.noImage]}>
          <Text style={styles.noImageText}>Imagen no disponible</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>📍 {address}</Text>
        <Text style={styles.text}>📏 {Math.round(distance)} m</Text>
        <Text style={styles.text}>📞 {phone}</Text>
        {rating && <Text style={styles.rating}>⭐ {rating}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#e0e0e0",
  },
  noImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  noImageText: {
    color: "#666",
    fontStyle: "italic",
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    marginBottom: 3,
    color: "#444",
  },
  rating: {
    fontSize: 15,
    color: "#FFA500",
    marginTop: 4,
    fontWeight: "600",
  },
});

export default RestaurantCard;
