import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "thunder-lightning-rainy",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥번개",
    subtitle: "집에 있으세요"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "이슬비",
    subtitle: "나가지 마세요"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#5f2c82", "#49a09d"],
    title: "비",
    subtitle: "우산 챙기세요"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2BC0E4", "#EAECC6"],
    title: "눈",
    subtitle: "나가지 마세요"
  },
  Atmosphere: {
    iconName: "weather-cloudy",
    gradient: ["#654ea3", "#eaafc8"],
    title: "분위기",
    subtitle: "나가지 마세요"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2bc0e4", "#eaecc6"],
    title: "맑음",
    subtitle: "나가지 마세요"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#283048", "#859398"],
    title: "흐림",
    subtitle: "나가지 마세요"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "안개",
    subtitle: "나가지 마세요"
  },
  Smoke: {
    iconName: "weather-cloudy",
    gradient: ["#283048", "#859398"],
    title: "연기",
    subtitle: "나가지 마세요"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#536976", "#292E49"],
    title: "안개",
    subtitle: "나가지 마세요"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#3D7EAA", "#FFE47A"],
    title: "먼지",
    subtitle: "나가지 마세요"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#B79891", "#94716B"],
    title: "황사",
    subtitle: "나가지 마세요"
  },
  Ash: {
    iconName: "weather-cloudy",
    gradient: ["#BBD2C5", "#536976"],
    title: "흐림",
    subtitle: "나가지 마세요"
  },
  Squall: {
    iconName: "fan",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "돌풍",
    subtitle: "나가지 마세요"
  },
  Tornado: {
    iconName: "fan",
    gradient: ["#232526", "#414345"],
    title: "폭풍",
    subtitle: "나가지 마세요"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Fog",
    "Dust",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 45,
    fontWeight: "300",
    color: "white",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 24,
    color: "white",
    textAlign: "left"
  },
  textContainer: {
    paddingHorizontal: 20
    //alignItems: "flex-start"
  }
});
