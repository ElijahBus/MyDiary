import bcrypt from 'bcrypt';

class Authentication {
  /**
	 * Hash password method
	 * @param {string} password
	 * @returns {string} hashed password
	 */
	static hashPassword(password) {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		return hash
	}
	/**
	 * compare password
	 * @param {string} hashedPassword
	 * @param {string} password
	 * @returns {boolean} true or false
	 */
	static comparePassword(hashedPassword, password) {
		return bcrypt.compareSync(password, hashedPassword);
	}
	/**
	 * isValidEmail helper method
	 * @param {string} email
	 * @returns {boolean} true or false
	 */
	static isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}
	/**
	 * emailAlreadyExist helper method
	 * @param {object} users
	 * @param {string} email
	 * @returns {boolean} true or false
	 */
	static emailAlreadyExist(users, email) {
		return users.find(user => user.email == email);
	}
}

export default Authentication;