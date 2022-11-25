import { useTheme, Dialog, Button, IconButton } from "react-native-paper"
import { Text, View, StyleSheet, Dimensions } from "react-native"
import { useState } from "react"
import NumericInput from 'react-native-numeric-input'

export function WeightLogger() {
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

    dialogContent: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    dialogActions: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
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

  const [weight, setWeight] = useState(0)
  const [reps, setReps] = useState(0)

  return (
    <View style={styles.container}>
      <Dialog style={styles.dialog} visible={true} onDismiss={() => { }}>
        <Dialog.Content style={styles.dialogContent}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Weight</Text>
            <NumberInput value={weight} setValue={setWeight} step={5} min={0} max={1000} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Reps</Text>
            <NumberInput value={reps} setValue={setReps} step={1} min={0} max={100} />
          </View>
          <IconButton
            size={Dimensions.get('window').width / 8}
            iconColor={theme.colors.primary}
            icon="check-circle"
          />
        </Dialog.Content>
      </Dialog>
    </View>
  )
}

interface NumberInputProps {
  value: number
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
      fontSize: 0.1 * Dimensions.get('window').width,
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

  return (
    <View style={styles.container}>
      <IconButton
        size={Dimensions.get('window').width / 8}
        iconColor={theme.colors.primary}
        icon="arrow-left-drop-circle"
        onPress={() => props.value > min ? props.setValue(props.value - props.step) : {}}
        />
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{props.value}</Text>
      </View>
      <IconButton
        size={Dimensions.get('window').width / 8}
        iconColor={theme.colors.primary}
        icon="arrow-right-drop-circle"
        onPress={() => props.value < max ? props.setValue(props.value + props.step) : {}}
      />
    </View>
  )
}