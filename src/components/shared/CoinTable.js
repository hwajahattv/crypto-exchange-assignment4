import * as React from "react";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button,
} from "@mui/material";
import DashboardCard from "./DashboardCard";
import BTH from "../../images/bitcoincash.png";
import Dash from "../../images/dash.png";
import LTC from "../../images/litecoin.png";
import MNR from "../../images/monero.png";
import NMC from "../../images/namecoin.png";
import PRC from "../../images/peercoin.png";
import WDC from "../../images/worldcoin.png";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import { transfer } from "../../redux/actions/coin-actions";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const coin = [
    {
        id: "1",
        name: "Bit Coin Cash",
        img: BTH,
        rate: "1.5",
        pbg: "#d32f2f",
    },
    {
        id: "2",
        name: "Dash Coin",
        img: Dash,
        rate: "1.5",
        pbg: "#1976d2",
    },
    {
        id: "3",
        name: "Lite Coin",
        img: LTC,
        rate: "1.5",
        pbg: "#1976d2",
    },
    {
        id: "4",
        name: "Monero",
        img: MNR,
        rate: "1.5",
        pbg: "#9c27b0",
    },
    {
        id: "5",
        name: "Namecoin",
        img: NMC,
        rate: "1.5",
        pbg: "#d32f2f",
    },
    {
        id: "6",
        name: "Peercoin",
        img: PRC,
        rate: "1.5",
        pbg: "#9c27b0",
    },
    {
        id: "7",
        name: "Worldcoin",
        img: WDC,
        rate: "1.5",
        pbg: "#ed6c02",
    },
];

const CoinTable = () => {
    const navigate = useNavigate();
    const [coinData, setCoinData] = React.useState([]);
    // const dispatch = useDispatch();

    React.useEffect(() => {
        fetchUserData();
        // console.log(coinData);
        const propertyNames = Object.keys(coinData);
        const propertyValues = Object.values(coinData);

        console.log(propertyNames, propertyValues);
    }, []);
    const fetchUserData = () => {
        // fetch(
        //     "http://api.coinlayer.com/api/live?access_key=fa1153dbf6066f75063a001241f6ece4"
        // )
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data.rates);
        //         setCoinData(data.rates);
        //     });
        const apiData = {
            success: true,
            terms: "https://coinlayer.com/terms",
            privacy: "https://coinlayer.com/privacy",
            timestamp: 1685896806,
            target: "USD",
            rates: {
                ABC: 59.99,
                ACP: 0.014931,
                ACT: 0.00107,
                "ACT*": 0.017178,
                ADA: 0.381953,
                ADCN: 0.00013,
                ADL: 0.01515,
                ADX: 0.16852,
                ADZ: 0.0023,
                AE: 0.05235,
                AGI: 0.02,
                AIB: 0.005626,
                AIDOC: 1.470905965e-5,
                AION: 0.00081,
                AIR: 0.0074,
                ALT: 0.565615,
                AMB: 0.011654,
                AMM: 0.005929,
                ANT: 2.924,
                APC: 0.0017,
                APPC: 0.001516,
                ARC: 0.0169,
                ARCT: 0.00061,
                ARDR: 0.072526,
                ARK: 0.422495,
                ARN: 0.001227,
                ASAFE2: 0.4,
                AST: 0.119751,
                ATB: 0.017,
                ATM: 1.93725,
                AURS: 0.352867,
                AVT: 1.08,
                BAR: 3.25,
                BASH: 0.0056,
                BAT: 0.21742,
                BAY: 0.0644,
                BBP: 0.0005,
                BCD: 0.12835,
                BCH: 116.628811,
                BCN: 0.000298,
                BCPT: 0.001223,
                BEE: 1.0e-6,
                BIO: 0.0008,
                BLC: 0.072132,
                BLOCK: 0.18,
                BLU: 0.00054,
                BLZ: 0.06568,
                BMC: 0.001937,
                BNB: 305.779662,
                BNT: 0.413358,
                BOST: 0.048,
                BQ: 7.775e-5,
                BQX: 2.720931,
                BRD: 0.020383,
                BRIT: 0.03,
                BT1: 0,
                BT2: 0,
                BTC: 27210.37574,
                BTCA: 0.00036,
                BTCS: 0.01201,
                BTCZ: 0.000109,
                BTG: 12.361732,
                BTLC: 9,
                BTM: 0.078282,
                "BTM*": 0.122609,
                BTQ: 0.01,
                BTS: 0.009036,
                BTX: 0.27,
                BURST: 0.017348,
                CALC: 0.0006,
                CAS: 0.007,
                CAT: 0.060875,
                CCRB: 0.08888,
                CDT: 0.026044,
                CESC: 0.0037,
                CHAT: 7.168e-5,
                CJ: 0.000898,
                CL: 0.028,
                CLD: 0.02,
                CLOAK: 10,
                "CMT*": 0.03954,
                CND: 0.001766,
                CNX: 1.996594,
                CPC: 0.0005,
                CRAVE: 0.4,
                CRC: 0.08475,
                CRE: 1.316485,
                CRW: 0.02202,
                CTO: 0.005,
                CTR: 0.001196,
                CVC: 0.084581,
                DAS: 0.937816,
                DASH: 42.942128,
                DAT: 4.350184000000001e-5,
                DATA: 0,
                DBC: 0.00367,
                DBET: 0.027656,
                DCN: 2.192e-6,
                DCR: 15.590876,
                DCT: 0.006253,
                DEEP: 0.001,
                DENT: 0.000876,
                DGB: 0.008077,
                DGD: 221.12529,
                DIM: 9.4957e-5,
                DIME: 3.0e-5,
                DMD: 0.58782,
                DNT: 0.029067,
                DOGE: 0.072708,
                DRGN: 0.00667,
                DRZ: 3,
                DSH: 252.13175,
                DTA: 2.287e-5,
                EC: 50,
                EDG: 0.007958,
                EDO: 0.61442,
                EDR: 0.00023,
                EKO: 5.709616500000001e-5,
                ELA: 1.508,
                ELF: 0.300615,
                EMC: 0.003535,
                EMGO: 0.43382,
                ENG: 0.002991,
                ENJ: 0.329289,
                EOS: 0.921916,
                ERT: 0.2054,
                ETC: 18.365214,
                ETH: 1899.998689,
                ETN: 0.002104,
                ETP: 0.017332,
                ETT: 2.9,
                EVR: 0.104931,
                EVX: 0.005401,
                FCT: 0.05241,
                FLP: 0.0058,
                FOTA: 0.0121,
                FRST: 0.78001,
                FUEL: 22.06,
                FUN: 0.005073,
                FUNC: 0.00061,
                FUTC: 0.004,
                GAME: 0.035027,
                GAS: 2.825563,
                GBYTE: 11.370293,
                GMX: 56.485,
                GNO: 116.65,
                GNT: 1.0e-8,
                GNX: 0.001905,
                GRC: 0.0067,
                GRS: 10,
                GRWI: 10000,
                GTC: 1.370325,
                GTO: 0.023926,
                GUP: 0.461425,
                GVT: 0.026013,
                GXS: 1.264574,
                HAC: 0.013594,
                HNC: 0,
                HSR: 11.256101,
                HST: 0.0027,
                HVN: 0.03529,
                ICN: 0.1452,
                ICOS: 17,
                ICX: 0.243146,
                IGNIS: 0.004894,
                ILC: 0.098703,
                INK: 0.000518,
                INS: 0.168026,
                INSN: 0.0473,
                INT: 0.002991,
                IOP: 15.455555,
                IOST: 0.009271,
                ITC: 0.000124,
                KCS: 7.8,
                KICK: 0.000324,
                KIN: 7.2875e-6,
                KLC: 0.000703,
                KMD: 0.273143,
                KNC: 0.614035,
                KRB: 6,
                LA: 0.03727,
                LEND: 1.226752,
                LEO: 3.205486,
                LINDA: 0.000271,
                LINK: 6.47877,
                LOC: 0.520093,
                LOG: 0.060174,
                LRC: 0.27525,
                LSK: 0.834847,
                LTC: 95.876069,
                LUN: 0.024198,
                LUX: 2.09e-6,
                MAID: 0.136581,
                MANA: 0.486216,
                MCAP: 0.005398,
                MCO: 2.31,
                MDA: 0.04908,
                MDS: 0.000114,
                MIOTA: 0.20672,
                MKR: 693.79275,
                MLN: 18.6185,
                MNX: 0.028649,
                MOD: 0.21969,
                MOIN: 0.033073,
                MONA: 0.3933,
                MTL: 1.1975,
                "MTN*": 0.009575,
                MTX: 0.000622,
                NAS: 0.01224,
                NAV: 0.043502,
                NBT: 0.00281,
                NDC: 0.008989,
                NEBL: 0.121807,
                NEO: 10.433244,
                NEU: 0.024194,
                NEWB: 0.002604,
                NGC: 0.070055,
                NKC: 0.045932,
                NLC2: 0.599935,
                NMC: 5.867998,
                NMR: 14.552,
                NULS: 0.234,
                NVC: 10,
                NXT: 0.002166,
                OAX: 0.2399,
                OBITS: 0.015,
                OC: 0.000482,
                OCN: 3.008e-5,
                ODN: 0.5,
                OK: 0.005438,
                OMG: 0.761447,
                OMNI: 1.3417,
                ORE: 0,
                ORME: 1.235715,
                OST: 0.000424,
                OTN: 0,
                OTX: 0.023,
                OXY: 0.0135,
                PART: 3.951477,
                PAY: 0.009751,
                PBT: 26.013423,
                PCS: 0.019961,
                PIVX: 0.224306,
                PIZZA: 0.001,
                PLBT: 20,
                PLR: 0.006494,
                POE: 1.631319e-5,
                POLY: 0.13755,
                POSW: 0.48712,
                POWR: 0.1548,
                PPC: 0.420001,
                PPT: 0.044589,
                PPY: 5.45,
                PRC: 3.0e-5,
                PRES: 0.219998,
                PRG: 1.023448,
                PRL: 0.061361,
                PRO: 0.3274,
                PURA: 0.25,
                PUT: 0,
                QASH: 0.04202,
                QAU: 0,
                QSP: 0.01218,
                QTUM: 2.671148,
                QUN: 0.008318,
                R: 0.010525,
                RBIES: 1,
                RCN: 0.001612,
                RDD: 8.0e-5,
                RDN: 0,
                "RDN*": 0.324446,
                REBL: 0.000816,
                REE: 1.0e-5,
                REP: 17.293576,
                REQ: 0.08761,
                REV: 0.00028,
                RGC: 0.001,
                RHOC: 0.178417,
                RIYA: 0.090025,
                RKC: 5,
                RLC: 1.498067,
                RPX: 0.061017,
                RUFF: 0.000233,
                SALT: 0.768708,
                SAN: 0.01669,
                SBC: 7,
                SC: 0.003199,
                SENT: 0.000659,
                SHIFT: 0,
                SIB: 5.177,
                SMART: 0.00022,
                SMLY: 6.0e-5,
                "SMT*": 0.011226,
                SNC: 0.030972,
                SNGLS: 0.000402,
                SNM: 0.379825,
                SNT: 0.023561,
                SPK: 0.0084,
                SRN: 0.001631,
                STEEM: 0.18657,
                STK: 0.307261,
                STORJ: 0.305518,
                STRAT: 0.346874,
                STU: 0.00019,
                STX: 0.6166,
                SUB: 0.00033,
                SUR: 0.01,
                SWFTC: 0.001197,
                SYS: 0.1303,
                TAAS: 10,
                TESLA: 0.019139,
                THC: 0.002257,
                THETA: 0.837764,
                THS: 0.00171,
                TIO: 0.085,
                TKN: 0,
                TKY: 0.000171,
                TNB: 0.000304,
                TNT: 0.0044,
                TOA: 0.002397,
                TRC: 6.2,
                TRIG: 0.538335,
                TRST: 0.04799,
                TRUMP: 0.055,
                TRX: 0.082115,
                UBQ: 0.02311,
                UNO: 13.4,
                UNRC: 6.0e-5,
                UQC: 8,
                USDT: 1.007573,
                UTK: 0.090391,
                UTT: 0.009029,
                VEE: 0.001631,
                VEN: 3.786835,
                VERI: 23.736235,
                VIA: 0.039695,
                VIB: 0.061048,
                VIBE: 0.001509,
                VOISE: 0.00018,
                VOX: 0.125769,
                VRS: 0.1375,
                VTC: 0.106036,
                VUC: 9.9e-5,
                WABI: 0.0014,
                WAVES: 1.756148,
                WAX: 0.05334,
                WC: 0.045,
                WGR: 2279015088.013412,
                WINGS: 0.001088,
                WLK: 0.0058,
                WOP: 0.046453,
                WPR: 0.04073,
                WRC: 0.027189,
                WTC: 0.186145,
                XAUR: 0.10301,
                XBP: 0.0027,
                XBY: 0.2889,
                XCP: 4.893957,
                XCXT: 0.095658,
                XDN: 2.96765e-5,
                XEM: 0.03342,
                XGB: 0.0015,
                XHI: 0.001325,
                XID: 0.010924,
                XLM: 0.092444,
                XMR: 149.30066,
                XNC: 0.00018,
                XRB: 24.343077,
                XRP: 0.535994,
                XTO: 0.324858,
                XTZ: 0.924029,
                XUC: 0.00107,
                XVG: 0.001933,
                XZC: 4.96985,
                YEE: 2.0e-6,
                YOC: 0.00012,
                YOYOW: 0.002175,
                ZBC: 0.012675,
                ZCL: 1.338769,
                ZEC: 32.276649,
                ZEN: 8.066413,
                ZIL: 0.023774,
                ZNY: 0.02,
                ZRX: 0.222602,
                ZSC: 5.877e-5,
                611: 0.389165,
            },
        };
        const propertyNames = Object.keys(apiData.rates);
        const propertyValues = Object.values(apiData.rates);
        let newData = [];
        propertyNames.map((el, index) => {
            newData = [
                ...newData,
                {
                    name: el,
                    rate: propertyValues[index],
                    img: coin[Math.floor(Math.random() * coin.length)].img,
                    pbg: coin[Math.floor(Math.random() * coin.length)].pbg,
                },
            ];
        });
        setCoinData(newData);
    };
    const transferCoins = () => {
        navigate("/transfer");
        // dispatch(transfer(10));
    };
    return (
        <DashboardCard title="Coin Rates">
            <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2,
                    }}
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: "#292b2c",
                            }}
                        >
                            <TableCell>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    align="center"
                                    color="white"
                                >
                                    Sr#
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    align="center"
                                    color="white"
                                >
                                    Coin
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    align="center"
                                    color="white"
                                >
                                    Rate
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    align="center"
                                    color="white"
                                >
                                    Transfer
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coinData.map((product, ind) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                            }}
                                        >
                                            {ind + 1}
                                        </Box>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={product.img}
                                                width="55px"
                                                height="55px"
                                            />{" "}
                                            {product.name}
                                        </Box>
                                    </Typography>
                                    <Divider
                                        orientation="vertical"
                                        // variant="middle"
                                        flexItem
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Chip
                                            sx={{
                                                px: "4px",
                                                backgroundColor: product.pbg,
                                                color: "#fff",
                                            }}
                                            size="large"
                                            label={`USD ${product.rate}`}
                                        ></Chip>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="success"
                                            endIcon={<SendIcon />}
                                            onClick={transferCoins}
                                        ></Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default CoinTable;
