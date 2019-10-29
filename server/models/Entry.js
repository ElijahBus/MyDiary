import moment from 'moment';
// import uuid from 'uuid';

class Entry {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.entries = [];
    }
    /**
     * 
     * @returns {object} entry object
     */
    create(data) {
        const entriesIds = this.entries.map(entry => entry.id);
        const newId = (entriesIds.length > 0) ? Math.max.apply(Math, entriesIds) + 1 : 1;
        const newEntry = {
            id: newId,
            title: data.title || '',
            description: data.description || '',
            mood: data.mood || '',
            createdAt: moment.now(),
            modifiedAt: moment.now()
        };
        this.entries.push(newEntry);
        return newEntry;
    }
    /**
     * 
     * @param {integer} id
     * @returns {object} entry object
     */
    findOne(id) {
        return this.entries.find(entry => entry.id == id);
    }
    /**
     * 
     * @returns {object} all entries
     */
    findAll() {
        return this.entries;
    }
    /**
     * 
     * @param {integer} id
     * @param {object} data 
     */
    update(id, data) {
        const entry = this.findOne(id);
        const index = this.entries.indexOf(entry);
        this.entries[index].title = data['title'] || entry.title;
        this.entries[index].description = data['description'] || entry.description;
        this.entries[index].mood = data['mood'] || entry.mood;
        this.entries[index].modifiedAt = moment.now();        
        return this.entries[index];
    }
    /**
     * 
     * @param {integer} id
     */
    delete(id) {
        const entry = this.findOne(id);
        const index = this.entries.indexOf(entry);
        this.entries.splice(index, 1);
        return {};
    }
}
export default new Entry();
