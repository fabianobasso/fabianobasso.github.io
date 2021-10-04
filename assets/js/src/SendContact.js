export default class SendContact {
    constructor(form) {
        this.data = this.setData(form)
        this.url = 'https://bassosv.xyz:8443/send_contact'
        this.alertMSG = document.querySelector('.alert-msg')
    }

    setData(form) {
        const formSetData = document.querySelector(`#${form}`)
        let data = {}
        for (let input of formSetData.querySelectorAll('.validate')) {
            data[input.getAttribute('name')] = input.value
        }

        return data
    }

    static cleanInputs(){
        const formSetData = document.querySelector('#cform')
        for (let input of formSetData.querySelectorAll('.validate')) {
            input.value = ''
        }
    }

    sendContact() {
        $('.load-send-contact').show()
        $('.send__contact').hide()
        axios
            .post(this.url, this.data)
            .then((res) => {
                const alertMSG = document.querySelector('.alert-msg')
                const data = res.data
                if (res.status === 200) {
                    SendContact.setSenAlertMSGContact(data, alertMSG)
                    $('.send__contact').show()
                    $('.load-send-contact').hide()
                    SendContact.cleanInputs()
                }
                if (res.status !== 200) {
                    SendContact.setAlertMSGError()
                    $('.send__contact').show()
                    $('.load-send-contact').hide()
                }
            })
            .catch((error) => {
                SendContact.setAlertMSGError()
                $('.send__contact').show()
                $('.load-send-contact').hide()
            })
    }

    static setSenAlertMSGContact(data, alertMSG) {
        if (data.send) {
            alertMSG.classList.add('alert-primary')
            $('.alert-msg').slideDown()
            alertMSG.innerHTML = data.msg
            setTimeout(() => {
                $('.alert-msg').slideUp()
                SendContact.cleanAlertMSG(alertMSG)
            }, 3000)
        } else {
            alertMSG.classList.add('alert-danger')
            $('.alert-msg').slideDown()
            alertMSG.innerHTML = data.msg
            setTimeout(() => {
                $('.alert-msg').slideUp()
                SendContact.cleanAlertMSG(alertMSG)
            }, 3000)
        }
    }

    static setAlertMSGError() {
        const alertMSG = document.querySelector('.alert-msg')
        alertMSG.classList.add('alert-danger')
        $('.alert-msg').slideDown(500)
        alertMSG.innerHTML = 'Tente novamente mais tarde 222'
        setTimeout(() => {
            $('.alert-msg').slideUp(500)
            SendContact.cleanAlertMSG(alertMSG)
        }, 3000)
    }

    static cleanAlertMSG(el) {
        el.innerHTML = ''
        if (el.classList.contains('alert-primary')) {
            el.classList.remove('alert-primary')
        } else {
            el.classList.remove('alert-danger')
        }
    }
}
