import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import Modal from 'react-native-modal'

const TaskModal = ({
    isVisible
}) => {
    return(
        <Modal isVisible={isVisible}
        avoidKeyboard
        style={styles.modal}>
            <View style={styles.container}>
                <TextInput placeholder="새로운 할 일을 추가해 주세요."/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        justifyContent: 'flex-end',
        margin: 0,
    },
    container:{
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    }
})

export default TaskModal