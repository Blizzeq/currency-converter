import React, {useState} from 'react';
import axios from "axios";
import {MDBCard, MDBCardBody} from "mdb-react-ui-kit";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function CalculationCard(props) {

    const axios = require("axios");

    const [currency1, setCurrency1] = useState("AED");

    const [currency2, setCurrency2] = useState("AFN");

    const [amount, setAmount] = useState(0);

    const [currency2Value, setCurrency2Value] = useState(0);

    const [result, setResult] = useState(0);

    const handleChange = (event) => {
        setCurrency1(event.target.value);
    };

    function convertToEuro() {

        const options = {
            method: 'GET',
            url: 'https://currencyscoop.p.rapidapi.com/latest',
            params: {base: currency1},
            headers: {
                'X-RapidAPI-Key': '8bc83d50f3msh5a1408af0da2021p1ce817jsnb4969645d4d3',
                'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setResult(response.data.response.rates[currency2] * amount);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const [Currencies, setCurrencies] = useState({name: '', value: 0});

    function getCurrencies(){
        const options = {
            method: 'GET',
            url: 'https://currencyscoop.p.rapidapi.com/latest',
            headers: {
                'X-RapidAPI-Key': '8bc83d50f3msh5a1408af0da2021p1ce817jsnb4969645d4d3',
                'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setCurrencies(response.data.response.rates);

        }).catch(function (error) {
            console.error(error);
        });
    }

    function consoleLog(){
        console.log(Currencies);
    }

    return (
        <MDBCard>
            <MDBCardBody>
                <div className="card-content">
                    {amount} {currency1} to {currency2}
                </div>
                <div className="card-content">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency1}
                            label="Currency"
                            onChange={handleChange}
                        >
                            <MenuItem value={"AED"}><span className={'fi fi-ae'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AED</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>United Arab Emirates</span></MenuItem>
                            <MenuItem value={"AFN"}><span className={'fi fi-af'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AFN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Afghanistan</span></MenuItem>
                            <MenuItem value={"ALL"}><span className={'fi fi-al'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ALL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Albania</span></MenuItem>
                            <MenuItem value={"AMD"}><span className={'fi fi-am'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AMD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Armenia</span></MenuItem>
                            <MenuItem value={"ANG"}><span className={'fi fi-aw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ANG</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Netherlands Antilles</span></MenuItem>
                            <MenuItem value={"AOA"}><span className={'fi fi-ao'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AOA</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Angola</span></MenuItem>
                            <MenuItem value={"ARS"}><span className={'fi fi-ar'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ARS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Argentina</span></MenuItem>
                            <MenuItem value={"AUD"}><span className={'fi fi-au'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AUD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Australia</span></MenuItem>
                            <MenuItem value={"AWG"}><span className={'fi fi-aw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AWG</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Aruba</span></MenuItem>
                            <MenuItem value={"AZN"}><span className={'fi fi-az'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>AZN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Azerbaijan</span></MenuItem>
                            <MenuItem value={"BAM"}><span className={'fi fi-ba'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BAM</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bosnia and Herzegovina</span></MenuItem>
                            <MenuItem value={"BBD"}><span className={'fi fi-bb'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BBD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Barbados</span></MenuItem>
                            <MenuItem value={"BDT"}><span className={'fi fi-bd'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BDT</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bangladesh</span></MenuItem>
                            <MenuItem value={"BGN"}><span className={'fi fi-bg'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BGN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bulgaria</span></MenuItem>
                            <MenuItem value={"BHD"}><span className={'fi fi-bh'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BHD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bahrain</span></MenuItem>
                            <MenuItem value={"BIF"}><span className={'fi fi-bi'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BIF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Burundi</span></MenuItem>
                            <MenuItem value={"BMD"}><span className={'fi fi-bm'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BMD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bermuda</span></MenuItem>
                            <MenuItem value={"BND"}><span className={'fi fi-bn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BND</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Brunei</span></MenuItem>
                            <MenuItem value={"BOB"}><span className={'fi fi-bo'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BOB</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bolivia</span></MenuItem>
                            <MenuItem value={"BRL"}><span className={'fi fi-br'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BRL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Brazil</span></MenuItem>
                            <MenuItem value={"BSD"}><span className={'fi fi-bs'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BSD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bahamas</span></MenuItem>
                            <MenuItem value={"BTN"}><span className={'fi fi-bt'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BTN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Bhutan</span></MenuItem>
                            <MenuItem value={"BWP"}><span className={'fi fi-bw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BWP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Botswana</span></MenuItem>
                            <MenuItem value={"BYN"}><span className={'fi fi-by'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BYN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Belarus</span></MenuItem>
                            <MenuItem value={"BZD"}><span className={'fi fi-bz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>BZD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Belize</span></MenuItem>
                            <MenuItem value={"CAD"}><span className={'fi fi-ca'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CAD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Canada</span></MenuItem>
                            <MenuItem value={"CDF"}><span className={'fi fi-cd'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CDF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Democratic Republic of the Congo</span></MenuItem>
                            <MenuItem value={"CHF"}><span className={'fi fi-ch'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CHF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Switzerland</span></MenuItem>
                            <MenuItem value={"CLP"}><span className={'fi fi-cl'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CLP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Chilean Peso</span></MenuItem>
                            <MenuItem value={"CLF"}><span className={'fi fi-cl'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CLP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Unidad de Fomento</span></MenuItem>
                            <MenuItem value={"CNY"}><span className={'fi fi-cn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CNY</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>China</span></MenuItem>
                            <MenuItem value={"COP"}><span className={'fi fi-co'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>COP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Colombia</span></MenuItem>
                            <MenuItem value={"CRC"}><span className={'fi fi-cr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CRC</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Costa Rica</span></MenuItem>
                            <MenuItem value={"CUC"}><span className={'fi fi-cu'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CUC</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Cuban Convertible Peso</span></MenuItem>
                            <MenuItem value={"CUP"}><span className={'fi fi-cu'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CUP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Cuban Peso</span></MenuItem>
                            <MenuItem value={"CVE"}><span className={'fi fi-cv'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CVE</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Cape Verde</span></MenuItem>
                            <MenuItem value={"CZK"}><span className={'fi fi-cz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>CZK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Czech Republic</span></MenuItem>
                            <MenuItem value={"DJF"}><span className={'fi fi-dj'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>DJF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Djibouti</span></MenuItem>
                            <MenuItem value={"DKK"}><span className={'fi fi-dk'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>DKK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Denmark</span></MenuItem>
                            <MenuItem value={"DOP"}><span className={'fi fi-do'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>DOP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Dominican Republic</span></MenuItem>
                            <MenuItem value={"DZD"}><span className={'fi fi-dz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>DZD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Algeria</span></MenuItem>
                            <MenuItem value={"EGP"}><span className={'fi fi-eg'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>EGP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Egypt</span></MenuItem>
                            <MenuItem value={"ERN"}><span className={'fi fi-er'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ERN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Eritrea</span></MenuItem>
                            <MenuItem value={"ETB"}><span className={'fi fi-et'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ETB</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Ethiopia</span></MenuItem>
                            <MenuItem value={"EUR"}><span className={'fi fi-eu'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>EUR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Euro</span></MenuItem>
                            <MenuItem value={"FJD"}><span className={'fi fi-fj'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>FJD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Fiji</span></MenuItem>
                            <MenuItem value={"FKP"}><span className={'fi fi-fk'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>FKP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Falkland Islands</span></MenuItem>
                            <MenuItem value={"GBP"}><span className={'fi fi-gb'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GBP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>United Kingdom</span></MenuItem>
                            <MenuItem value={"GEL"}><span className={'fi fi-ge'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GEL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Georgia</span></MenuItem>
                            <MenuItem value={"GHS"}><span className={'fi fi-gh'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GHS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Ghana</span></MenuItem>
                            <MenuItem value={"GIP"}><span className={'fi fi-gi'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GIP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Gibraltar</span></MenuItem>
                            <MenuItem value={"GMD"}><span className={'fi fi-gm'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GMD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Gambia</span></MenuItem>
                            <MenuItem value={"GNF"}><span className={'fi fi-gn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GNF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Guinea</span></MenuItem>
                            <MenuItem value={"GTQ"}><span className={'fi fi-gt'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GTQ</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Guatemala</span></MenuItem>
                            <MenuItem value={"GYD"}><span className={'fi fi-gy'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>GYD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Guyana</span></MenuItem>
                            <MenuItem value={"HKD"}><span className={'fi fi-hk'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>HKD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Hong Kong</span></MenuItem>
                            <MenuItem value={"HNL"}><span className={'fi fi-hn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>HNL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Honduras</span></MenuItem>
                            <MenuItem value={"HRK"}><span className={'fi fi-hr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>HRK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Croatia</span></MenuItem>
                            <MenuItem value={"HTG"}><span className={'fi fi-ht'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>HTG</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Haiti</span></MenuItem>
                            <MenuItem value={"HUF"}><span className={'fi fi-hu'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>HUF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Hungary</span></MenuItem>
                            <MenuItem value={"IDR"}><span className={'fi fi-id'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>IDR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Indonesia</span></MenuItem>
                            <MenuItem value={"ILS"}><span className={'fi fi-il'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ILS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Israel</span></MenuItem>
                            <MenuItem value={"INR"}><span className={'fi fi-in'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>INR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>India</span></MenuItem>
                            <MenuItem value={"IQD"}><span className={'fi fi-iq'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>IQD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Iraq</span></MenuItem>
                            <MenuItem value={"IRR"}><span className={'fi fi-ir'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>IRR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Iran</span></MenuItem>
                            <MenuItem value={"ISK"}><span className={'fi fi-is'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ISK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Iceland</span></MenuItem>
                            <MenuItem value={"JMD"}><span className={'fi fi-jm'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>JMD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Jamaica</span></MenuItem>
                            <MenuItem value={"JOD"}><span className={'fi fi-jo'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>JOD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Jordan</span></MenuItem>
                            <MenuItem value={"JPY"}><span className={'fi fi-jp'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>JPY</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Japan</span></MenuItem>
                            <MenuItem value={"KES"}><span className={'fi fi-ke'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KES</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Kenya</span></MenuItem>
                            <MenuItem value={"KGS"}><span className={'fi fi-kg'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KGS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Kyrgyzstan</span></MenuItem>
                            <MenuItem value={"KHR"}><span className={'fi fi-kh'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KHR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Cambodia</span></MenuItem>
                            <MenuItem value={"KMF"}><span className={'fi fi-km'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KMF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Comoros</span></MenuItem>
                            <MenuItem value={"KPW"}><span className={'fi fi-kp'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KPW</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>North Korea</span></MenuItem>
                            <MenuItem value={"KRW"}><span className={'fi fi-kr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KRW</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>South Korea</span></MenuItem>
                            <MenuItem value={"KWD"}><span className={'fi fi-kw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KWD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Kuwait</span></MenuItem>
                            <MenuItem value={"KYD"}><span className={'fi fi-ky'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KYD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Cayman Islands</span></MenuItem>
                            <MenuItem value={"KZT"}><span className={'fi fi-kz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>KZT</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Kazakhstan</span></MenuItem>
                            <MenuItem value={"LAK"}><span className={'fi fi-la'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>LAK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Laos</span></MenuItem>
                            <MenuItem value={"LBP"}><span className={'fi fi-lb'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>LBP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Lebanon</span></MenuItem>
                            <MenuItem value={"LKR"}><span className={'fi fi-lk'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>LKR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Sri Lanka</span></MenuItem>
                            <MenuItem value={"LRD"}><span className={'fi fi-lr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>LRD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Liberia</span></MenuItem>
                            <MenuItem value={"LSL"}><span className={'fi fi-ls'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>LSL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Lesotho</span></MenuItem>
                            <MenuItem value={"LYD"}><span className={'fi fi-ly'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>LYD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Libya</span></MenuItem>
                            <MenuItem value={"MAD"}><span className={'fi fi-ma'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MAD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Morocco</span></MenuItem>
                            <MenuItem value={"MDL"}><span className={'fi fi-md'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MDL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Moldova</span></MenuItem>
                            <MenuItem value={"MGA"}><span className={'fi fi-mg'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MGA</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Madagascar</span></MenuItem>
                            <MenuItem value={"MKD"}><span className={'fi fi-mk'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MKD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Macedonia</span></MenuItem>
                            <MenuItem value={"MMK"}><span className={'fi fi-mm'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MMK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Myanmar</span></MenuItem>
                            <MenuItem value={"MNT"}><span className={'fi fi-mn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MNT</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Mongolia</span></MenuItem>
                            <MenuItem value={"MOP"}><span className={'fi fi-mo'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MOP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Macau</span></MenuItem>
                            <MenuItem value={"MRU"}><span className={'fi fi-mr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MRU</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Mauritania</span></MenuItem>
                            <MenuItem value={"MUR"}><span className={'fi fi-mu'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MUR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Mauritius</span></MenuItem>
                            <MenuItem value={"MVR"}><span className={'fi fi-mv'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MVR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Maldives</span></MenuItem>
                            <MenuItem value={"MWK"}><span className={'fi fi-mw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MWK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Malawi</span></MenuItem>
                            <MenuItem value={"MXN"}><span className={'fi fi-mx'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MXN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Mexican Peso</span></MenuItem>
                            <MenuItem value={"MXV"}><span className={'fi fi-mx'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MXV</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Mexican Unidad de Inversion</span></MenuItem>
                            <MenuItem value={"MYR"}><span className={'fi fi-my'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MYR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Malaysia</span></MenuItem>
                            <MenuItem value={"MZN"}><span className={'fi fi-mz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>MZN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Mozambique</span></MenuItem>
                            <MenuItem value={"NAD"}><span className={'fi fi-na'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>NAD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Namibia</span></MenuItem>
                            <MenuItem value={"NGN"}><span className={'fi fi-ng'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>NGN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Nigeria</span></MenuItem>
                            <MenuItem value={"NIO"}><span className={'fi fi-ni'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>NIO</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Nicaragua</span></MenuItem>
                            <MenuItem value={"NOK"}><span className={'fi fi-no'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>NOK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Norway</span></MenuItem>
                            <MenuItem value={"NPR"}><span className={'fi fi-np'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>NPR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Nepal</span></MenuItem>
                            <MenuItem value={"NZD"}><span className={'fi fi-nz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>NZD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>New Zealand</span></MenuItem>
                            <MenuItem value={"OMR"}><span className={'fi fi-om'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>OMR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Oman</span></MenuItem>
                            <MenuItem value={"PAB"}><span className={'fi fi-pa'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PAB</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Panama</span></MenuItem>
                            <MenuItem value={"PEN"}><span className={'fi fi-pe'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PEN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Peru</span></MenuItem>
                            <MenuItem value={"PGK"}><span className={'fi fi-pg'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PGK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Papua New Guinea</span></MenuItem>
                            <MenuItem value={"PHP"}><span className={'fi fi-ph'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PHP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Philippines</span></MenuItem>
                            <MenuItem value={"PKR"}><span className={'fi fi-pk'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PKR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Pakistan</span></MenuItem>
                            <MenuItem value={"PLN"}><span className={'fi fi-pl'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PLN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Poland</span></MenuItem>
                            <MenuItem value={"PYG"}><span className={'fi fi-py'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>PYG</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Paraguay</span></MenuItem>
                            <MenuItem value={"QAR"}><span className={'fi fi-qa'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>QAR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Qatar</span></MenuItem>
                            <MenuItem value={"RON"}><span className={'fi fi-ro'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>RON</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Romania</span></MenuItem>
                            <MenuItem value={"RSD"}><span className={'fi fi-rs'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>RSD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Serbia</span></MenuItem>
                            <MenuItem value={"RUB"}><span className={'fi fi-ru'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>RUB</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Russia</span></MenuItem>
                            <MenuItem value={"RWF"}><span className={'fi fi-rw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>RWF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Rwanda</span></MenuItem>
                            <MenuItem value={"SAR"}><span className={'fi fi-sa'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SAR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Saudi Arabia</span></MenuItem>
                            <MenuItem value={"SBD"}><span className={'fi fi-sb'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SBD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Solomon Islands</span></MenuItem>
                            <MenuItem value={"SCR"}><span className={'fi fi-sc'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SCR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Seychelles</span></MenuItem>
                            <MenuItem value={"SDG"}><span className={'fi fi-sd'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SDG</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Sudan</span></MenuItem>
                            <MenuItem value={"SEK"}><span className={'fi fi-se'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SEK</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Sweden</span></MenuItem>
                            <MenuItem value={"SGD"}><span className={'fi fi-sg'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SGD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Singapore</span></MenuItem>
                            <MenuItem value={"SHP"}><span className={'fi fi-sh'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SHP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Saint Helena</span></MenuItem>
                            <MenuItem value={"SLL"}><span className={'fi fi-sl'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SLL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Sierra Leone</span></MenuItem>
                            <MenuItem value={"SOS"}><span className={'fi fi-so'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SOS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Somalia</span></MenuItem>
                            <MenuItem value={"SRD"}><span className={'fi fi-sr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SRD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Suriname</span></MenuItem>
                            <MenuItem value={"STN"}><span className={'fi fi-st'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>STN</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>São Tomé and Príncipe</span></MenuItem>
                            <MenuItem value={"SVC"}><span className={'fi fi-sv'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SVC</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>El Salvador</span></MenuItem>
                            <MenuItem value={"SYP"}><span className={'fi fi-sy'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SYP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Syria</span></MenuItem>
                            <MenuItem value={"SZL"}><span className={'fi fi-sz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>SZL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Swaziland</span></MenuItem>
                            <MenuItem value={"THB"}><span className={'fi fi-th'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>THB</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Thailand</span></MenuItem>
                            <MenuItem value={"TJS"}><span className={'fi fi-tj'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TJS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Tajikistan</span></MenuItem>
                            <MenuItem value={"TMT"}><span className={'fi fi-tm'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TMT</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Turkmenistan</span></MenuItem>
                            <MenuItem value={"TND"}><span className={'fi fi-tn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TND</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Tunisia</span></MenuItem>
                            <MenuItem value={"TOP"}><span className={'fi fi-to'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TOP</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Tonga</span></MenuItem>
                            <MenuItem value={"TRY"}><span className={'fi fi-tr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TRY</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Turkey</span></MenuItem>
                            <MenuItem value={"TTD"}><span className={'fi fi-tt'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TTD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Trinidad and Tobago</span></MenuItem>
                            <MenuItem value={"TWD"}><span className={'fi fi-tw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TWD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Taiwan</span></MenuItem>
                            <MenuItem value={"TZS"}><span className={'fi fi-tz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>TZS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Tanzania</span></MenuItem>
                            <MenuItem value={"UAH"}><span className={'fi fi-ua'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>UAH</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Ukraine</span></MenuItem>
                            <MenuItem value={"UGX"}><span className={'fi fi-ug'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>UGX</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Uganda</span></MenuItem>
                            <MenuItem value={"USD"}><span className={'fi fi-us'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>USD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>United States</span></MenuItem>
                            <MenuItem value={"UYU"}><span className={'fi fi-uy'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>UYU</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Uruguay</span></MenuItem>
                            <MenuItem value={"UZS"}><span className={'fi fi-uz'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>UZS</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Uzbekistan</span></MenuItem>
                            <MenuItem value={"VES"}><span className={'fi fi-ve'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>VES</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Venezuela</span></MenuItem>
                            <MenuItem value={"VND"}><span className={'fi fi-vn'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>VND</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Vietnam</span></MenuItem>
                            <MenuItem value={"VUV"}><span className={'fi fi-vu'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>VUV</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Vanuatu</span></MenuItem>
                            <MenuItem value={"WST"}><span className={'fi fi-ws'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>WST</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Samoa</span></MenuItem>
                            <MenuItem value={"XAF"}><span className={'fi fi-cf'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XAF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Central African Republic</span></MenuItem>
                            <MenuItem value={"XAG"}><span className={'fi fi-xag'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XAG</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Silver</span></MenuItem>
                            <MenuItem value={"XAU"}><span className={'fi fi-xau'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XAU</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Gold</span></MenuItem>
                            <MenuItem value={"XCD"}><span className={'fi fi-xcd'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XCD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>East Caribbean Dollar</span></MenuItem>
                            <MenuItem value={"XDR"}><span className={'fi fi-xdr'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XDR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Special Drawing Rights</span></MenuItem>
                            <MenuItem value={"XOF"}><span className={'fi fi-cf'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XOF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>West African CFA franc</span></MenuItem>
                            <MenuItem value={"XPD"}><span className={'fi fi-xpd'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XPD</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Palladium</span></MenuItem>
                            <MenuItem value={"XPF"}><span className={'fi fi-xpf'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XPF</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>CFP franc</span></MenuItem>
                            <MenuItem value={"XPT"}><span className={'fi fi-xpt'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>XPT</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Platinum</span></MenuItem>
                            <MenuItem value={"YER"}><span className={'fi fi-ye'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>YER</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Yemen</span></MenuItem>
                            <MenuItem value={"ZAR"}><span className={'fi fi-za'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ZAR</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>South Africa</span></MenuItem>
                            <MenuItem value={"ZMW"}><span className={'fi fi-zm'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ZMW</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Zambia</span></MenuItem>
                            <MenuItem value={"ZWL"}><span className={'fi fi-zw'} style={{scale: "1.3"}}/><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Bold"}}>ZWL</span><span style={{marginLeft: "1rem", fontFamily: "Cera Pro Regular"}}>Zimbabwe</span></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="card-content">
                    <button onClick={convertToEuro}>Convert</button>
                    <button onClick={getCurrencies}>Get Currencies</button>
                    <button onClick={consoleLog}>Console Log</button>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default CalculationCard;
