export default class Classroom {
    /**
     * addStudent() sla de student op in een array
     * getStudent() studenten kunnen ophalen
     * getAllStudents(). Deze functies geeft alle toegevoegde studenten terug
     **/

    constructor() {
        this.list = [];
    }

    addStudent(name, info) {
        this.list[name] = info;
    }

    getStudent(name) {
        return this.list[name];
    }

    getAllStudents() {
        return this.list;
    }
}