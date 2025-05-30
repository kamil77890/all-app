import { StyleSheet } from "react-native";
import { width, height } from "react-native-dimension";
const witdh = width(100);
const height_ = height(100);

const base = StyleSheet.create({
  wifi_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 12,
    width: witdh * 0.9,
    height: "auto",
    gap: 16,
    marginVertical: 48,
  },
  wifi_data: {
    width: witdh * 0.4,
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#191b21",
    padding: 16,
    borderRadius: 16,
  },
  wifi_status: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "auto",
    gap: 8,
    marginTop: 8,
  },
  bolder: {
    fontFamily: "SpaceMono",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  img_container: {
    width: witdh * 0.4,
    height: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#191b21",
    padding: 8,
    borderRadius: 16,
  },
  image: {
    width: witdh * 0.35,
    height: height_ * 0.2,
    resizeMode: "contain",
  },
  main_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 16,
    backgroundColor: "#000",
  },
});

export default base;
