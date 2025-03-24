import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type CalendarEvent = {
  date: string; // Format: 'YYYY-MM-DD'
  message?: string;
  color?: string;
};

type MonthCalendarProps = {
  events: CalendarEvent[];
  onDateSelect: (date: string) => void;
};

const MonthCalendar: React.FC<MonthCalendarProps> = ({ events, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay() === 0 ? 7 : startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getEventForDate = (date: string) => {
    return events.find(event => event.date === date);
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i < startDay; i++) {
      days.push(<Grid item xs={1.71} key={`empty-${i}`} />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const event = getEventForDate(date);
      const isSelected = date === selectedDate;
      days.push(
        <Grid
          item
          xs={1.71}
          key={i}
          sx={{
            textAlign: 'center',
            padding: '8px',
            border: '1px solid #ddd',
            backgroundColor: isSelected ? 'primary.light' : 'transparent',
            cursor: 'pointer',
          }}
          onClick={() => handleDateClick(date)}
        >
          <Typography variant="body2">{i}</Typography>
          {event && (
            <Box sx={{ backgroundColor: event.color || 'transparent', padding: '4px', borderRadius: '4px' }}>
              <Typography variant="caption">{event.message}</Typography>
            </Box>
          )}
        </Grid>
      );
    }
    return days;
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton onClick={prevMonth}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h6">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </Typography>
        <IconButton onClick={nextMonth}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Grid container spacing={1}>
        {daysOfWeek.map(day => (
          <Grid item xs={1.71} key={day} sx={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'primary.main', color: 'white' }}>
            {day}
          </Grid>
        ))}
        {renderDays()}
      </Grid>
    </Box>
  );
};

export default MonthCalendar;