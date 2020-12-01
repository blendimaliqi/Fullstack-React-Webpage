import Event from '../models/event.js';

export const getEventById = async (id) => Event.findById(id);

export const listEvents = async () => Event.find().populate('user', 'email');

export const createEvent = async (data) => Event.create(data);

export const updateEvent = async (id, data) =>
  Event.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeEvent = async (id) => {
  const event = await Event.findById(id);
  event.remove();
};
