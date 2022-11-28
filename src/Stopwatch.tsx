import React, { Dispatch, SetStateAction, useState } from "react"
import { StyleSheet, View, Dimensions, TouchableHighlight, PixelRatio } from "react-native"
import { Text, useTheme, IconButton } from "react-native-paper"
import { useStopwatch } from "react-timer-hook"
import { RPEButton } from "./RPEButton"
import { WeightLogger } from "./WeightLogger"
import { brzycki } from "./Utils"

export default function Stopwatch() {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({ autoStart: false })
  const [showLogger, setShowLogger] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      alignItems: "center",
      // justifyContent: "center"
    },

    button: {
      marginTop: Dimensions.get('window').height * 0.25,
      height: Dimensions.get('window').width * 0.75,
      width: Dimensions.get('window').width * 0.75,
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
    },

    logButton: {
      // borderWidth: 1,
      // borderColor: "#AFFABE",
      marginVertical: Dimensions.get('window').height / 64,
      width: Dimensions.get('window').width * 0.8,
    },

    logContainer: {
      display: "flex",
      alignItems: "center",
      paddingVertical: Dimensions.get('window').height / 64
    },

    log: {
      paddingVertical: 2,
    },
  })

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={isRunning ? pause : start}
        onLongPress={e => reset(undefined, false)}
        underlayColor={isRunning ? theme.colors.onPrimary : theme.colors.onBackground}
      >
        <Text style={styles.stopwatchLabel}>{format(minutes, seconds)}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.logButton}
        onLongPress={() => setLogs([])}
        onPress={() => { setShowLogger(true) }}
        underlayColor={theme.colors.onBackground}
      >
        <View style={styles.logContainer}>
          {logs.length > 0 ? logs.map((log, i) => <Text key={i} style={styles.log}>{log}</Text>) : <Text>TRAINING LOG</Text>}
        </View>
      </TouchableHighlight>
      <WeightLogger visible={showLogger} onComplete={(weight, reps) => {
        const newLogs = [...logs, `${weight} for ${reps} (${Math.round(brzycki(weight, reps))})`]
        setLogs(newLogs)
        setShowLogger(false)
      }} />
    </View>
  )
}

function format(minutes: number, seconds: number) {
  const f_minutes: string = '' + minutes
  const f_seconds: string = '' + (seconds < 10 ? '0' + seconds : seconds)
  return `${f_minutes}:${f_seconds}`
}