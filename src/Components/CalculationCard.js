import React, {useState} from 'react';
import axios from "axios";
import {MDBCard, MDBCardBody} from "mdb-react-ui-kit";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import CurrenciesObject from "./Currencies";
import { v4 as uuidv4 } from 'uuid';


function CalculationCard(props) {

    const axios = require("axios");

    const [currency1, setCurrency1] = useState("EUR");

    const [currency2, setCurrency2] = useState("USD");

    const [amount, setAmount] = useState(Number());

    const [currency2Value, setCurrency2Value] = useState(0);

    const [result, setResult] = useState(0);

    const handleChange = (event) => {
        setCurrency1(event.target.value);
    };

    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    function convertToEuro() {

        const options = {
            method: 'GET',
            url: 'https://currencyscoop.p.rapidapi.com/latest',
            params: {base: currency1},
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setResult(response.data.response.rates[currency2] * amount);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <MDBCard>
            <MDBCardBody>
                <div className="card-content">
                    {amount} {currency1} to {currency2}
                </div>
                <div className="card-content">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">From</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency1}
                            label="Currency"
                            onChange={handleChange}
                        >
                            {Object.keys(CurrenciesObject).map((key) => {
                                return <MenuItem key={uuidv4()} value={CurrenciesObject[key].code}><span
                                    className={CurrenciesObject[key].flag} style={{scale: "1.3"}}/><span style={{
                                    marginLeft: "1rem",
                                    fontFamily: "Cera Pro Bold"
                                }}>{CurrenciesObject[key].code}</span><span style={{
                                    marginLeft: "1rem",
                                    fontFamily: "Cera Pro Regular"
                                }}>{CurrenciesObject[key].name}</span></MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div className="card-content">
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-number"
                            label="Amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                </div>
                <div className="card-content">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">To</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency2}
                            label="Currency"
                            onChange={handleChange2}
                        >
                            {Object.keys(CurrenciesObject).map((key) => {
                                return <MenuItem key={uuidv4()} value={CurrenciesObject[key].code}><span
                                    className={CurrenciesObject[key].flag} style={{scale: "1.3"}}/><span style={{
                                    marginLeft: "1rem",
                                    fontFamily: "Cera Pro Bold"
                                }}>{CurrenciesObject[key].code}</span><span style={{
                                    marginLeft: "1rem",
                                    fontFamily: "Cera Pro Regular"
                                }}>{CurrenciesObject[key].name}</span></MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div className="card-content">
                    {result !== 0 ? <span>{result.toFixed(3)} {currency2}</span> : null}
                </div>
                <div className="card-content">
                    <button className="btn btn-light" style={{border: "1px solid gray"}} onClick={convertToEuro}>Convert</button>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default CalculationCard;
