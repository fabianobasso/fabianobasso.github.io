export default class FormValidate {

    static validate(form) {
        const formToSendContact = document.querySelector(`#${form}`)
        return this.isValidateInput(formToSendContact)
    }

    static isValidateInput(form) {
        let validate = true

        this.cleanErrorMsg(form)

        for (let input of form.querySelectorAll('.validate')) {
            if (!input.value.trim()) {
                this.setMessageError(input.getAttribute('name'), '* Campo Obrigatório')
                validate = false
            } else {
                if (input.getAttribute('name') === 'name') {
                    if (!this.validateName(input.value.trim())) {
                        this.setMessageError(input.getAttribute('name'), '* Nome inválido')
                        validate = false
                    }
                }

                if (input.getAttribute('name') === 'email') {
                    if (!this.validateEmail(input.value.trim())) {
                        this.setMessageError(input.getAttribute('name'), '* Email inválido')
                        validate = false
                    }
                }
            }
        }

        return validate
    }

    static validateEmail(email) {
        const regex = /\S+@\S+\.\S+/
        return regex.test(String(email))
    }

    static validateName(value) {
        if (value.length < 3) return false
        const regex = /^[0-9A-zÁ-ú ]*$/
        return regex.test(String(value))
    }

    static setMessageError(idName, msg) {
        document.querySelector(`#${idName}Help`).innerHTML = msg
    }

    static cleanErrorMsg(form) {
        for (let input of form.querySelectorAll('.validate')) {
            document.querySelector(`#${input.getAttribute('name')}Help`).innerHTML = ''
        }
    }
}