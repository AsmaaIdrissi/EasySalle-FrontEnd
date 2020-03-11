export class Salle {

    constructor(
        public id: string,
        public name: string,
        public voie: string,
        public ville: string,
        public codePostal: string,
        public capacite: string,
        public typeEvenement: string,
        public servicePropose: string,
        public  description: string,
        public disponibilite: string,
        public picture: string
    ) {

    }
}
