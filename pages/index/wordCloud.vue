<template>
	<view>
        <view class="charts-box">
            <qiun-data-charts type="word"  background="#000" :chartData="wordData" />
        </view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
                wordData: {
                    "series":[
                        {"name":"text1","textSize":25},
                        {"name":"text2","textSize":20},
                        {"name":"text3","textSize":20},
                        {"name":"text4","textSize":20},
                        {"name":"text5","textSize":20},
                        {"name":"text6","textSize":20},
                        {"name":"text7","textSize":20},
                        {"name":"text8","textSize":20},
                        {"name":"text9","textSize":10}
                    ],
                },
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
