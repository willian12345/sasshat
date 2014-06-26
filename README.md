#sasshat

*The simple and easy sass library*

----

The sasshat is SASS library. So, It's just for SASS.If you are using LESS you should use the lesshat it's powerful in LESS
**[lesshat.com](http://lesshat.com)**





##Features 

- Auto complete css3 prefix 
- Just for HTML5
- Frame animate




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

##特点  

- 书写css3更方便
- 让animate.css动画更酷

##让CSS3动画在移动设备上放出光彩
CSS3动画可以做出很酷炫的效果,关于CSS3动画，比较出名的应该是**[animate.css](http://daneden.github.io/animate.css)** 

为了适应SASS语法，某位老兄已经将其转换为**[animate.sass](https://github.com/adamstac/animate.sass)**了，我直接将其拿到sasshat的目录中了


animate虽然酷，但实际在项目中应用CSS3动画时候需要与鼠标光标配合使用，比较多的就是应用hover事件了

#####在移动设备中没有鼠标....

如何在移动设备上应用酷炫的CSS3动画，而让你的 webapp 看起来更酷？

让一连串的HTML元素延时逐个动起来才显高大上。demo中演示的都是关于这样的动画并且可适应自适应场景

####要让元素逐个动起来使用SASS并应用sasshat库后的写法
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
@-moz-keyframes scaleIn {
  0% {
    opacity: 0; }

  100% {
    opacity: 1; } }
@-ms-keyframes scaleIn {
  0% {
    opacity: 0; }

  100% {
    opacity: 1; } }
@keyframes scaleIn {
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





