import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

export default function Calendar() {
    [eventsData, setEventsData] = useState(/*events*/);

    const handleSelect = ({ start, end }) => {
        console.log(start)
        console.log(end)

        const title = /* call to event form*/ '';
        if (title)
            setEventsData([
                ...eventsData,
                {
                    start, 
                }
            ])
    }
}