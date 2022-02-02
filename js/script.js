console.log('Vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {

        newMsg: "",
        findContact: "",
        currentIndex: 0,
        user: {
            name: 'Gioelinz',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Vabene, ci aggiorniamo!',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
    },
    methods: {
        changeContact(index) {
            return this.currentIndex = index;
        },

        setContact(index) {
            return index === this.currentIndex;
        },

        sendMsg() {

            const formattedMsg = this.newMsg.charAt(0).toUpperCase() + this.newMsg.substring(1);
            const trimmedMsg = formattedMsg.trim()

            const templateMsg = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text: trimmedMsg,
                status: 'sent'
            };

            if (trimmedMsg) {
                this.contacts.forEach((c, i) => {
                    if (this.currentIndex === i) {
                        c.messages.push(templateMsg)
                        setTimeout(() => {
                            const replyMsg = {
                                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                                text: 'Ok',
                                status: 'received'
                            };
                            c.messages.push(replyMsg)
                        }, 3000);
                    }
                })
            };
            this.newMsg = "";
        },



    },
    computed: {

        searchContact() {
            return this.contacts.filter(c => {
                if (c.name.toLowerCase().includes(this.findContact.toLowerCase())) {
                    return c.visible = true;
                }
                else return c.visible = false;
            })
        }
    }
})