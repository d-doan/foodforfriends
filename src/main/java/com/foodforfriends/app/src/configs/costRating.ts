import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const CostRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#30852e',
    },
    '& .MuiRating-iconHover': {
        color: '#3fab3e',
    },
});

export default CostRating;
