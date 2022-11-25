import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native"
import { useTheme } from "react-native-paper"

export interface RPEButtonProps {
  label: string
  onPress: () => void
}

export function RPEButton(props: RPEButtonProps) {
  const theme = useTheme()

  const styles = StyleSheet.create({
    button: {
      marginVertical: 8,
      height: Dimensions.get('window').width / 8,
      width: Dimensions.get('window').width / 2,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    buttonLabel: {
      textAlign: "center",
      color: theme.colors.primary,
      fontSize: 0.025 * Dimensions.get('window').width,
      width: Dimensions.get('window').width / 4
    },
  })

  return (
    <TouchableHighlight style={styles.button} underlayColor={theme.colors.onBackground} onPress={props.onPress}>
      <Text style={styles.buttonLabel}>{props.label}</Text>
    </TouchableHighlight>
  )
}