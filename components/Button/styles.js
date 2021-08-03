import { StyleSheet } from "react-native";

export default StyleSheet.create({
  default: {
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  textDefault: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  outline: {
    borderWidth: 2
  },

  full: {
    width: "100%",
    alignSelf: "auto"
  },
  round: {
    borderRadius: 6
  }
});