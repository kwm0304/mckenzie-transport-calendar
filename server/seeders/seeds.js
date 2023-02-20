// const faker = require('faker);
const eventSeeds = requrie('./eventSeed.json')
const db = require('../config/connection');
const { Event, User } = require('../models')

db.once('open', async () => {
    try {
        await Event.deleteMany({});
        await User.delete({});

        await User.create(userSeeds)

        for (let i = 0; i < eventSeeds.length; i++) {
            const { _id, eventUser } = await Event.create(eventSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: eventUser },
                {
                    $addToSet: {
                        events: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Done!');
    process.exit(0);
})