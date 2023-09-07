import { useState } from "react";
import TextField from '@mui/material/TextField';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const RestaurantSearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Search Restaurants"
                variant="outlined"
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};

export default RestaurantSearchBar;
