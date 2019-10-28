import Authentication from '../helpers/Authentication';
import UserModel from '../models/User';

const User = {
  /**
   * 
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  create(req, res) {
      if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
          return res.status(400).send({
              "status": 400,
              "error": "Please, all fields are required"
          });
      }
      if (!Authentication.isValidEmail(req.body.email)) {
          return res.status(400).send({
              "status": 400,
              "error": "Please, provide a valid email address"
          });
      }
      if (Authentication.emailAlreadyExist(UserModel.users, req.body.email)) {
          return res.status(401).send({
              "status": 401,
              "error": "Email already exist"
          });
      }


      const user = UserModel.signup(req.body);
      return res.status(201).send({
          "status": 201,
          "message": "User successfully created",
          "data": user
      });
  },
  /**
   * 
   * @param {object} req
   * @param {object} res
   * @returns {status} 200
   */
  login(req, res) {
      if (!req.body.email || !req.body.password) {
          return res.status(400).send({
              "status": 400,
              "error": "All fields are required"
          });            
      }
      const loggedUser = UserModel.signin(req.body.email, req.body.password);
      if (!loggedUser) {
          return res.status(404).send({
              "status": 404,
              "error": "No user matching your credentials"
          })
      }
      return res.status(200).send({
          "status": 200,
          "message": "User successfully logged in"
      });
  }
}
export default User;