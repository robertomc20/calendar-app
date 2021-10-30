import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";

import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import { CalendarEvent } from "./CalendarEvent";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventClearActiveEvent, eventSetActive } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";


moment.locale('es');

const localizer = momentLocalizer(moment); 

// const events = [{
//     title: 'Cumpleanos del tio',
//     start: moment().toDate(),    // sinonimo de new Date() pero con moment
//     end: moment().add(2, 'hour').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Comprar pastel',
//     user: {
//         _id: '123',
//         name: 'Roberto'
//     }
// }]

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClickEvent = (e) => {
        dispatch(uiOpenModal());
        // console.log('onDoubleClickEvent', e);
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
        // console.log('onSelectEvent', e);
    }

    const onViewChange = (e) => {
        // console.log('onViewChange', e);
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent());
    }


    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClickEvent}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />
            
            { activeEvent &&
                <DeleteEventFab />
            }

            <CalendarModal />
        </div>
    );
};
