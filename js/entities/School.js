export default class School {
    constructor() {
        this.list = []
    }

    addClassroom(name, info) {
        this.list[name] = info;
    }

    showClassrooms() {
        return this.list;
    }
}