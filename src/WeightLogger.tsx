import { useTheme, Dialog, Button, IconButton } from "react-native-paper"
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from "react-native"
import { useState } from "react"
import NumericInput from 'react-native-numeric-input'
import { RPEButton } from "./RPEButton"

interface WeightLoggerProps {
  visible: boolean,
  weight?: number,
  reps?: number,
  onComplete: (weight: number, reps: number) => void
}

export function WeightLogger(props: WeightLoggerProps) {
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    dialog: {
      backgroundColor: theme.colors.onBackground,
    },

    dialogContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    inputContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    inputSpacer: {
      flex: 1 / 4
    },

    inputLabel: {
      fontSize: 0.05 * Dimensions.get('window').width,
      color: theme.colors.primary
    },
  })

  const [weight, setWeight] = useState(props.weight ?? 0)
  const [reps, setReps] = useState(props.reps ?? 0)

  return (
    <Dialog style={styles.dialog} visible={props.visible} onDismiss={() => { props.onComplete(weight, reps) }}>
      <Dialog.Content style={styles.dialogContainer}>
        <View style={styles.inputContainer}>
          <NumberInput units="lbs." value={weight} setValue={setWeight} step={5} min={0} max={1000} />
        </View>
        <View style={styles.inputContainer}>
          <NumberInput units="reps" value={reps} setValue={setReps} step={1} min={0} max={100} />
        </View>
        <RPEButton label="DONE" onPress={() => props.onComplete(weight, reps)} />
      </Dialog.Content>
    </Dialog>
  )
}

interface NumberInputProps {
  value: number
  units?: string
  setValue: (v: number) => void
  min?: number
  max?: number
  step: number
}

function NumberInput(props: NumberInputProps) {
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      // borderWidth: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    },

    valueContainer: {
      // borderWidth: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    value: {
      textAlign: "center",
      color: theme.colors.primary,
      fontSize: 0.05 * Dimensions.get('window').width,
      width: Dimensions.get('window').width / 4
    },

    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  })

  const min = props.min ?? -Infinity
  const max = props.max ?? Infinity
  const units = props.units ? ' ' + props.units : ''

  return (
    <View style={styles.container}>
      <IconButton
        size={Dimensions.get('window').width / 8}
        iconColor={theme.colors.primary}
        icon="chevron-left"
        onPress={() => props.value > min ? props.setValue(props.value - props.step) : {}}
      />
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{`${props.value}${units}`}</Text>
      </View>
      <IconButton
        size={Dimensions.get('window').width / 8}
        iconColor={theme.colors.primary}
        icon="chevron-right"
        onPress={() => props.value < max ? props.setValue(props.value + props.step) : {}}
      />
    </View>
  )
}