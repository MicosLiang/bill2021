<template>
	<view style="width: 100vw;display: flex;flex-direction: column;">
		<!-- <view style="position: fixed;top: 100rpx;width: 100%;height: 100rpx;">
			<button style="width: 100%;height: 100%;" @click="roll()">点击</button>
		</view> -->
		
		<view class="basicContainer" style="background-color: #80791a;"
			@touchstart="touchStart"
			@touchend="touchEnd" 
			@touchmove="touchMove"
			>
			
			
			
			<view class="imgContainer">
				<image class="imgBackgroundStyle" src="../../static/bill2021/start/swiper.jpg" mode="widthFix"></image>
				<image class="imgStyle" src="../../static/bill2021/start/card.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="basicContainer" style="background-color: #008000;"
			@touchstart="touchStart"
			@touchend="touchEnd" 
			@touchmove="touchMove"
		>
			<view class="imgContainer">
				<image class="imgBackgroundStyle" src="../../static/bill2021/eating/cateen2.png" mode="widthFix"></image>
				<image class="imgStyle" src="../../static/bill2021/eating/fat cat.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="basicContainer" style="background-color: #800000;">
			<view class="imgContainer">
				<image class="imgBackgroundStyle" src="../../static/bill2021/start/swiper.jpg" mode="widthFix"></image>
				<image class="imgStyle" src="../../static/bill2021/start/card.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			startData: {
				clientX: '',
				clientY: '',
			},
			moveY: 0,
			touch: {},
			transition: '',
		};
	},
	onLoad() {
		

	},
	methods: {
//--        -------------------------触摸touch事件 - start----------------------------------        --//
			touchStart(e){  //@touchstart 触摸开始
				this.transition = '.1s';
			    this.startData.clientX = e.changedTouches[0].clientX;   //手指按下时的X坐标         
			    this.startData.clientY = e.changedTouches[0].clientY;   //手指按下时的Y坐标
			},
			touchEnd(e){  //@touchend触摸结束
				this.moveY = 0;  //触摸事件结束恢复原状
				this.transition = '.5s';
				if(Math.abs(this.touch.clientY-this.startData.clientY) > 200) {  //在事件结束时，判断滑动的距离是否达到出发需要执行事件的要求
					console.log('执行查看跳转事件');
					// this.touch = {};
					// this.moveY = 100
					this.roll()
				} else {
					console.log('滑动距离不够，不执行跳转')
					// this.touch = {};
				}
			},
			touchMove(event) {  //@touchmove触摸移动
			// console.log(event);
				let touch = event.touches[0];  //滑动过程中，手指滑动的坐标信息 返回的是Objcet对象
				this.touch = touch;
				let data = touch.clientY - this.startData.clientY;
				if(touch.clientY < this.startData.clientY) {  //向左移动
					if(data<-250) {
						data = -250;
					}
				}
				if(touch.clientY > this.startData.clientY) {  //向右移动
					if(this.moveY == 0) {
						data = 0
					} else {
						if(data>50) {
							data = 50;
						}
					}
				}
				this.moveY = data;
			},
//--        ------------------------触摸touch事件 - end----------------------------------        --//
		
			roll(){
				uni.createSelectorQuery().select('.basicContainer').boundingClientRect(data=>{//目标位置的节点，类class或者id
				console.log(JSON.stringify(data));
				uni.pageScrollTo({
				    duration: 200,//过渡时间
				    scrollTop: data.bottom,//到达目标class的top值
				    })
				}).exec();
				
			},
					},
	
};
</script>

<style>
	.basicContainer {
		width: 100vw;
		height: 100vh;
		display: flex;
		/* flex-direction: column; */
	}
	.imgStyle {
		position: relative;
		height: 100vh;
		width: 100vw;
		z-index: 50;
	}
	.imgBackgroundStyle {
		position:  absolute;
		height: 100vh;
		width: 100vw;
		z-index: 0;
	}
</style>
