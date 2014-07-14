#sasshat

*The simple and easy sass library*

----

The sasshat is SASS library. So, It's just for SASS.If you are using LESS you should use the lesshat it's powerful in LESS
**[lesshat.com](http://lesshat.com)**





##Features 

- Easy to coding css3
- Make the animation awesome!




----
*简单易用的SASS库*

----
这是个sass库，专为sass语言，如果你用的是LESS，请移步这个LESS高大上的库
**[lesshat.com](http://lesshat.com)**

##代码使用例子
####风骚的 sass 写法
````
div 
	+box-shadow(1px 1px 2px #000)

````
####或保守的 scss 写法
````
div{
	@include box-shadow(1px 1px 2px #000);
}

````
####编译结果
````
// Results
div{
	-webkit-box-shadow: 1px 1px 2px black;
    -moz-box-shadow: 1px 1px 2px black;
    -ms-box-shadow: 1px 1px 2px black;
    box-shadow: 1px 1px 2px black;
}
````

##动画DEMO
**[DEMOs](http://sugarcane-mall.com/sasshat/)** 


##Get Started
1、新建一个以.sass或.scss结尾的文件如： demo.sass或demo.scss

2、在文件中引入如：`@import '_sasshat.sass'`

3、现在可以开始写你自己的sass了

##特点  

- 书写css3更方便
- 特别适合web app
- “多米诺”动画让animation动画更酷


##“多米诺”动画
多米諾骨牌，即碰倒第一枚骨牌，其余的骨牌就会产生连锁反应，依次倒下。
“多米诺”动画即引申自多米诺骨牌，即让一连串的HTML元素延时依次逐个完成相应的动画效果。

具体效果参见**[DEMOs](http://sugarcane-mall.com/sasshat/)** 

sasshat多米诺动画具体的CSS3动画其实是集成自**[animate.css](http://daneden.github.io/animate.css)** 动画库。所以在编写多米諾动画时实现一些常见的效果已经不需要你去编写keyframes动画帧了，直接调用已经编写好的keyframes名称就可以.

为了适应SASS语法，某位老兄已经将其转换为**[animate.sass](https://github.com/adamstac/animate.sass)**了，我直接将其copy到sasshat的目录中了

可调用已有的keyframes名称
#####Fade Enter

- fadeIn 	
- fadeInUp 	
- fadeInUpBig 
- fadeInDown 
- fadeInDownBig 
- fadeInLeft 
- fadeInLeftBig 
- fadeInRight 
- fadeInRightBig


#####Fade Exit

- fadeOut			
- fadeOutUp	
- fadeOutUpBig  
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBi


#####Bounce Enter

- bounceIn	
- bounceInUp			
- bounceInDown 		
- bounceInLeft 		
- bounceInRight 		


#####Bounce Exit

- bounceOut	
- bounceOutUp		
- bounceOutDown 		
- bounceOutLeft 		
- bounceOutRight 	



#####Rotate Enter

- rotateIn 	
- rotateInUpLeft 	
- rotateInUpRight 	
- rotateInDownLeft 	
- rotateInDownRight 	


#####Rotate Exit

- rotateOut 	
- rotateOutUpLeft 	
- rotateOutUpRight 	
- rotateOutDownLeft 	
- rotateOutDownRight 


#####Flippers

- flip		
- flipInX	
- flipInY	
- flipOutX	
- flipOutY	


#####Lightspeed

- lightSpeedIn 
- lightSpeedOut 	


#####Attention Seekers

- bounce		
- flash		
- pulse		
- wiggle		
- swing		
- shake		
- tada		
- wobble		


#####Special

- hinge		
- rollIn				
- rollOut 	

####编写“多米诺”动画的写法
````
+keyframes(fadeIn)
	0%
		opacity: 0
	100%
		opacity: 1
+animateByFrame(li,fadeIn, 1, 4, .5s)
````
#####Results

````
// 编译后就会生成以下内容，形成元素逐个按延时长短形成动画
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0; }

  100% {
    opacity: 1; } }
@-moz-keyframes fadeIn {
  0% {
    opacity: 0; }

  100% {
    opacity: 1; } }
@-ms-keyframes fadeIn {
  0% {
    opacity: 0; }

  100% {
    opacity: 1; } }
@keyframes fadeIn {
  0% {
    opacity: 0; }

  100% {
    opacity: 1; } }


li:nth-child(1) {
    -webkit-animation: fadeIn 0.5s 0.1s ease;
    -moz-animation: fadeIn 0.5s 0.1s ease;
    -ms-animation: fadeIn 0.5s 0.1s ease;
    animation: fadeIn 0.5s 0.1s ease; 
}
li:nth-child(2) {
    -webkit-animation: fadeIn 0.5s 0.2s ease;
    -moz-animation: fadeIn 0.5s 0.2s ease;
    -ms-animation: fadeIn 0.5s 0.2s ease;
    animation: fadeIn 0.5s 0.2s ease; 
}
li:nth-child(3) {
    -webkit-animation: fadeIn 0.5s 0.3s ease;
    -moz-animation: fadeIn 0.5s 0.3s ease;
    -ms-animation: fadeIn 0.5s 0.3s ease;
    animation: fadeIn 0.5s 0.3s ease; 
}
li:nth-child(4) {
    -webkit-animation: fadeIn 0.5s 0.4s ease;
    -moz-animation: fadeIn 0.5s 0.4s ease;
    -ms-animation: fadeIn 0.5s 0.4s ease;
    animation: fadeIn 0.5s 0.4s ease; 
}
````


#### 重要的animateByFrame函数
#####写法可以有以下几种，根据实际HTML结构选择使用
````
+animateByFrame(li,scaleIn, 1, 4, .5s)
+animateByFrame(li,scaleIn, 4, 1, .5s)
+animateByFrame($loopElement:li,$frameName:fadeInLeft, $start:1, $end:4, $applyElement:'.type')

````





