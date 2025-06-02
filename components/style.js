import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const colors = {
  backgroundDark: "#121212",
  backgroundDarker: "#1e1e1e",
  backgroundCard: "#2c2c2c",
  backgroundDarkerContainer: "#222222",
  textLight: "#eee",
  textLightSecondary: "#ccc",
  textSoftLight: "#bbb",
  textMuted: "#777",
  accentBlue: "#4dabf7",
  accentSoftBlue: "#82aaff",
  borderSubtle: "#444",
  black: "#000",
  darkSurface: "#191b21",
};

const spacing = {
  paddingSmall: 8,
  paddingMedium: 12,
  paddingLarge: 16,
  marginVerticalLarge: 48,
  marginBottomMedium: 12,
  marginBottomLarge: 20,
  marginTopMedium: 18,
  borderRadius: 8,
  borderRadiusLarge: 16,
};

const base = StyleSheet.create({
  // --- Ogólne kontenery i layout ---

  main_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: spacing.paddingLarge,
    backgroundColor: colors.black,
  },

  container: {
    flex: 1,
    padding: spacing.paddingLarge,
    backgroundColor: colors.black,
    paddingTop: 60,
  },

  // --- Teksty ---

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: spacing.marginBottomLarge,
    color: colors.textLight,
  },

  bolder: {
    fontFamily: "SpaceMono",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textLight,
    textAlign: "left",
  },

  avg_text: {
    fontFamily: "SpaceMono",
    fontSize: 16,
    color: colors.textLight,
    textAlign: "left",
  },

  wifiText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.textLightSecondary,
  },

  wifiItemText: {
    fontSize: 14,
    marginBottom: 4,
    color: colors.textSoftLight,
  },

  noWifiText: {
    fontSize: 16,
    fontStyle: "italic",
    color: colors.textMuted,
  },

  signalText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.accentBlue,
  },

  advancedText: {
    fontSize: 16,
    marginBottom: 12,
    color: colors.accentSoftBlue,
    fontWeight: "500",
  },

  // --- WiFi containers ---

  wifi_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: spacing.paddingMedium,
    width: width * 0.9,
    marginTop: spacing.marginVerticalLarge,
    gap: 16,
  },

  wifi_data: {
    width: width * 0.4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.darkSurface,
    padding: spacing.paddingLarge,
    borderRadius: spacing.borderRadiusLarge,
    marginBottom: 10,
  },

  img_container: {
    width: width * 0.4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.darkSurface,
    padding: spacing.paddingSmall,
    borderRadius: spacing.borderRadiusLarge,
  },

  image: {
    width: width * 0.35,
    height: height * 0.2,
    resizeMode: "contain",
  },
  wifi_status: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
    gap: 8,
  },

  wifi_status_text: {
    fontFamily: "SpaceMono",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginRight: 8,
  },

  wifiInfoContainer: {
    marginBottom: 24,
    padding: spacing.paddingLarge,
    backgroundColor: colors.backgroundDarker,
    borderRadius: spacing.borderRadius,
  },

  wifiListContainer: {
    marginTop: 8,
  },

  wifiItem: {
    padding: spacing.paddingMedium,
    marginBottom: spacing.marginBottomMedium,
    backgroundColor: colors.backgroundCard,
    borderRadius: spacing.borderRadius,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
  },

  // --- Switch ---

  switchContainer: {
    width: width * 0.9,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.marginBottomLarge,
  },

  switchLabel: {
    flex: 1,
    fontSize: 16,
    color: colors.textLight,
  },

  // --- Advanced Settings Container ---

  advancedSettingsContainer: {
    padding: spacing.paddingLarge,
    borderRadius: spacing.borderRadius,
    overflow: "scroll",
  },

  nav_container: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: 60,
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkSurface,
    padding: spacing.paddingMedium,
  },

  gap_16: {
    marginTop: spacing.marginTopMedium,
  },

  // --- Battery styles ---
  battery_conteiner: {
    width: width * 0.9,
    borderRadius: spacing.borderRadiusLarge,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundDarkerContainer,
    padding: spacing.paddingLarge,
  },
  battery_card: {
    width: "100%",
    backgroundColor: colors.backgroundCard,
    borderRadius: spacing.borderRadiusLarge,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.textLight,
    textAlign: "center",
    textShadowColor: "#00000088",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 16,
  },
  title_b: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.textLight,
    textAlign: "center",
    textShadowColor: "#00000088",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  batteryImage: {
    width: width * 0.5,
    height: height * 0.15,
    resizeMode: "contain",
    marginVertical: spacing.marginBottomLarge,
  },
  battery_info_container: {
    width: width * 0.83,
    borderRadius: spacing.borderRadiusLarge,
    alignItems: "center",
    backgroundColor: colors.backgroundDarkerContainer,
    padding: spacing.paddingLarge,
  },
  batteryLevelText: {
    fontFamily: "SpaceMono",
    fontSize: 22,
    color: colors.textLightSecondary,
    marginBottom: spacing.marginBottomLarge,
    textAlign: "center",
    textShadowColor: "#00000055",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  margin_8: {
    marginTop: 8,
  },
  margin_16: {
    marginTop: 16,
  },
  advanced_battery_settings: {
    width: width * 0.9,
    padding: spacing.paddingLarge,
    borderRadius: spacing.borderRadius,
    backgroundColor: colors.backgroundDarkerContainer,
    marginTop: spacing.marginTopMedium,
  },
  batteryStatusText: {
    fontFamily: "SpaceMono",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
    marginBottom: spacing.marginTopMedium,
  },
  battery_adv_container: {
    width: width,
    height: "100%",
    alignItems: "center",
    paddingTop: spacing.marginVerticalLarge,
    backgroundColor: colors.black,
  },
});

export default base;
