class MarketInfo extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- MARKET INFORMATION STRUCTURE -->
            <div class="market-info-page-display">
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                    
                    <div class="market-parent-wrap" style="padding-bottom:3em;">

                        <!-- -------------------- Token Header wrap -------------------- -->
                            <div class="token-header-wrap">

                                <!-- -------------------- Token Header Container -------------------- -->
                                <div class="help-header-wrap">
                                    <div class="container">
                                        <div class="help-header-container" id="market-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img btn-display" onclick="HomeToToken()">
                                                    <img src="img/arrow-left.png" class="img-fluid">
                                                </div>
                                                <span class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-header-img">
                                                <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- --------------------  Container -------------------- -->
                                <div class="container">
                                    <div class="market-head" id="market-info-head">
                                        <p class="market-token-name line-height-zero">${ CryptoLocalData[TokenPage].name }</p>
                                        <div class="market-token-price">$${ CryptoLocalData[TokenPage].price.slice(-1)[0] }</div>
                                        <p class="market-query line-height">$${ CryptoLocalData[TokenPage].query_change.slice(-1)[0] } <span style="padding-left: 1.5em">${ CryptoLocalData[TokenPage].query.slice(-1)[0] }%</span></p>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- -------------------- Graph absolute container Container -------------------- -->
                                <div class="market-graph-absolute-wrap">
                                    <div class="market-graph-absolute-con" id="market-graph-absolute-con">
                                        <!-- First set of five graphs -->
                                        <!-- Btc graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[0].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[0].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[0].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="btcChart"></canvas>
										</graph>
										<!-- Eth graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[1].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[1].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[1].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="ethChart"></canvas>
										</graph>
										<!-- Usdt graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[2].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[2].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[2].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="usdtChart"></canvas>
										</graph>
										<!-- BNB graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[3].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[3].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[3].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="bnbChart"></canvas>
										</graph>                   
                                        <!-- ADA graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[4].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[4].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[4].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="adaChart"></canvas>
                                        </graph>
                                        

                                        <!-- Second set of five graphs -->
                                        <!-- MATIC graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[5].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[5].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[5].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="maticChart"></canvas>
                                        </graph>
                                        <!-- DOGE graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[6].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[6].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[6].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="dogeChart"></canvas>
                                        </graph>
                                        <!-- BUSD graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[7].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[7].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[7].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="busdChart"></canvas>
                                        </graph>
                                        <!-- SHIB graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[8].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[8].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[8].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="shibChart"></canvas>
                                        </graph>
                                        <!-- LTC graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[9].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[9].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[9].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="ltcChart"></canvas>
                                        </graph>
                                        

                                        <!-- Third set of five graphs -->
                                        <!-- TRX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[10].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[10].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[10].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="trxChart"></canvas>
                                        </graph>
                                        <!-- AVAX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[11].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[11].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[11].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="avaxChart"></canvas>
                                        </graph>
                                        <!-- UNI graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[12].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[12].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[12].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="uniChart"></canvas>
                                        </graph>
                                        <!-- Dash graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[13].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[13].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[13].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="dashChart"></canvas>
                                        </graph>
                                        <!-- LINK graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[14].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[14].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[14].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="linkChart"></canvas>
                                        </graph>

                                        
                                        <!-- Fourth set of five graphs --> 
                                        <!-- ATOM graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[15].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[15].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[15].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="atomChart"></canvas>
                                        </graph>
                                        <!-- BitTorrent graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[16].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[16].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[16].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="bttoldChart"></canvas>
                                        </graph>
                                        <!-- Wakanda Inu graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[17].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[17].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[17].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="wkdChart"></canvas>
                                        </graph>
                                        <!-- Alien Worlds graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[18].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[18].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[18].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="tlmChart"></canvas>
                                        </graph>
                                        <!-- Coin98 graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[19].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[19].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[19].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="c98Chart"></canvas>
                                        </graph>


                                        <!-- Fourth set of five graphs --> 
                                        <!-- BCH graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[20].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[20].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[20].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="bchChart"></canvas>
                                        </graph>
                                        <!-- NEAR graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[21].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[21].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[21].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="nearChart"></canvas>
                                        </graph>
                                        <!-- Pancake swap graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[22].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[22].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[22].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="cakeChart"></canvas>
                                        </graph>
                                        <!-- AXS graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[23].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[23].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[23].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="axsChart"></canvas>
                                        </graph>
                                        <!-- Basic attention coin graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[24].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[24].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[24].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="batChart"></canvas>
                                        </graph>
                                        <!-- Ripple graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[25].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[25].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[25].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="xprChart"></canvas>
                                        </graph>
                                        
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- -------------------- Token Header Container -------------------- -->
                                
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                            </div>
							<div class="market-bottom-radius"></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

						

                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap market-link-space">
                            <div class="container">
								
							    <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Market Cap</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-market">
                                                $${CryptoLocalData[TokenPage].market.slice(-1)[0]} 
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Volume (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-volume">
                                                ${CryptoLocalData[TokenPage].volume.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
							
							
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Total Top-Tier Volume (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-market-change">
                                                ${CryptoLocalData[TokenPage].market_change.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Supply</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-total-supply">
                                                ${CryptoLocalData[TokenPage].total_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Circulating Supply</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line pricy" id="market-sub-token-circle-supply">
												${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">TICK HIGH (24 HRS)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-cap">
                                                $${CryptoLocalData[TokenPage].cap.slice(-1)[0]}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">TICK LOW (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line pricy" id="market-sub-market-change-percent">
                                                $${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0]}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
								
							</div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                    </div>
                
                <!--   -------------------- -------------------- -------------------- -------------------- -------------------- -->
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("market-info-page", MarketInfo);










// --------------------  --------------------
function checkStatus(response) {
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}
// -------------------- -------------------- --------------------



// -------------------- Bitcoin - PAGE --------------------
    const btcData = async () => {
        const response = await fetch(CryptoLocalData[0].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBtcChart;
    async function printBtcChart() {
        let { times, prices } = await btcData()
        let btcChart = document.getElementById('btcChart').getContext('2d');
        let gradient = btcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[0].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[0].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBtcChart = new Chart(btcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[0].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBtcChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Ethereum - PAGE --------------------
    const ethData = async () => {
        const response = await fetch(CryptoLocalData[1].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createEthChart;
    async function printEthChart() {
        let { times, prices } = await ethData()
        let ethChart = document.getElementById('ethChart').getContext('2d');
        let gradient = ethChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[1].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[1].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createEthChart = new Chart(ethChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[1].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printEthChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Tether - PAGE --------------------
    const usdtData = async () => {
        const response = await fetch(CryptoLocalData[2].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUsdtChart;
    async function printUsdtChart() {
        let { times, prices } = await usdtData()
        let usdtChart = document.getElementById('usdtChart').getContext('2d');
        let gradient = usdtChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[2].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[2].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUsdtChart = new Chart(usdtChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[2].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUsdtChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- BNB - PAGE --------------------
    const bnbData = async () => {
        const response = await fetch(CryptoLocalData[3].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBnbChart;
    async function printBnbChart() {
        let { times, prices } = await bnbData()
        let bnbChart = document.getElementById('bnbChart').getContext('2d');
        let gradient = bnbChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[3].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[3].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBnbChart = new Chart(bnbChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[3].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBnbChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Cardano - PAGE --------------------
    const adaData = async () => {
        const response = await fetch(CryptoLocalData[4].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createADAChart;
    async function printADAChart() {
        let { times, prices } = await adaData()
        let adaChart = document.getElementById('adaChart').getContext('2d');
        let gradient = adaChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[4].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[4].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createADAChart = new Chart(adaChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[4].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printADAChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Polygon - PAGE --------------------
    const maticData = async () => {
        const response = await fetch(CryptoLocalData[5].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createMATICChart;
    async function printMATICChart() {
        let { times, prices } = await maticData()
        let maticChart = document.getElementById('maticChart').getContext('2d');
        let gradient = maticChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[5].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[5].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createMATICChart = new Chart(maticChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[5].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printMATICChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Dogecoin - PAGE --------------------
    const dogeData = async () => {
        const response = await fetch(CryptoLocalData[6].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createDOGEChart;
    async function printDOGEChart() {
        let { times, prices } = await dogeData()
        let dogeChart = document.getElementById('dogeChart').getContext('2d');
        let gradient = dogeChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[6].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[6].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createDOGEChart = new Chart(dogeChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[6].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printDOGEChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Binance USD - PAGE --------------------
    const busdData = async () => {
        const response = await fetch(CryptoLocalData[7].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBUSDChart;
    async function printBUSDChart() {
        let { times, prices } = await busdData()
        let busdChart = document.getElementById('busdChart').getContext('2d');
        let gradient = busdChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[7].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[7].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBUSDChart = new Chart(busdChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[7].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBUSDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Shiba Inu - PAGE --------------------
    const shibData = async () => {
        const response = await fetch(CryptoLocalData[8].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createSHIBChart;
    async function printSHIBChart() {
        let { times, prices } = await shibData()
        let shibChart = document.getElementById('shibChart').getContext('2d');
        let gradient = shibChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[8].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[8].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createSHIBChart = new Chart(shibChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[8].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printSHIBChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Litecoin - PAGE --------------------
    const ltcData = async () => {
        const response = await fetch(CryptoLocalData[9].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLTCChart;
    async function printLTCChart() {
        let { times, prices } = await ltcData()
        let ltcChart = document.getElementById('ltcChart').getContext('2d');
        let gradient = ltcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[9].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[9].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLTCChart = new Chart(ltcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[9].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLTCChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Tron - PAGE --------------------
    const trxData = async () => {
        const response = await fetch(CryptoLocalData[10].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTRXChart;
    async function printTRXChart() {
        let { times, prices } = await trxData()
        let trxChart = document.getElementById('trxChart').getContext('2d');
        let gradient = trxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[10].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[10].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTRXChart = new Chart(trxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[10].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTRXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Avalanche - PAGE --------------------
    const avaxData = async () => {
        const response = await fetch(CryptoLocalData[11].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAVAXChart;
    async function printAVAXChart() {
        let { times, prices } = await avaxData()
        let avaxChart = document.getElementById('avaxChart').getContext('2d');
        let gradient = avaxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[11].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[11].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAVAXChart = new Chart(avaxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[11].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAVAXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- --------------------  



// -------------------- UniSwap - PAGE --------------------
    const uniData = async () => {
        const response = await fetch(CryptoLocalData[12].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUNIChart;
    async function printUNIChart() {
        let { times, prices } = await uniData()
        let uniChart = document.getElementById('uniChart').getContext('2d');
        let gradient = uniChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[12].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[12].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUNIChart = new Chart(uniChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[12].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUNIChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- --------------------



// -------------------- Dash - PAGE --------------------
    const dashData = async () => {
        const response = await fetch(CryptoLocalData[13].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createDASHChart;
    async function printDASHChart() {
        let { times, prices } = await dashData()
        let dashChart = document.getElementById('dashChart').getContext('2d');
        let gradient = dashChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[13].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[13].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createDASHChart = new Chart(dashChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[13].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printDASHChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- --------------------  



// -------------------- CashLink - PAGE --------------------
    const linkData = async () => {
        const response = await fetch(CryptoLocalData[14].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLINKChart;
    async function printLINKChart() {
        let { times, prices } = await linkData()
        let linkChart = document.getElementById('linkChart').getContext('2d');
        let gradient = linkChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[14].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[14].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLINKChart = new Chart(linkChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[14].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLINKChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Cosmos - PAGE --------------------
    const atomData = async () => {
        const response = await fetch(CryptoLocalData[15].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createATOMChart;
    async function printATOMChart() {
        let { times, prices } = await atomData()
        let atomChart = document.getElementById('atomChart').getContext('2d');
        let gradient = atomChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[15].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[15].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createATOMChart = new Chart(atomChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[15].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printATOMChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- BitTorrent - PAGE --------------------
    const bttoldData = async () => {
        const response = await fetch(CryptoLocalData[16].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBTTOLDChart;
    async function printBTTOLDChart() {
        let { times, prices } = await bttoldData()
        let bttoldChart = document.getElementById('bttoldChart').getContext('2d');
        let gradient = bttoldChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[16].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[16].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBTTOLDChart = new Chart(bttoldChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[16].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBTTOLDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Wakanda Inu - PAGE --------------------
    const wkdData = async () => {
        const response = await fetch(CryptoLocalData[17].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createWKDChart;
    async function printWKDChart() {
        let { times, prices } = await wkdData()
        let wkdChart = document.getElementById('wkdChart').getContext('2d');
        let gradient = wkdChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[17].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[17].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createWKDChart = new Chart(wkdChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[17].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printWKDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Alien Worlds - PAGE --------------------
    const tlmData = async () => {
        const response = await fetch(CryptoLocalData[18].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTLMChart;
    async function printTLMChart() {
        let { times, prices } = await tlmData()
        let tlmChart = document.getElementById('tlmChart').getContext('2d');
        let gradient = tlmChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[18].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[18].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTLMChart = new Chart(tlmChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[18].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTLMChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Coin98 - PAGE --------------------
    const c98Data = async () => {
        const response = await fetch(CryptoLocalData[19].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createC98Chart;
    async function printC98Chart() {
        let { times, prices } = await c98Data()
        let c98Chart = document.getElementById('c98Chart').getContext('2d');
        let gradient = c98Chart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[19].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[19].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createC98Chart = new Chart(c98Chart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[19].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printC98Chart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- BitcoinCash - PAGE --------------------
    const bchData = async () => {
        const response = await fetch(CryptoLocalData[20].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBCHChart;
    async function printBCHChart() {
        let { times, prices } = await bchData()
        let bchChart = document.getElementById('bchChart').getContext('2d');
        let gradient = bchChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[20].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[20].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBCHChart = new Chart(bchChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[20].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBCHChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Near Protocol - PAGE --------------------
    const nearData = async () => {
        const response = await fetch(CryptoLocalData[21].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createNEARChart;
    async function printNEARChart() {
        let { times, prices } = await nearData()
        let nearChart = document.getElementById('nearChart').getContext('2d');
        let gradient = nearChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[21].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[21].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createNEARChart = new Chart(nearChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[21].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printNEARChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Pancake swap - PAGE --------------------
    const cakeData = async () => {
        const response = await fetch(CryptoLocalData[22].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createCAKEChart;
    async function printCAKEChart() {
        let { times, prices } = await cakeData()
        let cakeChart = document.getElementById('cakeChart').getContext('2d');
        let gradient = cakeChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[22].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[22].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createCAKEChart = new Chart(cakeChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[22].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printCAKEChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Axie Infinity - PAGE --------------------
    const axsData = async () => {
        const response = await fetch(CryptoLocalData[23].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAXSChart;
    async function printAXSChart() {
        let { times, prices } = await axsData()
        let axsChart = document.getElementById('axsChart').getContext('2d');
        let gradient = axsChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[23].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[23].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAXSChart = new Chart(axsChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[23].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAXSChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- BAsic Attention Token - PAGE --------------------
    const batData = async () => {
        const response = await fetch(CryptoLocalData[24].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBATChart;
    async function printBATChart() {
        let { times, prices } = await batData()
        let batChart = document.getElementById('batChart').getContext('2d');
        let gradient = batChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[24].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[24].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBATChart = new Chart(batChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[24].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBATChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Ripple - PAGE --------------------
    const xprData = async () => {
        const response = await fetch(CryptoLocalData[25].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createXPRChart;
    async function printXPRChart() {
        let { times, prices } = await xprData()
        let xprChart = document.getElementById('xprChart').getContext('2d');
        let gradient = xprChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[25].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[25].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createXPRChart = new Chart(xprChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[25].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printXPRChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 