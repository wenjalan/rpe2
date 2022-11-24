import React from "react"
import { StyleSheet, View, Dimensions, TouchableHighlight, PixelRatio } from "react-native"
import { Text, useTheme } from "react-native-paper"
import { useStopwatch } from "react-timer-hook"

export default function Stopwatch() {
  const theme = useTheme()
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({ autoStart: false })

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    button: {
      height: Dimensions.get('window').width * 0.8,
      width: Dimensions.get('window').width * 0.8,
      backgroundColor: isRunning ? theme.colors.primary : theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      borderRadius: Dimensions.get('window').width * 0.8,
      alignItems: "center",
      justifyContent: "center",
    },

    stopwatchLabel: {
      color: isRunning ? theme.colors.background : theme.colors.primary,
      fontSize: 0.1 * Dimensions.get('window').width
    }
  })


  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={isRunning ? pause : start} onLongPress={e => reset(undefined, false)} underlayColor={isRunning ? theme.colors.onPrimary : theme.colors.onBackground}>
        <Text style={styles.stopwatchLabel}>{format(minutes, seconds)}</Text>
      </TouchableHighlight>
    </View>
  )
}

function format(minutes: number, seconds: number) {
  const f_minutes: string = '' + minutes
  const f_seconds: string = '' + (seconds < 10 ? '0' + seconds : seconds)
  return `${f_minutes}:${f_seconds}`
}