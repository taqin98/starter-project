import { showMessage } from "react-native-flash-message";

const MessageUtil = {
    showSuccess: (description) => {
        showMessage({
            message: "Berhasil",
            description: description,
            color: 'white',
            type: 'success',
            icon: 'success'
        })
    },
    showWarning: (description) => {
        showMessage({
            message: "Warning",
            description: description,
            color: 'white',
            type: 'warning',
            icon: 'warning'
        })

    },
    showFailed: (description) => {
        showMessage({
            message: "Failed",
            description: description,
            color: 'white',
            type: 'danger',
            icon: 'danger'
        })
    }
}

export { MessageUtil };