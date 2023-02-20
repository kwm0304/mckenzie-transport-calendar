const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('events');

                return userData;
            }

            throw new AuthenticationError('Not logged in')
        }
    },
    
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
           
            if (!user) {
                throw new AuthenticationError("Incorrect credentials")
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);
            return { token, user }
        },
        addEvent: async (parent, args, context) => {
            if (context.user) {
                const event = await Event.create({ ...args, username: context.user.username });
                
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { events: events._id } },
                    { new: true }
                );
                return event;
            }

            throw new AuthenticationError('You need to be logged in!')
        }
    }
};

module.exports = resolvers;