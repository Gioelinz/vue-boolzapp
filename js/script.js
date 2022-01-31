console.log('Vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Gioelinz',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Giovanni',
                avatar: '_4',
            },
            {
                name: 'Francesco',
                avatar: '_5',
            },
        ]
    }
})