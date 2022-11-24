import { useTheme, Dialog, Button } from "react-native-paper"
import { View, StyleSheet, Dimensions } from "react-native"
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

    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },

    input: {
      flex: 1,
    },

    inputSpacer: {
      flex: 1 / 4
    }
  })

  return (
    <View style={styles.container}>
      <Dialog visible={true} onDismiss={() => { }}>
        <Dialog.Title>Log</Dialog.Title>
        <Dialog.Content>
          <View style={styles.inputContainer}>
            <NumericInput
              totalWidth={Dimensions.get('window').width / 3}
              type="up-down"
              rounded
              step={5}
              minValue={0}
              textColor={theme.colors.primary}
              onChange={value => console.log(value)}
              />
            <View style={styles.inputSpacer} />
            <NumericInput
              totalWidth={Dimensions.get('window').width / 3}
              type="up-down"
              rounded
              step={1}
              minValue={0}
              textColor={theme.colors.primary}
              onChange={value => console.log(value)}
            />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode="outlined" onPress={() => { }}>
            Log
          </Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}