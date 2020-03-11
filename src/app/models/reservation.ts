export class Reservation {
    constructor(
        public nom: string,
        public prenom: string,
        public telephone: string,
        public email: string,
        public adresse: string,
        public dateDebut: Date,
        public dateFin: Date,
        public idSalle: number,

    ) {

    }

}
