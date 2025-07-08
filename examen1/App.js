import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import RestaurantCard from "./components/RestaurantCard";

const API_KEY = "0b8a36f84408486ba3a72a8d252e3187";
const SEARCH_RADIUS_METERS = 10000;

export default function App() {
  const [location, setLocation] = useState("");
  const [foodType, setFoodType] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCoordinates = async (place) => {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      place
    )}&limit=1&filter=countrycode:mx&apiKey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.features && data.features.length > 0) {
        const { lat, lon } = data.features[0].properties;
        return { lat, lon };
      } else {
        throw new Error("No se encontró la ubicación.");
      }
    } catch (err) {
      throw err;
    }
  };

  const fetchRestaurants = async () => {
    if (!location.trim() || !foodType.trim()) {
      setError("Debes ingresar una ubicación y tipo de comida.");
      return;
    }

    setLoading(true);
    setError("");
    setRestaurants([]);

    try {
      const { lat, lon } = await fetchCoordinates(location);

      const category = "catering.restaurant";
      const url = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${lon},${lat},${SEARCH_RADIUS_METERS}&limit=30&apiKey=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      const filtered = data.features.filter((item) =>
        item.properties.name?.toLowerCase().includes(foodType.toLowerCase())
      );

      if (!filtered.length) {
        setError("No se encontraron restaurantes.");
        return;
      }

      const parsed = filtered.map((item) => ({
        name: item.properties.name || "Sin nombre",
        address: item.properties.formatted || "Sin dirección",
        distance: item.properties.distance || 0,
        phone: item.properties.phone || "No disponible",
        image: item.properties.image || null,
        rating: item.properties.rating || null,
      }));

      setRestaurants(parsed);
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>📍 Buscador de Restaurantes</Text>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/5787/5787054.png",
        }}
        style={{ width: 80, height: 80, alignSelf: "center", marginBottom: 20 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Ej: Guadalajara"
        value={location}
        onChangeText={setLocation}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Ej: pizza, sushi"
        value={foodType}
        onChangeText={setFoodType}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={fetchRestaurants}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007BFF" />}
      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <ScrollView style={{ marginTop: 10 }}>
        {restaurants.map((r, i) => (
          <RestaurantCard key={i} {...r} />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#222",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
  },
});
