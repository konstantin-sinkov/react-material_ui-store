import {TextField} from "@mui/material";

const Search = (props) => {
    const {onChange, value} = props;
    
    return (
        <TextField
            label={"search"} //виїжджаючий текст
            variant={"standard"}
            fullWidth={true}
            sx={{mb: '1.5rem'}}
            type='search'
            value={value}
            onChange={onChange}
        />
    );
};

export {Search};
