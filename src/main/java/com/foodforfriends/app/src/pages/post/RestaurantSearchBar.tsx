import { useState, FormEvent } from "react";
import { IconButton, TextField, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const RestaurantSearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    }

    // wizard type gymnastics
    const handleClick = () => {
        const syntheticEvent = new Event('submit', { bubbles: true });
        const formEvent = syntheticEvent as unknown as FormEvent<HTMLFormElement>;
        handleSearch(formEvent);
    }

    return (
        <Container maxWidth="xs">
            <form
                onSubmit={handleSearch}>
                <TextField
                    id="searchBar"
                    className="text"
                    value={query}
                    label="Search for restaurants"
                    size="medium"
                    variant="outlined"
                    onChange={handleInputChange}
                />
                <IconButton
                    type="submit"
                    aria-label="search"
                    size="large"
                    onClick={handleClick}>
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </form>
        </Container>
    );

};

export default RestaurantSearchBar;
