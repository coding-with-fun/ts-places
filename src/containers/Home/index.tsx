import { Box, Button, Container, TextField } from "@mui/material";
import _ from "lodash";
import React, { FC, useState } from "react";

const Home: FC = () => {
    const [countryInput, setCountryInput] = useState<string>("");

    const handleSubmitCountryInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(countryInput);
        setCountryInput("");
    };

    const handleChangeCountryInput = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        let inputValue = _.get(e, "target.value");
        inputValue = _.trimStart(inputValue);
        setCountryInput(inputValue);
    };

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                onSubmit={handleSubmitCountryInput}
                sx={{
                    mt: "3rem",
                    display: "flex",
                    flexFlow: "column",
                    gap: "1rem",
                }}
            >
                <TextField
                    autoFocus
                    fullWidth
                    placeholder="Enter country"
                    value={countryInput}
                    onChange={(e) => handleChangeCountryInput(e)}
                />

                <Button
                    variant="outlined"
                    type="submit"
                    disabled={!countryInput}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
