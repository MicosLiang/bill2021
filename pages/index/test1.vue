<template>
	<view id="container">
		<swiper :current="currentIndex" style="height: 100vh;width: 100vw;" vertical="true" @change="swiperChange">
			
			<!-- 起始页 开始-->
			<swiper-item @touchstart="touchStart0" @touchmove="touchMove0" @touchend="touchEnd0">
				<!-- 打字机特效 标题 -->
				<view style="text-align: center;width: 100vw;">
					<vue-typed-js style="width: 100vw;display: flex;justify-content: center;" :strings="['滴，点击光圈开启年度账单']">
					    <h2 class="typing"></h2>
					</vue-typed-js>
				</view>
				<!-- 刷卡机 -->
				<view class="imageContainer"> 
					<image :class="reachPositionAnimation0" :src="pagesElements.startingPage.imgsUrl.swiper" :style="{left:-distance0/2 +'px'}" class="backgroundImageStyle" mode="aspectFit"></image>
					<!-- <image v-bind:style="{left: moveY0/2 +'px'}"  style="margin-top: 350rpx;" :class="startCardAnimation" src="../../static/bill2021/start/card.png" mode="aspectFit"></image> -->
				</view>
			</swiper-item>
			<!-- 起始页 结束-->
			
			<!-- 洗澡页 开始-->
			<swiper-item @touchstart="touchStart1" @touchmove="touchMove1" @touchend="touchEnd1">
				<view id="bashingClauseContainer">
					<view class="bashingClauseStyle">
						今年一共洗了
						<!-- spendAmountStyle 消费金额的样式 -->
						<view class="spendAmountStyle">{{pagesElements.bathingPage.copywritingData.realWashingTimes}}</view>
						次澡
					</view>
					
					<view class="bashingClauseStyle">
						共花费
						<!-- spendAmountStyle 消费金额的样式 -->
						<view class="spendAmountStyle">{{pagesElements.bathingPage.copywritingData.spendAmount}}</view>
						喵币
					</view>
					
					<view class="bashingCopywritingStyle" style="overflow: hidden;">
						<!-- copywritingLVerticalLineStyle 竖线的样式 -->
						<view class="copywritingLVerticalLineStyle">
						</view>
						{{pagesElements.bathingPage.copywritingData.modifyingClause.lessCost}}
					</view>
				</view>
				<view style="position: absolute;" > 
					<image :src="pagesElements.bathingPage.imgsUrl.bathtub" class="backgroundImageStyle"
						mode="aspectFit"></image>
					<image :class="reachPositionAnimation1" :style="{top: distance1/4 + 'px'}" :src="pagesElements.bathingPage.imgsUrl.cat" class="backgroundImageStyle imgTopStyle" :id="testani" mode="aspectFit"></image>
				</view>
				
			</swiper-item>
			<!-- 洗澡页 结束-->
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				testani:'nono',
				currentIndex:0,
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
							spendAmount: '1024',
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
							spendAmount: '120',
							realWashingTimes:'50',
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
				},
				moveY0: 0,
				touchStartPointY:'',
				distance0:'',
				distance1:'',
				reachPositionAnimation0:'',
				reachPositionAnimation1:'',
			}
		},
		onLoad() {
		
		},
		mounted() {
			
		},
		methods: {
			swiperChange(e) {
				// console.log(e.detail.current);
				this.currentIndex = e.detail.current
				console.log(this.currentIndex)
			},
			
			// 刷卡机 猫猫出现 的视差动画
			touchStart0(event){
				// 获得起点X坐标，初始化distance为0
				this.touchStartPointY = event.changedTouches[0].pageY;
				// console.log(this.touchStartPoint);
				this.distance0 = 0;
			},
			touchMove0(event) {  //@touchmove触摸移动
				// 只监听单指划动，多指划动不作响应
				if (event.changedTouches.length > 1) {
					return;
				}
				// console.log(event.targetTouches[0].pageX);
				// 实时计算distance
				this.distance0 = event.changedTouches[0].pageY - this.touchStartPointY;
				this.distance1 = this.distance0
				// 根据distance在页面上做出反馈。这里演示通过返回按钮的背景变化作出反馈
				// console.log(this.distanceX)
				// console.log(this.distanceY)
			},
			touchEnd0(){
				var that = this
				setTimeout(function()  {
					if(that.currentIndex == 0){
						that.reachPositionAnimation0 = ''
						that.reachPositionAnimation0 = 'slide-back'
						setTimeout(function()  {
							that.distance0 = 0;
							that.reachPositionAnimation0 = ''
						},500);
					}
					else if(that.currentIndex == 1){
						that.reachPositionAnimation0 = ''
						that.reachPositionAnimation0 = 'slide-in-left'
						setTimeout(function()  {
							that.distance0 = 0;
							that.reachPositionAnimation0 = ''
						},500);
						that.reachPositionAnimation1 = 'slide-to-top'
						setTimeout(function()  {
							that.distance1 = 0;
							that.testani = 'nonono2'
							that.reachPositionAnimation1 = ''
						},500);
					}
				},10);
			},
			
			// 刷卡机回来 猫猫下去
			touchStart1(event){
				// 获得起点X坐标，初始化distance为0
				this.touchStartPointY = event.changedTouches[0].pageY;
				// console.log(this.touchStartPoint);
				// this.distance1 = 0;
			},
			touchMove1(event) {  //@touchmove触摸移动
				// 只监听单指划动，多指划动不作响应
				if (event.changedTouches.length > 1) {
					return;
				}
				this.distance0 = -(300- (event.changedTouches[0].pageY - this.touchStartPointY)*0.5);
				this.distance1 = (event.changedTouches[0].pageY - this.touchStartPointY)
			},
			touchEnd1(){
				var that = this
				console.log(this.distance1)
				setTimeout(function()  {
					if(that.currentIndex == 0){
						that.reachPositionAnimation0 = ''
						that.reachPositionAnimation0 = 'slide-back'
						setTimeout(function()  {
							that.distance0 = 0;
							that.reachPositionAnimation0 = ''
						},500);
					}
					else if(that.currentIndex == 1){
						// that.reachPositionAnimation1 = ''
						// that.reachPositionAnimation1 = 'slide-in-left'
					}
				},10);
			}
		}
	}
</script>

<style>
	#container {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.backgroundImageStyle {
		position: absolute;
		z-index: 10;
		width: 100vw;
		height: 100vh;
	}
	#bashingClauseContainer{
		position: absolute;
		z-index: 20;
		height: 30vh;
		width: 60vw;
		font-size: 42rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		margin-left: 5vw;
		margin-top: 100rpx;
	}
	.bashingClauseStyle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		width: 60vw;
		margin-left: 10vw;
	}
	.spendAmountStyle {
		color: #F0AD4E;
		font-size: 48rpx;
	}
	.bashingCopywritingStyle {
		color: #ea934f;
		width: 60vw;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.copywritingLVerticalLineStyle {
		width: 5vw;
		height: 7vh;
		color: #69666e;
		font-size: 52rpx;
		border-left: solid 5rpx #69666e;
	}
	.imgTopStyle{
		position: absolute;
		z-index: 19;
	}
	.slide-in-left {
		animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-in-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(600rpx);
			opacity: 0;
		}
	}
	.slide-back{
		animation: slide-back 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-back {
		0% {
			transform: translateX(0);
		}
		100% {
			position: absolute;
			left: 0;
		}
	}
	#nono{
		margin-top: 20vh;
	}
	#nono2{
		position: absolute;
		top: 0;
		margin-top: 0;
	}
	.slide-to-top{
		animation: slide-to-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-to-top {
		0% {
			transform: translateX(0);
		}
		100% {
			position: absolute;
			top: 0;
			margin-top: 0;
		}
	}
</style>
