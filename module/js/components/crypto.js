// --------------------  - PAGE --------------------    
    var cryptoCompare = '3786e2cde9ae5f0dca5f9984bdef3491fcb799327e150e9d12385065645d524c';
    //  
    var CryptoLocalData = [
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '247, 147, 26,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "01",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "",
            mini: "0.0",// Gone7
            name: "Bitcoin",
            network: "Bitcoin",
            price: [],
            price_comma: [],
            qr: "Bitcoin",
            query: [],
            query_change: [],
            symbol: "BTC",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "3QbtEEAQrYTDbGatVCTHrswwsCNNfCYy9c"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD&api_key=${cryptoCompare}`,
            color: '18, 16, 11,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "02",
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 0.005",
            name: "Ethereum",
            network: "Ethereum (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "ETH",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '38, 161, 123,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "03",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 1",
            name: "Tether USD",
            network: "Tether USD (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "USDT",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "04",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "a minimum of 0.003",
            mini: "0.0",// Gone7
            name: "BNB Coin",
            network: "BNB Coin (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "BNB",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 51, 173,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ADA&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "07",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Cardano",
            network: "Cardano (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            minimum: "a minimum of 3.5",
            query: [],
            query_change: [],
            symbol: "ADA",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MATIC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '130, 71, 229,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=MATIC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "08",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Polygon",
            network: "Polygon",
            price: [],
            minimum: "a minimum of 3",
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "MATIC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD&api_key=${cryptoCompare}`,
            color: '249, 195, 37,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOGE&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "09",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "a minimum of 5",
            mini: "0.0",
            name: "Dogecoin",
            network: "Dogecoin (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "DOGE",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BUSD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "11",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "a minimum of 1",
            mini: "0.0",
            name: "Binance USD",
            network: "Binance USD (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "BUSD",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SHIB&tsyms=USD&api_key=${cryptoCompare}`,
            color: '200, 24, 20,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=SHIB&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "13",
            link_home: [],
            market: [],
            minimum: "a minimum of 100,000",
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Shiba Inu",
            network: "Shiba Inu (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "SHIB",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '52, 93, 157,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "14",
            link_home: [],
            market: [],
            market_change: [],
            minimum: "",
            market_change_percent: [],
            mini: "0.0",
            name: "Litecoin",
            network: "Litecoin",
            price: [],
            price_comma: [],
            qr: "Litecoin",
            query: [],
            query_change: [],
            symbol: "LTC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "MHnPvL1FqhpowP22WmihL9v4tNEsp1m9JH"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TRX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '236, 8, 41,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=TRX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "15",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "a minimum of 10",
            name: "TRON",
            network: "Tron (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "TRX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AVAX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '232, 65, 66,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=AVAX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "16",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "",
            name: "Avalanche",
            network: "Avalanche (BEP20)",
            price: [],
            price_comma: [],
            qr: "Avalanche",
            query: [],
            query_change: [],
            symbol: "AVAX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=UNI&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 0, 122,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=UNI&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "18",
            link_home: [],
            market: [],
            market_change: [],
            minimum: "",
            market_change_percent: [],
            mini: "0.0",
            name: "Uniswap",
            network: "Uniswap (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "UNI",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DASH&tsyms=USD&api_key=${cryptoCompare}`,
            color: '27, 117, 188,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=DASH&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "19",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "",
            mini: "0.0",// Gone7
            name: "Dash",
            network: "Dash (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "DASH",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "7mk5Mhew5PMRvp6VkNZW4cuEwEyvN37aPZ"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LINK&tsyms=USD&api_key=${cryptoCompare}`,
            color: '55, 91, 210,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LINK&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "20",
            link_home: [],
            market: [],
            market_change: [],
            minimum: "",
            market_change_percent: [],
            mini: "0.0",
            name: "Chainlink",
            network: "Chainlink (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "LINK",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ATOM&tsyms=USD&api_key=${cryptoCompare}`,
            color: '16, 23, 71,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "21",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "",
            name: "Cosmos",
            network: "Cosmos (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "ATOM",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTTOLD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '119, 105, 171,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTTOLD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "22",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 500,000",
            name: "BitTorrent",
            network: "BitTorrent (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "BTTOLD",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=WKD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=WKD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "23",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 20,000,000",
            name: "Wakanda Inu",
            network: "Wakanda Inu (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "WKD",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TLM&tsyms=USD&api_key=${cryptoCompare}`,
            color: '234, 203, 125,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=TLM&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "25",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "",
            name: "Alien Worlds",
            network: "Alien Worlds (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "TLM",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=C98&tsyms=USD&api_key=${cryptoCompare}`,
            color: '217, 180, 50,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=C98&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "26",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "",
            name: "Coin98",
            network: "Coin98 (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "C98",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BCH&tsyms=USD&api_key=${cryptoCompare}`,
            color: '141, 195, 81,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BCH&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "27",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "",
            name: "Bitcoin Cash",
            network: "Bitcoin Cash",
            price: [],
            price_comma: [],
            qr: "BitcoinCash",
            query: [],
            query_change: [],
            symbol: "BCH",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "32hoK9TktHxAB1VkBnLiYMRRrt4WuEj47E"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=NEAR&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=NEAR&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "34",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "",
            name: "NEAR Protocol",
            network: "NEAR Protocol (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "NEAR",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CAKE&tsyms=USD&api_key=${cryptoCompare}`,
            color: '209, 136, 79,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=CAKE&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "37",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 0.5",
            name: "PancakeSwap",
            network: "PancakeSwap (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "CAKE",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AXS&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 86, 214,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=AXS&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "53",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "a minimum of 0.1",
            name: "Axie Infinity",
            network: "Axie Infinity (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "AXS",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BAT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 80, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BAT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "55",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "",
            name: "Basic Attention Token",
            network: "Basic Attention Token (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "BAT",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XPR&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 137, 193,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=XPR&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "57",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 1",
            name: "Ripple",
            network: "Ripple (BEP20)",
            price: [],
            price_comma: [],
            qr: "Bep20",
            query: [],
            query_change: [],
            symbol: "XPR",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x473ebDeFA9CD9dDCbe377a4f4A25535aCC6641Dd"// Gone5
        },
    ];
    // -------------------- 
//  -------------------- -------------------- -------------------- 




// --------------------  - PAGE --------------------         
    //  
    var TokenPage = 0;
    function SendPage(element)  {
        TokenPage = element.dataset.changeId;
        HomeToToken();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 





// --------------------  - PAGE --------------------         
    // 
    var hmepgDisplayToggle = [];
    
    function openToggle(open) {
        hmepgDisplayToggle.push(open);
    }
    function closeToggle(close) {
        var index = hmepgDisplayToggle.indexOf(close);
        hmepgDisplayToggle.splice(index, 1);
    }
    function hmepgImg(){
        var element = document.getElementById("hmepg-display-background");
        if (hmepgDisplayToggle.length != 0){
            element.style.display = "none";
        }
        else{
            element.style.display = "flex";
        }
    }

    function ToggleDisplay(element)  {
        var empId = element.dataset.employeeId;
        //check if the number is even
        if(hmepgDisplayToggle.includes(empId)) {
            closeToggle(empId);
        }
        // if the number is odd
        else {
            openToggle(empId);
        };

        let hmepgDisplay = ``;
        for (let i = 0; i < hmepgDisplayToggle.length; i++) {
            hmepgDisplay += `
                <!-- Token container -->
                <div class="token-main-wrap" onclick="hmepgchangeIndex(this)" data-hmepage-id="${ hmepgDisplayToggle.at(i) }">
                    <!-- Token image container -->
                    <div class="hmepg-token-img-wrap">
                        <img src="img/token/${ CryptoLocalData[hmepgDisplayToggle.at(i)].img }.png" class="img-fluid">
                    </div>
                    
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap cursor">
                        <div class="hmepg-main-token-con hmepg-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name line-height one-line">${ CryptoLocalData[hmepgDisplayToggle.at(i)].name }</span>
                                <span class="line-height">
                                    <span class="hmepg-token-price">$${ CryptoLocalData[hmepgDisplayToggle.at(i)].price_comma.slice(-1)[0] }</span>
                                    <span class="hmepg-token-percent">${ CryptoLocalData[hmepgDisplayToggle.at(i)].query.slice(-1)[0] }%</span>
                                </span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con one-line">
                                0 ${ CryptoLocalData[hmepgDisplayToggle.at(i)].symbol }
                            </div>
                        </div>
                        
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>
                    </div>
                </div>
            `
            
        }
        document.querySelector("hmepgloopscript").innerHTML = `
            ${hmepgDisplay}
        `;


        hmepgImg()
    };
    // -------------------- 
//  -------------------- -------------------- --------------------  

    
    


// --------------------  - PAGE --------------------         
    //  
    function hmepgchangeIndex(element) {
        TokenPage = Number(element.dataset.hmepageId);
        HomeToToken();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

    
    


// --------------------  - PAGE --------------------         
    //  
    function SendToken(element)  {
        TokenPage = element.dataset.sendId;
        HomeToSend();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

    
    


// --------------------  - PAGE --------------------         
    //  
    function ReceiveToken(element)  {
        TokenPage = element.dataset.receiveId;
        HomeToReceive();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

    
    


// --------------------  - PAGE --------------------         
    //  
    var convertChoice = 1;
    var swapPage = 0;
    var from = 0;
    var to = 3;
    function From(){
        convertChoice = 1;
        document.getElementById("swap-absolute").style.left = "0.25em";
        document.getElementById("swap-absolute").style.right = "auto";
        ConvertToConvert();
    };
    function To(){
        convertChoice = 2;
        document.getElementById("swap-absolute").style.left = "auto";
        document.getElementById("swap-absolute").style.right = "0.25em";
        ConvertToConvert();
    };
    function convertSwapToken(index)  {
        swapPage = index.dataset.swapId;
        console.log(swapPage);
        if (convertChoice === 1) {
            from = swapPage;
            document.getElementById("convert-from-token-txt").innerHTML = `
                <div class="convertselect-token-img">
                    <img src="img/token/${ CryptoLocalData[from].img }.png" class="img-fluid page-refresh">
                </div>
                <span  class="convertselect-token-txt">${ CryptoLocalData[from].symbol }</span>
            `;
            document.getElementById("red").innerHTML = `
                Minimum Amount: ${ CryptoLocalData[from].mini } ${ CryptoLocalData[from].symbol }
            `;
            document.getElementById("convert-from-img").innerHTML = `
                <img src="img/token/${ CryptoLocalData[from].img }.png" class="img-fluid page-refresh">
            `;
            document.getElementById("convert-from-selectbtn").innerHTML = `
                ${ CryptoLocalData[from].symbol }
            `;
            document.getElementById("convert-available-txt").innerHTML = `
                Available Balance: ${ CryptoLocalData[from].balance } ${ CryptoLocalData[from].symbol }
            `;
            document.getElementById("convert-form-bottom").innerHTML = `
                1 ${ CryptoLocalData[from].symbol } <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${(CryptoLocalData[from].price.slice(-1)[0] / CryptoLocalData[to].price.slice(-1)[0]).toFixed(5)}</span> ${ CryptoLocalData[to].symbol }
            `;
            document.getElementById("convert-convert-btn-id").innerHTML = `
                Convert ${ CryptoLocalData[from].symbol } to ${ CryptoLocalData[to].symbol }
            `;
            HomeToConvert();
        } else {
            to = swapPage;
            document.getElementById("convert-to-token-txt").innerHTML = `
                <div class="convertselect-token-img">
                    <img src="img/token/${ CryptoLocalData[to].img }.png" class="img-fluid page-refresh">
                </div>
                <span class="convertselect-token-txt">${ CryptoLocalData[to].symbol }</span>
            `;
            document.getElementById("convert-to-img").innerHTML = `
                <img src="img/token/${ CryptoLocalData[to].img }.png" class="img-fluid page-refresh">
            `;
            document.getElementById("convert-to-selectbtn").innerHTML = `
                ${ CryptoLocalData[to].symbol }
            `;
            document.getElementById("convert-form-bottom").innerHTML = `
                1 ${ CryptoLocalData[from].symbol } <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${(CryptoLocalData[from].price.slice(-1)[0] / CryptoLocalData[to].price.slice(-1)[0]).toFixed(5)}</span> ${ CryptoLocalData[to].symbol }
            `;
            document.getElementById("convert-convert-btn-id").innerHTML = `
                Convert ${ CryptoLocalData[from].symbol } to ${ CryptoLocalData[to].symbol }
            `;
            HomeToConvert();
        };
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

   

// --------------------  - PAGE --------------------         
    //  
    function addNum(v) {
        document.getElementById("from-input").value += v;
        var final = Number(document.getElementById("from-input").value) * (Number(CryptoLocalData[from].price) / Number(CryptoLocalData[to].price));
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = final.toFixed(5);
    };
    function clearNum() {
        document.getElementById("from-input").value = document.getElementById("from-input").value.substr(0,document.getElementById("from-input").value.length-1);
        var final = Number(document.getElementById("from-input").value) * (Number(CryptoLocalData[from].price) / Number(CryptoLocalData[to].price));
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = final.toFixed(5);
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------         
    //  
    class BottomNav extends HTMLElement{
        connectedCallback() {
            this.innerHTML = `
                <!-- BOTTOM NAVIGATION MENU STRUCTURE -->
                <div class="bottom-nav-wrap">
                    <div class="container">
                        <div class="row">
                            <!-- Home --> 
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="homeNav()">
                                    <div class="bottom-nav-btn-img" id="bottom-nav-left">
                                        <img src="img/home.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <!-- Setting -->
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="setNav()">
                                    <div class="bottom-nav-btn-img" id="bottom-nav-right">
                                        <img src="img/settings.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div
                    </div>
                </div>
                <!--  -------------------- -->
            `;
        }
    }
    
    customElements.define("bottom-nav-page", BottomNav);
     
    //   
    function homeNav() {
        MenuToHome();
        document.getElementById("bottom-nav-left").style.background = "#f3ba2f39";
        document.getElementById("bottom-nav-right").style.background = "transparent";
    }  
    function setNav() {
        HomeToSettings();
        document.getElementById("bottom-nav-left").style.background = "transparent";
        document.getElementById("bottom-nav-right").style.background = "#f3ba2f39";
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------         
    //  
    function ReceiveChanger() {
        document.getElementById("receive-header-txt").innerHTML = `
            Receive ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("receive-header-img").innerHTML = `
            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
        `;
        document.getElementById("receive-wallet-address-un").innerHTML = `
            ${ CryptoLocalData[TokenPage].name }
        `;
        document.getElementById("receive-qr-code-v").innerHTML = `
            <img src="img/qrimg/${ CryptoLocalData[TokenPage].qr }.png" class="img-fluid">
        `;
        document.getElementById("receive-wallet-address").innerHTML = `
            ${ CryptoLocalData[TokenPage].wallet }
        `;
        document.getElementById("receive-network").innerHTML = `
            Token: ${ CryptoLocalData[TokenPage].network }
        `;
        document.getElementById("receive-send-txt").innerHTML = `
            Go to Send ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("receive-note-2").innerHTML = `
            Send only <label style="color: rgb(166, 50, 50);">${ CryptoLocalData[TokenPage].minimum }</label> ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol }) to this Address.<br>
            Failure to do so, may result in permanent loss!
        `;
    }
    // -------------------- 

    //  
    function tokenmainChanger() {
        document.getElementById("token-ccc-header-txt").innerHTML = `
            ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol })
        `;
        document.getElementById("token-ccc-price-txt").innerHTML = `
            $${ CryptoLocalData[TokenPage].price_comma }
        `;
        document.getElementById("token-ccc-rate-txt").innerHTML = `
            ${ CryptoLocalData[TokenPage].query }%
        `;
        document.getElementById("token-ccc-logo-img").innerHTML = `
            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid page-refresh">
        `;
        document.getElementById("token-ccc-exchange-rate").innerHTML = `
            ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol } ≈ $ <label>0.00</label>
        `;
        document.getElementById("token-ccc-transfer-con").innerHTML = `
            <span class="token-transfer">In: </span>0.00000 ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("token-vvv-transfer-con").innerHTML = `
            <span class="token-transfer">Out: </span>0.00000 ${ CryptoLocalData[TokenPage].symbol }
        `;
    }
    // -------------------- 

    //  
    function sendmainChanger() {
        document.getElementById("send-sss-header-txt").innerHTML = `
            Send ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("send-sss-header-img").innerHTML = `
            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
        `;
        document.getElementById("send-vvv-input-absolute").innerHTML = `
            ${ CryptoLocalData[TokenPage].name } Address
        `;
        document.getElementById("send-sss-amount-div").innerHTML = `
        ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("send-zzz-input-absolute").innerHTML = `
            Send Amount (${ CryptoLocalData[TokenPage].symbol })
        `;
        document.getElementById("send-zzz-xxx-ccc").innerHTML = `
            <span style="padding-right: 0.5em;">${ CryptoLocalData[TokenPage].symbol } Balance: </span> ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("send-zzz-convert-lg-txt").innerHTML = `
            Total≈ <div id="total-token" class="one-line">0.0</div> ${ CryptoLocalData[TokenPage].symbol }/<div id="total-curr" class="one-line">0.0</div> USD
        `;
        document.getElementById("receive-send-zzz-txt").innerHTML = `
            Go to Receive ${ CryptoLocalData[TokenPage].symbol }
        `;
    }
    // -------------------- 

    
    function SendChanger() {
        document.getElementById("receive-network").innerHTML = `
            NETWORK: ${ CryptoLocalData[TokenPage].network }
        `;
        document.getElementById("receive-note-2").innerHTML = `
            Send only ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol }) to the Network "${ CryptoLocalData[TokenPage].network }".<br>
            Failure to do so, may result in permanent loss!
        `;
    };
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------         
    //  
    function copyTextTokenV() {
        var $copyText = document.getElementById("receive-wallet-address").innerText;
        var button = document.getElementById("token-page-copy");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="img/check-mark.png" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
            button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    function copyTextTokenUn() {
        var $copyText = document.getElementById("receive-wallet-address-un").innerText;
        var button = document.getElementById("token-page-copy");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="img/check-mark.png" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
            button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    function copyTokenOption() {
        if (isVerify === true) {
            copyTextTokenV();
        } else{
            copyTextTokenUn();
        }
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 




// --------------------  - PAGE --------------------         
    //  
    function tabUp(){
        document.getElementById("tab-up").style.background = "#f3ba2f39";
        document.getElementById("tab-down").style.background = "transparent";
        MenuToHome();
    }
    function tabDown() {
        document.getElementById("tab-up").style.background = "transparent";
        document.getElementById("tab-down").style.background = "#f3ba2f39";
        HomeToSettings();
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE -------------------- 
    //  
    function resUp(){
        document.getElementById("res-up").style.background = "#f3ba2f39";
        document.getElementById("res-down").style.background = "transparent";
        MenuToHome();
    }
    function resDown() {
        document.getElementById("res-up").style.background = "transparent";
        document.getElementById("res-down").style.background = "#f3ba2f39";
        HomeToSettings();
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 










// --------------------  - PAGE -------------------- 
    // Bitcoin
    fetch(CryptoLocalData[0].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[0].price_comma.push(Number(response.RAW.BTC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[0].price.push(response.RAW.BTC.USD.PRICE.toFixed(2));
            CryptoLocalData[0].query_change.push(Number(response.RAW.BTC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[0].query.push(Number(response.RAW.BTC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[0].cap.push(Number(response.RAW.BTC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[0].market.push(Number(response.RAW.BTC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[0].volume.push(Number(response.RAW.BTC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[0].market_change.push(Number(response.RAW.BTC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[0].market_change_percent.push(Number(response.RAW.BTC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[0].total_supply.push(Number(response.RAW.BTC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[0].circle_supply.push(Number(response.RAW.BTC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Ethereum
    fetch(CryptoLocalData[1].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[1].price_comma.push(Number(response.RAW.ETH.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[1].price.push(response.RAW.ETH.USD.PRICE.toFixed(2));
            CryptoLocalData[1].query_change.push(Number(response.RAW.ETH.USD.CHANGE24HOUR.toFixed(2))).toLocaleString();
            CryptoLocalData[1].query.push(Number(response.RAW.ETH.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[1].cap.push(Number(response.RAW.ETH.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[1].market.push(Number(response.RAW.ETH.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[1].volume.push(Number(response.RAW.ETH.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[1].market_change.push(Number(response.RAW.ETH.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[1].market_change_percent.push(Number(response.RAW.ETH.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[1].total_supply.push(Number(response.RAW.ETH.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[1].circle_supply.push(Number(response.RAW.ETH.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tether
    fetch(CryptoLocalData[2].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[2].price_comma.push(Number(response.RAW.USDT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[2].price.push(response.RAW.USDT.USD.PRICE.toFixed(2));
            CryptoLocalData[2].query_change.push(Number(response.RAW.USDT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[2].query.push(Number(response.RAW.USDT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[2].cap.push(Number(response.RAW.USDT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market.push(Number(response.RAW.USDT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[2].volume.push(Number(response.RAW.USDT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market_change.push(Number(response.RAW.USDT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market_change_percent.push(Number(response.RAW.USDT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].total_supply.push(Number(response.RAW.USDT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].circle_supply.push(Number(response.RAW.USDT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // BNB
    fetch(CryptoLocalData[3].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[3].price_comma.push(Number(response.RAW.BNB.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[3].price.push(response.RAW.BNB.USD.PRICE.toFixed(2));
            CryptoLocalData[3].query_change.push(Number(response.RAW.BNB.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[3].query.push(Number(response.RAW.BNB.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[3].cap.push(Number(response.RAW.BNB.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market.push(Number(response.RAW.BNB.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[3].volume.push(Number(response.RAW.BNB.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market_change.push(Number(response.RAW.BNB.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market_change_percent.push(Number(response.RAW.BNB.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].total_supply.push(Number(response.RAW.BNB.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].circle_supply.push(Number(response.RAW.BNB.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------  

    // Cardano
    fetch(CryptoLocalData[4].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[4].price_comma.push(Number(response.RAW.ADA.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[4].price.push(response.RAW.ADA.USD.PRICE.toFixed(2));
            CryptoLocalData[4].query_change.push(Number(response.RAW.ADA.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[4].query.push(Number(response.RAW.ADA.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[4].cap.push(Number(response.RAW.ADA.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market.push(Number(response.RAW.ADA.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[4].volume.push(Number(response.RAW.ADA.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market_change.push(Number(response.RAW.ADA.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market_change_percent.push(Number(response.RAW.ADA.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].total_supply.push(Number(response.RAW.ADA.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].circle_supply.push(Number(response.RAW.ADA.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------
    
    // Polygon
    fetch(CryptoLocalData[5].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[5].price_comma.push(Number(response.RAW.MATIC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[5].price.push(response.RAW.MATIC.USD.PRICE.toFixed(2));
            CryptoLocalData[5].query_change.push(Number(response.RAW.MATIC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[5].query.push(Number(response.RAW.MATIC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[5].cap.push(Number(response.RAW.MATIC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market.push(Number(response.RAW.MATIC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[5].volume.push(Number(response.RAW.MATIC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market_change.push(Number(response.RAW.MATIC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market_change_percent.push(Number(response.RAW.MATIC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].total_supply.push(Number(response.RAW.MATIC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].circle_supply.push(Number(response.RAW.MATIC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 


    // Dogecoin
    fetch(CryptoLocalData[6].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[6].price_comma.push(Number(response.RAW.DOGE.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[6].price.push(response.RAW.DOGE.USD.PRICE.toFixed(2));
            CryptoLocalData[6].query_change.push(Number(response.RAW.DOGE.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[6].query.push(Number(response.RAW.DOGE.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[6].cap.push(Number(response.RAW.DOGE.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market.push(Number(response.RAW.DOGE.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[6].volume.push(Number(response.RAW.DOGE.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market_change.push(Number(response.RAW.DOGE.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market_change_percent.push(Number(response.RAW.DOGE.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].total_supply.push(Number(response.RAW.DOGE.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].circle_supply.push(Number(response.RAW.DOGE.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Binance USD
    fetch(CryptoLocalData[7].code)
    .then(response => response.json())
    .then(response => {
        CryptoLocalData[7].price_comma.push(Number(response.RAW.BUSD.USD.PRICE.toFixed(2)).toLocaleString());
        CryptoLocalData[7].price.push(response.RAW.BUSD.USD.PRICE.toFixed(2));
        CryptoLocalData[7].query_change.push(Number(response.RAW.BUSD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
        CryptoLocalData[7].query.push(Number(response.RAW.BUSD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
        CryptoLocalData[7].cap.push(Number(response.RAW.BUSD.USD.HIGHDAY.toFixed(2)).toLocaleString());
        CryptoLocalData[7].market.push(Number(response.RAW.BUSD.USD.MKTCAP.toFixed(2)).toLocaleString());
        CryptoLocalData[7].volume.push(Number(response.RAW.BUSD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
        CryptoLocalData[7].market_change.push(Number(response.RAW.BUSD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
        CryptoLocalData[7].market_change_percent.push(Number(response.RAW.BUSD.USD.LOWDAY.toFixed(2)).toLocaleString());
        CryptoLocalData[7].total_supply.push(Number(response.RAW.BUSD.USD.SUPPLY.toFixed(2)).toLocaleString());
        CryptoLocalData[7].circle_supply.push(Number(response.RAW.BUSD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
    })
    .catch(err => console.error(err));
// --------------------

    // Shiba Inu
    fetch(CryptoLocalData[8].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[8].price_comma.push(Number(response.RAW.SHIB.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[8].price.push(response.RAW.SHIB.USD.PRICE.toFixed(2));
            CryptoLocalData[8].query_change.push(Number(response.RAW.SHIB.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[8].query.push(Number(response.RAW.SHIB.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[8].cap.push(Number(response.RAW.SHIB.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market.push(Number(response.RAW.SHIB.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[8].volume.push(Number(response.RAW.SHIB.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market_change.push(Number(response.RAW.SHIB.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market_change_percent.push(Number(response.RAW.SHIB.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].total_supply.push(Number(response.RAW.SHIB.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].circle_supply.push(Number(response.RAW.SHIB.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Litecoin
    fetch(CryptoLocalData[9].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[9].price_comma.push(Number(response.RAW.LTC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[9].price.push(response.RAW.LTC.USD.PRICE.toFixed(2));
            CryptoLocalData[9].query_change.push(Number(response.RAW.LTC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[9].query.push(Number(response.RAW.LTC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[9].cap.push(Number(response.RAW.LTC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market.push(Number(response.RAW.LTC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[9].volume.push(Number(response.RAW.LTC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market_change.push(Number(response.RAW.LTC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market_change_percent.push(Number(response.RAW.LTC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].total_supply.push(Number(response.RAW.LTC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].circle_supply.push(Number(response.RAW.LTC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tron
    fetch(CryptoLocalData[10].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[10].price_comma.push(Number(response.RAW.TRX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[10].price.push(response.RAW.TRX.USD.PRICE.toFixed(2));
            CryptoLocalData[10].query_change.push(Number(response.RAW.TRX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[10].query.push(Number(response.RAW.TRX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[10].cap.push(Number(response.RAW.TRX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market.push(Number(response.RAW.TRX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[10].volume.push(Number(response.RAW.TRX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market_change.push(Number(response.RAW.TRX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market_change_percent.push(Number(response.RAW.TRX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].total_supply.push(Number(response.RAW.TRX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].circle_supply.push(Number(response.RAW.TRX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Avalanche
    fetch(CryptoLocalData[11].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[11].price_comma.push(Number(response.RAW.AVAX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[11].price.push(response.RAW.AVAX.USD.PRICE.toFixed(2));
            CryptoLocalData[11].query_change.push(Number(response.RAW.AVAX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[11].query.push(Number(response.RAW.AVAX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[11].cap.push(Number(response.RAW.AVAX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market.push(Number(response.RAW.AVAX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[11].volume.push(Number(response.RAW.AVAX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market_change.push(Number(response.RAW.AVAX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market_change_percent.push(Number(response.RAW.AVAX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].total_supply.push(Number(response.RAW.AVAX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].circle_supply.push(Number(response.RAW.AVAX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Uniswap
    fetch(CryptoLocalData[12].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[12].price_comma.push(Number(response.RAW.UNI.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[12].price.push(response.RAW.UNI.USD.PRICE.toFixed(2));
            CryptoLocalData[12].query_change.push(Number(response.RAW.UNI.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[12].query.push(Number(response.RAW.UNI.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[12].cap.push(Number(response.RAW.UNI.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market.push(Number(response.RAW.UNI.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[12].volume.push(Number(response.RAW.UNI.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market_change.push(Number(response.RAW.UNI.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market_change_percent.push(Number(response.RAW.UNI.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].total_supply.push(Number(response.RAW.UNI.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].circle_supply.push(Number(response.RAW.UNI.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------

    // Dash
    fetch(CryptoLocalData[13].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[13].price_comma.push(Number(response.RAW.DASH.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[13].price.push(response.RAW.DASH.USD.PRICE.toFixed(2));
            CryptoLocalData[13].query_change.push(Number(response.RAW.DASH.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[13].query.push(Number(response.RAW.DASH.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[13].cap.push(Number(response.RAW.DASH.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[13].market.push(Number(response.RAW.DASH.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[13].volume.push(Number(response.RAW.DASH.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[13].market_change.push(Number(response.RAW.DASH.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[13].market_change_percent.push(Number(response.RAW.DASH.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[13].total_supply.push(Number(response.RAW.DASH.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[13].circle_supply.push(Number(response.RAW.DASH.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Chainlink
    fetch(CryptoLocalData[14].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[14].price_comma.push(Number(response.RAW.LINK.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[14].price.push(response.RAW.LINK.USD.PRICE.toFixed(2));
            CryptoLocalData[14].query_change.push(Number(response.RAW.LINK.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[14].query.push(Number(response.RAW.LINK.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[14].cap.push(Number(response.RAW.LINK.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[14].market.push(Number(response.RAW.LINK.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[14].volume.push(Number(response.RAW.LINK.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[14].market_change.push(Number(response.RAW.LINK.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[14].market_change_percent.push(Number(response.RAW.LINK.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[14].total_supply.push(Number(response.RAW.LINK.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[14].circle_supply.push(Number(response.RAW.LINK.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Cosmos
    fetch(CryptoLocalData[15].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[15].price_comma.push(Number(response.RAW.ATOM.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[15].price.push(response.RAW.ATOM.USD.PRICE.toFixed(2));
            CryptoLocalData[15].query_change.push(Number(response.RAW.ATOM.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[15].query.push(Number(response.RAW.ATOM.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[15].cap.push(Number(response.RAW.ATOM.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[15].market.push(Number(response.RAW.ATOM.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[15].volume.push(Number(response.RAW.ATOM.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[15].market_change.push(Number(response.RAW.ATOM.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[15].market_change_percent.push(Number(response.RAW.ATOM.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[15].total_supply.push(Number(response.RAW.ATOM.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[15].circle_supply.push(Number(response.RAW.ATOM.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // BitTorrent
    fetch(CryptoLocalData[16].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[16].price_comma.push(Number(response.RAW.BTTOLD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[16].price.push(response.RAW.BTTOLD.USD.PRICE.toFixed(2));
            CryptoLocalData[16].query_change.push(Number(response.RAW.BTTOLD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[16].query.push(Number(response.RAW.BTTOLD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[16].cap.push(Number(response.RAW.BTTOLD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[16].market.push(Number(response.RAW.BTTOLD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[16].volume.push(Number(response.RAW.BTTOLD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[16].market_change.push(Number(response.RAW.BTTOLD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[16].market_change_percent.push(Number(response.RAW.BTTOLD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[16].total_supply.push(Number(response.RAW.BTTOLD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[16].circle_supply.push(Number(response.RAW.BTTOLD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Wakanda Inu
    fetch(CryptoLocalData[17].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[17].price_comma.push(Number(response.RAW.WKD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[17].price.push(response.RAW.WKD.USD.PRICE.toFixed(2));
            CryptoLocalData[17].query_change.push(Number(response.RAW.WKD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[17].query.push(Number(response.RAW.WKD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[17].cap.push(Number(response.RAW.WKD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[17].market.push(Number(response.RAW.WKD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[17].volume.push(Number(response.RAW.WKD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[17].market_change.push(Number(response.RAW.WKD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[17].market_change_percent.push(Number(response.RAW.WKD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[17].total_supply.push(Number(response.RAW.WKD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[17].circle_supply.push(Number(response.RAW.WKD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Alien Worlds
    fetch(CryptoLocalData[18].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[18].price_comma.push(Number(response.RAW.TLM.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[18].price.push(response.RAW.TLM.USD.PRICE.toFixed(2));
            CryptoLocalData[18].query_change.push(Number(response.RAW.TLM.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[18].query.push(Number(response.RAW.TLM.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[18].cap.push(Number(response.RAW.TLM.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[18].market.push(Number(response.RAW.TLM.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[18].volume.push(Number(response.RAW.TLM.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[18].market_change.push(Number(response.RAW.TLM.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[18].market_change_percent.push(Number(response.RAW.TLM.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[18].total_supply.push(Number(response.RAW.TLM.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[18].circle_supply.push(Number(response.RAW.TLM.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Coins98
    fetch(CryptoLocalData[19].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[19].price_comma.push(Number(response.RAW.C98.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[19].price.push(response.RAW.C98.USD.PRICE.toFixed(2));
            CryptoLocalData[19].query_change.push(Number(response.RAW.C98.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[19].query.push(Number(response.RAW.C98.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[19].cap.push(Number(response.RAW.C98.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[19].market.push(Number(response.RAW.C98.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[19].volume.push(Number(response.RAW.C98.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[19].market_change.push(Number(response.RAW.C98.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[19].market_change_percent.push(Number(response.RAW.C98.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[19].total_supply.push(Number(response.RAW.C98.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[19].circle_supply.push(Number(response.RAW.C98.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Bitcoin Cash
    fetch(CryptoLocalData[20].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[20].price_comma.push(Number(response.RAW.BCH.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[20].price.push(response.RAW.BCH.USD.PRICE.toFixed(2));
            CryptoLocalData[20].query_change.push(Number(response.RAW.BCH.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[20].query.push(Number(response.RAW.BCH.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[20].cap.push(Number(response.RAW.BCH.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[20].market.push(Number(response.RAW.BCH.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[20].volume.push(Number(response.RAW.BCH.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[20].market_change.push(Number(response.RAW.BCH.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[20].market_change_percent.push(Number(response.RAW.BCH.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[20].total_supply.push(Number(response.RAW.BCH.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[20].circle_supply.push(Number(response.RAW.BCH.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Near Protocol
    fetch(CryptoLocalData[21].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[21].price_comma.push(Number(response.RAW.NEAR.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[21].price.push(response.RAW.NEAR.USD.PRICE.toFixed(2));
            CryptoLocalData[21].query_change.push(Number(response.RAW.NEAR.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[21].query.push(Number(response.RAW.NEAR.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[21].cap.push(Number(response.RAW.NEAR.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[21].market.push(Number(response.RAW.NEAR.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[21].volume.push(Number(response.RAW.NEAR.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[21].market_change.push(Number(response.RAW.NEAR.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[21].market_change_percent.push(Number(response.RAW.NEAR.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[21].total_supply.push(Number(response.RAW.NEAR.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[21].circle_supply.push(Number(response.RAW.NEAR.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Pancake Swap
    fetch(CryptoLocalData[22].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[22].price_comma.push(Number(response.RAW.CAKE.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[22].price.push(response.RAW.CAKE.USD.PRICE.toFixed(2));
            CryptoLocalData[22].query_change.push(Number(response.RAW.CAKE.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[22].query.push(Number(response.RAW.CAKE.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[22].cap.push(Number(response.RAW.CAKE.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[22].market.push(Number(response.RAW.CAKE.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[22].volume.push(Number(response.RAW.CAKE.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[22].market_change.push(Number(response.RAW.CAKE.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[22].market_change_percent.push(Number(response.RAW.CAKE.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[22].total_supply.push(Number(response.RAW.CAKE.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[22].circle_supply.push(Number(response.RAW.CAKE.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Axie Infinity
    fetch(CryptoLocalData[23].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[23].price_comma.push(Number(response.RAW.AXS.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[23].price.push(response.RAW.AXS.USD.PRICE.toFixed(2));
            CryptoLocalData[23].query_change.push(Number(response.RAW.AXS.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[23].query.push(Number(response.RAW.AXS.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[23].cap.push(Number(response.RAW.AXS.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[23].market.push(Number(response.RAW.AXS.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[23].volume.push(Number(response.RAW.AXS.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[23].market_change.push(Number(response.RAW.AXS.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[23].market_change_percent.push(Number(response.RAW.AXS.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[23].total_supply.push(Number(response.RAW.AXS.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[23].circle_supply.push(Number(response.RAW.AXS.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Basic Attention Token
    fetch(CryptoLocalData[24].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[24].price_comma.push(Number(response.RAW.BAT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[24].price.push(response.RAW.BAT.USD.PRICE.toFixed(2));
            CryptoLocalData[24].query_change.push(Number(response.RAW.BAT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[24].query.push(Number(response.RAW.BAT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[24].cap.push(Number(response.RAW.BAT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[24].market.push(Number(response.RAW.BAT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[24].volume.push(Number(response.RAW.BAT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[24].market_change.push(Number(response.RAW.BAT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[24].market_change_percent.push(Number(response.RAW.BAT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[24].total_supply.push(Number(response.RAW.BAT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[24].circle_supply.push(Number(response.RAW.BAT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Ripple
    fetch(CryptoLocalData[25].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[25].price_comma.push(Number(response.RAW.XPR.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[25].price.push(response.RAW.XPR.USD.PRICE.toFixed(2));
            CryptoLocalData[25].query_change.push(Number(response.RAW.XPR.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[25].query.push(Number(response.RAW.XPR.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[25].cap.push(Number(response.RAW.XPR.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[25].market.push(Number(response.RAW.XPR.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[25].volume.push(Number(response.RAW.XPR.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[25].market_change.push(Number(response.RAW.XPR.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[25].market_change_percent.push(Number(response.RAW.XPR.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[25].total_supply.push(Number(response.RAW.XPR.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[25].circle_supply.push(Number(response.RAW.XPR.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 
//  -------------------- -------------------- --------------------
//  -------------------- -------------------- --------------------



// --------------------  - PAGE --------------------         
    //  
    function displayGraphIndex() {
        var dynamicStyles = document.getElementById("dynamicStyles");
        var real = Number(Number(TokenPage) + 1);
        dynamicStyles.textContent = `
            #market-graph-absolute-con .crypto-token-graph:not(:nth-child(${real})){
                display: none;
            }
        `
        // 
        document.getElementById("market-header-container").innerHTML = `
            <!-- Left container-->
            <div class="help-left-container">
                <div class="help-header-img btn-display" onclick="HomeToToken()">
                    <img src="img/arrow-left.png" class="img-fluid">
                </div>
                <span class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].symbol }</span>
            </div>
            <!-- Right container-->
            <div class="help-header-img onclick=" onclick="TokenToMarketInfo()">
                <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
            </div>
        `;
        // 
        document.getElementById("market-info-head").innerHTML = `
            <p class="market-token-name line-height-zero">${ CryptoLocalData[TokenPage].name }</p>
            <div class="market-token-price">$${ CryptoLocalData[TokenPage].price_comma.slice(-1)[0] }</div>
            <p class="market-query line-height">$${ CryptoLocalData[TokenPage].query_change.slice(-1)[0] } <span style="padding-left: 1.5em">${ CryptoLocalData[TokenPage].query.slice(-1)[0] }%</span></p>
        `;
        // 
        document.getElementById("market-sub-token-cap").innerHTML = `
            $${CryptoLocalData[TokenPage].cap.slice(-1)[0]}
        `;
        //  
        document.getElementById("market-sub-token-market").innerHTML = `
            $${CryptoLocalData[TokenPage].market.slice(-1)[0]}
        `;
        // 
        document.getElementById("market-sub-token-volume").innerHTML = `
            ${CryptoLocalData[TokenPage].volume.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;
        // 
        document.getElementById("market-sub-token-market-change").innerHTML = `
            ${CryptoLocalData[TokenPage].market_change.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;
        // 
        document.getElementById("market-sub-market-change-percent").innerHTML = `
            $${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0]}
        `;
        // 
        document.getElementById("market-sub-token-total-supply").innerHTML = `
            ${CryptoLocalData[TokenPage].total_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;
        document.getElementById("market-sub-token-circle-supply").innerHTML = `
            ${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;sendmainChanger();
    }
    // --------------------  
//  -------------------- -------------------- -------------------- 