// --------------------  - PAGE --------------------    
    var cryptoCompare = '3786e2cde9ae5f0dca5f9984bdef3491fcb799327e150e9d12385065645d524c';
    //  
    var binanceBTC;
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
            qr: "bitcoin",
            query: [],
            query_change: [],
            symbol: "BTC",
            tip: 0.0005,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "3NLJGnYA3NhDQoJYoej6794c5AZZHaueNv"
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
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "ethereum",
            query: [],
            query_change: [],
            symbol: "ETH",
            tip: 0.0005,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xe13fbd143bb88b647a668eAF0Fc2883B67B3fD0A"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '52, 93, 157,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "03",
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
            qr: "litecoin",
            query: [],
            query_change: [],
            symbol: "LTC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "MWPdXwQPbEkoe9bj4LXN3npwJDyK9Gefg3"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD&api_key=${cryptoCompare}`,
            color: '249, 195, 37,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOGE&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "04",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "a minimum of 5",
            mini: "0.0",
            name: "Dogecoin",
            network: "Dogecoin",
            price: [],
            price_comma: [],
            qr: "doge",
            query: [],
            query_change: [],
            symbol: "DOGE",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "A6QfUnhbXdk6yejZ7XGodKPV2qaCxrmZMi"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '38, 161, 123,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "05",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a Ethereum minimum of 1",
            name: "Tether USD",
            network: "Tether USD (ERC20)",
            price: [],
            price_comma: [],
            qr: "ethereum",
            query: [],
            query_change: [],
            symbol: "USDT",
            tip: 0.0005,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xe13fbd143bb88b647a668eAF0Fc2883B67B3fD0A"// Gone5
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TRX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '236, 8, 41,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=TRX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "06",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "a minimum of 10",
            name: "TRON",
            network: "Tron (TRX20)",
            price: [],
            price_comma: [],
            qr: "tron",
            query: [],
            query_change: [],
            symbol: "TRX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "TT1Xx33u7fuMAP3zsNYGRQ4c8JwEqaiFxJ"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '38, 161, 123,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "07",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a Tron minimum of 1",
            name: "Tether USD",
            network: "Tether USD (TRX20)",
            price: [],
            price_comma: [],
            qr: "tron",
            query: [],
            query_change: [],
            symbol: "USDT",
            tip: 0.0005,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "TT1Xx33u7fuMAP3zsNYGRQ4c8JwEqaiFxJ"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 80, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "08",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            minimum: "a minimum of 1",
            name: "USD Coin",
            network: "USD Coin (ERC20)",
            price: [],
            price_comma: [],
            qr: "ethereum",
            query: [],
            query_change: [],
            symbol: "USDC",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xe13fbd143bb88b647a668eAF0Fc2883B67B3fD0A"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "09",
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
            qr: "bnbcoin",
            query: [],
            query_change: [],
            symbol: "BNB",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xC3193eD1aAaeF20B5DEa797b1F42707490BE19B6"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BUSD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "10",
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
            wallet: "0xC3193eD1aAaeF20B5DEa797b1F42707490BE19B6"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AVAX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '232, 65, 66,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=AVAX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "11",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            minimum: "",
            name: "Avalanche",
            network: "Avalanche",
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
            wallet: "0x7624af758833425856b4Ec1ea5a1F49056D73171"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BUSD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "12",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            minimum: "a Ethereum minimum of 1",
            mini: "0.0",
            name: "Binance USD",
            network: "Binance USD (ERC20)",
            price: [],
            price_comma: [],
            qr: "ethereum",
            query: [],
            query_change: [],
            symbol: "BUSD",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xe13fbd143bb88b647a668eAF0Fc2883B67B3fD0A"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SOL&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 51, 173,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=SOL&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "12",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Solana",
            network: "Solana",
            price: [],
            price_comma: [],
            qr: "Bep20",
            minimum: "a minimum of 0.5",
            query: [],
            query_change: [],
            symbol: "SOL",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "4rwPexHrgZ9yHzCaS9t7mDjypn4V8PfyqJhanSkFbesU"
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
                            ${ CryptoLocalData[hmepgDisplayToggle.at(i)].balance } ${ CryptoLocalData[hmepgDisplayToggle.at(i)].symbol }
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
            <img src="img/qrimg/${ CryptoLocalData[TokenPage].qr }.jpg" class="img-fluid">
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
    var binanceCalculate;
    var binanceCounted;
    function tokenDollar() {
        binanceCalculate = CryptoLocalData[TokenPage].balance * Number(CryptoLocalData[TokenPage].price);
        binanceCounted = Number(binanceCalculate.toFixed(2)).toLocaleString();
    };
    var bynanceCalculate;
    var bynanceCounted;
    function homeDollar() {
        bynanceCalculate = (CryptoLocalData[0].balance * Number(CryptoLocalData[0].price)) + (CryptoLocalData[1].balance * Number(CryptoLocalData[1].price)) + (CryptoLocalData[2].balance * Number(CryptoLocalData[2].price)) 
                         + (CryptoLocalData[3].balance * Number(CryptoLocalData[3].price)) + (CryptoLocalData[4].balance * Number(CryptoLocalData[4].price)) + (CryptoLocalData[5].balance * Number(CryptoLocalData[5].price)) 
                         + (CryptoLocalData[6].balance * Number(CryptoLocalData[6].price)) + (CryptoLocalData[7].balance * Number(CryptoLocalData[7].price)) + (CryptoLocalData[8].balance * Number(CryptoLocalData[8].price))
                         + (CryptoLocalData[9].balance * Number(CryptoLocalData[9].price)) + (CryptoLocalData[10].balance * Number(CryptoLocalData[10].price)) + (CryptoLocalData[11].balance * Number(CryptoLocalData[11].price)) + (CryptoLocalData[12].balance * Number(CryptoLocalData[12].price));
        bynanceCounted = Number(bynanceCalculate.toFixed(2)).toLocaleString();
    };
    function tokenmainChanger() {
        tokenDollar();
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
            ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol } ≈ $<span>${binanceCounted}</span>
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

    // Litecoin
    fetch(CryptoLocalData[2].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[2].price_comma.push(Number(response.RAW.LTC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[2].price.push(response.RAW.LTC.USD.PRICE.toFixed(2));
            CryptoLocalData[2].query_change.push(Number(response.RAW.LTC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[2].query.push(Number(response.RAW.LTC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[2].cap.push(Number(response.RAW.LTC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market.push(Number(response.RAW.LTC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[2].volume.push(Number(response.RAW.LTC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market_change.push(Number(response.RAW.LTC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market_change_percent.push(Number(response.RAW.LTC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].total_supply.push(Number(response.RAW.LTC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].circle_supply.push(Number(response.RAW.LTC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Dogecoin
    fetch(CryptoLocalData[3].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[3].price_comma.push(Number(response.RAW.DOGE.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[3].price.push(response.RAW.DOGE.USD.PRICE.toFixed(2));
            CryptoLocalData[3].query_change.push(Number(response.RAW.DOGE.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[3].query.push(Number(response.RAW.DOGE.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[3].cap.push(Number(response.RAW.DOGE.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market.push(Number(response.RAW.DOGE.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[3].volume.push(Number(response.RAW.DOGE.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market_change.push(Number(response.RAW.DOGE.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market_change_percent.push(Number(response.RAW.DOGE.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].total_supply.push(Number(response.RAW.DOGE.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].circle_supply.push(Number(response.RAW.DOGE.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tether
    fetch(CryptoLocalData[4].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[4].price_comma.push(Number(response.RAW.USDT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[4].price.push(response.RAW.USDT.USD.PRICE.toFixed(2));
            CryptoLocalData[4].query_change.push(Number(response.RAW.USDT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[4].query.push(Number(response.RAW.USDT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[4].cap.push(Number(response.RAW.USDT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market.push(Number(response.RAW.USDT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[4].volume.push(Number(response.RAW.USDT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market_change.push(Number(response.RAW.USDT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market_change_percent.push(Number(response.RAW.USDT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].total_supply.push(Number(response.RAW.USDT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].circle_supply.push(Number(response.RAW.USDT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tron
    fetch(CryptoLocalData[5].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[5].price_comma.push(Number(response.RAW.TRX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[5].price.push(response.RAW.TRX.USD.PRICE.toFixed(2));
            CryptoLocalData[5].query_change.push(Number(response.RAW.TRX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[5].query.push(Number(response.RAW.TRX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[5].cap.push(Number(response.RAW.TRX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market.push(Number(response.RAW.TRX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[5].volume.push(Number(response.RAW.TRX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market_change.push(Number(response.RAW.TRX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market_change_percent.push(Number(response.RAW.TRX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].total_supply.push(Number(response.RAW.TRX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].circle_supply.push(Number(response.RAW.TRX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tether
    fetch(CryptoLocalData[6].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[6].price_comma.push(Number(response.RAW.USDT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[6].price.push(response.RAW.USDT.USD.PRICE.toFixed(2));
            CryptoLocalData[6].query_change.push(Number(response.RAW.USDT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[6].query.push(Number(response.RAW.USDT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[6].cap.push(Number(response.RAW.USDT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market.push(Number(response.RAW.USDT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[6].volume.push(Number(response.RAW.USDT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market_change.push(Number(response.RAW.USDT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market_change_percent.push(Number(response.RAW.USDT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].total_supply.push(Number(response.RAW.USDT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].circle_supply.push(Number(response.RAW.USDT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // USD Coin
    fetch(CryptoLocalData[7].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[7].price_comma.push(Number(response.RAW.USDC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[7].price.push(response.RAW.USDC.USD.PRICE.toFixed(2));
            CryptoLocalData[7].query_change.push(Number(response.RAW.USDC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[7].query.push(Number(response.RAW.USDC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[7].cap.push(Number(response.RAW.USDC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[7].market.push(Number(response.RAW.USDC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[7].volume.push(Number(response.RAW.USDC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[7].market_change.push(Number(response.RAW.USDC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[7].market_change_percent.push(Number(response.RAW.USDC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[7].total_supply.push(Number(response.RAW.USDC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[7].circle_supply.push(Number(response.RAW.USDC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // BNB
    fetch(CryptoLocalData[8].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[8].price_comma.push(Number(response.RAW.BNB.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[8].price.push(response.RAW.BNB.USD.PRICE.toFixed(2));
            CryptoLocalData[8].query_change.push(Number(response.RAW.BNB.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[8].query.push(Number(response.RAW.BNB.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[8].cap.push(Number(response.RAW.BNB.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market.push(Number(response.RAW.BNB.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[8].volume.push(Number(response.RAW.BNB.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market_change.push(Number(response.RAW.BNB.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market_change_percent.push(Number(response.RAW.BNB.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].total_supply.push(Number(response.RAW.BNB.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].circle_supply.push(Number(response.RAW.BNB.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------  

    // Binance USD
    fetch(CryptoLocalData[9].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[9].price_comma.push(Number(response.RAW.BUSD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[9].price.push(response.RAW.BUSD.USD.PRICE.toFixed(2));
            CryptoLocalData[9].query_change.push(Number(response.RAW.BUSD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[9].query.push(Number(response.RAW.BUSD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[9].cap.push(Number(response.RAW.BUSD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market.push(Number(response.RAW.BUSD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[9].volume.push(Number(response.RAW.BUSD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market_change.push(Number(response.RAW.BUSD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market_change_percent.push(Number(response.RAW.BUSD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].total_supply.push(Number(response.RAW.BUSD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].circle_supply.push(Number(response.RAW.BUSD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------

    // Avalanche
    fetch(CryptoLocalData[10].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[10].price_comma.push(Number(response.RAW.AVAX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[10].price.push(response.RAW.AVAX.USD.PRICE.toFixed(2));
            CryptoLocalData[10].query_change.push(Number(response.RAW.AVAX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[10].query.push(Number(response.RAW.AVAX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[10].cap.push(Number(response.RAW.AVAX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market.push(Number(response.RAW.AVAX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[10].volume.push(Number(response.RAW.AVAX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market_change.push(Number(response.RAW.AVAX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market_change_percent.push(Number(response.RAW.AVAX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].total_supply.push(Number(response.RAW.AVAX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].circle_supply.push(Number(response.RAW.AVAX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Binance USD
    fetch(CryptoLocalData[11].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[11].price_comma.push(Number(response.RAW.BUSD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[11].price.push(response.RAW.BUSD.USD.PRICE.toFixed(2));
            CryptoLocalData[11].query_change.push(Number(response.RAW.BUSD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[11].query.push(Number(response.RAW.BUSD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[11].cap.push(Number(response.RAW.BUSD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market.push(Number(response.RAW.BUSD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[11].volume.push(Number(response.RAW.BUSD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market_change.push(Number(response.RAW.BUSD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market_change_percent.push(Number(response.RAW.BUSD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].total_supply.push(Number(response.RAW.BUSD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].circle_supply.push(Number(response.RAW.BUSD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------

    // Solana
    fetch(CryptoLocalData[12].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[12].price_comma.push(Number(response.RAW.SOL.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[12].price.push(response.RAW.SOL.USD.PRICE.toFixed(2));
            CryptoLocalData[12].query_change.push(Number(response.RAW.SOL.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[12].query.push(Number(response.RAW.SOL.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[12].cap.push(Number(response.RAW.SOL.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market.push(Number(response.RAW.SOL.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[12].volume.push(Number(response.RAW.SOL.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market_change.push(Number(response.RAW.SOL.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market_change_percent.push(Number(response.RAW.SOL.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].total_supply.push(Number(response.RAW.SOL.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].circle_supply.push(Number(response.RAW.SOL.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
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