export class Project{

    constructor(
        public _id: string,
        public nom: string,
        public voie: string,
        public ville: string,
        public code_postal: string,
        public capacite: string,
        public typeEvenement: string,
        public servicePropose: string,
        public  description: string,
        public disponibilite: string,
        public image: string
    ){

    }
}
