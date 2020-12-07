import Mail from '../models/mail.js';

export const getMailById = async (id) => Mail.findById(id);

export const listMails = async () => Mail.find();

export const createMail = async (data) => Mail.create(data);
