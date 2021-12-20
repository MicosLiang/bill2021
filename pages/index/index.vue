<template>
	<view class="content">
		<view @click="jumpToEgg" :style="{left: progressBar+'vw'}" class="img"></view>
		<view class="text-area">

		<view @touchstart="touchStart">
		
			<swiper :disable-touch="!startFlag" @change="swiperChange" vertical="true" class="content" 
				style="height: 100vh;width: 100vw;"
			>
					
				<!-- 起始页 start-->
				<swiper-item  >
					<view @touchmove="touchMove" @touchend="touchEnd">
						<view style="text-align: center;width: 100vw;transform: translateY(8vh);">
							<vue-typed-js style="color: #d9af4b;width: 100vw;display: flex;justify-content: center;" :strings="['滴，触碰盒子开启账单 ~~　']">
							    <h2 class="typing"></h2>
							</vue-typed-js>
						</view>
						
						
						<view  style="position: absolute;z-index: -1;" @click="playCardAnimation()" :class="reachPositionAnimation0"> 
							<image v-bind:style="{left:moveY0/2 +'px'}" :src="pagesElements.startingPage.imgsUrl.swiper" class="marginRightAnimation backgroundImageStyle"
								mode="aspectFill"></image>
								<image v-bind:style="{left: moveY0/2 +'px'}"  style="margin-top: 350rpx;" :class="startCardAnimation" src="../../static/bill2021/start/card.png" mode="aspectFill"></image>
						</view>
					</view>
				</swiper-item>
				<!-- 起始页 end-->
				
				
				<!-- 洗澡页 start-->
				<swiper-item @touchmove="touchMove" @touchend="touchEnd">
				
					<view class="bashingClauseStyle1 setElementCenter ">
						今年一共洗了
						<!-- spendAmountStyle 消费金额的样式 -->
						<!-- <view class="spendAmountStyle">{{pagesElements.bathingPage.copywritingData.realWashingTimes}}</view> -->
						<view class="spendAmountStyle">{{numDic['浴室']}}</view>
						次澡
					</view>
					<view class="bashingClauseStyle2 setElementCenter">
						共花费
						<!-- spendAmountStyle 消费金额的样式 -->
						<view class="spendAmountStyle">{{pagesElements.bathingPage.spendAmount}}</view>
						喵币
					</view>
					
					<view class="bashingCopywritingStyle setElementCenter tracking-in-contract" style="overflow: hidden;">
						<!-- copywritingLVerticalLineStyle 竖线的样式 -->
						<view class="copywritingLVerticalLineStyle">
						</view>
						{{pagesElements.bathingPage.copywritingData.modifyingClause.lessCost}}
					</view>
					<view style="position: absolute;" :class="reachPositionAnimation1"> 
						<image  v-bind:style="{top: moveY1/1.2 + 'px'}" :src="pagesElements.bathingPage.imgsUrl.bathtub" class="backgroundImageStyle"
							mode="aspectFit"></image>
						<image  v-bind:style="{top: moveY1/1 + 'px'}" :src="pagesElements.bathingPage.imgsUrl.cat" class="bounce-in-top imageStyle" mode="aspectFit"></image>
					</view>
					
				</swiper-item>
				<!-- 洗澡页 end-->
					
				<!-- 贫富 -->
<!-- 				<swiper-item class="" style="display: flex;flex-direction: column;justify-content: space-between;">
					<view v-bind:style="{right: moveY2/1.2 + 'px'}"> 
						<text>这是第一行字\n\n</text>
						<text>和第二行\n\n</text>
						<text>第三行\n\n</text>				
					</view>
					<view style="display: flex;align-items: flex-end;overflow: hidden;">
						<image src="../../static/bill2021/min-and-max/max.png"></image>						
					</view>
				</swiper-item> -->
					
				<!-- 最终页 start-->
				<swiper-item  style="background-color: #000000;" @touchmove="touchMove" @touchend="touchEnd">
				
					
					
					<image :src="pagesElements.summaryPage.imgsUrl.female" class="backgroundImageStyle"
							mode="aspectFit"></image>
					<image :src="pagesElements.summaryPage.imgsUrl.circle" style="z-index: 10;position: absolute;" class="imageStyle" mode="aspectFit"></image>
					<image :src="pagesElements.summaryPage.imgsUrl.paws" style="z-index: 20;position: absolute;" class=" imageStyle" mode="aspectFit"></image>
					
					<view style="display: flex;flex-direction: column;height: 100vh;width: 95vw;align-items: flex-end;justify-content: flex-end;">
						<button type="default" style="width: 35%;margin: 20rpx 0; font-size: 36rpx;padding: 10rpx 0;">返回</button>
						<button type="default" style="width: 35%;margin: 20rpx 0; font-size: 36rpx;padding: 10rpx 0;">分享</button>
					</view>
							
				</swiper-item>
				<!-- 最终页 end-->
				
			</swiper>
				
			</view>
		</view>
	</view>
</template>


<script>
	
	export default {
		data() {
			return {
				startCardAnimation: '',
				marginRightAnimation: '',
				eggFlag: 0,
				progressBar: 0,
				
				startFlag: false,
				
				
				startData: {
					clientX: '',
					clientY: '',
				},

				moveY0: 0,
				moveY1: 0,
				moveY2: 0,
				moveY3: 0,
				moveY4: 0,
				moveY5: 0,
				moveY6: 0,
				moveY7: 0,
				moveY8: 0,
				moveY9: 0,
				moveY10: 0,
				moveY11: 0,
				
				reachPositionAnimation0: '',
				reachPositionAnimation1: '',
				reachPositionAnimation2: '',
				reachPositionAnimation3: '',
				reachPositionAnimation4: '',
				reachPositionAnimation5: '',
				reachPositionAnimation6: '',
				reachPositionAnimation7: '',
				reachPositionAnimation8: '',
				reachPositionAnimation9: '',
				reachPositionAnimation10: '',
				
				
				touch: {},
				
				numDic : {},
				
				swiperCurrent: 0,
				pagesElements: {
					startingPage: {
						copywritingData: {
							modifyingClause: '嘀，点击猫爪进入年度账单',
						},
						imgsUrl: {
							swiper: '../../static/bill2021/start/swiper.jpg',
							card: '../../static/bill2021/start/card.png',
						}

					},
					eatingPage: {
						copywritingData: {
							spendAmount: '',
							modifyingClause: {
								lessCost: '靠意念吃饭  注定是食堂得不到的猫',
								averageCost: '小橘是一个合理进食  控制身材的好猫猫',
								muchCostmuchCost: '干饭是本喵猫生的终极意义  有好吃的地方就一定有小橘',
							},
						},
						imgsUrl: {
							cateen1: '../../static/bill2021/eating/cateen1.png',
							cateen2: '../../static/bill2021/eating/cateen2.png',
							cateen3: '../../static/bill2021/eating/cateen3.png',
							custom: '../../static/bill2021/eating/custom cat.png',
							mush: '../../static/bill2021/eating/fat cat.png'
						}

					},
					drinkingPage: {
						copywritingData: {
							spendAmount: '',
							modifyingClause: {
								lessCost: '喝水在精不在多——  小橘说的对吧？',
								averageCost: '吨吨吨  本喵干了，你随意',
								muchCost: '猫不可一日无水  水乃猫身之源',
							},
						},
						imgsUrl: {
							less: '../../static/bill2021/drinking/little.png',
							custom: '../../static/bill2021/drinking/custom.png',
							mush: '../../static/bill2021/drinking/mush.png',
							tank: '../../static/bill2021/drinking/Water tank.png'
						},

					},
					bathingPage: {
						copywritingData: {
							spendAmount: '',
							modifyingClause: {
								lessCost: '洗浴这件事  随缘嘛~',
								averageCost: '有时间的时候  本喵就会来浴室视察一番哦',
								muchCost: '我爱洗澡，身体好好！  据说爱洗澡的喵运气都不会差哦~',
							},
						},
						imgsUrl: {
							lying: '../../static/bill2021/bathing/Lying cat.png',
							sitting: '../../static/bill2021/bathing/Sitting cat.png',
							bathtub: '../../static/bill2021/bathing/less/bathtub.png',
							cat: '../../static/bill2021/bathing/less/cat.png',
						},

					},
					busPage: {
						copywritingData: {
							spendAmount: '',
							modifyingClause: {
								lessCost: '非必要不出校  宅喵存在的意义就是“宅”',
								averageCost: '吃饱喝足不坐着校车去逛逛  是对猫生的浪费',
								muchCost: '走遍全世界  从坐着校车去兰州开始！',
							},
						},
						imgsUrl: {
							less: '../../static/bill2021/bus/little.png',
							custom: '../../static/bill2021/bus/custom.png',
							mush: '../../static/bill2021/bus/mush.png',
						},

					},
					marketPage: {
						copywritingData: {
							spendAmount: '',
							modifyingClause: {
								lessCost: '合理消费  是本喵矢志不渝的购物追求',
								averageCost: '好吃的~  都进本喵肚子里来吧！',
								muchCost: '这是一个让本喵来了就不想走的地方  下次一定控制自己，一定！',
							},
						},
						imgsUrlimgsUrl: {
							small: '../../static/bill2021/market/small back cat.png',
							big: '../../static/bill2021/market/big back cat.png',
							flying: '../../static/bill2021/market/flying Cat.png',
							pushing: '../../static/bill2021/market/pushing cat.png',
							road: '../../static/bill2021/market/road.png',
						},

					},
					swimmingPage: {
						copywritingData: {
							spendAmount: '',
							modifyingClause: {
								lessCost: '2021又是当废喵的一年  明年一定好好锻炼！',
								averageCost: '本喵兴致大发时  就要去玩水~',
								muchCost: '生命的意义在于运动  本喵要强身健体，做一只健康喵',
							},
						},
						imgsUrl: {
							pool: '../../static/bill2021/swimming/pool.png',
						},

					},
					dawnAndMidnightPage: {
						copywritingData: {
							spendAmountDawn: '',
							spendAmoutMidnight: '',
							modifyingClause: {
								DawnCost: '',
								MidnightCost: '',
							},
						},
						imgsUrl: {
							curtains: '../../static/bill2021/dawn-and-midnight/curtains.png'
						},

					},
					MostAndLeastPage: {
						copywritingData: {
							spendAmountLeast: '',
							spendAmountMost: '',
							modifyingClause: {
								leastCost: '',
								mostCost: '',
							},
						},
						imgsUrl: {
							least: '../../static/bill2021/min-and-max/min.png',
							most: '../../static/bill2021/min-and-max/max.png',
						},

					},
					summaryPage: {
						copywritingData: {
							spendAmount: '',
							modifyingTags: {
								eating: ['干饭喵', '食堂得不到的喵'],
								drinking: ['吨吨喵', '爱水喵', '没水也行喵'],
								bathing: ['年度洗浴达人喵', '浴室常驻喵', '随缘洗浴喵'],
								bus: ['浪迹天涯喵', '热爱出行喵', '宅喵'],
								market: ['野性消费喵', '购物达人喵', '合理消费喵'],
								swimming: ['运动达人喵', '强身健体喵', '懒喵']
							},
						},
						imgsUrl: {
							circle: '../../static/bill2021/summary/circle.png',
							paws: '../../static/bill2021/summary/paws.png',
							QR: '../../static/bill2021/summary/QR code.png',
							male: '../../static/bill2021/summary/Male characters.png',
							female: '../../static/bill2021/summary/Female characters.png',
						},

					},
				}
			}
		},
		onLoad() {
		
		},
		onShow() {
			this.eggFlag = 0
			
			let _sf = this
			let getData = function(username, password){
				uniCloud.callFunction({
					name : "getBill",
					data:{
						username : username,
						password : password
					},
					success(res) {
						res = res.result
						let tmp = _sf.pagesElements
						let saveNum = 1 //保留数字位
						
						let t = []
						for(var q in res){
							try{
								t = String(res[q]).split('.')
								res[q] = t[0] + "." + t[1].substr(0,saveNum) 
								// console.log(res[q])
							}
							catch(e){
								// console.log(e)
								// console.log(res[q])
							}
						}
						
						tmp.eatingPage.spendAmount = res.eating
						tmp.drinkingPage.spendAmount = res.drink
						tmp.bathingPage.spendAmount = res.bathing
						tmp.busPage.spendAmount = res.bus
						tmp.marketPage.spendAmount = res.market
						tmp.swimmingPage.spendAmount = res.swim
						tmp.dawnAndMidnightPage.spendAmountDawn = res.time_eraly
						tmp.dawnAndMidnightPage.spendAmountLeast = res.time_latest
						tmp.MostAndLeastPage.spendAmountLeast = res.cost_min
						tmp.MostAndLeastPage.spendAmountMost = res.cost_max
						tmp.summaryPage.spendAmount = res.cost_all
						
						_sf.numDic = res.numDic
						console.log(_sf.numDic)
						
						return true
					},
					fail(res) {
						console.log(res)
						return false
					},
					complete() {
						
					}
				})
			}
			
			getData("liangjh21","@1L_9d!2b0j4")
		},
		mounted() {
			
		},
		methods: {
			jumpToEgg() {
				this.eggFlag ++;
				if (this.eggFlag == 5) {
					uni.navigateTo({
						url: '../index/test'
					})
				}
			},
			moveStop(){
				
			},
			touchStart(e){  //@touchstart 触摸开始
			    this.startData.clientX = e.changedTouches[0].clientX;   //手指按下时的X坐标         
			    this.startData.clientY = e.changedTouches[0].clientY;   //手指按下时的Y坐标
			},
			
			
			touchEnd(e){
				let _sf = this
				let key = "moveY" + String(_sf.swiperCurrent)
				this[key] = 0
			},
			touchMove(event) {  //@touchmove触摸移动
				var index = this.swiperCurrent;
				var key = "moveY" + String(index)
				let touch = event.touches[0];  //滑动过程中，手指滑动的坐标信息 返回的是Objcet对象
				this.touch = touch;
				let data =  this.startData.clientY - touch.clientY;
				
				console.log(data);
				if (data > 40 && this.startFlag){
					this[key] = data
				}
				
			},
			
			swiperChange(e) {
				var index = e.detail.current
				this.swiperCurrent = index
				this.progressBar = index * 10
				console.log(index);
				this.reachPositionAnimation0 = ' '
				switch(index) {
					case 0: 
					console.log(0);
						this.reachPositionAnimation0 = 'slide-in-right'
						break;
					case 1: 
						this.reachPositionAnimation0 = 'slide-in-left'
						this.reachPositionAnimation1 = 'slide-in-top'	
						break;
					default:
						this.reachPositionAnimation1 = 'slide-in-bottom'
						break;
				}

				
			},
			playCardAnimation: function() {
				this.startCardAnimation = 'bounce-in-top imageStyle'
				this.startFlag = true
				// window.event.cancelBubble = true;
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.img {
		width: 100rpx;
		height: 100rpx;
		bottom: 20rpx;
		
		position: absolute;
		background-image: url('goat.gif');
		transform: rotateY(180deg);
		background-size: cover;
		z-index: 100;
		background-color: transparent;
	}

	.setElementCenter {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.setElementXCenter {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.startPage {}

	.spendAmountStyle {
		color: #F0AD4E;
		font-size: 48rpx;
	}

	.spendClauseStyle {
		height: 12vh;
		width: 67vw;
		position: absolute;
		z-index: 2;
		font-size: 38rpx;
	}

	.copywritingStyle {
		color: #ea934f;
		position: absolute;
		z-index: 8;
		height: 27vh;
		width: 60vw;
		font-size: 36rpx;
	}

	.copywritingLVerticalLineStyle {
		width: 5vw;
		height: 7vh;
		color: #69666e;
		font-size: 52rpx;
		margin-left: 3vw;
		border-left: solid 5rpx #69666e;
	}

	.backgroundImageStyle {
		position: absolute;
		z-index: 1;
		width: 100vw;
		height: 100vh;
	}

	.imageStyle {
		position: relative;
		z-index: 5;
		width: 100vw;
		height: 100vh;
	}

	
	.drinkClauseStyle {
		height: 120vh;
		width: 58vw;
		position: absolute;
		z-index: 6;
		font-size: 38rpx;
	}
	.drinkingCopywritingStyle {
		color: #ea934f;
		position: absolute;
		z-index: 8;
		height: 140vh;
		width: 45vw;
		font-size: 36rpx;
	}
	.bashingClauseStyle1 {
		height: 30vh;
		width: 67vw;
		position: absolute;
		z-index: 8;
		font-size: 38rpx;
	}
	.bashingClauseStyle2 {
		height: 45vh;
		width: 52vw;
		position: absolute;
		z-index: 8;
		font-size: 38rpx;
	}
	.bashingCopywritingStyle {
		color: #ea934f;
		position: absolute;
		z-index: 8;
		height: 60vh;
		width: 58vw;
		font-size: 36rpx;
	}
	
	.tracking-in-contract {
		animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	}
	@keyframes tracking-in-contract {
	  0% {
	    letter-spacing: 1em;
	    opacity: 0;
	  }
	  40% {
	    opacity: 0.6;
	  }
	  100% {
	    letter-spacing: normal;
	    opacity: 1;
	  }
	}
	
	.bounce-in-top {
		        animation: bounce-in-top 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	}
	@keyframes bounce-in-top {
	  0% {
	    transform: translateY(-350rpx);
	    animation-timing-function: ease-in;
	    opacity: 0;
	  }
	  
	  /* 47% {
		transform: translateY(0);
		animation-timing-function: ease-out;
		opacity: 1;
	  }
	  
	  85% {
		transform: translateY(-40rpx);
		animation-timing-function: ease-out;
		opacity: 1;  
	  }
	  
	  90% {
	  		transform: translateY(0);
	  		animation-timing-function: ease-in;
	  		opacity: 1;  
	  }
	  
	  95% {
	  		transform: translateY(-50rpx);
	  		animation-timing-function: ease-out;
	  		opacity: 1;  
	  } */
	  
	  100% {
		transform: translateY(0);
		animation-timing-function: ease-out;
	  }
	}
	
	.slit-in-vertical {
		-webkit-animation: slit-in-vertical 0.45s ease-out both;
		        animation: slit-in-vertical 0.45s ease-out both;
	}
	/* ----------------------------------------------
	 * Generated by Animista on 2021-12-16 18:50:43
	 * Licensed under FreeBSD License.
	 * See http://animista.net/license for more info. 
	 * w: http://animista.net, t: @cssanimista
	 * ---------------------------------------------- */
	
	/**
	 * ----------------------------------------
	 * animation slit-in-vertical
	 * ----------------------------------------
	 */
	@-webkit-keyframes slit-in-vertical {
	  0% {
	    -webkit-transform: translateZ(-800px) rotateY(90deg);
	            transform: translateZ(-800px) rotateY(90deg);
	    opacity: 0;
	  }
	  54% {
	    -webkit-transform: translateZ(-160px) rotateY(87deg);
	            transform: translateZ(-160px) rotateY(87deg);
	    opacity: 1;
	  }
	  100% {
	    -webkit-transform: translateZ(0) rotateY(0);
	            transform: translateZ(0) rotateY(0);
	  }
	}
	@keyframes slit-in-vertical {
	  0% {
	    -webkit-transform: translateZ(-800px) rotateY(90deg);
	            transform: translateZ(-800px) rotateY(90deg);
	    opacity: 0;
	  }
	  54% {
	    -webkit-transform: translateZ(-160px) rotateY(87deg);
	            transform: translateZ(-160px) rotateY(87deg);
	    opacity: 1;
	  }
	  100% {
	    -webkit-transform: translateZ(0) rotateY(0);
	            transform: translateZ(0) rotateY(0);
	  }
	}


	.slide-in-left {
		animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-in-left {
	  0% {

		transform: translateX(0);
	  }
	  100% {
		transform: translateX(700rpx);
	    opacity: 1;
	  }
	}
	
	
	
	.slide-in-right {
		animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-in-right {
	  0% {
		transform: translateX(700rpx);
	    opacity: 0;
	  }
	  100% {

		left: 0;
	    opacity: 1;
	  }
	}
	
	
	.slide-in-top {
		animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-in-top {
	  0% {
		transform: translateY(700px);
	  }
	  100% {
		transform: translateY(0);
	    opacity: 1;
	  }
	}
	
	.slide-in-bottom {
		animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-in-bottom {
	  0% {
		
	    transform: translateY(0);
	  }
	  100% {
		  transform: translateY(600px);
	    opacity: 1;
	  }
	}


	button {
	width: 40%;
	 padding: 1.3em 3em;
	 font-size: 12px;
	 text-transform: uppercase;
	 letter-spacing: 2.5px;
	 font-weight: 500;
	 color: #000;
	 background-color: #fff;
	 border: none;
	 border-radius: 45px;
	 box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	 transition: all 0.3s ease 0s;
	 cursor: pointer;
	 outline: none;
	}
	
	button:hover {
	 background-color: #2EE59D;
	 box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
	 color: #fff;
	 transform: translateY(-7px);
	}
	
	button:active {
	 transform: translateY(-1px);
	}


</style>
