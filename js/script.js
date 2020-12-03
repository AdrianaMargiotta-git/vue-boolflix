var app = new Vue({
    el: '#app',
    data: {
        cerca: '',
        listaFilm: [],
        listaSerieTv: []
    },
    methods:{
        filtroCerca() {
            // inizia la ricerca inserendo nell'input minimo 2 caratteri
            if (this.cerca.length >= 2){
                this.films(),
                this.serieTV()
            }
            //cancello l'input
            this.cerca = ''
        },
        // ricerco per film
        films(){
            axios.get("https://api.themoviedb.org/3/search/movie", 
            {
                params: {
                    api_key: '9dd3a952e16dad35348134e9ee1d2715',
                    lenguage: 'it-IT',
                    query: this.cerca,
                    // answer: 50,
                    // page: 2
                }
            })
            .then(risposta => {
                this.listaFilm = risposta.data.results;
            })
        },
        // ricerco per serie tv
        serieTV(){
            axios.get("https://api.themoviedb.org/3/search/tv",
            {
                params: {
                    api_key: '9dd3a952e16dad35348134e9ee1d2715',
                    lenguage: 'it-IT',
                    query: this.cerca,
                    // answer: 50
                }
            })
            .then(risposta => {
                this.listaSerieTv = risposta.data.results;
            })
        },
        // approssima il voto  per eccesso Math.ceil
        approxVote(vote){
            return Math.ceil(vote / 2);
        },
    }
})