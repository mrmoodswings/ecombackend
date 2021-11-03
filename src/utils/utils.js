const bcrypt = require("bcryptjs");
const APIError = require("./error");

module.exports = {
  /**
   * @async
   * @function hashPassword
   * @description Hash a plaintext password using bcryptjs
   *
   * @param {String} password - Plaintext Password
   *
   * @returns {String} Returns hashed password.
   */
  async hashPassword(password) {
    const hash = await bcrypt.hash(password, 8);
    return hash;
  },

  /**
   * @function required
   * @description Used to throw an error if Object keys are missing.
   *
   * @param {Array} properties - Array of properties / object key names.
   * @param {Object} object - Object which is to be checked.
   */
  required(properties, object = {}) {
    properties.forEach((property) => {
      if (!Object.prototype.hasOwnProperty.call(object, property)) {
        // Bad Rerquest (400)

        throw new APIError(`${property} required.`, 400);
      }
    });
  },

  /**
   * @function requireAny
   * @description Used to throw an error if no key in the list of keys
   * is found in the object.
   *
   * @param {Array} properties - Array of properties / object key names.
   * @param {Object} object - Object which is to be checked.
   *
   * @returns {String} Returns first non-null key.
   */
  requireAny(properties, object = {}) {
    // return first property that is not null
    // eslint-disable-next-line consistent-return, array-callback-return
    const match = properties.find((property) => {
      if (Object.prototype.hasOwnProperty.call(object, property)) {
        return property;
      }
    });

    if (!match) {
      const message = `Any one of ${properties.toString()} is required.`;
      throw new APIError(message, 400);
    }

    return match;
  },

  /**
   * @function generateInvoiceNumber
   * @description Create an invoice number for an order.
   *
   * @param {Object} data - Data for creating invoice number
   * @param {Number} data.storeId - Store Id
   * @param {Number} data.userId - User Id
   *
   * @returns {String} An invoice number something like this
   * AUG122019T123021S12U2.
   */
  generateInvoiceNumber(data) {
    let d = new Date();
    let date = d.toDateString();
    let time = d.toTimeString();

    // remove 3 letter day and a space
    // and convert to uppercase.
    // then remove white spaces.
    // Eg: AUG252019
    date = date.slice(4).toUpperCase().replace(/\s/g, "");

    // split time string from GMT and take first half.
    // remove trailing spaces & remove colon.
    time = time.split("GMT")[0].trim().replace(/:/g, "");

    return `${date}T${time}S${data.storeId}U${data.userId}`;
  },

  /**
   * @function generateOTP
   * @description Create an OTP string.
   *
   * @param {Number} length - Length of output string.
   */
  generateOTP(length = 6) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let chLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * chLength));
    }

    return result;
  },

  /**
   * @async
   * @function sendMail
   * @description Send emails.
   *
   * @param {String} receiver - Email address of the reciever.
   * @param {String} subject - Subject of the email.
   * @param {String} message - html message body.
   */
  async sendMail(receiver, subject, message) {
    console.log(message);
  },

  /**
   * @function getFieldName
   * @description Check if the username is email or phone number and return the type.
   *
   * @param {String} username - Email or phone number used for login.
   *
   * @returns {String} Field Name
   */
  getFieldName(username) {
    const phoneRegEx = /^[0-9]{10}$/g;
    const emailRegEx =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (phoneRegEx.test(username)) return "phone";
    if (emailRegEx.test(username)) return "email";

    throw new Error("Invalid Phone / Email", 400);
  },

  getPagination: (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  },
  getPagingData: (data, page, limit) => {
    const { count: totalItems, rows: result } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, result, totalPages, currentPage };
  },
};
