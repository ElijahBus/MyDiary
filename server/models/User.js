import moment from 'moment';
import Authentication from '../helpers/Authentication';

class User {
  /**
   * constructor
   */
  constructor() {
    this.users = [];
  }
  /**
   * user sign up
   * @returns {object} a user object
   */
  signup(data) {
    const usersIds = this.users.map(user => user.id);
    const newId = (usersIds.length > 0) ? Math.max.apply(Math, usersIds) + 1 : 1;
    const newUser = {
        id: newId,
        firstName: data.firstName  || '',
        lastName: data.lastName || '',
        email: data.email || '',
        password: Authentication.hashPassword(data.password) || '',
        createdAt: moment.now(),
        modifiedAt: moment.now()
    };
    this.users.push(newUser);
    return newUser;
  }
  /**
   * user sign in
   * @param {string} email
   * @param {string} password
   * @returns {boolean} true or false
   */
  signin(email, password) {
    const user = this.users.find(user => user.email == email);
    return Authentication.comparePassword(user.password, password);        
  }
}

export default new User();