import Event from '../models/event.js';
import User from '../models/user.js';

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API funksjon for å hente bruker basert på id
 * @param {User} id - til bruker som skal hentes
 */
export const getUserById = async (id) => User.findById(id);

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API funksjon for å hente bruker basert på email
 * @param {User} email - brukers email
 * @param {User} usePassword - brukers passord
 */
export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return User.findOne(email).select('+password');
  }
  return User.findOne(email);
};

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API funksjon for å lage en bruker
 * @param {User} data - basert på User modell
 */
export const createUser = async (data) => User.create(data);

export const listUserEvents = async (id) => {
  if (id) {
    const events = await Event.find({ user: id }).populate('user', 'email');
    return events;
  }
};