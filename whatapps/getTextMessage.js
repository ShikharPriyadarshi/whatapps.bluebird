const prepareTextMessage = ({
    messageType = "text",
    recipientMobileNumber = null,
    recipientType = "individual",
    message = null
}) => {
    return {
        messaging_product: "whatsapp",
        recipient_type: recipientType,
        to: recipientMobileNumber,
        type: messageType,
        text: {
            body: message
        }
    }
}

module.exports = {
    prepareTextMessage
}