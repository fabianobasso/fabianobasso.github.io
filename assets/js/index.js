import FormValidate from './src/FormValidate.js'
import SendContact from './src/SendContact.js'

document.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-send-form')) {
        e.preventDefault()
        // console.log('teste')
        const isValid = FormValidate.validate(
            e.target.getAttribute('data-send-form')
        )

        if (isValid) {
            e.preventDefault()
            const sendContact = new SendContact(
                e.target.getAttribute('data-send-form')
            )
            sendContact.sendContact()
        }
    }
})
