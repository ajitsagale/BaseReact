import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MonthCalendar from '../../../components/MonthCalendar';

const events = [
  { date: '2025-03-05', message: 'Event 1', color: 'lightblue' },
  { date: '2025-03-15', message: 'Event 2', color: 'lightgreen' },
  { date: '2025-03-25', message: 'Event 3', color: 'lightcoral' },
];

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <MonthCalendar events={events} onDateSelect={handleDateSelect} />
      </Box>
    </Box>
  );
};

export default CalendarPage;