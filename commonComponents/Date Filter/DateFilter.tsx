import { Box, Typography } from '@mui/material'
import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateFilter = () => {
  return (
    <div>
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '30px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#000' }}>
              Filter Order by Date
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid #DBDBDB',
                borderRadius: '7px',
                p: '10px',
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: '16px', color: '#1A1A1A' }} />
              <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#000' }}>
                from: Nov 15, 2025       to: Nov 21, 2025
              </Typography>
            </Box>
          </Box>
        </Box>
    </div>
  )
}

export default DateFilter
