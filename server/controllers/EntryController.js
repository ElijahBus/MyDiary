import EntryModel from '../models/Entry';

const Entry = {
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} entry object
     */
    create(req, res) {
        if (!req.body.title || !req.body.description || !req.body.mood) {
            return res.status(400).send({
                "status": 400,
                "error": "All fields are required" 
            });
        }
        const entry = EntryModel.create(req.body);
        return res.status(201).send({
            "status": 201,
            "message": "Entry successfully created",
            "data": entry
        });
    },
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} entries array
     */
    getAll(req, res) {
        const entries = EntryModel.findAll();
        return res.status(200).send({
            "status": 200,
            "data": entries
        });
    },
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} entry object
     */
    getOne(req, res) {
        const entry = EntryModel.findOne(req.params.id);
        if (!entry) {
            return res.status(404).send({
                "status": 404,
                "error": 'Diary entry not found'
            });
        }
        return res.status(200).send({
            "status": 200,
            "data": entry
        });
    },
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} updated entry
     */
    update(req, res) {
       const entry = EntryModel.findOne(req.params.id) ;
       if (!entry) {
           return res.status(404).send({
            "status": 404,
            "error": "Diary entry not found"
        });           
       }
       const updatedEntry = EntryModel.update(req.params.id, req.body);
       return res.status(200).send({
           "status": 200,
           "message": "Diary entry successfully updated",
           "data": updatedEntry
       });
    },
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {void} return status code 204: No Content
     */
    delete(req, res) {
        const entry = EntryModel.findOne(req.params.id);
        if (!entry) {
            return res.status(404).send({
                "status": 404,
                "error": "Diary entry not found"
            });            
        }
        const deletedEntry = EntryModel.delete(req.params.id);
        return res.status(204).send({
            "status": 204,
            "message": "Diary entry successfully deleted",
            "data": deletedEntry
        });
    }
}
export default Entry;